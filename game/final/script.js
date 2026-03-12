(function () {
    'use strict';
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    const p1ScoreEl = document.querySelector('#p1-score');
    const p2ScoreEl = document.querySelector('#p2-score');
    const dieLeft = document.querySelector('#die-left');
    const dieRight = document.querySelector('#die-right');

    // ── Sounds ──
    const soundRoll = new Audio('sounds/roll.mp3');       // plays on every dice roll
    const soundPenalty = new Audio('sounds/penalty.wav');    // plays when a 1 is rolled
    const soundSnakeEyes = new Audio('sounds/snakeeyes.mp3');  // plays on snake eyes
    const soundWinner = new Audio('sounds/winner.mp3');     // plays when someone wins

    // Overlay elements
    const overlayPenalty = document.querySelector('#overlay-penalty');
    const overlayPenaltyMsg = document.querySelector('#overlay-penalty-msg');
    const overlayWinner = document.querySelector('#overlay-winner');
    const overlayWinnerMsg = document.querySelector('#overlay-winner-msg');
    const overlayNewGame = document.querySelector('#overlay-newgame');

    const gameData = {
        dice: ['die-1.svg', 'die-2.svg', 'die-3.svg',
            'die-4.svg', 'die-5.svg', 'die-6.svg'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    /* ── Overlay helpers ── */
    function showPenaltyOverlay(message, callback) {
        overlayPenaltyMsg.textContent = message;
        overlayPenalty.classList.remove('hidden');
        // Auto-dismiss after 2 seconds then run callback (next turn)
        setTimeout(function () {
            overlayPenalty.classList.add('hidden');
            if (callback) callback();
        }, 2000);
    }

    function showWinnerOverlay(message) {
        overlayWinnerMsg.textContent = message;
        overlayWinner.classList.remove('hidden');
    }

    // Play Again button dismisses winner overlay and reloads
    overlayNewGame.addEventListener('click', function () {
        location.reload();
    });

    /* ── Start ── */
    startGame.addEventListener('click', function () {
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.querySelector('#quit').addEventListener('click', function () {
            location.reload();
        });

        setUpTurn();
    });

    /* ── Active player highlight ── */
    function updateActivePlayerUI() {
        document.querySelector('#p1').classList.toggle('active-player', gameData.index === 0);
        document.querySelector('#p2').classList.toggle('active-player', gameData.index === 1);
    }

    /* ── New turn ── */
    function setUpTurn() {
        updateActivePlayerUI();
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.querySelector('#roll').addEventListener('click', throwDice);
    }

    /* ── Roll ── */
    function throwDice() {
        actionArea.innerHTML = '';

        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        dieLeft.src = `images/${gameData.dice[gameData.roll1 - 1]}`;
        dieRight.src = `images/${gameData.dice[gameData.roll2 - 1]}`;

        soundRoll.play();

        game.innerHTML = `<p>Roll for ${gameData.players[gameData.index]}</p>`;

        /* Snake eyes — zero score, switch player */
        if (gameData.rollSum === 2) {
            soundSnakeEyes.play();

            gameData.score[gameData.index] = 0;
            updateScoreCards();
            showCurrentScore();
            const nextPlayer = gameData.index ? 'Player 1' : 'Player 2';
            gameData.index = gameData.index ? 0 : 1;
            showPenaltyOverlay(
                `Snake eyes! ${gameData.players[gameData.index === 0 ? 1 : 0]}'s score is reset to 0!\nSwitching to ${nextPlayer}…`,
                setUpTurn
            );

            /* One die is 1 — lose turn */
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            soundPenalty.play();

            const loser = gameData.players[gameData.index];
            gameData.index = gameData.index ? 0 : 1;
            showPenaltyOverlay(
                `${loser} rolled a 1 and loses their turn!\nSwitching to ${gameData.players[gameData.index]}…`,
                setUpTurn
            );

            /* Safe roll */
        } else {
            gameData.score[gameData.index] += gameData.rollSum;
            updateScoreCards();
            actionArea.innerHTML =
                '<button id="rollagain">Roll again</button>' +
                '<button id="pass">Pass</button>';
            document.querySelector('#rollagain').addEventListener('click', throwDice);
            document.querySelector('#pass').addEventListener('click', function () {
                gameData.index = gameData.index ? 0 : 1;
                setUpTurn();
            });
        }

        checkWinningCondition();
    }

    /* ── Win check ── */
    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            soundWinner.play();
            score.innerHTML = '';
            actionArea.innerHTML = '';
            showWinnerOverlay(
                `🏆 ${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!`
            );
            document.querySelector('#quit').textContent = 'Start a New Game?';
        } else {
            showCurrentScore();
        }
    }

    /* ── Score in sign ── */
    function showCurrentScore() {
        score.innerHTML =
            `<p>${gameData.players[0]}: ${gameData.score[0]} | ` +
            `${gameData.players[1]}: ${gameData.score[1]}</p>`;
    }

    /* ── Score cards ── */
    function updateScoreCards() {
        p1ScoreEl.textContent = gameData.score[0];
        p2ScoreEl.textContent = gameData.score[1];
    }

})();