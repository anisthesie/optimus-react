import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import FormSection from "./components/FormSection";
import ResultSection from "./components/ResultSection";

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
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative">
                <Header toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} toggleShowForm={toggleShowForm}
                        showForm={showForm}/>
                <FormSection showForm={showForm} handleSubmit={handleSubmit}/>
            </div>

            <ResultSection results={results}/>
        </div>
    );
}



