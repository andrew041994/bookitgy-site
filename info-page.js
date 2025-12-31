export function renderInfoPage({ title, message }) {
  document.title = `${title} – BookitGY`;

  const style = document.createElement("style");
  style.textContent = `
    :root { --green:#16a34a; --bg:#0b0f0c; --text:#e7f2ea; --muted:#b7c7bc; }
    body { margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center; padding: 36px 20px; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; background:linear-gradient(160deg,#06110a,var(--bg)); color:var(--text); }
    .card { width:100%; max-width: 520px; background: rgba(15,23,17,.85); border:1px solid rgba(255,255,255,.08); border-radius:18px; padding: 28px; box-shadow: 0 12px 30px rgba(0,0,0,.35); text-align:center; }
    .brand { display:flex; align-items:center; gap:10px; font-weight:800; letter-spacing:0.4px; justify-content:center; margin-bottom:14px; }
    .dot { width:12px; height:12px; border-radius:999px; background:var(--green); box-shadow:0 0 22px rgba(22,163,74,.55); }
    h1 { margin: 0 0 10px; font-size: 28px; }
    p { margin: 0; color: var(--muted); line-height:1.5; }
  `;
  document.head.appendChild(style);

  document.body.innerHTML = `
    <main class="card">
      <div class="brand"><span class="dot"></span> BookitGY</div>
      <h1>${title}</h1>
      <p>${message}</p>
    </main>
  `;
}
