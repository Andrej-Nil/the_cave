const canvas = document.querySelector("#gameArea");

const ctx = canvas.getContext("2d");


canvas.width = 500;
canvas.height = 480;

const TILE = 24;

const viewMap = [
 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1],
 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

const moveMap = [
 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1],
 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]

const player = {
    x: 2,
    y: 2,
    color: "#ffcc44"
}

function drawMap() {
    for(let y = 0; y< viewMap.length; y++){
        for (let x = 0; x < viewMap[y].length; x++){
            ctx.fillStyle = viewMap[y][x] === 1
            ? "#555"
            : "#477d43";
            
            ctx.fillRect(
                x * TILE,
                y * TILE,
                TILE,
                TILE
            );

            ctx.strokeStyle = "#ffffff15";
            ctx.strokeRect(
                x * TILE,
                y * TILE,
                TILE,
                TILE
            );
        }
    }
}

function drawPlayer(){
    ctx.fillStyle = player.color;

    ctx.fillRect(
        player.x * TILE + 5,
        player.y * TILE + 5,
        TILE - 10,
        TILE - 10
    )
}

function movePlayer(dx, dy){
    const newX = player.x + dx;
    const newY = player.y + dy;

    if(moveMap[newY] && moveMap[newY][newX] === 0){
        player.x = newX;
        player.y = newY
    }

    draw();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMap();
    drawPlayer();
}

document.addEventListener("keydown", (e) => {
    switch (e.key.toLowerCase()){
        case "w":
        case "arrowup": 
            movePlayer(0, -1);
            break;

        case "s":
        case "arrowdown": 
            movePlayer(0, 1);
            break;


        case "a":
        case "arrowleft": 
            movePlayer(-1, 0);
            break;

        case "d":
        case "arrowright": 
            movePlayer(1, 0);
            break;

    }
});

draw();

