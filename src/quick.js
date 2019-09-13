window.addEventListener("load", () => {
  const arr = [5, 95, 23, 42, 15, 56, 27, 34, 19, 91, 9, 82, 67, 61, 38];

  shuffleArray(arr);

  const newContent = document.querySelector(".quick-content");

  const dataArray = [];

  arr.forEach((value, i) => {
    let column = document.createElement("div");
    let columnLabel = document.createElement("label");

    column.style.height = `${value * 2}px`;
    column.style.left = `${(i / arr.length) * 100}%`;
    column.classList.add("quick-column");

    columnLabel.classList.add("quick-column__id");
    columnLabel.innerHTML = value;
    newContent.appendChild(column).appendChild(columnLabel);

    dataArray.push({
      value: value,
      container: column
    });
  });

  quickSort(dataArray, 0, dataArray.length - 1);
});

async function quickSort(arr, left, right) {
  var pivot, partitionIndex;

  if (left < right) {
    pivot = right;

    var pivotValue = arr[pivot],
      partitionIndex = left;

    for (var i = left; i < right; i++) {
      await sleep(300);
      if (arr[i].value < pivotValue.value) {
        var temp = arr[i];
        arr[i] = arr[partitionIndex];
        arr[partitionIndex] = temp;
        arr[partitionIndex].container.style.left = `${(partitionIndex /
          arr.length) *
          100}%`;
        arr[partitionIndex].container.style.backgroundColor = "#13ce3c";
        arr[i].container.style.left = `${(i / arr.length) * 100}%`;
        arr[i].container.style.backgroundColor = "#e82727";

        partitionIndex++;
      }
    }

    await sleep(300);
    var temp = arr[right];
    arr[right] = arr[partitionIndex];
    arr[partitionIndex] = temp;
    arr[partitionIndex].container.style.left = `${(partitionIndex /
      arr.length) *
      100}%`;
    arr[right].container.style.left = `${(right / arr.length) * 100}%`;
    arr[right].container.style.backgroundColor = `#2ba4ff`;
    partitionIndex = partitionIndex;

    await quickSort(arr, left, partitionIndex - 1);
    await quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
