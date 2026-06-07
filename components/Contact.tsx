import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="shead shead--center">
          <span className="eyebrow">お問い合わせ</span>
          <h2>まずは、お気軽にご相談ください。</h2>
          <p className="sub">
            下記フォームよりご相談を承っております。24時間受け付けておりますので、ご都合のよいときにお送りください。内容を確認のうえ、担当者より折り返しご連絡いたします。
          </p>
        </div>
        <div className="contact-grid">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
