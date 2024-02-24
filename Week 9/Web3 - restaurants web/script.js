const Menu = [
  {
    id: 0,
    img: "https://www.allrecipes.com/thmb/iXKYAl17eIEnvhLtb4WxM7wKqTc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg",
    name: "Pizza",
    description:
      "Indulge in a slice of heaven with our mouthwatering pizza! Featuring a crispy crust topped with savory tomato sauce, gooey melted cheese, and your choice of delectable toppings, each bite is a flavor-packed delight. Perfect for any occasion, our pizza is sure to satisfy your cravings and leave you craving more.",
    price: 20,
  },
  {
    id: 1,
    img: "http://educook.vn/images/Humberger-ngon-nh%C6%B0-qu%C3%A1n.jpg",
    name: "Hamburger",
    description:
      "Savor the classic American taste with our juicy hamburger! A succulent beef patty, grilled to perfection, nestled between soft, toasted buns. Topped with crisp lettuce, ripe tomatoes, and tangy pickles, each bite is a symphony of flavors and textures. Whether you're craving a quick bite or a hearty meal, our hamburger is a timeless favorite that never disappoints.",
    price: 15,
  },
  {
    id: 2,
    img: "https://www.mashed.com/img/gallery/the-unexpected-ingredient-that-can-take-your-fried-chicken-to-the-next-level/intro-1652817093.webp",
    name: "Fried Chicken",
    description:
      "Treat yourself to the ultimate comfort food experience with our crispy fried chicken! Tender, succulent chicken pieces, coated in a seasoned batter and fried to a golden perfection. With each bite, you'll encounter a satisfying crunch followed by juicy, flavorful meat. Whether enjoyed on its own or paired with your favorite sides, our fried chicken is sure to satisfy your cravings and leave you longing for more.",
    price: 12,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // localStorage.clear()
  const ClearBtn = document.querySelector('.menu-btn2');
  const manulist = document.querySelector(".menulist");
  const totalPriceContainer = document.querySelector(".total-price");
  for (let i = 0; i < Menu.length; i++) {
    getManu(i);
  }
  ClearBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    clearData();
  })
  function getManu(id) {
    const menuItem = Menu[id];
    const html = `
      <div class="manu">
        <img
          class="manu-img"
          src="${menuItem.img}"
          alt="${menuItem.name}"
        />
        <div class="menu_data">
          <h1 class="menu-name">${menuItem.name}</h1>
          <p class="menu-discription">${menuItem.description}</p>
          <div class="price-buy">
            <h2>$${menuItem.price}</h2>
            <button type="button" class="menu-btn" data-id="${menuItem.id}">BUY</button>
          </div>
        </div>
      </div>
      `;
    manulist.insertAdjacentHTML("beforeend", html);
  }

  const buyButtons = document.querySelectorAll(".menu-btn");
  buyButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemId = parseInt(event.target.dataset.id);
      const selectedItem = Menu.find((item) => item.id === itemId);
      let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      cartItems.push(selectedItem);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      alert(`"${selectedItem.name}" added to cart!`);
      loadData(); // เรียกใช้งานฟังก์ชัน loadData เพื่อโหลดข้อมูลใหม่และแสดงในหน้าเว็บ
    });
  });

  // ฟังก์ชันสำหรับโหลดข้อมูลจาก LocalStorage และแสดงในหน้าเว็บ
  function loadData() {
    calculateTotal();
    const container = document.querySelector(".receipt"); // เปลี่ยนจาก getElementById เป็น querySelector
    container.innerHTML = "";

    // ดึงข้อมูลจาก LocalStorage
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // แสดงข้อมูลของเมนูที่เลือกในตะกร้าเป็นการ์ด
    cartItems.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("menu-card");

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.name;
      div.appendChild(img);

      const menuDetails = document.createElement("div");
      menuDetails.classList.add("menu-details");

      const name = document.createElement("h3");
      name.textContent = item.name;
      menuDetails.appendChild(name);

      const description = document.createElement("p");
      description.textContent = item.description;
      menuDetails.appendChild(description);

      const price = document.createElement("p");
      price.textContent = `$${item.price}`;
      menuDetails.appendChild(price);

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        // ลบรายการที่ถูกคลิกออกจากตะกร้า
        const index = cartItems.indexOf(item);
        if (index !== -1) {
          cartItems.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(cartItems));
          loadData(); // โหลดข้อมูลใหม่หลังจากลบรายการ
          calculateTotal();
        }
      });
      menuDetails.appendChild(removeButton);

      div.appendChild(menuDetails);
      container.appendChild(div);
    });
  }
  // ฟังก์ชันสำหรับคำนวณยอดรวมเงิน
  function calculateTotal() {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    totalPriceContainer.textContent = `$${totalPrice}`;
  }
  function clearData() {
    localStorage.clear();
    loadData();
    calculateTotal();
    alert("All Menu cleared successfully");
  }

  loadData(); // โหลดข้อมูลตะกร้าเมื่อหน้าเว็บโหลด
  calculateTotal(); // คำนวณยอดรวมเงินเมื่อหน้าเว็บโหลด
});
