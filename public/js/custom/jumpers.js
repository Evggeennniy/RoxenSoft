function Jumper(ObjectID, ObjectPosition) {
  const e = document.getElementById(ObjectID);
  e.scrollIntoView({
    behavior: "smooth",
    block: ObjectPosition,
  });
}

function HandleJumperLinks() {
  document.querySelectorAll("[href^='%']").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href").slice(1);
      const [object, position] = href.split("_");
      Jumper(object, position);
    });
  });

  console.log("JumperLinks инициализированы");
}

HandleJumperLinks();
