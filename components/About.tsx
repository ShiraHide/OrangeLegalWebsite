const MAP_QUERY = encodeURIComponent(
  "〒220-0005 神奈川県横浜市西区南幸2丁目20-12 タイヨウビル"
);

export default function About() {
  return (
    <section className="section section--beige" id="about">
      <div className="wrap">
        <div className="shead">
          <span className="eyebrow">事務所概要</span>
          <h2>事務所のご案内</h2>
        </div>
        <div className="about-grid">
          <dl className="info-table">
            <div className="info-row">
              <dt>事務所名</dt>
              <dd>司法書士オレンジリーガル</dd>
            </div>
            <div className="info-row">
              <dt>代表者</dt>
              <dd>趙 成晃（Cho Shigeaki）</dd>
            </div>
            <div className="info-row">
              <dt>所在地</dt>
              <dd>
                〒220-0005
                <br />
                横浜市西区<span className="nw">南幸二丁目２０番１２号</span>
                <br />
                タイヨウビル６０７
              </dd>
            </div>
            <div className="info-row">
              <dt>アクセス</dt>
              <dd>
                <ul className="access-list">
                  <li>
                    横浜駅西口より<span className="nw">徒歩５分</span>
                    <span className="sub">
                      （JR・東急・京急・相鉄・みなとみらい線・市営地下鉄）
                    </span>
                  </li>
                </ul>
              </dd>
            </div>
            <div className="info-row">
              <dt>連絡先</dt>
              <dd>
                <div className="multi">
                  <span>
                    TEL：<a href="tel:045-900-6823">045-900-6823</a>
                  </span>
                  <span>FAX：045-900-6824</span>
                </div>
              </dd>
            </div>
          </dl>
          <div className="map-col">
            <div className="gmap">
              <iframe
                src={`https://maps.google.com/maps?q=${MAP_QUERY}&hl=ja&z=17&output=embed`}
                title="司法書士オレンジリーガル 地図"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              className="gmap-link"
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
              target="_blank"
              rel="noopener"
            >
              Googleマップで開く
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
