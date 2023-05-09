import { navigationToggle, portfolioContainer, msgForm } from "./elements";
import { initBackToTop } from "./back-to-top";
import { initNav } from "./navigation";
import { initModal } from "./modal";
import { initForm } from "./form";

navigationToggle.addEventListener("mouseenter", initNav, { once: true });

portfolioContainer.addEventListener("mouseenter", initModal, { once: true });

msgForm.addEventListener("input", initForm, { once: true });

initBackToTop();
