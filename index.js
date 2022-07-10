const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const passwordOne = document.getElementById("password--value__one");
const passwordTwo = document.getElementById("password--value__two");

const userLength = document.getElementById("length");

//function to copy on click
function copyOnClick(password) {
  password.addEventListener("copy", (e) => {
    e.preventDefault();
    if (e.clipboardData) {
      e.clipboardData.setData("text/plain", password.textContent);
      console.log(e.clipboardData.getData("text"));
    }
  });
  document.execCommand("copy");
  showSnackBar();
}

//to get random characters from characters array
function generatePassword() {
  let firstPassword = "";
  let secondPassword = "";
  for (let i = 0; i < 15; i++) {
    firstPassword += characters[Math.floor(Math.random() * characters.length)];
    secondPassword += characters[Math.floor(Math.random() * characters.length)];
  }

  passwordOne.textContent = firstPassword;
  passwordTwo.textContent = secondPassword;
}

function generatePasswordOnUserSelect() {
  let firstPassword = "";
  let secondPassword = "";
  for (let i = 0; i < userLength.value; i++) {
    firstPassword += characters[Math.floor(Math.random() * characters.length)];
    secondPassword += characters[Math.floor(Math.random() * characters.length)];
  }
  passwordOne.textContent = firstPassword;
  passwordTwo.textContent = secondPassword;
}

function showSnackBar() {
  const sb = document.getElementById("snackbar");
  sb.className = "show";
  setTimeout(() => {
    sb.className = sb.className.replace("show", "");
  }, 3000);
}
