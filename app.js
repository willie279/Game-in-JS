const imgPlayerChoice = document.getElementById('playerChoice');
const imgPlayerChoice2 = document.getElementById('playerChoice2');

const pResult = document.getElementById('result');
const pScore = document.getElementById('score');

const buttons = document.querySelectorAll('button');

let positiveScore = 0;
let negativeScore = 0;

const choice = ['Piedra', 'Papel', 'Tijeras']; // arreglo
const fileNames = {
    'Piedra': 'images/rock.png',
    'Papel': 'images/paper.png',
    'Tijeras': 'images/scissors.png'
};

buttons.forEach(
    button => button.addEventListener('click', StarGame)
);

function StarGame(event) {
    // determinar la eleccion del jugador
    //console.log(event.currentTarget);
    const button = event.currentTarget; // Esto me da el boton al que haga click
    const playerChoice = button.dataset.choice; //Captura la eleccion del jugador
    console.log(playerChoice);

    // determianr la eleccion de judador 2

    const playerChoice2 = getPlayer2Choice();
    console.log(playerChoice2);

    // determinar quien gana

    const playerWinner = winner(playerChoice, playerChoice2);
    console.log(`el ganador es  ${playerWinner}`);

    let result;
    if (playerWinner === 'player1') {
        result = 'ganado';
        ++positiveScore;
    } else if (playerWinner === 'player2') {
        result = 'perdido';
        ++negativeScore;
    } else {
        result = 'empatado';
    }

    imgPlayerChoice.setAttribute('src', fileNames[playerChoice]);
    imgPlayerChoice2.setAttribute('src', fileNames[playerChoice2]);

    pScore.innerHTML = `Has ganado <strong>${positiveScore}</strong> veces. Has perdido <strong>${negativeScore}</strong> veces. `;
    pResult.innerHTML = ` Tu has ${result} con <strong>${playerChoice}</strong>
                            en contra de <strong>${playerChoice2}</strong>`;
    // operador ternario para cambiar la palabra ganas o pierdes

};

function getPlayer2Choice() {
    // obtener un valor aleatorio
    const i = parseInt(Math.random() * 3) /* El 3 es para obtener valores entre 0 y 2 (con decimales)
y el parseInt me regresa la parte entera*/

    // devolver el valor obtenido
    return choice[i];
};

function winner(playerChoice, playerChoice2) {
    if (playerChoice === playerChoice2) {
        return null; // empate
    }

    if (playerChoice === 'Tijeras') {
        if (playerChoice2 === 'Papel') {
            return 'player1';

        }
        else {
            return 'player2';
        }

    } else if (playerChoice === 'Papel') {
        if (playerChoice2 === 'Tijeras') {
            return 'player2';

        }
        else {
            if (playerChoice2 === 'Piedra') {
                return 'player1';
            }
        }
    } else {
        if (playerChoice === 'Piedra') {
            if (playerChoice2 === 'Papel') {
                return 'player2';
            }
            else {
                if (playerChoice2 === 'Tijeras')
                    return 'player1';
            }
        }

    }

}
