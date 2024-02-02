const words = [
  "apple",
  "banana",
  "orange",
  "mango",
  "strawberry",
  "grape",
  "pineapple",
  "blueberry",
  "raspberry",
  "blackberry",
  "kiwi",
  "watermelon",
  "cantaloupe",
  "honeydew",
  "papaya",
  "guava",
  "lychee",
  "dragonfruit",
  "passionfruit",
  "grapefruit",
  "lime",
  "lemon",
  "cherry",
  "peach",
  "nectarine",
  "apricot",
  "plum",
  "pomegranate",
  "fig",
  "date",
  "persimmon",
  "tangerine",
  "clementine",
  "kumquat",
  "durian",
  "jackfruit",
  "starfruit",
  "avocado",
  "coconut",
  "cranberry",
  "currant",
  "gooseberry",
  "elderberry",
  "quince",
  "pear",
  "acai",
  "sapodilla",
  "soursop",
  "mulberry",
  "boysenberry",
  "loganberry",
  "jambolan",
  "salak",
  "rambutan",
  "longan",
  "pomelo",
];

document.addEventListener("DOMContentLoaded", () => {
  const letters = document.getElementById("letters");
  const word_show = document.getElementById("word");
  const show_point = document.getElementById("point");
  // config point
  let point = 0;
  let max_point = 0;
  // random word
  const word_rand = words[Math.floor(Math.random() * words.length)];
  console.log(word_rand);
  // const answer = repeat("_", word_rand.length);
  answer = "_".repeat(word_rand.length);
  // show point
  max_point = answer.length * 2;
  show_point.innerHTML = point;
  word.innerHTML = answer;
  maxpoint.innerHTML = max_point;

  console.log(answer);

  // add button to letters A-Z
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < alphabet.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerHTML = alphabet[i];
    // add event to call functon
    btn.addEventListener("click", () => {
      if (!btn.disabled) {
        // Check if button is not disabled
        point += 1;
        show_point.innerHTML = point;
        const isCorrect = checkWord(alphabet[i]);

        if (isCorrect) {
          btn.disabled = true; // Disable the button if the guess is correct
        } else {
          btn.style.display = "none"; // Hide the button if the guess is incorrect
        }

        if (point == max_point) {
          document.getElementById("message").innerHTML =
            "Game over! The word was " + word_rand;
          document.getElementById("playAgain").style.display = "block";
          disableAllButton();
        }
      }
    });
    letters.appendChild(btn);
  }

  // function check word
  function checkWord(alpha) {
    const word_split_list = word_rand.split("");
    console.log(word_split_list);
    console.log(alpha.toLowerCase());

    if (word_split_list.includes(alpha.toLowerCase())) {
      // List answer index
      indexList = [];
      for (let i = 0; i < word_split_list.length; i++) {
        if (word_split_list[i] == alpha.toLowerCase()) {
          indexList.push(i);
        }
      }

      // replace answer
      for (let i = 0; i < indexList.length; i++) {
        answer = answer.split("");
        answer[indexList[i]] = alpha.toLowerCase();
        answer = answer.join("");
      }

      // check win
      checkWin();

      word_show.innerHTML = answer;
      return true; // Return true if the guess is correct
    } else {
      console.log("false");
      return false; // Return false if the guess is incorrect
    }
  }

  function checkWin() {
    if (point == max_point) {
      document.getElementById("message").innerHTML =
        "Game over! The word was " + word_rand;
      document.getElementById("playAgain").style.display = "block";
      disableAllButton();
    } else if (answer == word_rand) {
      document.getElementById("message").innerHTML =
        "Congratulations! You Win!";
      document.getElementById("playAgain").style.display = "block";
    }
  }

  function disableAllButton() {
    const btn = document.getElementsByClassName("btn");
    for (let i = 0; i < btn.length; i++) {
      btn[i].disabled = true;
    }
  }

  document.getElementById("playAgain").addEventListener("click", () => {
    window.location.reload();
  });
});
