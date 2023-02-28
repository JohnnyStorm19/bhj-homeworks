const dead = document.getElementById('dead');
const lost = document.getElementById('lost')
let deadCount = 0;
let lostCount = 0;

function getHole(index) {
    let hole = document.getElementById(`hole${index}`);
    hole.onclick = function() {
        if(hole.className.includes('hole_has-mole')) {
            deadCount++;
        } else {
            lostCount++;
        }
        if(deadCount === 10) {
            lostCount = 0;
            deadCount = 0;
            alert('Победа!');
        }
        if(lostCount === 5) {
            lostCount = 0;
            deadCount = 0;
            alert('Поражение!');
        }
        lost.textContent = lostCount;
        dead.textContent = deadCount;
    }
}
for(let index = 1; index <= 9; index++) {
    getHole(index);
}




