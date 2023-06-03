let textArea = document.querySelector(".counter .words");
let enterBtn = document.querySelector(".counter .btn");
let wordCount = document.querySelector(
  ".counter .total span"
);

function totalNumber() {
  let words = textArea.value;
  let wordsTrimmed = words.replace(/\s+/g, " ").trim();
  let splitWords = wordsTrimmed.split(" ");
  let numberOfWords = splitWords.length;
  if (splitWords[0] == "") {
    numberOfWords = 0;
  }
 wordCount.innerHTML = numberOfWords;
}

enterBtn.addEventListener("click", totalNumber);