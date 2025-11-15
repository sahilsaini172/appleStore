import { MenuIcon, Search, ShoppingBag } from "lucide-react";
import IconButton from "./IconButton";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-12">
      <div className="p-3">
        <img src="/apple.svg" alt="Apple Logo" className="size-6" />
      </div>
      <div className="flex items-center">
        <IconButton>
          <Search size={20} />
        </IconButton>
        <IconButton>
          <ShoppingBag size={20} />
        </IconButton>
        <IconButton>
          <MenuIcon size={20} />
        </IconButton>
      </div>
    </div>
  );
}
