"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#greeting", label: "代表挨拶" },
  { href: "#services", label: "業務内容" },
  { href: "#about", label: "事務所概要" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header>
        <div className="wrap nav">
          <a href="#top" className="brand" aria-label="司法書士オレンジリーガル">
            <img src="/assets/logo.png" alt="オレンジリーガル ロゴ" />
            <span className="name">
              司法書士オレンジリーガル<small>ORANGE LEGAL OFFICE</small>
            </span>
          </a>
          <nav className="nav-links" aria-label="グローバルナビ">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <button
            className={`burger${open ? " open" : ""}`}
            aria-label="メニューを開く"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {NAV.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
      </div>
    </>
  );
}
