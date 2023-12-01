import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

interface INavigationItem {
  href: string;
  name: string;
}

const navItems: INavigationItem[] = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/contact",
    name: "Contact",
  },
  {
    href: "/blog",
    name: "Blog",
  },
];

interface INavbarReactProps {
  pathName: string;
}

const Navbar = ({ pathName }: INavbarReactProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  if (!isMobileMenuOpen) {
    return (
      <nav className="w-full fixed top-0 bg-transparent pt-6 px-6 lg:px-8">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col font-light">
            <p className="text-md lg:text-sm">Nikita Shtimenko</p>
            <p className="text-sm lg:text-xs opacity-50">Israel/Ukraine</p>
          </div>
          <div className="hidden lg:flex flex-row gap-x-1 font-light justify-center items-center text-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "",
                  item.href === pathName
                    ? "opacity-100"
                    : "opacity-[.35] hover:opacity-70 hover:transition-opacity hover:duration-300"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:hidden flex-row justify-center items-center">
            <button type="button" onClick={() => setMobileMenuOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M3 15h14v-2H3v2zM3 5v2h14V5H3zm0 6h14V9H3v2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <nav className="w-full fixed top-0 bg-transparent pt-6 px-6 lg:px-8">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col font-light">
            <p className="text-md lg:text-sm">Nikita Shtimenko</p>
            <p className="text-sm lg:text-xs opacity-50">Israel/Ukraine</p>
          </div>
          <div className="flex lg:hidden flex-row justify-center items-center">
            <button type="button" onClick={() => setMobileMenuOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="flex flex-col justify-center items-center mt-24 px-4 gap-y-2">
        {navItems.map((item) => (
          <a
            href={item.href}
            className={cn(
              "w-full flex flex-row border border-white/[.15] text-center font-light text-5xl rounded-xl px-4 py-2",
              item.href === pathName ? "bg-white text-black" : ""
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
