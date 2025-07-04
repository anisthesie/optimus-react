import React from "react";

export default function ThemeToggle({ toggleTheme, darkMode }) {
    return (
        <button
            onClick={toggleTheme}
            className=" w-full px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
        >
            {darkMode ? "☀️ Mode clair" : "🌙 Mode sombre"}
        </button>
    );
}
