import { initSidebar } from "./sidebar";
import { initHome } from "./pages/home";
import { initSlider } from "./slider";

const initApp = async () => {
    initSidebar();
    await initHome();
    initSlider();
};

initApp();
