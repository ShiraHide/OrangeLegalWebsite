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
- 地図は「事務所のご案内」に Google マップを埋め込み済み（`components/About.tsx` の `MAP_QUERY` の住所を変えると地図・「Googleマップで開く」リンクの両方が切り替わる）。API キー不要の埋め込み URL を使用。
- トップのヒーロー内に「お知らせ」欄を追加（`components/News.tsx` の `NEWS` 配列に追記。最新5件まで表示）。

## ローカル確認（Windows）

`start-dev.bat` をダブルクリックすると `npm run dev -- -p 3010` が起動し、http://localhost:3010 で確認できます（ウィンドウを閉じると停止）。
