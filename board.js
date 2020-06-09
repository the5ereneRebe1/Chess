export default class Board{

    constructor(state){
        this.board = document.getElementById("board");
        this.cells = state;
        this.drawBoard();
    }

    drawBoard(){
        const fragment = new DocumentFragment();
        let counter = 1;
        for(let i=0;i<8;i++){
        const row = document.createElement('div');
        row.setAttribute('class','row');
        for(let j=0;j<8;j++){
            let tile = document.createElement('div');
            tile.setAttribute('class','tile');
            tile.setAttribute('id',i+' '+j);
            if(counter%2==0)
                tile.style.backgroundColor='#ffb74d';
            row.appendChild(tile);
            counter++;
        }
        if(i%2==0)
            counter=0;
        else
            counter=1;
        fragment.appendChild(row);
    }
    board.appendChild(fragment);
    }

    addPlayersOnBoard(state){
        this.cells = state;
        for(let i=0;i<8;i++){
            for(let j=0;j<8;j++){
                const tile = document.getElementById(i+' '+j);
                if(this.cells[i][j]){
                    let image  = document.createElement('img');
                    image.src="/assets/"+this.cells[i][j]+".svg";
                    image.id=i+' '+j+'-'+this.cells[i][j];
                    image.draggable = "true";
                    tile.appendChild(image);
                }
            }
        }
    }


}