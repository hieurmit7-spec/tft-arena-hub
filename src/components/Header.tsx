import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Trophy, User, ShoppingBag } from "lucide-react";

const navItems = [
  { path: "/", label: "Trang Chủ", icon: null },
  { path: "/tournaments", label: "Giải Đấu", icon: Trophy },
  { path: "/shop", label: "Cửa Hàng", icon: ShoppingBag },
  { path: "/profile", label: "Tài Khoản", icon: User },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Trophy className="h-7 w-7 text-primary" />
          <span className="font-display text-lg font-bold tracking-wider text-primary">
            TFT ARENA
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 rounded-md px-4 py-2 font-heading text-sm font-semibold uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-primary/10 text-primary text-glow-gold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background p-4 md:hidden animate-fade-in">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 rounded-md px-4 py-3 font-heading text-sm font-semibold uppercase tracking-wider ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
