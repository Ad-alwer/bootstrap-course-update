const $ = document;
const lightThemeBtn = $.querySelector(".light-theme-btn");
const darkThemeBtn = $.querySelector(".dark-theme-btn");

gettheme();

lightThemeBtn.addEventListener("click", () => chengetheme("light"));
darkThemeBtn.addEventListener("click", () => chengetheme("dark"));

function gettheme() {
  const theme = localStorage.getItem("theme");

  if (theme) {
    chengetheme(theme);
  } else {
    changetheme("light");
  }
}

function chengetheme(theme) {
  if (theme === "dark") {
    lightThemeBtn.classList.remove("active");
    darkThemeBtn.classList.add("active");
  } else {
    darkThemeBtn.classList.remove("active");
    lightThemeBtn.classList.add("active");
  }
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
}
