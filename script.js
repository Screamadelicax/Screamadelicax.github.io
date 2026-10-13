const panels = [...document.querySelectorAll(".panel")];
const navLinks = [...document.querySelectorAll("[data-section]")];

function showSection(sectionId, updateHash = true) {
  const target = document.getElementById(sectionId) || document.getElementById("about");
  panels.forEach((panel) => panel.classList.toggle("is-visible", panel === target));
  navLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.section === target.id));
  if (updateHash) history.replaceState(null, "", `#${target.id}`);
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => showSection(link.dataset.section));
});

window.addEventListener("hashchange", () => {
  showSection(window.location.hash.slice(1) || "about", false);
});

const initialSection = window.location.hash.slice(1);
showSection(initialSection || "about", false);
