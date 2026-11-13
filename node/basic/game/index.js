import {game} from './lib.js'

let count = 0
process.stdin.on('data',(e)=>{       // 持续监听进程的输入
    const playerAction = e.toString().trim()
    const res = game(playerAction)
    if(res == 1){
        count++   
    }else{
        count = 0
    }
    if(count >= 3){
        console.log('不玩了')
        process.exit()
    }
})