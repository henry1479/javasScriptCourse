
//размешает  сильные фигуры по клеткам
// принимет ряд фигур и цвет фигур
function getNobles(row, color='') {
    // получем ряд
    let rowNoble = document.querySelectorAll('.row')[row-1];
    // массив с фигурами
    const nobles = ['rook','knight','bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
    // обход ряда по клеткам
    let i = 0;
    for (let item of rowNoble.children) {
        // создаем параграф
        let noble = document.createElement('p');
        // в клетку добавляем соответсвуюшую фигуру
        noble.innerText = nobles[i]; 
        noble.style.textAlign = 'center';
        // добавляем цвет фигуры, если есть
        if (color === 'white') {
            noble.style.color = 'grey';
        }
        item.appendChild(noble);
        i = i + 1; 
    }
}

getNobles(8, 'white');
getNobles(1);

//размешает пешки по клеткам
// принимет ряд фигур и цвет фигур

function getPawns (row, color='') {
    // получаем ряд
    let rowSoldier = document.querySelectorAll('.row')[row-1]; 
    // обход ряда по клеткам
    for(let item of rowSoldier.children) {
        // создаем параграф
        let soldier = document.createElement('p');
        // добавляем пешку
        soldier.innerText = 'pawn';
        soldier.style.textAlign = 'center';
        // добавляем цвет, если есть
        if (color === 'white') {
            soldier.style.color = 'grey';
        }
        item.appendChild(soldier);
    }
}

getPawns(2);
getPawns(7, 'white');





