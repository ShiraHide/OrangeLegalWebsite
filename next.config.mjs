/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的書き出し（out/ に HTML/CSS/JS/画像を生成）。Xserver等の静的配信向け。
  output: "export",
  // 静的書き出しでは画像最適化サーバーが使えないため無効化（本サイトは <img> 利用）。
  images: { unoptimized: true },
  // index.html を各ディレクトリに出力（例: /about/ → /about/index.html）。サーバー設定不要で配信しやすい。
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
