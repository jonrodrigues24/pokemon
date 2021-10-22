function createMonsterCell(data) {
    console.log(data);
    const monsterCell = document.createElement('div');
    monsterCell.classList.add("monster-cell");

    const paragraph = document.createElement('p');
    const node = document.createTextNode(data.name);

    const img = document.createElement('img');
    img.src = data.sprites.front_default;

    paragraph.appendChild(node);
    monsterCell.append(paragraph, img);

    const element = document.getElementById('monsters');
    element.appendChild(monsterCell)
}



function fetchData(){
    const rand = Math.floor(Math.random()*251);
    fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`)
        .then(response => response.json())
        .then(jsonMonster => createMonsterCell(jsonMonster));
}

fetchData()