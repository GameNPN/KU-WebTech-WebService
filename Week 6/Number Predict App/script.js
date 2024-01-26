document.addEventListener("DOMContentLoaded", () => {
  let machineNumber = Math.ceil(Math.random() * 21);
  let score = 10;
  let higtscore = 0;

  // console.log(document.querySelector('.message').textContent);
  // document.querySelector('.message').textContent = "ว๊าาา!!! แพ้อีกละ"
  // document.querySelector('.guess').value = 15;
  // console.log(document.querySelector('.guess').value);
  console.log(`machineNumber is  ${machineNumber}`);
  const resettDiv = document.getElementById("reset");

  document.querySelector(".btn-check").addEventListener("click", () => {
    userNumber = document.querySelector(".guess").value;
    // console.log(document.querySelector(".guess").value);
    if (userNumber == machineNumber) {
      document.querySelector(".secret").textContent = machineNumber;
      document.querySelector(".message").textContent = "เย้ !!! ชนะแล้วโว้ยยย";
      if (document.querySelector(".highscore").textContent < score) {
        document.querySelector(".highscore").textContent = score;
      }
    } else {
      if (score != 0) {
        score--;
        document.querySelector(".score").textContent = score;
        if (userNumber < machineNumber) {
          document.querySelector(".message").textContent = "น้อยไปป่าวน้อง";
        } else if (userNumber > machineNumber) {
          document.querySelector(".message").textContent = "มากไปครับน้อง";
        }
      } else {
        document.querySelector(".message").textContent = "กด Reset เถอะ ไหว้ละ";
      }
    }
  });
  document.querySelector(".btn-Reset").addEventListener("click", () => {
    machineNumber = Math.ceil(Math.random() * 21);
        score = 10;
        console.log(`machineNumber is  ${machineNumber}`);
        document.querySelector(".secret").textContent = "?";
        document.querySelector(".message").textContent = "มา! เอาใหม่ครับน้อง";
        document.querySelector(".score").textContent = score;
    }); 
});
