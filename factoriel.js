// 1. Définir la Fonction
function factorial(n) {
    // 2. Gérer les Cas de Base
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // 3. Calculer la Factorielle
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    // 4. Retourner le Résultat
    return result;
}

// Exemple d'utilisation de la fonction
let result = factorial(12);
console.log(result); // Affiche 120
