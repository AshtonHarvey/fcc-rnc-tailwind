//WORK IN PROGRESS!
let output = document.getElementById("output");
let input = document.getElementById("input");
let submitButton = document.getElementById("submit");
let romanNumerals = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];
let arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let quotient;
let remainder;
let romanOutput = "";

input.addEventListener("keypress", function (event) {
  console.log(event.key);
  if (event.key === "Enter") {
    Convert();
  }
});

submitButton.onclick = function () {
  Convert();
};

function Init() {
  quotient = 0;
  remainder = 0;
  romanOutput = "";
}

function Convert(e) {
  Init();
  let answer = ConvertToRoman(Math.floor(input.value));
  output.innerHTML = answer;
}

function ConvertToRoman(number, loop = 0) {
  quotient = number / arabicNumerals[loop];
  remainder = number % arabicNumerals[loop];
  //find out how many times the arabic number goes into the input
  if (quotient > 0) {
    //for loop because number of symbols = quotient?
    for (let i = 0; i < Math.floor(quotient); i++) {
      romanOutput += romanNumerals[loop];
    }
    //if there is a remainder continue converting
    if (remainder > 0) {
      ConvertToRoman(remainder, loop < 12 ? ++loop : 12);
    }
  }
  return romanOutput;
}
