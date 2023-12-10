import { useState } from "react";

function HeaderMovil() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Links = [
    { href: "#informacion", label: "Información" },
    { href: "#portafolio", label: "Portafolio" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#estudios", label: "Estudios" },
  ];

  return (
    <>
      <div className="sm:hidden">
        <button
          id="menu-btn"
          className="text-gray-600 focus:outline-none"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        id="menu"
        className={`${
          toggleMenu ? "" : "hidden"
        } sm:hidden bg-gray-950 justify-end absolute top-20 right-3 mt-0 min-w-[170px] shadow-md rounded-md z-10`}
      >
        <ul className="mt-2 py-2 p-2 w-full">
          {Links.map((item, index) => (
            <li key={index} onClick={() => setToggleMenu(false)}>
              <a
                className="block px-4 py-2 hover:text-white hover:bg-gray-700 text-end"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HeaderMovil;
