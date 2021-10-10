//write an algorithm that read a sentence,which ends with a point,character by character and to determine:
//The length of the sentence (the number of characters).

let str = new String( 'I am a super woman.' );
let res = ("str.length is:" + str.length);
console.log(res)

//write an algorithm that read a sentence,which ends with a point,character by character and to determine:
//The number of words in the sentence (assuming that the words are separated by a single space).

function WordCount(str) { 
    return str.split(" ").length;
}

console.log(WordCount("hello gomycoder, I'm new here"));

//write an algorithm that read a sentence,which ends with a point,character by character and to determine:
//The number of vowels in the sentence.

function getVowels(str) {
    var vowelsCount = 0;

    //turn the input into a string
    var string = str.toString();

    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {

    //if a vowel, add to vowel count
    if (string.charAt(i) == "a"
    string.charAt(i) == "e"  
    string.charAt(i) == "i"  
    string.charAt(i) == "o"  
    string.charAt(i) == "u") {
        vowelsCount += 1;
    }
    }
    return vowelsCount;
}
console.log(getVowels('consolidated'))
