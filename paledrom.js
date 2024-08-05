// 1. Définir la Fonction
function isPalindrome(str) {
    // 2. Nettoyer la Chaîne
    let cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    
    // 3. Comparer les Caractères
    let left = 0;
    let right = cleanedStr.length - 1;
    
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false; // Les caractères ne correspondent pas
        }
        left++;
        right--;
    }
    
    // 4. Retourner le Résultat
    return true; // Tous les caractères correspondent
}

// Exemple d'utilisation de la fonction
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Affiche true
console.log(isPalindrome("Hello")); // Affiche false
