const prizes = [
    { name: '荣耀X7耳机', probability: 10, quantity: 10 },
    { name: '华为鼠标', probability: 24, quantity: 24 },
    { name: '无线充', probability: 5, quantity: 5 },
    { name: '80W充电器', probability: 20, quantity: 20 },
    { name: '安慰奖', probability: 41, quantity: Infinity }
];

function updatePrizeList() {
    const prizeList = document.getElementById('prizeList');
    prizeList.innerHTML = '';
    prizes.forEach(prize => {
        const listItem = document.createElement('li');
        listItem.textContent = `${prize.name}: ${prize.quantity}个`;
        prizeList.appendChild(listItem);
    });
}

document.getElementById('drawButton').addEventListener('click', function() {
    const random = Math.random() * 100;
    let cumulativeProbability = 0;
    let result = '安慰奖';

    for (let prize of prizes) {
        cumulativeProbability += prize.probability;
        if (random < cumulativeProbability && prize.quantity > 0) {
            result = prize.name;
            prize.quantity--;
            break;
        }
    }

    document.getElementById('result').innerText = `恭喜你，获得：${result}`;
    updatePrizeList();
});

updatePrizeList();
