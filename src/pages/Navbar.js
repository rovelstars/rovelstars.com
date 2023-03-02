import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  //make darkmode switch work, save to localstorage and load from localstorage
  const [darkMode, setDarkMode] = useState(false);
  let logo = useRef(null);
  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
    let interval = null;
    setTimeout(() => {
      logo.current.classList.remove("opacity-0");
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let iteration = 0;
      interval = setInterval(() => {
        logo.current.innerText = logo.current.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return logo.current.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= logo.current.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  //listen to darkmode switch
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <>
      <div className="fixed backdrop-blur-xl border dark:border-b-2 border-gray-400 dark:border-gray-900 bg-gray-300/50 dark:bg-gray-800/50 w-full z-50 rounded-b-lg top-0">
        <div className="flex flex-row w-full px-6 py-2 items-center">
          <span
            ref={logo}
            data-value="Rovel Stars"
            className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mr-auto opacity-0"
          >
            Rovel Stars
          </span>
          <button onClick={handleDarkMode} className="px-6 py-4 ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-5 h-5${darkMode ? "" : " hidden"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-5 h-5${darkMode ? " hidden" : ""}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-32" />
    </>
  );
}
