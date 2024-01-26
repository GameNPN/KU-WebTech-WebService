document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const mytable = document.getElementById("mytable");
    const button = document.createElement("button");
    const form = document.getElementById("myform");
  
    button.textContent = "Click Me";
    button.id = "myButton";
    container.appendChild(button);
  
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const formdata = new FormData(form);
      const myRow = mytable.insertRow();
      const cell = myRow.insertCell(0);
      const cell2 = myRow.insertCell(1);
  
      cell.textContent = formdata.get("name");
      cell2.textContent = formdata.get("age");
  
      form.reset();
    });
  });
  