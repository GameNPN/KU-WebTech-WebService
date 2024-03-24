// กำหนดตัวแปร editingIndex เพื่อใช้เก็บดัชนีของรายการที่กำลังแก้ไข โดยกำหนดค่าเริ่มต้นเป็น -1 หมายถึงไม่ได้มีการแก้ไข
let editingIndex = -1;

// ฟังก์ชัน saveData ใช้สำหรับบันทึกข้อมูลใหม่หรือแก้ไขข้อมูลที่มีอยู่แล้ว
function saveData() {
  // ดึงค่าจากฟอร์ม HTML และเก็บไว้ในตัวแปรใหม่
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const countSeat = document.getElementById("countSeat").value;
  const btn = document.getElementById("btn");
  // ดึงข้อมูลจาก Local Storage
  let infoSeats = localStorage.getItem("info_seat");
  // ถ้าไม่มีข้อมูลใน Local Storage กำหนดให้เป็น array เปล่า
  if (!infoSeats) {
    infoSeats = [];
  } else {
    // แปลงข้อมูลจาก string เป็น array
    infoSeats = JSON.parse(infoSeats);
  }


  // สร้าง object ของข้อมูลใหม่
  const newData = {
    name: name,
    date: date,
    time: time,
    countSeat: countSeat,
  };

  // ตรวจสอบการแก้ไขหรือเพิ่มข้อมูล
  if (editingIndex === -1) {
    // เพิ่มข้อมูลใหม่ลงใน array
    infoSeats.push(newData);
  } else {
    // แก้ไขข้อมูลที่มีอยู่แล้ว
    infoSeats[editingIndex] = newData;
    btn.textContent = "Book Now";
    // รีเซ็ตค่าของ editingIndex เป็น -1 เมื่อแก้ไขสำเร็จ
    editingIndex = -1;
  }

  // บันทึกข้อมูลลงใน Local Storage
  localStorage.setItem("info_seat", JSON.stringify(infoSeats));

  // รีเซ็ตค่าฟอร์ม HTML
  document.getElementById("name").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("countSeat").value = "";

  // โหลดข้อมูลใหม่และแสดงผล
  loadData();

  // แสดงแจ้งเตือนเมื่อบันทึกข้อมูลสำเร็จ
  alert("Data saved 🫡");
}

// ฟังก์ชัน loadData ใช้สำหรับโหลดข้อมูลจาก Local Storage และแสดงผลในหน้าเว็บไซต์
function loadData() {
  // เลือก element ที่เก็บข้อมูล
  const container = document.getElementById("data");
  container.innerHTML = "";

  // ดึงข้อมูลจาก Local Storage
  const infoSeats = JSON.parse(localStorage.getItem("info_seat") || "[]");

  // วนลูปเพื่อแสดงข้อมูลและปุ่มลบและปุ่มแก้ไข
  infoSeats.forEach((data, index) => {
    const div = document.createElement("div");
    div.classList.add("list");
    div.textContent = `Name: ${data.name}, Date: ${data.date}, Time: ${data.time}, Seat: ${data.countSeat}`;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("Edit");
    // เมื่อคลิกที่ปุ่มแก้ไข แสดงข้อมูลในฟอร์ม HTML และกำหนด editingIndex
    editButton.onclick = function () {
      btn.textContent = "Edit Data";
      document.getElementById("name").value = data.name;
      document.getElementById("date").value = data.date;
      document.getElementById("time").value = data.time;
      document.getElementById("countSeat").value = data.countSeat;
      editingIndex = index;
    };

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("Remove");
    // เมื่อคลิกที่ปุ่มลบ ลบข้อมูลและโหลดข้อมูลใหม่
    removeButton.onclick = function () {
      infoSeats.splice(index, 1);
      localStorage.setItem("info_seat", JSON.stringify(infoSeats));
      loadData();
    };

    
    // เพิ่มปุ่มลบและแก้ไขลงใน div
    div.appendChild(editButton);
    div.appendChild(removeButton);
    container.appendChild(div);
  });
}

// เมื่อหน้าเว็บไซต์โหลดเสร็จ ให้โหลดข้อมูลและแสดงผล
document.addEventListener("DOMContentLoaded", () => {
  loadData();
});
