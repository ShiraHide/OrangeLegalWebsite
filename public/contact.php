<?php
/**
 * お問い合わせフォーム送信処理（Xserverレンタルサーバー用）
 *
 * - フロント（静的サイト）から JSON で POST された内容を受け取り、
 *   Google Workspace の SMTP 経由で事務所宛にメール送信します。
 * - 第三者のフォームサービスは経由しません。
 *
 * 必要な準備（運用公開手順.md 参照）:
 *   1) PHPMailer を lib/PHPMailer/ に設置
 *   2) contact.config.php を作成し SMTP 情報を設定
 */

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

$configPath = __DIR__ . '/contact.config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    error_log('contact.php: contact.config.php が見つかりません。');
    echo json_encode(['error' => 'サーバーの設定が未完了です。お電話にてお問い合わせください。']);
    exit;
}
$config = require $configPath;

// 入力の取得（JSON / フォーム送信どちらにも対応）
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

$name    = trim($data['name'] ?? '');
$email   = trim($data['email'] ?? '');
$tel     = trim($data['tel'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['error' => '必須項目が入力されていません。']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'メールアドレスの形式が正しくありません。']);
    exit;
}
// 簡易スパム対策（改行インジェクション対策）
if (preg_match('/[\r\n]/', $name . $email)) {
    http_response_code(400);
    echo json_encode(['error' => '入力内容に不正な文字が含まれています。']);
    exit;
}

require __DIR__ . '/lib/PHPMailer/src/Exception.php';
require __DIR__ . '/lib/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/lib/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_user'];
    $mail->Password   = $config['smtp_pass'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = (int) $config['smtp_port'];
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($config['mail_from'], $config['mail_from_name']);
    $mail->addAddress($config['mail_to']);
    $mail->addReplyTo($email, $name); // 受信メールから直接返信できるように

    $mail->Subject = '【お問い合わせ】' . $name . ' 様より';
    $mail->Body =
        "ウェブサイトのお問い合わせフォームから送信されました。\n\n" .
        "お名前: {$name}\n" .
        "メール: {$email}\n" .
        "電話番号: " . ($tel !== '' ? $tel : '（未入力）') . "\n\n" .
        "ご相談内容:\n{$message}\n";

    $mail->send();
    echo json_encode(['ok' => true]);
} catch (Exception $e) {
    http_response_code(502);
    error_log('contact.php 送信失敗: ' . $mail->ErrorInfo);
    echo json_encode(['error' => '送信に失敗しました。時間をおいて再度お試しください。']);
}
