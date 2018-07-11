/**
 * find the word between two words from a string
 * @param string
 * @param start
 * @param end
 * @returns {*}
 */
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

/**
 * Find the next word from a string
 * @param string
 * @param word
 * @returns {*}
 */
export const nextWord = (string, word) => {
    // find next words
    let nextWords = string.match(new RegExp(word + '\\s(\\w+)'));
    // get first word
    if (nextWords && nextWords.hasOwnProperty('1')){
        return nextWords[1];
    }
    return null;
};

