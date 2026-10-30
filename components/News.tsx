// お知らせ（新しいものを上に追加。表示は最新5件まで）
// href を指定すると、項目全体がリンクになる（ページ内は "#about" など）
const NEWS: { date: string; title: string; note?: string; href?: string }[] = [
  {
    date: "2026-11-01",
    title: "事務所を移転しました。",
    note: "新住所：〒220-0005 横浜市西区南幸2-20-12 タイヨウビル607（横浜駅西口より徒歩５分）",
    href: "#about",
  },
];

const fmt = (d: string) => {
  const [y, m, day] = d.split("-").map(Number);
  return `${y}.${m}.${day}`;
};

export default function News() {
  return (
    <div className="news" id="news">
      <div className="news-box">
        <h2 className="news-head">
          <span>お知らせ</span>
          <small>NEWS</small>
        </h2>
        <ul className="news-list">
          {NEWS.slice(0, 5).map((n) => (
            <li key={n.date + n.title}>
              <time dateTime={n.date}>{fmt(n.date)}</time>
              {n.href ? (
                <a className="news-link" href={n.href}>
                  <p className="ttl">{n.title}</p>
                  {n.note && <p className="note">{n.note}</p>}
                </a>
              ) : (
                <div>
                  <p className="ttl">{n.title}</p>
                  {n.note && <p className="note">{n.note}</p>}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
