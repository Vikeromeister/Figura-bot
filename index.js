function getVowels(line, no) {
    const vowels = [];
    // Loop through each letter in the line from the end to the beginning
    for (let index = line.length - 1; index >= 0; index--) {
        const letter = line[index].toLowerCase();
        // If the letter is a vowel, add it to the beginning of the vowels array
        if (["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"].indexOf(letter) !== -1) {
            vowels.unshift(letter);
            // If we've found the requested number of vowels, stop looping
            if (vowels.length >= no) {
                break;
            }
        }
    }
    // Return the vowels as a string
    return vowels.join("");
}

function compare(line1, line2) {
    let i = 1;
    while (getVowels(line1, i) === getVowels(line2, i) && getVowels(line1, i).length === i) {
        i++;
    }
    // Return the number of matching vowels minus one (because the loop incremented one more time than it should have)
    return i - 1;
}

// This Python code was loading a module called "szoveg" that we don't have access to here,
// so I'm just going to manually create an array of test lines instead.
const sorok = ["Ez egy teszt.", "Ez is egy teszt.", "Ez meg egy teszt?", "Nem ez az?" ];

while (true) {
    const bemenet = prompt("Lökj egy sort Figurának:");
    const josorok = [];
    let mhk = 0;
    for (const line of sorok) {
        const matchingVowels = compare(line, bemenet);
        if (matchingVowels > mhk) {
            // If we found a line with more matching vowels, clear the list and add the new line
            josorok.length = 0;
            josorok.push(line);
            mhk = matchingVowels;
        } else if (matchingVowels === mhk) {
            // If we found a line with the same number of matching vowels, add it to the list
            josorok.push(line);
        }
    }
    if (mhk > 1) {
        // If we found lines with more than one matching vowel, choose a random one and display it
        alert("Figura: " + josorok[Math.floor(Math.random() * josorok.length)]);
    }
}
