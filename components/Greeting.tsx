export default function Greeting() {
  return (
    <section className="section greet" id="greeting">
      <div className="wrap">
        <div className="greet-grid">
          <div className="portrait">
            <img src="/assets/cho-portrait.png" alt="代表 司法書士 趙 成晃" />
            <div className="badge">
              <img src="/assets/logo.png" alt="" className="badge-logo" />
              <div>
                <b>趙 成晃</b>
                <span>代表 認定司法書士</span>
              </div>
            </div>
          </div>
          <div className="greet-head">
            <span className="eyebrow">代表挨拶</span>
            <h2>
              温かな「願い」を、
              <br />
              確かな「かたち」へ。
            </h2>
          </div>
          <div className="greet-body">
            <div className="body">
              <p>
                お客様が取り組まれている課題の奥には、「よりよい明日にしよう」「新しい一歩を踏み出そう」「大切な人を守りたい」という、前向きで温かな願いが存在しているのだと思います。
              </p>
              <p>
                私たち司法書士の役割は、その言葉にしづらい願いを汲み取り、法的手続きという社会的な形へと具現化することです。決して特別なご準備は必要ありません。ありのままの想いを、安心してお聞かせください。
              </p>
              <p>
                その「願い」が確かな「かたち」になるまで、ご一緒させていただきたいと思っています。
              </p>
            </div>
            <div className="sign">
              <span className="role">代表 司法書士</span>
              <span className="nm">
                趙 成晃<small>Cho Shigeaki</small>
              </span>
            </div>
            <div className="profile">
              <h4 className="profile-head">プロフィール</h4>
              <p>
                1996年法政大学法学部卒。ウェブデザイン会社勤務を経て、2006年、横浜の大手である司法書士法人伊藤豪事務所に入社。およそ20年間に渡り、不動産売買・決済に関する登記手続きを中心とした幅広い業務を、年500件、累計1万件以上担当。2024年司法書士登録。2026年司法書士オレンジリーガルを創業。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
