import { initSidebar } from "./sidebar";
import { initHome } from "./pages/home";

const initApp = async () => {
    initSidebar();
    await initHome();
};

initApp();
