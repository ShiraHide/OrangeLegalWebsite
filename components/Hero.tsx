export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-deco" aria-hidden="true">
        <span className="blob b1"></span>
        <span className="blob b2"></span>
      </div>
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
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
          </div>
          <div className="hero-figure">
            <img
              src="/assets/hero-desk.png"
              alt="あたたかな相談デスクのイメージ"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
