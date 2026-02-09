document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearSpans = document.querySelectorAll(".current-year");
  const year = new Date().getFullYear();
  yearSpans.forEach(span => (span.textContent = year));

  // Nav active link
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
    }
  });

  // Contact form feedback (demo only)
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const confirm = document.getElementById("form-confirm");
      confirm.textContent = "Mesaj trimis. Îți mulțumim! Revenim în curând.";
      confirm.classList.add("visible");
      form.reset();
    });
  }
});
