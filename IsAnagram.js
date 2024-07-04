function isAnagram(str1, str2) {
    // Function to clean and sort a string
    const cleanString = (str) => {
        return str.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split('').sort().join('');
    };

    // Clean and sort both strings
    const cleanedStr1 = cleanString(str1);
    const cleanedStr2 = cleanString(str2);

    // Compare the cleaned, sorted strings
    return cleanedStr1 === cleanedStr2;
}

// Examples:
console.log(isAnagram("listen", "silent"));          // true
console.log(isAnagram("Hello", "Olelh"));            // true
console.log(isAnagram("Dormitory", "Dirty room"));   // true
console.log(isAnagram("Slot machines", "Cash lost in me")); // true
console.log(isAnagram("Astronomer", "Moon starer")); // true
console.log(isAnagram("Hello", "World"));            // false