import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import FormSection from "./components/FormSection";
import ResultSection from "./components/ResultSection";
import ThemeToggle from "./components/buttons/ThemeToggle";

import {calculerTransformateur} from "./utils/calculs";

export default function App() {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("dark") === "true");
    const [showForm, setShowForm] = useState(true);
    const [results, setResults] = useState(null);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("dark", darkMode);
    }, [darkMode]);


    const toggleShowForm = () => {
        setShowForm(!showForm);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const res = calculerTransformateur(data);
        setResults(res);
        toggleShowForm()
    };


    return (
        <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900 dark:text-white">

            <div className="max-h-fit max-w-full mx-auto mb-6 bg-white/70 dark:bg-gray-800/70 rounded-xl shadow p-4">
                <Header toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode}/>
            </div>

            <div className="flex flex-col md:flex-row gap-6 w-full items-stretch">
                <div className="w-full md:w-1/3 h-full">
                    <FormSection showForm={showForm} handleSubmit={handleSubmit}/>
                </div>
                <div className="w-full md:w-2/3 h-full">
                    <ResultSection results={results}/>
                </div>
            </div>

        </div>
    );
}



