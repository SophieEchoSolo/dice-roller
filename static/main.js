const dice = ['ability', 'difficulty', 'proficiency', 'challenge', 'boost', 'setback'];

function toCssId(name) {
    return `#${name}`;
}

for (diceElement of $(dice.map(toCssId).join())) {
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

aggregateOrig = $('#aggregate-roll').html();
totalOrig = $('#total-roll').html();

const clear = $("#clear")[0]
clear.addEventListener('click', ev => {
    for (diceElement of $(dice.map(toCssId).join())) {
        diceElement.querySelector('.dice').value = "0";
    }
    $('#total-roll').html(totalOrig);
    $('#aggregate-roll').html(aggregateOrig);
});

function renderDice(response, diceList) {
    const individualRolls = diceList.map((die, i) => [die, response.individual_rolls[i]]);
    $('#total-roll').html(individualRolls.map(([dice, res]) => `<img src="/static/dice/${getFileName(dice, res)}" alt="" />`).join('\n'));
}

function renderAggregate(response) {
    console.log(response);
    const pips = [];
    const sum = response.sum
    for (let i = 0; i < sum.length; i++) {
        console.log('loop1');
        const amount = Math.abs(sum[i]);
        let index = Math.sign(sum[i]);
        if (index === 0) continue;
        index = Math.max(index, 0);
        for (let j = 0; j < amount; j++) {
            console.log('loop2');
            pips.push(names[i][index])
        }
    }
    console.log('pips:', pips)
    $('#aggregate-roll').html(pips.map(pip =>
        `<img src="/static/pips/${pip}.svg" alt="" />`
    ).join('\n'));
}

const rollDice = $("#rollDice")[0]
rollDice.addEventListener('click', ev => {
    const diceList = [];
    for (diceElement of $(dice.map(toCssId).join())) {
        const die = diceElement.id;
        const amount = Number.parseInt(diceElement.querySelector('.dice').value);
        for (let i = 0; i < amount; i++) {
            diceList.push(die)
        }
    }
    const ret = $.ajax("/rolldie", {
        data: JSON.stringify(diceList),
        dataType: "json",
        method: "POST",
        contentType: "application/json"
    }).then(response => {
        renderDice(response, diceList);

        renderAggregate(response);
    });
});