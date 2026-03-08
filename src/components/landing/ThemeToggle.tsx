import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-muted transition-colors"
      aria-label="Alternar modo oscuro/claro"
    >
      <Sun className="h-5 w-5 hidden dark:block text-foreground" />
      <Moon className="h-5 w-5 block dark:hidden text-foreground" />
    </button>
  );
}
