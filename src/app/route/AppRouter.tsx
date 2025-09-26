import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import AuthPage from "../../pages/auth/AuthPage";
import { NotSelectedChat } from "../../widgets/chat/NotSelectedChat";
import CurrentChat from "../../widgets/chat/currentChat";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />}>
          <Route index element={<NotSelectedChat />} />
          <Route path="chat/:roomID" element={<CurrentChat />} />
        </Route>

        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}
