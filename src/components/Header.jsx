import React from "react";
import ThemeToggle from "./buttons/ThemeToggle";

export default function Header({toggleTheme, darkMode}) {
    return (
        <div className="relative flex items-center justify-center">
            <h1 className="text-2xl font-bold text-center w-full select-none">
                ⚡ Optimus – Outil de Dimensionnement
            </h1>

            <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <ThemeToggle toggleTheme={toggleTheme} darkMode={darkMode}/>
            </div>

        </div>
    );
}