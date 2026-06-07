export default function About() {
  return (
    <section className="section" id="about">
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
              <dd>代表 認定司法書士　趙 成晃（Cho Shigeaki）</dd>
            </div>
            <div className="info-row">
              <dt>所在地</dt>
              <dd>
                〒221-0044
                <br />
                横浜市神奈川区東神奈川二丁目４１番地１
                <br />
                オオツカビル４０３
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
            <div className="info-row">
              <dt>メール</dt>
              <dd>
                <a href="mailto:cho@orangelegal.jp">cho@orangelegal.jp</a>
              </dd>
            </div>
            <div className="info-row">
              <dt>ウェブ</dt>
              <dd>
                <a
                  href="https://www.orangelegal.jp"
                  target="_blank"
                  rel="noopener"
                >
                  www.orangelegal.jp
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
