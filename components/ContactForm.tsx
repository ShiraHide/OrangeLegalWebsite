"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      tel: (form.elements.namedItem("tel") as HTMLInputElement).value.trim(),
      message: (
        form.elements.namedItem("message") as HTMLTextAreaElement
      ).value.trim(),
    };

    if (!data.name || !data.email || !data.message) {
      form.reportValidity();
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "送信に失敗しました");
      }
      setStatus("ok");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "送信に失敗しました。時間をおいて再度お試しください。",
      );
    }
  }

  return (
    <form className="cform" id="cform" noValidate onSubmit={handleSubmit}>
      <div id="formFields" style={{ display: status === "ok" ? "none" : "block" }}>
        <div className="field">
          <label htmlFor="f-name">
            お名前<span className="req">必須</span>
          </label>
          <input
            type="text"
            id="f-name"
            name="name"
            placeholder="山田 太郎"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="f-email">
            メールアドレス<span className="req">必須</span>
          </label>
          <input
            type="email"
            id="f-email"
            name="email"
            placeholder="example@mail.com"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="f-tel">電話番号</label>
          <input
            type="tel"
            id="f-tel"
            name="tel"
            placeholder="045-000-0000"
          />
        </div>
        <div className="field">
          <label htmlFor="f-msg">
            ご相談内容<span className="req">必須</span>
          </label>
          <textarea
            id="f-msg"
            name="message"
            placeholder="ご相談の概要をご記入ください。うまくまとまっていなくても構いません。"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "sending"}
        >
          {status === "sending" ? "送信中…" : "この内容で送信する"}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
        {status === "error" && <p className="form-error">{errorMsg}</p>}
        <p className="form-note">
          送信いただいた内容は相談対応のみに使用し、第三者へ提供することはありません。
        </p>
      </div>
      <div className={`form-ok${status === "ok" ? " show" : ""}`}>
        <span className="mark mark--rot">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
        <h3>送信ありがとうございました</h3>
        <p>
          内容を確認のうえ、担当者より折り返しご連絡いたします。今しばらくお待ちくださいませ。
        </p>
      </div>
    </form>
  );
}
