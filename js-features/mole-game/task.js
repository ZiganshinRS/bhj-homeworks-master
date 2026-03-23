(() => {
    const dead = document.getElementById('dead');
    const lost = document.getElementById('lost');

    const getHole = index => document.getElementById(`hole${index}`);

    let deadCount = 0;
    let lostCount = 0;

    const resetGame = () => {
        deadCount = 0;
        lostCount = 0;
        dead.textContent = 0;
        lost.textContent = 0;
    };

    for (let i = 1; i <= 9; i++) {
        getHole(i).addEventListener('click', () => {
            if (getHole(i).classList.contains('hole_has-mole')) {
                deadCount++;
                dead.textContent = deadCount;
                if (deadCount === 10) {
                    alert('Победа! Вы убили 10 кротов!');
                    resetGame();
                }
            } else {
                lostCount++;
                lost.textContent = lostCount;

                if (lostCount === 5) {
                    alert('Игра окончена! Слишком много промахов.');
                    resetGame();
                }
            }
        });
    }
})();