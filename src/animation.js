const content = document.querySelector(".sorting-content");

function generateColumns(num = 15) {
  for (let i = 0; i < num; i += 1) {
    const value = Math.floor(Math.random() * 100);

    const column = document.createElement("div");
    column.classList.add("column");
    column.style.height = `${value * 2}px`;
    column.style.transform = `translateX(${i * 30}px)`;

    const columnLabel = document.createElement("label");
    columnLabel.classList.add("column__id");
    columnLabel.innerHTML = value;

    column.appendChild(columnLabel);
    content.appendChild(column);
  }
}

function swap(el1, el2) {
  return new Promise(resolve => {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("transform");
    const transform2 = style2.getPropertyValue("transform");

    el1.style.transform = transform2;
    el2.style.transform = transform1;

    window.requestAnimationFrame(function() {
      setTimeout(() => {
        content.insertBefore(el2, el1);
        resolve();
      }, 300);
    });
  });
}

async function bubbleSort(delay = 300) {
  let columns = document.querySelectorAll(".column");
  for (let i = 0; i < columns.length - 1; i += 1) {
    for (let j = 0; j < columns.length - i - 1; j += 1) {
      columns[j].style.backgroundColor = "#e82727";
      columns[j + 1].style.backgroundColor = "#e82727";

      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      const value1 = Number(columns[j].childNodes[0].innerHTML);
      const value2 = Number(columns[j + 1].childNodes[0].innerHTML);

      if (value1 > value2) {
        await swap(columns[j], columns[j + 1]);
        columns = document.querySelectorAll(".column");
      }

      columns[j].style.backgroundColor = "#2ba4ff";
      columns[j + 1].style.backgroundColor = "#2ba4ff";
    }

    columns[columns.length - i - 1].style.backgroundColor = "#13ce3c";
  }
}

generateColumns();
bubbleSort();
