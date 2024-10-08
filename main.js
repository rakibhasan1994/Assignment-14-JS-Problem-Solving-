// 1. Problem: "Alien Language Translator"
// Write a function that takes a sentence as input, where each word is written backward, and returns the sentence with words spelled correctly (forward).


function reverseWords(string){
let stringValue = string.split("").reverse().join("");
let finalString = stringValue.split(" ").reverse().join(" ");
return finalString;
}
console.log(reverseWords("olleH dlroW"));


// 2. Problem: "The Treasure Hunter’s Lost Numbers" 
// Write a function that takes an array of numbers where every second number is null (words not in correct order) and replace those null values with the average of the two surrounding numbers.


function replaceNullsWithAverages(arr) {
    for (let i = 1; i < arr.length - 1; i += 2) {
      if (arr[i] === null) {
        arr[i] = (arr[i - 1] + arr[i + 1]) / 2;
      }
    }
    return arr;
  }
  
  let numbers = [10, null, 20, null, 30];
  let result = replaceNullsWithAverages(numbers);
  console.log(result);


//   3. Problem: "Pirate’s Parrot’s Shopping List" (Arrays & Loops)
// Write a function that removes duplicate items from a shopping list (array of strings).

let array = ["rum", "gold", "parrot food", "rum", "gold", "map"];

let removeDuplicate = array.filter((item, index) => {
  return array.indexOf(item) === index;
});

console.log(removeDuplicate);

// 4. Problem: "Knight's Stairs to the Dragon" (Numbers & Loops)
// Write a function to count how many unique ways the knight can reach the top of the stairs by taking 1, 2, or 3 steps at a time.

// I dont understand this


// 5. Problem: "Chef's Salad Mix-Up" (Strings, Arrays & Loops)
// Write a function that takes a string where ingredients are concatenated together without commas and returns an array of individual ingredients by splitting the string after each word.


function veg(vegs){
  return vegs.split("");
};
console.log(veg("TomatoesOnionsLettuce"));


// 6. Problem: "The King's Gold Distribution" (Numbers & Loops)
// Write a function that takes the number of knights as input and returns the total number of gold coins needed to distribute in this pattern.


function totalCoins(knights) {

  return (knights * (knights + 1)) / 2;
}

const knights = 5;
console.log(totalCoins(knights));


// 7. Problem: "Dragon’s Age Puzzle" (Numbers & Conditions)
// Write a function that checks if a number is a perfect square. If it is, return the dragon’s age; otherwise, return "Try again!".


function age(dragonAge){
  if(dragonAge===40){
console.log("Dragon age is ",dragonAge);
  }else{
    console.log("Try again!");
  }
}

age(40);

// 8. Problem: "Magical Phrase Reverser" (Strings & Loops)
// Write a function that takes a phrase as input and returns the words in reverse order.


function reversew(word){
  let reverseThis = word.split(" ").reverse().join(" ");
  return reverseThis;
}
console.log(reversew("The dragon breathes fire"));


// 9. Problem: "Adventurer’s Inventory Merge" (Arrays & Loops)
// Write a function that takes two arrays of items and returns one array containing all unique items from both inventories.


let array1=["sword", "shield", "potion"];
let arry2=["potion", "ring", "shield"];
let concat=array1.concat(arry2);
let removeDuplicate2 = array1.filter((item, index) => {
  return array1.indexOf(item) === index;
});

console.log(removeDuplicate2);


// 10. Problem: "The Lost Map Fragments" (Arrays & Sorting)
// Write a function that takes an array of numbers representing map fragment IDs and returns the array sorted in ascending order, so the pirate can see the correct order of the map.


let number=[9, 3, 5, 7, 1];
number.sort();
console.log(number);