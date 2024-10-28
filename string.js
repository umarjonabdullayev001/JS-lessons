console.log("Hello String :)");

//  String - 1
{
  const countAYLetters = (word) => {
    let countA = 0;
    let countY = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === "A") {
        countA++;
      }
      if (word[i] === "Y") {
        countY++;
      }
    }
    return "A " + countA + "\n" + "Y " + countY;
  };

  let text = "ABDEFGHIYYYYYYyyyAB";
  let result = countAYLetters(text);
  console.log(result);
}

//  String - 2
{
  function printWordsA() {
    let word = document.getElementById("inputTag").value;
    let wordArr = word.split(" ");
    let result = [];
    wordArr.forEach(function (element) {
      if (element.startsWith("A")) result.push(element);
    });
    document.getElementById("heading1").innerText = result.join("\n");
  }
}

// String - 3
{
  function printWordsEndNA() {
    let word = document.getElementById("inputTag").value;
    let wordArr = word.split(" ");
    let result = [];
    wordArr.forEach(function (element) {
      if (element.slice(-2) === "NA") result.push(element);
    });
    document.getElementById("heading1").innerText = result.join("\n");
  }
}

// String - 4
{
  function infoText() {
    let word = document.getElementById("inputTag").value;
    let wordArr = word.split(" ");
    let result = [];
    wordArr.forEach(function (element) {
      if (element.includes("Info") || element.includes("info"))
        result.push(element);
    });
    document.getElementById("heading1").innerText = result.join("\n");
  }
}

// String - 5
{
  function countVowels() {
    const vowels = "AaOoIiUuEe";
    let count = 0;
    let text = document.getElementById("inputTag").value;
    let wordArr = text.split("");
    let result = [];
    for (element of wordArr) {
      if (vowels.includes(element)) count++;
    }
    document.getElementById("heading2").innerText = count;
  }
}

// String - 6
{
  function reverseText() {
    let text = document.getElementById("inputTag").value;
    let textArr = text.split("");
    let result = textArr.reverse().join("");
    document.getElementById("heading2").innerHTML = result;
  }
}

// String - 7
{
  function wordLength() {
    let text = document.getElementById("inputTag").value;
    let textArr = text.split(" ");
    for (let i = 0; i < textArr.length; i++) {
      let result = textArr[i] + " " + textArr[i].length + "\n ";
      document.getElementById("heading1").innerText += result;
    }
  }
}
// String - 8
{
  function digitSum() {
    let sum = 0;
    let numbers = document.getElementById("inputTag").value;
    let numbersArr = numbers.split("").map(Number);
    for (let i = 0; i < numbersArr.length; i++) {
      sum += numbersArr[i];
    }

    document.getElementById("heading2").innerHTML = sum;
  }
}

//  String - 9
{
  function upperCaseWords() {
    let text = document.getElementById("inputTag").value;
    let words = text.split(" ");
    let result = "";
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].charAt(0) === words[i].charAt(0).toUpperCase()) {
        result += words[i] + " ";
        count++;
      }
    }
    document.getElementById("heading2").innerText =
      result.trim() + "\n" + count;
  }
}

//  String - 10
{
  function swapWords() {
    let text = document.getElementById("inputText").value;
    let numbers = document.getElementById("inputNumber").value;

    let words = text.split(" ");
    let indexes = numbers.split(" ");
    let index1, index2;
    index1 = indexes[0];
    index2 = indexes[1];
    let temp = words[index1 - 1];
    words[index1 - 1] = words[index2 - 1];
    words[index2 - 1] = temp;

    document.getElementById("heading2").innerText = words.join(" ");
  }
}

//  String - 11
{
  function replaceWithTATU() {
    let text = document.getElementById("inputText").value;
    let index = document.getElementById("inputNumber").value;
    let words = text.split(" ");
    words[index - 1] = "TATU";
    document.getElementById("heading2").innerText = words.join(" ");
  }
}

//  String - 12
{
  function oddEvenMultip() {
    let text = document.getElementById("inputText").value;
    let words = text.split(" ");
    let countOdd = 0,
      countEven = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].length % 2 == 0) {
        countEven++;
      }
      if (words[i].length % 2 == 1) {
        countOdd++;
      }
    }
    let result = countEven * countOdd;
    document.getElementById("heading2").innerText = result;
  }
}

//  String - 13
{
  function aTobCount() {
    let text = document.getElementById("inputText").value;
    let words = text.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      if (
        words[i].charAt(0) === "a" &&
        words[i].charAt(words[i].length - 1) === "b"
      )
        count++;
    }
    document.getElementById("heading2").innerText = count;
  }
}

//  String - 14
{
  function uppToLow() {
    let text = document.getElementById("inputText").value;
    let letters = text.split("");
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === letters[i].toUpperCase()) {
        letters[i] = letters[i].toLowerCase();
      } else {
        letters[i] = letters[i].toUpperCase();
      }
    }

    document.getElementById("heading2").innerText = letters.join("");
  }
}

//  String - 15
{
  function canFormWord() {
    let letters = document.getElementById("inputTag").value.split(" ");
    // template = " ASSALOM "  (2pcs "A" , 2pcs "S" , 1pc "L" , 1pc "O" , 1pc "M")
    let result = "";
    let countA = 0,
      countS = 0,
      countL = 0,
      countO = 0,
      countM = 0;
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === "A") {
        countA++;
      }
      if (letters[i] === "S") {
        countS++;
      }
      if (letters[i] === "L") {
        countL++;
      }
      if (letters[i] === "O") {
        countO++;
      }
      if (letters[i] === "M") {
        countM++;
      }
    }
    if (countA >= 2 && countS >= 2 && countL >= 1 && countO >= 1 && countM >= 1)
      result = "YES";
    else result = "NO";
    document.getElementById("heading2").innerText = result  ;
  }
}

//  String - 16
{
  function removeDollarSings() {
    let letters = document.getElementById("inputTag").value;
    let result = letters.replace(/\$/g, "").trim();
    document.getElementById("heading2").innerText = result;
  }
}

//  String - 17
{
  function printRange() {
    let text = document.getElementById("inputText").value.trim();
    let indexes = document.getElementById("inputNumber").value.trim().split(/\s+/g).map(Number);
    let result = text.slice(indexes[0] - 1, indexes[1]);
    let resultRange = "";
    if (indexes[0] > indexes[1]) {
      resultRange = result.split("").reverse().join("");
    }
    else resultRange = result;
    document.getElementById("heading2").innerText = resultRange;
  }
}
function reverseWord(word) {
  return word.split('').reverse().join('');
}

function hisobla() {
  let numbers = document.getElementById("inputTag").value;
  let numbersArr = numbers.split(" ").map(Number);
  let sum = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    sum += numbersArr[i];
  }
  document.getElementById("heading1").innerText = sum;
}
