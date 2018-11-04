import { data } from './data';
import { doXOR } from './functions';

const letters_freq = {
    'a': 89, 'i': 82, 'o': 78, 'e': 77, 'z': 56, 'n': 55, 'r': 47, 'w': 47, 's': 43, 't': 40, 'c': 40, 'y': 38,
    'k': 35, 'd': 33, 'p': 31, 'm': 28, 'u': 25, 'j': 23, 'l': 21, 'b': 15, 'g': 14, 'h': 11, 'f': 3, 'q': 1,
    'v': 1, 'x': 1, ' ': 100, ',': 10, '.': 10, '-': 10, '"': 10, '!': 10, '?': 10, ':': 10, ';': 10, '(': 10,
    ')': 10
}

const chars: String = 'abcdefghijklmnoprstuwyzABCDEFGHIJKLMNOPRSTUWYZ ';


for (let i = 65; i < 91; i++) {
    letters_freq[String.fromCharCode(i)] = 10
}

for (let i = 48; i < 58; i++) {
    letters_freq[String.fromCharCode(i)] = 10
}

var cryptograms = new Array()

var hashes = new Array(data.length);
for (let i = 0; i < hashes.length; i++) {
    hashes[i] = new Array();
    hashes[i] = data[i].split(' ')
}

for (let i = 0; i < hashes.length; i++) {
    cryptograms[i] = new Array(hashes[i].length);
    for (let j = 0; j < hashes[i].length; j++) {
        cryptograms[i][j] = String.fromCharCode(parseInt(hashes[i][j], 2));
    }
}

function getChar(index: String): number {
    if (index != undefined)
        return index.charCodeAt(0);
    else
        return '*'.charCodeAt(0);
}

console.log(find_key());

function find_key() {
    let key = [];
    let longest = 0;

    cryptograms.forEach(element => {
        if (element.length > longest)
            longest = element.length;
    });

    for (let i = 0; i < longest; i++) {
        let possible_key = new Array();
        let matching_cryptograms = []

        cryptograms.forEach(element => {
            if (i < element.length) {
                matching_cryptograms.push(element);
            }
        });

        matching_cryptograms.forEach(element => {
            for (const key in letters_freq) {
                let xor: number = getChar(element[i]) ^ key.charCodeAt(0);
                let freq: number = letters_freq[key];
                let tmp = { xor: xor, freq: freq }


                if (!possible_key.includes(tmp.xor))
                    possible_key[tmp.xor] = tmp.freq;
                else
                    possible_key[tmp.xor] = possible_key[tmp.xor] + letters_freq[key];
            }
        });

        possible_key.forEach(element => {
            element = parseInt(element);
        });

        key.push(find_best(i, possible_key));
        return key;
    }
}

function find_best(index, possible_key) {

    let best_possible = getChar(' ');
    let best_cntr = 0;
    let maching_cryptograms = new Array();

    cryptograms.forEach(element => {
        if (index < element.length)
            maching_cryptograms.push(element)
    });

    possible_key.forEach(key => {

        let cntr = 0;

        maching_cryptograms.forEach(element => {

            if (chars.indexOf(String.fromCharCode(index ^ key)) !== -1) {
                cntr++;
            }
        });

        if (cntr > best_cntr) {
            best_cntr = cntr;
            best_possible = key;
        }

        if (cntr >= cryptograms.length)
            return key;
    });

    return best_possible;
}

var key = [84, 86, 65, 189, 31, 192, 38, 132, 151, 7, 94, 236, 223, 3, 132, 146, 44, 69, 59, 0, 68, 162, 128, 68, 140, 137, 142, 101, 189, 120, 149, 251, 164, 7, 108, 193, 213, 247, 49, 72, 129, 113, 195, 228, 181, 6, 69, 49, 204, 75, 180, 174, 23,
    196, 32, 139, 72, 44, 71, 2, 183, 191, 124, 246, 151, 97, 132, 161, 25, 166, 217, 5, 37, 128, 62, 90, 69, 182, 125, 97, 71, 163, 96, 187, 189, 140, 146, 201, 225, 184, 165, 217, 103, 91, 31, 25, 45, 191, 144, 100, 92, 161, 185, 3, 48, 57,
    44, 16, 224, 18, 118, 218, 74, 250, 161, 243, 91, 118, 77, 79, 195, 103, 21, 71, 226, 127, 99, 159, 113, 216, 180, 219, 19, 234, 132, 110, 200, 73, 243, 19, 91, 191, 41, 205, 73, 128, 155, 129, 185, 116, 134, 242, 102, 122, 161, 96, 109, 72, 14, 79, 120, 53, 231, 157, 95, 130, 210, 153, 6, 218, 87, 184, 62, 177, 63, 157, 147, 197, 238, 95, 200, 198, 72, 241, 102, 228, 196, 85, 50, 132, 36, 119, 41, 107, 28, 43, 196, 116, 107, 226, 229, 15, 112, 34, 69, 178, 185, 66, 87, 220, 57, 38, 161, 64, 19, 151, 26, 77, 97, 189, 249, 232, 22, 192, 41, 30, 15, 61, 96, 240, 190, 143, 142, 187, 221, 177, 214, 133, 242, 160, 120, 174, 7, 36, 42, 89, 197, 112, 105, 6, 166, 83, 97, 102, 79, 212, 30, 95, 92, 88, 66, 28, 122, 207, 179, 15, 95, 159, 229, 49, 145, 67, 238, 25, 174, 210, 13, 209, 0, 166, 184, 150, 221, 84, 66, 155, 47, 44, 166, 33, 135, 77, 250, 171, 191, 27, 79, 224, 222, 53, 43, 46, 210, 120, 66, 64, 236, 23, 18, 62, 64, 90, 124, 235, 141, 143, 149, 23, 225, 62, 156, 51, 13, 178, 50, 3, 133, 235, 248, 20, 71, 33, 25, 38, 36, 165, 211, 114, 222, 165, 155, 26, 90, 11, 230, 154, 113, 76, 195, 220, 21, 144, 181, 177, 36, 141, 84, 198, 8, 193, 160, 224, 254, 209, 169, 193, 35, 38, 130, 225, 147, 243, 150, 68, 18, 77, 52, 208, 182, 63, 63, 105, 165, 119, 97, 251, 167, 41, 133, 39, 34, 127, 153, 140, 96, 104, 116, 226, 169, 133, 63, 114, 32, 90, 143, 39, 135, 61, 63, 18, 143, 204, 194, 57, 100, 107, 250, 153, 3, 204, 36,
    233, 251, 139, 230, 21, 247, 4, 139, 83, 155, 170, 237, 252, 252, 4, 143, 215, 225, 80, 112, 205, 63, 194, 0, 111, 87, 191, 165, 0, 186, 210, 137, 114, 85, 102, 221, 71, 155, 149, 143, 252, 250, 37, 37, 36, 183, 121, 6, 199, 241, 189, 233, 98, 147, 76, 123, 80, 191, 134, 57, 118, 29, 223, 57, 153, 169, 85, 231, 231, 255, 158, 241, 212, 36, 14, 189, 215, 144, 15, 113, 146, 199, 205, 159, 132, 106, 116, 206, 41, 18, 36, 53, 131, 23, 168, 12, 81, 200, 71, 26, 228, 72, 111, 175, 21, 94, 207, 107, 234, 10, 60, 115, 166, 78, 8, 59, 58, 238, 120, 241, 190, 72, 110, 49, 87, 58, 126, 171, 88, 155, 237, 202, 151, 127, 157, 35, 157, 12, 105, 230, 177, 191, 59, 137, 203, 43, 20, 76, 20, 105, 64, 245, 120, 56, 237, 76, 49, 75, 139, 236, 70, 215, 13, 234, 20, 46, 194, 145, 40, 119, 250, 9, 15]

cryptograms.forEach(element => {
    for (let i = 0; i < cryptograms.length; i++) {
        // console.log(key[i]);
        console.log(String.fromCharCode(parseInt(doXOR(getChar(element[i]).toString(), key[i].toString()))));
    }
});