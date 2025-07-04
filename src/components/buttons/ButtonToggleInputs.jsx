import React from 'react';

export default function ButtonToggleInputs({showForm, toggleShowForm}) {
    return (<button
            onClick={() => toggleShowForm(!showForm)}
            className="w-full bg-blue-600 text-white px-3 py-1 rounded shadow hover:bg-blue-700"
        >
            {showForm ? "Masquer les entrées ▲" : "Afficher les entrées ▼"}
        </button>);
}