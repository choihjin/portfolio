import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
  "/projects": { name: "Projects" },
  "/awards": { name: "Awards" },
  "/others": { name: "Others" },
};

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#111]/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-6">
          <div className="flex items-center -ml-2">
            <Link 
              href="/" 
              className="text-3xl font-bold text-black dark:text-white hover:opacity-80 transition-opacity"
            >
              {metaData.title}
            </Link>
          </div>
          <div className="flex flex-row gap-8 mt-4 md:mt-0 md:ml-auto items-center">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="text-lg text-[#333] dark:text-[#ccc] hover:text-black dark:hover:text-white font-medium transition-colors duration-200"
              >
                {name}
              </Link>
            ))}
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}