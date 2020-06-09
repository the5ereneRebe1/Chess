const board = document.getElementById("board");
let boardCells = Array(8);
let startCell = Array(2);

let cells=[
    ['br','bn','bb','bq','bk','bb','bn','br'],
    ['bp','bp','bp','bp','bp','bp','bp','bp'],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    ['wp','wp','wp','wp','wp','wp','wp','wp'],
    ['wr','wn','wb','wq','wk','wb','wn','wr']
]
let turn ;

function createBoard(){
const fragment = new DocumentFragment();
let counter = 1,idcounter = 1;
for(let i=0;i<8;i++){
    const row = document.createElement('div');
    row.setAttribute('class','row');
    for(let j=0;j<8;j++){
        let column = document.createElement('div');
        column.setAttribute('class','tile');
        column.setAttribute('id',i+' '+j);
       
        if(cells[i][j]){
            let image  = document.createElement('img');
            image.src="/assets/"+cells[i][j]+".svg";
            image.id=i+' '+j+'-'+cells[i][j];
            image.draggable = "true";
            image.addEventListener("dragstart",drag,false);
            column.appendChild(image);
        }else{
            column.addEventListener("drop",dropPiece,false);
            column.addEventListener("dragover",dragOver,false);
        }
        if(counter%2==0)
            column.style.backgroundColor='#ffb74d';
        row.appendChild(column);
        counter++;
        idcounter++;
    }
    if(i%2==0)
        counter=0;
    else
        counter=1;
    fragment.appendChild(row);
}
board.appendChild(fragment);
}

function updateTurn(turn){
    const playing = document.getElementById("playing");
    const t = document.createTextNode(''+turn);
    playing.appendChild(t);
}
function startGame(){
    turn = "Player 1";
    init();
    
}
function createReferencetoBoardCells(){
    for(let i=0;i<8;i++){
        boardCells[i] = new Array(8);
        for(let j=0;j<8;j++)
            boardCells[i][j] = document.getElementById(i+' '+j);
    }
    console.log(boardCells);
}
function addAndRemoveDragEventListeners(startid,endid){
    const startcell = document.getElementById(startid);
    startcell.addEventListener("drop",dropPiece,false);
    startcell.addEventListener("dragover",dragOver,false);
    const endcell = document.getElementById(endid);
    endcell.removeEventListener("drop",dropPiece,false);
    endcell.removeEventListener("dragover",dragOver,false);


}
function init(){
createBoard();
createReferencetoBoardCells();
updateTurn(turn);
}

startGame();
function drag(event){
    console.log(event.target.id);
    event.dataTransfer.setData("text",event.target.id);
}
function dragOver(event){
    event.preventDefault();
}
function dropPiece(event){
    event.preventDefault();
    if(event.target.className = "tile"){
        
        let data = event.dataTransfer.getData("text");
        console.log(event.target.id+"  "+data);
        let piece = document.getElementById(data);
        //Set the id of the image with the new coordinates
        const sourceId = data.substring(0,data.search("-"));
        console.log(sourceId);
        piece.setAttribute('id',event.target.id+data.substring(data.length-3,data.length))
        event.target.appendChild(piece);
        addAndRemoveDragEventListeners(sourceId,event.target.id);
    }
}
console.log(cells);