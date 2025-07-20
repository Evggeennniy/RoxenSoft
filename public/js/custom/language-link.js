function initLanguageLinks() {
  const allowedLangs = ["ru", "en", "ua"];
  const links = document.querySelectorAll(".lang-link");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href").replace(/^\/+/, "");
      const parts = href.split("/");
      const code = parts[parts.length - 1].toLowerCase();

      if (allowedLangs.includes(code)) {
        console.log("Changing language to:", code);
        window.location.href = `/${code}`;
      } else {
        console.warn("Unsupported language code:", code);
      }
    });
  });

  console.log("Language links initialized");
}

initLanguageLinks();
