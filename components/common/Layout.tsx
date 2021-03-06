import { FC } from "react";
import { ApiProvider } from "../../framework/shopify";
import { CartSidebar } from "../cart/CartSidebar";
import { useUI } from "../ui/context";
import { Sidebar } from "../ui/Sidebar";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout: FC = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI();

  return (
    <ApiProvider>
      <div className="bg-primary h-full mx-auto">
        <Navbar />
        <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen}>
          <CartSidebar />
        </Sidebar>
        <main className="fit">{children}</main>
        <Footer />
      </div>
    </ApiProvider>
  );
};
