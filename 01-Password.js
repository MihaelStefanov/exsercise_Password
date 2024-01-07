function solve(arr) {
    let password = arr.shift();
    let passReset = [];


    for (let command of arr) {
        if (command == 'Done') {
            break;
        }

        if (command == `TakeOdd`) {
           for (let i = 0; i < password.length; i++) {
            if (i % 2 != 0) {
                passReset += password[i];
            }
        }
        console.log(passReset);
        }

        if (command.includes(`Cut`)) {
            let tokens = command.split(` `);
            let startIdx = Number(tokens[1]);
            let remocvedChars = Number(tokens[2]);
            let endIdx = startIdx + remocvedChars;
            let firstStr = passReset.substring(0,startIdx);
            let secondStr = passReset.substring(endIdx, passReset.length);
           passReset = firstStr + secondStr;

           console.log(passReset);
        }

        if (command.includes(`Substitute`)) {
            let tokens = command.split(` `);
            let charForReplace = tokens[1];
            let replaceChar = tokens[2];

            if (passReset.includes(charForReplace)){
                while (passReset.includes(charForReplace)) {
                    passReset = passReset.replace(charForReplace, replaceChar);
                } 
                console.log(passReset);
            } else {
                console.log(`Nothing to replace!`);
            }

        }


    }
    console.log(`Your password is:`,passReset);

}

solve((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]));