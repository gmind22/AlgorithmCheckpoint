// My Sentence
const sen = "I love javascript.";

// Counter for Length of Sentence
function strOpr(str) {
    const strLen = str.length;
    return strLen;

}

// Counter for Word Count
console.log(strOpr(sen));

function countWords(str) {
    let wordCount = 0;
    for(let char of str) {
        if(char == " ") {
            wordCount++
        }
    }
    wordCount += 1;
    return wordCount;
}

countWords(sen)

// Counter for Vowel Count
function countVowels(str) {
    let vowelcount = 0;
    const vowels = ["a","e", "i", "o", "u"];
    str = str.toLowerCase();
    for(let char of str) {
        // if(vowels.includes(char.toLowerCase())) {
        //     vowelcount++;
        // }
        if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            vowelcount++;
        }
    }
    return vowelcount;

    
}

countVowels(sen)