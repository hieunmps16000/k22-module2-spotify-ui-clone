const toggle = document.querySelector(".menu__mobile-btn");
const overlay = document.querySelector(".menu__overlay");
const sidebar = document.querySelector(".menu__sidebar");

export const initSidebar = () => {
    const open = () => {
        overlay.classList.add("open");
        sidebar.classList.add("open");
        toggle.setAttribute("aria-pressed", "true");
        sidebar.setAttribute("aria-hidden", "false");
    };

    const close = () => {
        overlay.classList.remove("open");
        sidebar.classList.remove("open");
        toggle.setAttribute("aria-pressed", "false");
        sidebar.setAttribute("aria-hidden", "true");
    };

    toggle.addEventListener("click", open);
    overlay.addEventListener("click", close);
};
