let happiness = 100;
let health = 100;

const happinessElem = document.getElementById('happiness');
const healthElem = document.getElementById('health');
const catArt = document.getElementById('cat-art');

// Initialize with the default cat art
updateCatArt(`
 /\\_/\\
 ( o.o )
 > ^ <
`);

// Event listeners
document.getElementById('feed-button').addEventListener('click', () => {
    updateCatStats(10, 5, `
 /\\_/\\
 ( o.o )
 > ^ <
`);
});

document.getElementById('play-button').addEventListener('click', () => {
    updateCatStats(20, -5, `
 /\\_/\\
 ( o.o )
 (")(")
`);
});

document.getElementById('pet-button').addEventListener('click', () => {
    updateCatStats(15, 0, `
 /\\_/\\
 ( o.o )
 (")(
`);
    setTimeout(() => resetCatArt(), 500);
});

document.getElementById('sleep-button').addEventListener('click', () => {
    updateCatArt(`
 /\\_/\\
 ( -.- )
 > z <
`);
    setTimeout(() => resetCatArt(), 2000);
});

document.getElementById('scratch-button').addEventListener('click', () => {
    updateCatArt(`
 /\\_/\\
 ( o.o )
 (")/
`);
    setTimeout(() => resetCatArt(), 500);
});

document.getElementById('discipline-button').addEventListener('click', () => {
    updateCatStats(-10, 0, `
 /\\_/\\
 ( -.- )
 > X <
`);
    setTimeout(() => resetCatArt(), 1000);
});

document.getElementById('clean-button').addEventListener('click', () => {
    updateCatStats(0, 15, `
 /\\_/\\
 ( o.o )
 ( \\_ )
`);
    setTimeout(() => resetCatArt(), 500);
});

document.getElementById('medical-care-button').addEventListener('click', () => {
    updateCatStats(0, 20, `
 /\\_/\\
 ( o.o )
 (o.o)
`);
    setTimeout(() => resetCatArt(), 1000);
});

// Update cat stats and art
function updateCatStats(happinessChange, healthChange, art) {
    happiness = Math.min(Math.max(happiness + happinessChange, 0), 100);
    health = Math.min(Math.max(health + healthChange, 0), 100);
    updateCatArt(art);
    updateStatus();
}

// Update cat art
function updateCatArt(art) {
    catArt.textContent = art;
}

// Reset cat art to default
function resetCatArt() {
    updateCatArt(`
 /\\_/\\
 ( o.o )
 > ^ <
`);
}

// Update status
function updateStatus() {
    happinessElem.textContent = `Happiness: ${happiness}%`;
    healthElem.textContent = `Health: ${health}%`;
}
