import { data } from './data';
import { doXOR } from './functions';

// const chars: String = 'abcdefghijklmnoprstuwyzABCDEFGHIJKLMNOPRSTUWYZ ';
// const signs: String = chars + ' \"\':;()?!,.-0123456789';
let longestCode = 0;
let most_columns = 0

//------------------------------------------------------------------------------

var hashes = new Array(data.length);
for (let i = 0; i < hashes.length; i++) {
    hashes[i] = new Array();
    hashes[i] = data[i].split(' ')
}

//------------------------------------------------------------------------------

for (let i = 0; i < data.length; i++) {
    let tmp = data[i].split(' ').join('')
    let tmp_arr = data[i].split(' ')
    if (tmp.length > longestCode)
        longestCode = tmp.length;
    most_columns = tmp_arr.length;
}

var helper = new Array(data.length);
for (let i = 0; i < helper.length; i++) {
    helper[i] = new Array(most_columns);
    for (let j = 0; j < helper.length; j++) {
        helper[i][j] = 0;
    }
}

//------------------------------------------------------------------------------

let xor_results = []

for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
        let xor_list = doXOR(data[i], data[j]).split(' ');
        for (let x = 0; x < xor_list.length; x++) {
            // if (chars.indexOf(String.fromCharCode(parseInt(xor_list[x], 2))) !== -1) {
            //     xor_results.push({ 'id': i, 'chid': x, 'ch': (String.fromCharCode(parseInt(xor_list[x], 2))) })
            //     xor_results.push({ 'id': j, 'chid': x, 'ch': (String.fromCharCode(parseInt(xor_list[x], 2))) })
            // }
            if (xor_list[x][0] == '0' && xor_list[x][1] == '1') {
                // console.log(xor_list[x]);
                helper[i][x] += 1;
                helper[j][x] += 1;
            }
        }
    }
}

//------------------------------------------------------------------------------

var key_array = new Array(most_columns);
for (let i = 0; i < key_array.length; i++) {
    key_array[i] = new Array();
}

//------------------------------------------------------------------------------

for (let i = 0; i < helper.length; i++) {
    let max_num = 0;
    for (let j = 0; j < helper[i].length; j++) {
        if (max_num < helper[i][j]) {
            max_num = helper[i][j]
        }
    }
    for (let j = 0; j < helper[i].length; j++) {
        if (max_num === helper[i][j]) {
            key_array[i].push(hashes[i][j]);
        }
    }
}

//------------------------------------------------------------------------------

for (let i = 0; i < key_array.length; i++) {
    for (let j = 0; j < key_array[i].length; j++) {
        helper[i][j] = doXOR(helper[i][j], '00100000')
    }
}

console.log(hashes);
console.log(helper);
console.log(key_array);
// xor_results.forEach(element => {
//     console.log(element);
// });