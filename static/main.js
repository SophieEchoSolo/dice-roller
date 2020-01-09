const dice = ['ability', 'difficulty', 'proficiency', 'challenge', 'boost', 'setback'];

function toCssId(name) {
    return `#${name}`;
}

for (diceElement of $(dice.map(toCssId).join())) {
    const die = diceElement.id;
    const input = diceElement.querySelector('.dice');
    const minusButton = diceElement.querySelector('.minus');
    const plusButton = diceElement.querySelector('.plus');
    input.value = 0;
    input.addEventListener('keypress', ev => {
        if (!ev.key.match(/^\d$/))
            ev.preventDefault();
    });
    input.addEventListener('paste', ev => {
        ev.preventDefault();
    });
    input.addEventListener('blur', ev => {
        const el = ev.target;
        const num = Number.parseInt(el.value);
        if (isNaN(num)) {
            el.value = "0";
            return;
        }
        el.value = String(Math.max(0, num));
    });
    minusButton.addEventListener('click', ev => {
        let num = Number.parseInt(input.value);
        num -= 1;
        input.value = String(Math.max(0, num));
    })
    plusButton.addEventListener('click', ev => {
        let num = Number.parseInt(input.value);
        num += 1;
        input.value = String(Math.max(0, num));
    })
}