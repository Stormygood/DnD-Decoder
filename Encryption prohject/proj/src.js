import { decode, shiftFour } from '../Lib/func_lib.js'



const decode_V1 = function (msg) {
    const msgArr = []
    const wrdsArr = msg.split(' ')

    for (const word of wrdsArr) {
        let codeArr = word.split('.')
        let wordArr = []
        codeArr.forEach(code => wordArr.push((shiftFour(decode(code)))))
        const wordToPush = wordArr.join('')
        msgArr.push(wordToPush)
        wordArr = []
    }

    const finalMessage = msgArr.join(' ')

    console.log(finalMessage);




}

//Exmaple
//decode_V1('11.100 21.101.33.100 120.1.3.11.22 100.10.1 1.110.30.20.23.32.113.100.11.23.22 23.2 100.10.1 100.10.11.32.122 122.11.21.1.22.33.11.23.22 30.10.23.100.23.22 100.32.113.121.1.33 22.1.3.113.100.11.102.1 10.23.103 121.101.32.11.23.101.33')
