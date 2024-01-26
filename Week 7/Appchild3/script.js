document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myform");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirm = document.getElementById("Confirmpsw");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkPassword(password, confirm);
    checkUsername(6, 10);
  });

  function checkPassword(password, confirm) {
    const formcontrol = confirm.parentElement;
    const small = formcontrol.querySelector("small");

    if (password.value !== confirm.value) {
      showErrorMessage("รหัสผ่านไม่ถูกต้อง", confirm);
      small.style.visibility = "visible";
      formcontrol.classList.add("error");
      formcontrol.classList.remove("success");
    } else {
      small.style.visibility = "hidden";
      formcontrol.classList.remove("error");
      formcontrol.classList.add("success");
    }
  }

  function checkUsername(min, max) {
    const formcontrol = document.getElementById("username").parentElement;
    const small = formcontrol.querySelector("small");

    if (username.value.length <= min) {
      showErrorMessage(`ชื่อผู้ใช้ต้องมีความยาวระหว่าง ${min} ถึง ${max} ตัวอักษร`, username);
      formcontrol.classList.add("error");
      formcontrol.classList.remove("success");
    } else {
      small.style.visibility = "hidden";
      formcontrol.classList.remove("error");
      formcontrol.classList.add("success");
    }
  }

  function showErrorMessage(message, input) {
    const formcontrol = input.parentElement;
    formcontrol.classList.add("error");
    const small = formcontrol.querySelector("small");
    small.innerText = message;
    small.style.visibility = "visible";
  }
});
