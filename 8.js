//Check Anagram
let str1="listen"

let str2="silent"
 let newstr1=str1.toLowerCase().split("").sort().join("")
 let newstr2=str2.toLowerCase().split("").sort().join("")
 
 console.log(newstr1===newstr2);

 //DSA
 

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let map = new Map();

    // str1 ki frequency
    for (let ch of str1) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    // str2 se frequency kam karo
    for (let ch of str2) {
        if (!map.has(ch)) {
            return false;
        }

        map.set(ch, map.get(ch) - 1);
    }

    // Sabki frequency 0 honi chahiye
    for (let value of map.values()) {
        if (value !== 0) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram(str1, str2));

 