const dice = ['ability', 'difficulty', 'proficiency', 'challenge', 'boost', 'setback'];

function toCssId(name) {
    return `#${name}`;
}

for (diceElement of $(dice.map(toCssId).join())) {
    const die = diceElement.id;

}