const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    result = [];
    letter = '';
    symbols = ''

    for (let i = 0; i < expr.length; i += 10){
        letter = expr.slice(i, i + 10)
        if (letter == '**********'){
            result.push(' ')
        }
        else{
            for(let j = 0; j < letter.length;j +=2){
                switch(letter.slice(j, j + 2)){
                    case '10': symbols += '.';
                    break;
                    case '11': symbols+= '-';
                    break;
                }
            }
            result.push(MORSE_TABLE[symbols])
            symbols = ""
        }

    }
    return result.join('')
}


module.exports = {
    decode
}