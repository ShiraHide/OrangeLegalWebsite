# 司法書士オレンジリーガル ウェブサイト

Claude Design のハンドオフ（`orangelegal-homepage/`）をもとに、Next.js で再構築したコーポレートサイトです。デザインは元モック `index.html` をピクセル単位で再現しています。

本番は **Xserver Static**（静的サイトホスティング）で公開する構成です。お問い合わせフォームは設置せず、**完全な静的サイト**として配信します（サーバー側処理・第三者サービスなし）。

> 公開・運用の詳しい手順は **[運用公開手順.md](運用公開手順.md)** を参照してください。

## 開発（ローカル確認）

```bash
npm install
npm run dev      # http://localhost:3000
```

## 本番ファイルの生成（静的書き出し）

```bash
npm run build    # → out/ に公開用ファイルを生成
```

`out/` の中身を Xserver Static の公開領域にアップロードします。詳細は [運用公開手順.md](運用公開手順.md)。

## 構成

```
app/
├─ layout.tsx     フォント（Noto Sans/Serif JP）・メタデータ
├─ page.tsx       セクションの組み立て
└─ globals.css    デザインのCSS（元モックから移植）
components/        セクション別コンポーネント
public/assets/     ロゴ・代表写真・トップ画像
orangelegal-homepage/  元のClaude Designハンドオフ（参照用）
```

## 元モックからの変更点

- お問い合わせフォームは初期リリースでは設置せず、連絡先（電話番号・住所）の掲載に変更。
- 地図はCSSのダミーのまま（Google Map埋め込みは未実装）。必要なら別途対応。
