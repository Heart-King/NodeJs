const readline = require('readline');

let blank = '                        ';
let blocks = '';
let bBank = false;
let step = 0;  
function progress(current, total) {
  let progress = 100 * current/total;
  progress = parseInt(progress);  
  let countBlock = parseInt(progress/4);
  
  if(countBlock>step) {
    if(!bBank) {            
      blocks += '=';
      blank = blank.substring(1);
      bBank = true;
      step = countBlock;            
    } else {
      bBank = false;
    }
  }
  if(progress<10) {
    progress = '0'+progress;
  }
  
  let out = '[' + blocks + '>' +blank +'] ' + progress.toString()+ '%';
  readline.clearLine(process.stdout);
  readline.cursorTo(process.stdout, 0)
  process.stdout.write(out ,'utf-8');   
}

module.exports.progress = progress;
