import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./shared/style/index.css";
import App from "./app/App.tsx";
import "./shared/style/main.scss";
import "./shared/style/globalStyles.scss";

/* 
  import UIStyles

  чтобы стили применились для эл. которые не созданы 
  переиспользуемым путем (инпуты в формах тп)

 */
import "./components/UIStyles.scss";

// animations
import "./shared/style/anims/anims.css";
import "./shared/style/anims/keyfreams.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
