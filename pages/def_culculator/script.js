function readUserInput(question) {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    return new Promise((resolve, reject) => {
      readline.question(question, (answer) => {
        resolve(answer);
        readline.close();
      });
    });
  }

  (async function main() {
    const plv = await readUserInput('自キャラのレベルを入力してください。\n');
    const elv = await readUserInput('敵のレベルを入力してください。\n');
    const debuff = await readUserInput('敵への防御デバフの合計値で入力してください。(%)\n');
    edef = ( 200 + ( elv * 10 )) * ((100 - debuff) / 100);
    defmul = 1 - ( edef / ( edef + 200 + ( 10 * plv)));
    console.log(`\n敵の防御力 : ${edef}`);
    console.log(`防御係数 : ${defmul}`);
    let fin;
    while (fin !== "y") {
        fin = await readUserInput('\n終了しますか？(y/n)\n');
    }
  })();
  //nexe test.js --target windows-x64-14.15.3 --output hsr_def_calculator.exe
