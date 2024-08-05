// 1. Définir la Fonction
function countVowels(str) {
    // 2. Initialiser un Compteur
    let vowelCount = 0;
    
    // 3. Définir un Ensemble de Voyelles
    const vowels = 'aeiouAEIOU';
    
    // 4. Parcourir la Chaîne
    for (let i = 0; i < str.length; i++) {
        // 5. Vérifier les Voyelles
        if (vowels.includes(str[i])) {
            vowelCount++;
        }
    }
    
    // 6. Retourner le Compteur
    return vowelCount;
}

// Exemple d'utilisation de la fonction
console.log(countVowels("Hello World")); // Affiche 3
console.log(countVowels("Programming is fun!")); // Affiche 6
