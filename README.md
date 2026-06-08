# 司法書士オレンジリーガル ウェブサイト

Claude Design のハンドオフ（`orangelegal-homepage/`）をもとに、Next.js で再構築したコーポレートサイトです。デザインは元モック `index.html` をピクセル単位で再現しています。

本番は **Xserver レンタルサーバー**で公開する構成です。サイトは**静的書き出し**し、お問い合わせフォームは **PHP + Google Workspace SMTP** で送信します（第三者のフォームサービスは不使用）。

> 公開・運用の詳しい手順は **[運用公開手順.md](運用公開手順.md)** を参照してください。

## 開発（ローカル確認）

```bash
npm install
npm run dev      # http://localhost:3000
```

> ローカルの `npm run dev` ではフォームの実送信はできません（送信処理はサーバー上のPHPで動くため）。見た目・挙動の確認用です。

## 本番ファイルの生成（静的書き出し）

```bash
npm run build    # → out/ に公開用ファイルを生成
```

`out/` の中身を Xserver の公開フォルダにアップロードします。詳細は [運用公開手順.md](運用公開手順.md)。

## 構成

```
app/
├─ layout.tsx          フォント（Noto Sans/Serif JP）・メタデータ
├─ page.tsx            セクションの組み立て
└─ globals.css         デザインのCSS（元モックから移植）
components/             セクション別コンポーネント
public/
├─ contact.php             お問い合わせ送信処理（PHP / Google SMTP）
└─ contact.config.sample.php  送信設定のサンプル（実体はサーバー上に作成）
orangelegal-homepage/   元のClaude Designハンドオフ（参照用）
```

## お問い合わせフォームの送信（本番）

- フロントは `/contact.php` に入力内容をPOST。
- `contact.php` が Google Workspace の SMTP 経由で `mail_to` 宛にメール送信。
- SMTP情報は `contact.config.php`（サーバー上にのみ置く・Git管理外）に設定。
- 送信ライブラリに PHPMailer を使用（`public/lib/PHPMailer/` に設置）。

設定手順は [運用公開手順.md](運用公開手順.md) の「2. Google Workspace SMTP の準備」「4〜6」を参照。

## 元モックからの変更点

- フォームは見た目だけのダミーから、**PHP + Google Workspace SMTP による実送信**に変更。
- 地図はCSSのダミーのまま（Google Map埋め込みは未実装）。必要なら別途対応。
