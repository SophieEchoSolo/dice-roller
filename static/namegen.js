const names = [
    ['failure', 'success'],
    ['threat', 'advantage'],
    ['ERROR NEGATIVE TRIUMPH', 'triumph'],
    ['ERROR NEGATIVE DESPAIR', 'despair'],
];

/**
 * Generates a result slug based on result
 * 
 * @param {[number, number, number, number]} result - result of dice
 * @returns {string} The slug of the result
 * @author Linn Dahlgren
 */
function getSlug(result) {
    return result.map((r, i) => {
        let index = Math.sign(r);
        if(index === 0) return null;
        index = Math.max(index, 0);
        return new Array(Math.abs(r)).fill(null).map(() => names[i][index]).join('-');
    }).filter(e => e != null).join('-') || 'blank';
}

/**
 * Generates a filename based on result of a dice roll
 * 
 * @param {string} name - name of dice
 * @param {[number, number, number, number]} result - result of dice
 * @returns {string} The filename of the dice image
 * @author Linn Dahlgren
 */
function getFileName(name, result) {
    return `${name}-${getSlug(result)}.svg`;
}
