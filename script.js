(function () {
  const btn = document.querySelector("[data-menu-btn]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  if (!btn || !mobileNav) return;

  btn.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", expanded ? "false" : "true");
  });
})();

