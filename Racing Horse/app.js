const button = document.getElementById('button');
const maingame = document.getElementById('maingame');
const bet = document.getElementById('bet');

const horse1 = document.getElementById('horse1');
const horse2 = document.getElementById('horse2');
const horse3 = document.getElementById('horse3');

// Start at 0 px and finish at 650px

button.addEventListener('click', function () {
    maingame.style.display = 'none';
    bet.style.display = 'grid';

    let Amount = document.getElementById('input').value;

    let horse1px = 0;
    let horse2px = 0;
    let horse3px = 0;

    let Movement = setInterval(function () {
        // Speed for horse 1
        let speedhorse1 = Math.floor(Math.random() * 10);
        horse1px += speedhorse1
        horse1.style.left = horse1px + 'px';

        // Speed for horse 2

        let speedhorse2 = Math.floor(Math.random() * 10);
        horse2px += speedhorse2
        horse2.style.left = horse2px + 'px';

        // Speed for horse 3

        let speedhorse3 = Math.floor(Math.random() * 10);
        horse3px += speedhorse3
        horse3.style.left = horse3px + 'px';

        // Check for the winner

        if (horse1px >= 650) {
            clearInterval(Movement);
            window.alert('Horse 1 Win!');
            maingame.style.display = 'flex';
            bet.style.display = 'none';
        } else if (horse2px >= 650) {
            clearInterval(Movement);
            window.alert('Horse 2 Win!');
            maingame.style.display = 'flex';
            bet.style.display = 'none';
        } else if (horse2px >= 650) {
            clearInterval(Movement);
            window.alert('Horse 3 Win!');
            maingame.style.display = 'flex';
            bet.style.display = 'none';
        };

    }, 80);



});