const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const menu = $("#menu"),
  mobile = $("#mobile");
menu.addEventListener("click", () => {
  mobile.classList.toggle("open");
  menu.innerHTML = mobile.classList.contains("open")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});
$$("#mobile a").forEach(
  (a) => (a.onclick = () => mobile.classList.remove("open")),
);
const theme = $("#theme");
if (localStorage.getItem("gd-theme") === "dark")
  document.body.classList.add("dark");
function icon() {
  theme.innerHTML = document.body.classList.contains("dark")
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
}
icon();
theme.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "gd-theme",
    document.body.classList.contains("dark") ? "dark" : "light",
  );
  icon();
};
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
$$(".reveal").forEach((x) => io.observe(x));
$("#year").textContent = new Date().getFullYear();
const up = $("#up");
addEventListener("scroll", () => up.classList.toggle("show", scrollY > 500), {
  passive: true,
});
up.onclick = () => scrollTo({ top: 0, behavior: "smooth" });
$$(".faqs details").forEach((d) =>
  d.addEventListener("toggle", () => {
    if (d.open)
      $$(".faqs details").forEach((x) => {
        if (x !== d) x.open = false;
      });
  }),
);
$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = `Hello GyanDeep Academy,\n\nI want to enquire about admission.\nStudent Name: ${$("#student").value}\nClass: ${$("#class").value}\nParent/Guardian: ${$("#guardian").value}\nPhone: ${$("#phone").value}\nMessage: ${$("#msg").value || "No additional message."}`;
  open(
    "https://wa.me/918342916384?text=" + encodeURIComponent(text),
    "_blank",
    "noopener",
  );
});
