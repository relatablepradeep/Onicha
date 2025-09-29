// Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  const links = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <nav className="relative flex justify-center gap-6 py-6 bg-gray-900 text-white text-lg perspective-1000">
      {links.map((label, i) => {
        const isCenter = i === Math.floor(links.length / 2);

        return (
          <Link
            key={label}
            href="#"
            className={`
              transition-transform duration-500
              ${isCenter
                ? "text-3xl scale-125 translate-z-10 font-bold"
                : "opacity-70 hover:opacity-100 hover:scale-105"}
              ${i < 2 ? "-rotate-y-6" : i > 2 ? "rotate-y-6" : ""}
            `}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
