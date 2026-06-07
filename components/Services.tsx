export default function Services() {
  return (
    <section className="section" id="services" style={{ borderRadius: "0px" }}>
      <div className="wrap">
        <div className="shead">
          <span className="eyebrow">業務内容</span>
          <h2>業務紹介</h2>
        </div>
        <div className="svc-grid">
          <article className="card card--row">
            <div className="row-head">
              <div className="num">01</div>
              <h3>不動産売買・決済に関する登記</h3>
              <p className="lead">新たな生活と事業の基盤を、確実・安全に築くために</p>
            </div>
            <div className="row-body">
              <p>
                不動産の購入や売却は、お客様の人生やビジネスにおける大きな「前進」のタイミングです。その大切な願いが込められたお取引を、遅滞やリスクなく完了させることが私の仕事です。横浜の第一線で年間500件以上の決済をコントロールし続けてきた20年の経験とノウハウを注ぎ込みます。不動産業者様や金融機関様との連携もスムーズに行い、たとえ複雑な権利関係であっても、安全と安心をお約束する確実な登記手続きを実現します。
              </p>
            </div>
          </article>
          <article className="card card--row">
            <div className="row-head">
              <div className="num">02</div>
              <h3>相続手続き</h3>
              <p className="lead">ご家族の「想い」を整理し、次世代へ円滑に繋ぐために</p>
            </div>
            <div className="row-body">
              <p>
                相続は、単なる財産の移転ではなく、亡くなられた方の想いを次の世代へと引き継ぐ大切なバトンタッチです。戸籍の収集から遺産分割協議書の作成、不動産の名義変更まで、多岐にわたる複雑な手続きをお任せいただけます。ご遺族の皆様が抱える不安やご負担を少しでも軽くし、皆様が前を向いて新しい日常へと歩み出せるよう、一人ひとりのご事情に寄り添い、丁寧かつ迅速に手続きを進めていきます。
              </p>
            </div>
          </article>
          <article className="card card--row">
            <div className="row-head">
              <div className="num">03</div>
              <h3>家族信託手続き</h3>
              <p className="lead">
                将来の不安を取り除き、大切な財産と「願い」を守り抜くために
              </p>
            </div>
            <div className="row-body">
              <p>
                「なるべく長く住み慣れた自宅で過ごしたい」「もしもの時は、信頼できる家族に管理を託したい」。ご自身とご家族のそんな温かな願いを、お元気なうちから安全な法的手続きとして形にしておくのが家族信託です。
              </p>
              <p>
                当事務所では、ご自宅と大切な預金を将来の不安から守るため、お客様の「こうありたい」という想いを第一にした財産管理スキームを構築いたします。一部の特別な方だけでなく、すべてのご家庭に安心をお届けできるよう、ご負担の少ない最適な道筋をご提案いたします。
              </p>
            </div>
          </article>
          <article className="card card--mini">
            <div className="num">04</div>
            <h3>企業法務・商業登記</h3>
            <ul className="svc-list">
              <li style={{ borderRadius: "15px", margin: "0px" }}>
                <b>商業・法人登記</b>
                <span className="desc">
                  会社設立、役員変更、本店移転など、企業活動の基盤整備
                </span>
              </li>
              <li style={{ borderRadius: "15px" }}>
                <b>組織再編</b>
                <span className="desc">
                  合併、会社分割など、高度な企業戦略の法務サポート
                </span>
              </li>
              <li style={{ borderRadius: "15px" }}>
                <b>企業法務サポート</b>
                <span className="desc">
                  契約書のリーガルチェック、株主総会運営の支援等
                </span>
              </li>
            </ul>
          </article>
          <article className="card card--mini">
            <div className="num">05</div>
            <h3>特殊な登記・裁判・財産管理業務</h3>
            <ul className="svc-list">
              <li style={{ borderRadius: "15px" }}>
                <b>不動産投資信託（REIT）関連登記</b>
                <span className="desc">専門的なスキームへの対応</span>
              </li>
              <li style={{ borderRadius: "15px" }}>
                <b>債権譲渡・動産譲渡登記</b>
                <span className="desc">企業の資金調達に伴う担保化の手続き</span>
              </li>
              <li style={{ borderRadius: "15px" }}>
                <b>成年後見・任意後見</b>
                <span className="desc">
                  判断能力に不安のある方の財産と権利の保護
                </span>
              </li>
              <li style={{ borderRadius: "15px" }}>
                <b>裁判業務</b>
                <span className="desc">簡裁訴訟代理、各種申立書の作成支援</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
