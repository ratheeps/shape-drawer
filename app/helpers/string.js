export const strBetween = (string, start, end) => {
    if (!string) return null;
    // create regular expression
    const regex = new RegExp(`(${start})(.*)(${end})`, 'gim');
    // match in string
    const results = regex.exec(string.toLowerCase());
    // return only matched word
    if (!results) return null;
    return (results ? results[2] || null : null ).trim();
};

export const nextWord = (string, word) => {
    // find next words
    let nextWords = string.match(new RegExp(word + '\\s(\\w+)'));
    // get first word
    if (nextWords && nextWords.hasOwnProperty('1')){
        return nextWords[1];
    }
    return null;
};

