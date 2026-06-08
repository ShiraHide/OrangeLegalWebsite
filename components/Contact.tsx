import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="shead shead--center">
          <span className="eyebrow">お問い合わせ</span>
          <h2>お気軽にご相談ください。</h2>
          <p className="sub">
            内容を確認のうえ、担当者より折り返しご連絡いたします。
          </p>
        </div>
        <div className="contact-grid">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
