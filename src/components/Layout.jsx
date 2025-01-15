import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="grid min-h-dvh grid-rows-[min-content_1fr] bg-gray-200 dark:bg-gray-800">
      <header className="bg-white px-12 py-4 dark:bg-gray-700">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
