import React from "react";

export default function FormSection({showForm, handleSubmit}) {
    const fields = [
        {name: "puissance", label: "Puissance (VA)"},
        {name: "tensionPrimaire", label: "Tension primaire (V)"},
        {name: "tensionSecondaire", label: "Tension secondaire (V)"},
        {name: "frequence", label: "Fréquence (Hz)", defaultValue: 50},
    ];

    return showForm && (
        <div className="max-w-full mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative">

            <div className="transition-all duration-500 overflow-hidden max-h-[2000px] opacity-100">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                    {fields.map(({name, label, defaultValue}) => (
                        <label key={name} className="flex flex-col gap-1">
                            {label}
                            <input
                                type="number"
                                name={name}
                                defaultValue={defaultValue || ""}
                                className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </label>
                    ))}

                    <label className="flex flex-col gap-1">
                        Type de noyau
                        <select name="noyau" className="select">
                            <option>EI</option>
                            <option>UI</option>
                            <option>Toroïdal</option>
                        </select>
                    </label>
                    <label className="flex flex-col gap-1">
                        Matériau magnétique
                        <select name="materiau" className="select">
                            <option>Fe-Si</option>
                            <option>Ferrite</option>
                        </select>
                    </label>
                    <label className="flex flex-col gap-1">
                        Refroidissement
                        <select name="refroidissement" className="select">
                            <option>air</option>
                            <option>huile</option>
                        </select>
                    </label>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-6 py-2 mt-2 rounded hover:bg-green-700 w-full md:w-auto"
                        >
                            Lancer les calculs
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
