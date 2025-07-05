import React from "react";

export default function ResultSection({ results }) {
    const r = results || {};

    return (
        <div className="max-w-full mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">📊 Résultats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 className="font-semibold">⚙️ Calculs préliminaires</h3>
                    <p>Puissance apparente : {r.puissance ?? '-' } VA</p>
                    <p>Courant primaire : {r.courantPrimaire !== undefined ? r.courantPrimaire.toFixed(2) : '-' } A</p>
                    <p>Courant secondaire : {r.courantSecondaire !== undefined ? r.courantSecondaire.toFixed(2) : '-' } A</p>
                    <p>Tension court-circuit : {r.tcc !== undefined ? r.tcc.toFixed(1) : '-' } V</p>
                </div>
                <div>
                    <h3 className="font-semibold">🔄 Enroulements</h3>
                    <p>Spires primaire : {r.spiresPri ?? '-' }</p>
                    <p>Spires secondaire : {r.spiresSec ?? '-' }</p>
                    <p>Section fil primaire : {r.sectionFilPri ?? '-' } mm²</p>
                    <p>Section fil secondaire : {r.sectionFilSec ?? '-' } mm²</p>
                    <p>Longueur fil : {r.longueurFil ?? '-' } m</p>
                    <p>Résistance enroulements : {r.resistance ?? '-' } Ω</p>
                </div>
                <div>
                    <h3 className="font-semibold">📐 Dimensions géométriques</h3>
                    <p>Section noyau : {r.sectionNoyau ?? '-' } cm²</p>
                    <p>Dimensions extérieures : {r.dimensionsExt ?? '-' } cm</p>
                    <p>Volume bobinage : {r.volumeBobinage ?? '-' } cm³</p>
                </div>
                <div>
                    <h3 className="font-semibold">🧲 Circuit magnétique</h3>
                    <p>Induction : {r.induction ?? '-' } T</p>
                    <p>Longueur moyenne circuit : {r.longueurCircuit ?? '-' } cm</p>
                    <p>Densité flux : {r.fluxDensite ?? '-' } T</p>
                </div>
                <div className="md:col-span-2">
                    <h3 className="font-semibold">🔥 Pertes et rendement</h3>
                    <p>Pertes fer : {r.pertesFer ?? '-' } W</p>
                    <p>Pertes cuivre : {r.pertesCuivre ?? '-' } W</p>
                    <p>Pertes totales : {r.pertesTotales ?? '-' } W</p>
                    <p>Rendement : {r.rendement ?? '-' } %</p>
                </div>
            </div>
        </div>
    );
}
