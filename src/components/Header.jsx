import { useColorMode } from "../context/ColorModeContext";

function Header() {
  const { mode, setMode } = useColorMode();

  const toggleMode = () =>
    setMode((cur) => (cur === "light" ? "dark" : "light"));

  return (
    <div className="mx-auto flex w-full max-w-7xl justify-between px-12 py-4">
      <h1 className="text-xl font-semibold dark:text-white">
        Where in the world?
      </h1>
      <div>
        <button
          onClick={toggleMode}
          aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
        >
          <span className="dark:text-white">
            {mode === "light" ? "🌞 Light" : "🌚 Dark"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Header;
