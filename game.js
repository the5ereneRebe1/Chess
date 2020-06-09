import Board from './board.js';
export default class Game{
    
    constructor(){
        this.state =[
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null]
        ]
        this.board = new Board(this.state);
    }
    setPlayers(player1,player2){
        this.firstplayer = player1;
        this.secondplayer = player2;
        if(this.firstplayer.color == 'white')
            this.state=[
                ['br','bn','bb','bq','bk','bb','bn','br'],
                ['bp','bp','bp','bp','bp','bp','bp','bp'],
                [null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null],
                ['wp','wp','wp','wp','wp','wp','wp','wp'],
                ['wr','wn','wb','wq','wk','wb','wn','wr']
            ];
        else    
            this.state=[
                ['wp','wp','wp','wp','wp','wp','wp','wp'],
                ['wr','wn','wb','wq','wk','wb','wn','wr'],
                [null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null,null],
                ['bp','bp','bp','bp','bp','bp','bp','bp'],
                ['br','bn','bb','bq','bk','bb','bn','br']
            ];
        this.board.addPlayersOnBoard(this.state);
    }
    startGame(){

    }
}