export function calculerTransformateur(data) {
    const puissance = parseFloat(data.get("puissance"));
    const tensionPrimaire = parseFloat(data.get("tensionPrimaire"));
    const tensionSecondaire = parseFloat(data.get("tensionSecondaire"));

    const courantPrimaire = puissance / tensionPrimaire;
    const courantSecondaire = puissance / tensionSecondaire;
    const tcc = tensionPrimaire * 0.1;

    const spiresPri = Math.round(30 * tensionPrimaire / 50);
    const spiresSec = Math.round(30 * tensionSecondaire / 50);
    const sectionFilPri = (courantPrimaire / 4).toFixed(2);
    const sectionFilSec = (courantSecondaire / 4).toFixed(2);

    const longueurFil = ((spiresPri + spiresSec) * 0.5).toFixed(2);
    const resistance = ((longueurFil * 0.017) / (sectionFilPri * 1)).toFixed(2);

    const sectionNoyau = (puissance / 100).toFixed(2);
    const dimensionsExt = `${(sectionNoyau * 2).toFixed(1)} x ${(sectionNoyau * 3).toFixed(1)}`;
    const volumeBobinage = (sectionNoyau * 5).toFixed(2);

    const induction = (1.1).toFixed(2);
    const longueurCircuit = (sectionNoyau * 4).toFixed(2);
    const fluxDensite = (induction / sectionNoyau).toFixed(3);

    const pertesFer = (puissance * 0.01).toFixed(1);
    const pertesCuivre = (puissance * 0.015).toFixed(1);
    const pertesTotales = (parseFloat(pertesFer) + parseFloat(pertesCuivre)).toFixed(1);
    const rendement = ((puissance - pertesTotales) / puissance * 100).toFixed(1);

    return {
        puissance, courantPrimaire, courantSecondaire, tcc,
        spiresPri, spiresSec, sectionFilPri, sectionFilSec, longueurFil, resistance,
        sectionNoyau, dimensionsExt, volumeBobinage,
        induction, longueurCircuit, fluxDensite,
        pertesFer, pertesCuivre, pertesTotales, rendement
    };
}
