import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileSidebar from "./mobile-sidebar";

const Navbar = async () => {
  return (
    <header className="flex items-center py-4">
      <MobileSidebar />
      <nav>Hola</nav>
    </header>
  );
};

export default Navbar;
