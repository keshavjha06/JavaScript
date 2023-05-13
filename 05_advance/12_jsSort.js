function mySort(a, b) {
    if (a > b) {
        return 1
    } else if (b > a) {
        return -1
    } else {
        return 0
    }
}

function batmanGameOrder(a, b) {
    let batman = [
        "Arkham Origins",
        "Arkham Origins Blackgate",
        "Assault On Arkham",
        "Arkham Asylum",
        "Arkham City",
        "Arkham Knight",
    ];

    return batman.indexOf(a) - batman.indexOf(b);
}

let games = [
    "Arkham Knight",
    "Arkham Asylum",
    "Arkham Origins",
    "Arkham Origins Blackgate",
];

games.sort(batmanGameOrder);
console.log(games);

