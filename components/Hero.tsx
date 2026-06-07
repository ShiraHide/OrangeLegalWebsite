export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-deco" aria-hidden="true">
        <span className="blob b1"></span>
        <span className="blob b2"></span>
      </div>
      <img
        src="/assets/logo.png"
        className="hero-checker"
        alt=""
        aria-hidden="true"
      />
      <div className="wrap">
        <div className="hero-inner">
          <h1>
            <span className="line">手続きに想いをのせて。</span>
            <br />
            <span className="line">
              <span className="accent">温かな安心</span>を。
            </span>
          </h1>
          <p className="lead">
            ２０年間の実務経験に基づいて、複雑な法律手続きをひとつひとつ解きほぐし、手続きの先にある安心をお届けします。
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              ご相談はこちら
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#services" className="btn btn-ghost">
              業務内容を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
