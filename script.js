const champions = [
    { name: "Aatrox", roles: ["Top"] },
    { name: "Ahri", roles: ["Mid"] },
    { name: "Akali", roles: ["Mid", "Top"] },
    { name: "Akshan", roles: ["Mid", "Top"] },
    { name: "Alistar", roles: ["Support"] },
    { name: "Ambessa", roles: ["Top", "Jungle"] },
    { name: "Amumu", roles: ["Jungle", "Support"] },
    { name: "Anivia", roles: ["Mid"] },
    { name: "Annie", roles: ["Mid", "Support"] },
    { name: "Aphelios", roles: ["ADC"] },
    { name: "Ashe", roles: ["ADC"] },
    { name: "Aurelion Sol", roles: ["Mid"] },
    { name: "Aurora", roles: ["Mid", "Top"] },
    { name: "Azir", roles: ["Mid"] },
    { name: "Bard", roles: ["Support"] },
    { name: "Bel'Veth", roles: ["Jungle"] },
    { name: "Blitzcrank", roles: ["Support"] },
    { name: "Brand", roles: ["Support", "Mid"] },
    { name: "Braum", roles: ["Support"] },
    { name: "Briar", roles: ["Jungle"] },
    { name: "Caitlyn", roles: ["ADC"] },
    { name: "Camille", roles: ["Top"] },
    { name: "Cassiopeia", roles: ["Mid"] },
    { name: "Cho'Gath", roles: ["Top"] },
    { name: "Corki", roles: ["Mid"] },
    { name: "Darius", roles: ["Top"] },
    { name: "Diana", roles: ["Jungle", "Mid"] },
    { name: "Dr. Mundo", roles: ["Top"] },
    { name: "Draven", roles: ["ADC"] },
    { name: "Ekko", roles: ["Jungle", "Mid"] },
    { name: "Elise", roles: ["Jungle"] },
    { name: "Evelynn", roles: ["Jungle"] },
    { name: "Ezreal", roles: ["ADC"] },
    { name: "Fiddlesticks", roles: ["Jungle"] },
    { name: "Fiora", roles: ["Top"] },
    { name: "Fizz", roles: ["Mid"] },
    { name: "Galio", roles: ["Mid", "Support"] },
    { name: "Gangplank", roles: ["Top"] },
    { name: "Garen", roles: ["Top"] },
    { name: "Gnar", roles: ["Top"] },
    { name: "Gragas", roles: ["Jungle", "Top"] },
    { name: "Graves", roles: ["Jungle"] },
    { name: "Gwen", roles: ["Top", "Jungle"] },
    { name: "Hecarim", roles: ["Jungle"] },
    { name: "Heimerdinger", roles: ["Mid", "Top"] },
    { name: "Hwei", roles: ["Mid", "Support"] },
    { name: "Illaoi", roles: ["Top"] },
    { name: "Irelia", roles: ["Top", "Mid"] },
    { name: "Ivern", roles: ["Jungle"] },
    { name: "Janna", roles: ["Support"] },
    { name: "Jarvan IV.", roles: ["Jungle"] },
    { name: "Jax", roles: ["Top", "Jungle"] },
    { name: "Jayce", roles: ["Top", "Mid"] },
    { name: "Jhin", roles: ["ADC"] },
    { name: "Jinx", roles: ["ADC"] },
    { name: "K'Sante", roles: ["Top"] },
    { name: "Kai'Sa", roles: ["ADC"] },
    { name: "Kalista", roles: ["ADC"] },
    { name: "Karma", roles: ["Support", "Mid"] },
    { name: "Karthus", roles: ["Jungle", "Mid"] },
    { name: "Kassadin", roles: ["Mid"] },
    { name: "Katarina", roles: ["Mid"] },
    { name: "Kayle", roles: ["Top"] },
    { name: "Kayn", roles: ["Jungle"] },
    { name: "Kennen", roles: ["Top", "Mid"] },
    { name: "Kha'Zix", roles: ["Jungle"] },
    { name: "Kindred", roles: ["Jungle"] },
    { name: "Kled", roles: ["Top"] },
    { name: "Kog'Maw", roles: ["ADC"] },
    { name: "LeBlanc", roles: ["Mid"] },
    { name: "Lee Sin", roles: ["Jungle"] },
    { name: "Leona", roles: ["Support"] },
    { name: "Lillia", roles: ["Jungle"] },
    { name: "Lissandra", roles: ["Mid"] },
    { name: "Locke", roles: ["Mid"] },
    { name: "Lucian", roles: ["ADC", "Mid"] },
    { name: "Lulu", roles: ["Support"] },
    { name: "Lux", roles: ["Support", "Mid"] },
    { name: "Malphite", roles: ["Top", "Support"] },
    { name: "Malzahar", roles: ["Mid"] },
    { name: "Maokai", roles: ["Top", "Support"] },
    { name: "Master Yi", roles: ["Jungle"] },
    { name: "Mel", roles: ["Mid", "Support"] },
    { name: "Milio", roles: ["Support"] },
    { name: "Miss Fortune", roles: ["ADC"] },
    { name: "Mordekaiser", roles: ["Top"] },
    { name: "Morgana", roles: ["Support", "Mid"] },
    { name: "Naafiri", roles: ["Mid", "Jungle"] },
    { name: "Nami", roles: ["Support"] },
    { name: "Nasus", roles: ["Top"] },
    { name: "Nautilus", roles: ["Support", "Jungle"] },
    { name: "Neeko", roles: ["Mid", "Support"] },
    { name: "Nidalee", roles: ["Jungle"] },
    { name: "Nilah", roles: ["ADC"] },
    { name: "Nocturne", roles: ["Jungle"] },
    { name: "Nunu & Willump", roles: ["Jungle"] },
    { name: "Olaf", roles: ["Jungle", "Top"] },
    { name: "Orianna", roles: ["Mid"] },
    { name: "Ornn", roles: ["Top"] },
    { name: "Pantheon", roles: ["Support", "Mid", "Jungle"] },
    { name: "Poppy", roles: ["Top", "Jungle"] },
    { name: "Pyke", roles: ["Support", "Mid"] },
    { name: "Qiyana", roles: ["Mid"] },
    { name: "Quinn", roles: ["Top"] },
    { name: "Rakan", roles: ["Support"] },
    { name: "Rammus", roles: ["Jungle"] },
    { name: "Rek'Sai", roles: ["Jungle"] },
    { name: "Rell", roles: ["Support"] },
    { name: "Renata Glasc", roles: ["Support"] },
    { name: "Renekton", roles: ["Top"] },
    { name: "Rengar", roles: ["Jungle"] },
    { name: "Riven", roles: ["Top"] },
    { name: "Rumble", roles: ["Top", "Jungle"] },
    { name: "Ryze", roles: ["Mid"] },
    { name: "Samira", roles: ["ADC"] },
    { name: "Sejuani", roles: ["Jungle"] },
    { name: "Senna", roles: ["Support", "ADC"] },
    { name: "Seraphine", roles: ["Support", "ADC", "Mid"] },
    { name: "Sett", roles: ["Top", "Support"] },
    { name: "Shaco", roles: ["Jungle"] },
    { name: "Shen", roles: ["Top"] },
    { name: "Shyvana", roles: ["Jungle"] },
    { name: "Singed", roles: ["Top"] },
    { name: "Sion", roles: ["Top"] },
    { name: "Sivir", roles: ["ADC"] },
    { name: "Skarner", roles: ["Jungle"] },
    { name: "Smolder", roles: ["ADC"] },
    { name: "Sona", roles: ["Support"] },
    { name: "Soraka", roles: ["Support"] },
    { name: "Swain", roles: ["Support", "Mid", "ADC"] },
    { name: "Sylas", roles: ["Mid", "Jungle"] },
    { name: "Syndra", roles: ["Mid"] },
    { name: "Tahm Kench", roles: ["Support", "Top"] },
    { name: "Taliyah", roles: ["Jungle", "Mid"] },
    { name: "Talon", roles: ["Mid", "Jungle"] },
    { name: "Taric", roles: ["Support"] },
    { name: "Teemo", roles: ["Top"] },
    { name: "Thresh", roles: ["Support"] },
    { name: "Tristana", roles: ["ADC"] },
    { name: "Trundle", roles: ["Top", "Jungle"] },
    { name: "Tryndamere", roles: ["Top"] },
    { name: "Twisted Fate", roles: ["Mid", "ADC", "Support"] },
    { name: "Twitch", roles: ["ADC"] },
    { name: "Udyr", roles: ["Jungle"] },
    { name: "Urgot", roles: ["Top"] },
    { name: "Varus", roles: ["ADC"] },
    { name: "Vayne", roles: ["ADC", "Top"] },
    { name: "Veigar", roles: ["Mid", "Support"] },
    { name: "Vel'Koz", roles: ["Support", "Mid"] },
    { name: "Vex", roles: ["Mid"] },
    { name: "Vi", roles: ["Jungle"] },
    { name: "Viego", roles: ["Jungle"] },
    { name: "Viktor", roles: ["Mid"] },
    { name: "Vladimir", roles: ["Mid", "Top"] },
    { name: "Volibear", roles: ["Top", "Jungle"] },
    { name: "Warwick", roles: ["Jungle"] },
    { name: "Wukong", roles: ["Jungle", "Top"] },
    { name: "Xayah", roles: ["ADC"] },
    { name: "Xerath", roles: ["Support", "Mid"] },
    { name: "Xin Zhao", roles: ["Jungle"] },
    { name: "Yasuo", roles: ["Mid", "Top", "ADC"] },
    { name: "Yone", roles: ["Mid", "Top"] },
    { name: "Yorick", roles: ["Top"] },
    { name: "Yunara", roles: ["ADC"] },
    { name: "Yuumi", roles: ["Support"] },
    { name: "Zaahen", roles: ["Top", "Jungle"] },
    { name: "Zac", roles: ["Jungle", "Top"] },
    { name: "Zed", roles: ["Mid"] },
    { name: "Zeri", roles: ["ADC"] },
    { name: "Ziggs", roles: ["Mid", "ADC"] },
    { name: "Zilean", roles: ["Support"] },
    { name: "Zoe", roles: ["Mid"] },
    { name: "Zyra", roles: ["Support"] },
];

const champButton = document.getElementById('champs');
const roleButton = document.getElementById('role');
const teamButton = document.getElementById('team');
const caseTrack = document.getElementById('casetrack');
const caseBox = document.getElementById('case');
const rollButton = document.getElementById('roll');
const rollInfo = document.getElementById('rollinfo');
const resultBox = document.getElementById('result');

const REEL_LENGTH = 60;
const SPIN_DURATION = 6000;

let ddragonChampions = {};
let ddragonVersion = null;
let selectedRole = 'Alle';
let filteredChampions = champions;
let isSpinning = false;

async function loadDdragonData() {
    const versions = await fetch('https://ddragon.leagueoflegends.com/api/versions.json').then(res => res.json());
    ddragonVersion = versions[0];

    const data = await fetch(`https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/data/de_DE/champion.json`).then(res => res.json());
    ddragonChampions = data.data;
}

function getChampionImageUrl(championName) {
    const ddragonEntry = Object.values(ddragonChampions).find(c => c.name === championName);
    if (!ddragonEntry) return null;
    return `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/img/champion/${ddragonEntry.image.full}`;
}

function getItemWidth() {
    const size = getComputedStyle(document.documentElement).getPropertyValue('--item-size');
    return parseFloat(size) + 4;
}

function createCaseItem(champion) {
    const item = document.createElement('div');
    item.className = 'caseitem';

    const imageUrl = getChampionImageUrl(champion.name);
    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = champion.name;
        item.appendChild(img);
    } else {
        item.textContent = champion.name;
    }

    return item;
}

function applyFilter(role) {
    selectedRole = role;
    filteredChampions = role === 'Alle'
        ? champions
        : champions.filter(c => c.roles.includes(role));

    rollInfo.textContent = `${role} · ${filteredChampions.length} Champions`;
    resultBox.textContent = '';

    caseTrack.style.transition = 'none';
    caseTrack.style.transform = 'translateX(0)';
    caseTrack.replaceChildren(...filteredChampions.slice(0, 12).map(createCaseItem));
}

function spin() {
    if (isSpinning || filteredChampions.length === 0) return;
    isSpinning = true;
    rollButton.disabled = true;
    resultBox.textContent = '';

    const winner = filteredChampions[Math.floor(Math.random() * filteredChampions.length)];

    const reel = [];
    for (let i = 0; i < REEL_LENGTH; i++) {
        reel.push(filteredChampions[Math.floor(Math.random() * filteredChampions.length)]);
    }
    const winnerIndex = REEL_LENGTH - 5;
    reel[winnerIndex] = winner;

    caseTrack.style.transition = 'none';
    caseTrack.style.transform = 'translateX(0)';
    caseTrack.replaceChildren(...reel.map(createCaseItem));

    const itemWidth = getItemWidth();
    const centerOffset = caseBox.offsetWidth / 2 - itemWidth / 2;
    const jitter = (Math.random() - 0.5) * (itemWidth * 0.6);
    const targetX = -(winnerIndex * itemWidth) + centerOffset - jitter;

    requestAnimationFrame(() => {
        caseTrack.style.transition = `transform ${SPIN_DURATION}ms cubic-bezier(0.12, 0.8, 0.12, 1)`;
        caseTrack.style.transform = `translateX(${targetX}px)`;
    });

    caseTrack.addEventListener('transitionend', () => {
        resultBox.textContent = winner.name;
        rollButton.disabled = false;
        isSpinning = false;
        setTimeout(() => SelectedChamp(winner.name), 600);
    }, { once: true });
}

document.querySelectorAll('.rolefilterbutton').forEach(button => {
    button.addEventListener('click', () => {
        if (isSpinning) return;

        const roleMap = {
            all: 'Alle',
            top: 'Top',
            jungle: 'Jungle',
            mid: 'Mid',
            adc: 'ADC',
            support: 'Support',
        };

        document.querySelectorAll('.rolefilterbutton').forEach(b => b.classList.remove('active'));
        button.classList.add('active');

        applyFilter(roleMap[button.id]);
    });
});
const selectedChampBox = document.getElementById('selected-champ');
const championInfo = document.getElementById('champion-info');
const selectedName = document.getElementById('selected-name');
const acceptButton = document.getElementById('accept');
const rerollButton = document.getElementById('reroll');

function SelectedChamp(championName) {
    selectedName.textContent = championName;

    const imageUrl = getChampionImageUrl(championName);
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = championName;
    championInfo.replaceChildren(img);

    selectedChampBox.classList.add('open');
}

function closeSelectedChamp() {
    selectedChampBox.classList.remove('open');
}

acceptButton.addEventListener('click', closeSelectedChamp);

rerollButton.addEventListener('click', () => {
    closeSelectedChamp();
    spin();
});

selectedChampBox.addEventListener('click', (event) => {
    if (event.target === selectedChampBox) closeSelectedChamp();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeSelectedChamp();
});

rollButton.addEventListener('click', spin);

loadDdragonData().then(() => applyFilter('Alle'));