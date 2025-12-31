export function renderProviderLanding(username) {
  const safeUsername = decodeURIComponent(username || "").replace(/[^\w.-]/g, "");
  document.title = safeUsername ? `Open ${safeUsername} in the app – BookitGY` : "BookitGY";

  const style = document.createElement("style");
  style.textContent = `
    :root { --green:#16a34a; --bg:#0b0f0c; --card:#0f1711; --text:#e7f2ea; --muted:#b7c7bc; }
    body { margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center; padding: 32px 20px; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; background:linear-gradient(160deg,#06110a,var(--bg)); color:var(--text); }
    .card { width:100%; max-width: 540px; background: rgba(15,23,17,.9); border:1px solid rgba(255,255,255,.08); border-radius:18px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,.35); text-align:center; }
    .brand { display:flex; align-items:center; gap:10px; font-weight:800; letter-spacing:0.4px; justify-content:center; margin-bottom:16px; }
    .dot { width:12px; height:12px; border-radius:999px; background:var(--green); box-shadow:0 0 22px rgba(22,163,74,.55); }
    h1 { margin: 0 0 12px; font-size: 28px; }
    p { margin: 0 0 18px; color: var(--muted); line-height:1.5; }
    .actions { display:flex; flex-direction:column; gap:10px; }
    .btn { display:inline-block; padding: 12px 16px; border-radius: 12px; text-decoration:none; font-weight:700; }
    .btn.primary { background: var(--green); color: #041308; }
    .btn.secondary { border:1px solid rgba(255,255,255,.14); color: var(--text); background: rgba(255,255,255,.04); }
  `;
  document.head.appendChild(style);

  document.body.innerHTML = `
    <main class="card">
      <div class="brand"><span class="dot"></span> BookitGY</div>
      <h1>Open ${safeUsername || "provider"} in the app</h1>
      <p>Continue in the BookitGY mobile app to view this provider's profile, book services, and manage your appointments.</p>
      <div class="actions">
        <a class="btn primary" href="bookitgy://provider/${safeUsername}">Open in app</a>
        <a class="btn secondary" href="https://apps.apple.com" aria-label="Download on the App Store">Download on the App Store</a>
        <a class="btn secondary" href="https://play.google.com/store" aria-label="Get it on Google Play">Get it on Google Play</a>
      </div>
    </main>
  `;
}
