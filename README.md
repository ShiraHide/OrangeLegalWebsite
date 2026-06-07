# 司法書士オレンジリーガル ウェブサイト

Claude Design のハンドオフ（`orangelegal-homepage/`）をもとに、Next.js（App Router / TypeScript）で再構築したコーポレートサイトです。デザインは元モック `index.html` をピクセル単位で再現しています。

## 開発

```bash
npm install
npm run dev      # http://localhost:3000
```

## 本番ビルド

```bash
npm run build
npm run start
```

## お問い合わせフォームの送信設定（Resend）

フォーム送信は [Resend](https://resend.com) を利用します。`.env.local.example` をコピーして `.env.local` を作成し、値を設定してください。

```bash
cp .env.local.example .env.local
```

| 変数 | 内容 |
|---|---|
| `RESEND_API_KEY` | Resend の API キー（`re_...`） |
| `CONTACT_TO_EMAIL` | 問い合わせの受信先メール（例: cho@orangelegal.jp） |
| `CONTACT_FROM_EMAIL` | 送信元。ドメイン未認証の検証段階は `onboarding@resend.dev` が使えます |

> 未設定の場合、フォームは「サーバーの設定が未完了です」と表示し、メールは送信されません（サイト自体は表示されます）。

### 本番の送信元ドメイン

実運用では Resend で `orangelegal.jp` のドメイン認証（DNS設定）を行い、`CONTACT_FROM_EMAIL` を `no-reply@orangelegal.jp` 等に変更してください。

## 構成

```
app/
├─ layout.tsx          フォント（Noto Sans/Serif JP）・メタデータ
├─ page.tsx            セクションの組み立て
├─ globals.css         デザインのCSS（元モックから移植）
└─ api/contact/route.ts  Resend送信API
components/             セクション別コンポーネント
public/assets/          ロゴ・代表写真
orangelegal-homepage/   元のClaude Designハンドオフ（参照用）
```

## 元モックからの変更点

- フォームは見た目だけのダミーから、**Resend経由の実送信**に変更。
- 地図はCSSのダミーのまま（Google Map埋め込みは未実装）。必要なら別途対応。
