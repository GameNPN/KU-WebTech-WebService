document.addEventListener("DOMContentLoaded", () => {
    let username = "admin";
    let password = "1234";
    const username_input = document.querySelector(".login__input-user");
    const password_input = document.querySelector(".login__input-psw");
    const welcome_message = document.querySelector(".welcome");
  
    document.querySelector(".login-btn").addEventListener("click", () => {
      if (username_input.value.toLowerCase() === username && password_input.value === password) {
        welcome_message.textContent = "ยินดีต้อนรับ Admin";
      } else if (username_input.value === "" && password_input.value === "") {
        welcome_message.textContent = "น้องๆ ลืมกรอกชื่อและรหัสผ่านอะไรนะ กรอกก่อน";
      } else if (username_input.value === "") {
        welcome_message.textContent = "น้องๆ ลืมกรอกชื่อเอ็งอะ กรอกก่อน";
      } else if (password_input.value === "") {
        welcome_message.textContent = "น้องลืมกรอกรหัสอะ กรอกก่อนสิ";
      } else {
        welcome_message.textContent = "ชื่อหรือรหัสผ่านผิดนะคะ กรอกใหม่ดิ้";
      }
    });
  });