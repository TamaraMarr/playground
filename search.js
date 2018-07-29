const string = "Where does such tenderness come from?";

const findWord = (string, word) => {
    let counter = 0;

    for (let i = 0; i < string.length; i++) {
        for (let j = 0, k = i; j < word.length; j++, k++) {
            if (string[k] === word[j]) {
                counter++;
            }
        }

        if (counter === word.length) {
            return true
        };

        counter = 0;
    }

    return false;
}

console.log(findWord(string, "tenderness"));