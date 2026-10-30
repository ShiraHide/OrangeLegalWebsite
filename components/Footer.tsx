export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="fb">
              <img src="/assets/logo.png" alt="" />
              <span className="name">司法書士オレンジリーガル</span>
            </div>
            <p>
              相続・不動産・家族信託などの手続きを通じて、依頼者お一人おひとりの想いに寄り添う司法書士事務所です。
            </p>
          </div>
          <div className="foot-col">
            <h4>MENU</h4>
            <ul>
              <li>
                <a href="#news">お知らせ</a>
              </li>
              <li>
                <a href="#greeting">代表挨拶</a>
              </li>
              <li>
                <a href="#services">業務内容</a>
              </li>
              <li>
                <a href="#about">事務所概要・アクセス</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>CONTACT</h4>
            <ul>
              <li>
                TEL：<a href="tel:045-900-6823">045-900-6823</a>
              </li>
              <li>
                〒220-0005
                <br />
                横浜市西区南幸二丁目２０番１２号
                <br />
                タイヨウビル６０７
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="foot-bar">
        © 2026 司法書士オレンジリーガル（ORANGE LEGAL） All Rights Reserved.
      </div>
    </footer>
  );
}
