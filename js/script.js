alert("Velkommen!");
alert("Fyll inn varer og eventuelt pris i ønsket kategori");
// 
// 
// 
var fullList = document.getElementById("full-list");

var fullArray = [];

function addGrocery() {
  let fullInput = document.getElementById("full-input").value;

  fullArray.push({
    item: fullInput,
  });

  addingTofull();
}

function addingTofull() {
  fullList.innerHTML = "";
  for (let i = 0; i < fullArray.length; i++) {
    fullList.innerHTML += ` <li id="grocery-item">
        ${fullArray[i].item}
        <button id="delete-btn" onclick="deleteItem(${i})">SLETT</button>
        </li>
        `;
  }
}

function deleteItem(i) {
  let deleted = `Bekreft sletting av "${fullArray[i].item}"?`;
  if (confirm(deleted) == true) {
    alert(`${fullArray[i].item} er nå slettet.`);
    fullArray.splice(i, 1);
    addingTofull();
  } else {
    alert(`${fullArray[i].item} er IKKE slettet.`);
  }
}

//
//
//

var inStockList = document.getElementById("inStocklist");

var inStockArray = [];

function addGrocery2() {
  let inStockInput = document.getElementById("inStockInput").value;

  inStockArray.push({
    item: inStockInput,
  });

  addToInstock();
}

function addToInstock() {
  inStockList.innerHTML = "";
  for (let i = 0; i < inStockArray.length; i++) {
    inStockList.innerHTML += `<li id="grocery-item2">
        ${inStockArray[i].item}
        <button id="delete-btn" onclick="deleteItem2(${i})">SLETT</button>
        </li>
        `;
  }
}

function deleteItem2(i) {
  let deleted2 = `Bekreft sletting av "${inStockArray[i].item}"?`;
  if (confirm(deleted2) == true) {
    alert(`${inStockArray[i].item} er nå slettet.`);
    inStockArray.splice(i, 1);
    addToInstock();
  } else {
    alert(`${inStockArray[i].item} er IKKE slettet.`);
  }
}
//
//
//

var emptyList = document.getElementById("empty-list");

var emptyArray = [];

function addGrocery3() {
  let emptyInput = document.getElementById("empty-input").value;
  let priceInput = document.getElementById("price-input").value;
  let sumList = document.getElementById("sum-list");

  if ((isNaN(priceInput) || priceInput <= 0) === true) {
    alert("Error!\nPris kan IKKE være 0.");
  } else {
    emptyArray.push({
      item: emptyInput,
      price: priceInput,
    });

    const prices = emptyArray.map((buy) => buy.price);
    let sum = 0;

    for (let i = 0; i < prices.length; i++) {
      sum += +prices[i];
      sumList.innerHTML = `TOTALSUM: ${sum} KR`;
    }

    addToEmpty();
  }
}

function addToEmpty() {
  emptyList.innerHTML = "";
  for (let i = 0; i < emptyArray.length; i++) {
    emptyList.innerHTML += `<li id="grocery-item3">
                ${emptyArray[i].item}, ${emptyArray[i].price} Kr
                <button id="delete-btn" onclick="deleteItem3(${i})">SLETT</button>
                </li>
                `;
  }
}

function deleteItem3(i) {
  let deleted3 = `Bekreft sletting av "${emptyArray[i].item}"?`;
  if (confirm(deleted3) == true) {
    alert(`${emptyArray[i].item} er nå slettet.`);
    emptyArray.splice(i, 1);
    addToEmpty();
    let sumList = document.getElementById("sum-list");

    const prices = emptyArray.map((buy) => buy.price);
    let sum = 0;

    for (let i = 0; i < prices.length; i++) {
      sum -= -prices[i];
      sumList.innerHTML = `TOTALSUM: ${sum} KR`;
    }
  } else {
    alert(`${emptyArray[i].item} er IKKE slettet.`);
  }
}
