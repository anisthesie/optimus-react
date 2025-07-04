import React from "react";

export default function ResultSection({ results }) {
    if (!results) return null;

    return (
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 mt-6 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">📊 Résultats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 className="font-semibold">⚙️ Calculs préliminaires</h3>
                    <p>Puissance apparente : {results.puissance} VA</p>
                    <p>Courant primaire : {results.courantPrimaire.toFixed(2)} A</p>
                    <p>Courant secondaire : {results.courantSecondaire.toFixed(2)} A</p>
                    <p>Tension court-circuit : {results.tcc.toFixed(1)} V</p>
                </div>
                <div>
                    <h3 className="font-semibold">🔄 Enroulements</h3>
                    <p>Spires primaire : {results.spiresPri}</p>
                    <p>Spires secondaire : {results.spiresSec}</p>
                    <p>Section fil primaire : {results.sectionFilPri} mm²</p>
                    <p>Section fil secondaire : {results.sectionFilSec} mm²</p>
                    <p>Longueur fil : {results.longueurFil} m</p>
                    <p>Résistance enroulements : {results.resistance} Ω</p>
                </div>
                <div>
                    <h3 className="font-semibold">📐 Dimensions géométriques</h3>
                    <p>Section noyau : {results.sectionNoyau} cm²</p>
                    <p>Dimensions extérieures : {results.dimensionsExt} cm</p>
                    <p>Volume bobinage : {results.volumeBobinage} cm³</p>
                </div>
                <div>
                    <h3 className="font-semibold">🧲 Circuit magnétique</h3>
                    <p>Induction : {results.induction} T</p>
                    <p>Longueur moyenne circuit : {results.longueurCircuit} cm</p>
                    <p>Densité flux : {results.fluxDensite} T</p>
                </div>
                <div className="md:col-span-2">
                    <h3 className="font-semibold">🔥 Pertes et rendement</h3>
                    <p>Pertes fer : {results.pertesFer} W</p>
                    <p>Pertes cuivre : {results.pertesCuivre} W</p>
                    <p>Pertes totales : {results.pertesTotales} W</p>
                    <p>Rendement : {results.rendement} %</p>
                </div>
            </div>
        </div>
    );
}
