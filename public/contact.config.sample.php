<?php
/**
 * お問い合わせフォームの送信設定（サンプル）
 *
 * このファイルを「contact.config.php」という名前でコピーし、実際の値を入力してください。
 * contact.config.php は機密情報（パスワード）を含むため、Gitにはコミットしません（.gitignore済み）。
 * サーバー（Xserver）上に直接アップロード／作成してください。
 *
 * 送信は Google Workspace の SMTP を使用します。事前に「アプリパスワード」の発行が必要です
 * （運用公開手順.md の「Google Workspace SMTP の準備」を参照）。
 */

return [
    // ----- Google Workspace SMTP -----
    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 587,
    // 送信に使う Google Workspace のアカウント（例: noreply@orangelegal.jp）
    'smtp_user' => 'noreply@orangelegal.jp',
    // 上記アカウントで発行した「アプリパスワード」（16桁。通常のログインPWではない）
    'smtp_pass' => 'xxxxxxxxxxxxxxxx',

    // ----- 送信元・送信先 -----
    // 送信元アドレス（smtp_user と同じにするのが確実）
    'mail_from'      => 'noreply@orangelegal.jp',
    'mail_from_name' => '司法書士オレンジリーガル お問い合わせ',
    // 問い合わせの受信先（事務所の受信用アドレス）
    'mail_to'        => 'cho@orangelegal.jp',
];
