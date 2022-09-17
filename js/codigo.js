function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}

function choice(move) {
    let result = "";
    if(move == 1) {
        result = '🥌 Rock';
    } else if(move == 2) {
        result = '📄 Paper';
    } else if(move == 3) {
        result = '✂ Scissors';
    } else {
        result = 'TO LOSE, FOOL!';
    }

    return result;
}


// 1 is rock, 2 is paper, 3 is scissors

let min = 1;
let max = 3;

let player = 0;
let pc = 0
let wins = 0;
let loses = 0;

while(wins < 3 && loses < 3) {
    pc = random(1,3);
    player = prompt('Choose: 1 for rock, 2 for paper, 3 for scissors');

    alert("You choose " + choice(player));
    alert("PC choose " + choice(pc));

    // COMBAT
    if(player == pc) {
        alert("Tie");
    } else if ((player == 1 && pc == 3) || (player == 2 && pc == 1) || (player ==3 && pc == 2)) {
        alert("YOU WIN 👑");
        wins++;
    } else {
        alert("YOU LOSE 🤡");
        loses++;
    }
}

alert("👑 You've won: " + wins + " times. 🤡 And you've lost: " + loses + " times.")

window.location.reload(true);
