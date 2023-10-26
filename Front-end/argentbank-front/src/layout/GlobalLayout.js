import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function GlobalLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default GlobalLayout