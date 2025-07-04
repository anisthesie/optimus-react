import React from "react";
import ThemeToggle from "./buttons/ThemeToggle.jsx";
import ButtonToggleInputs from "./buttons/ButtonToggleInputs.jsx";

export default function Header({toggleTheme, darkMode, toggleShowForm, showForm}) {
    return (
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">⚡ Optimus – Outil de Dimensionnement</h1>
            <div className="flex flex-col items-center gap-4 w-79">
                <ThemeToggle toggleTheme={toggleTheme} darkMode={darkMode}/>
                <ButtonToggleInputs toggleShowForm={toggleShowForm} showForm={showForm}/>
            </div>
        </div>
    );
}

