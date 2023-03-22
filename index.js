function add() {
  const plusSymbol = document.getElementById("plusSymbol");
  const minus = parseInt(plusSymbol.value) + 1;
  plusSymbol.value = minusSymbol;
}

function subtract() {
  const plus = document.getElementById("plusSymbol");
  const minus = parseInt(plusSymbol.value) - 1;
  plus.value = minusSymbol;
}

// let plusSymbol = document.querySelector("#plusSymbol");
// plusSymbol.addEventListener("click", function () {
//   let output = document.querySelector("output");
//   let result = parseInt(output.innerText) + 1;
//   // had to add in word number to not make it a string because everytime I hit the + button it would add a number 1.
//   output.innerText = result;
// });

/* 
<div class="user-wrapper"> [x]
              <h3>Denise J. : <span>1</span></h3> [x]
              <div class="btn-container">
                <button>+</button>
                <button>-</button>
              </div>
            </div>
*/
const user = {
  first_name: "denise",
  last_name: "j.",
};
const userContainer = document.createElement("div");
const btnContainer = document.createElement("div");
const addBtn = document.createElement("button");
const subBtn = document.createElement("button");
const nameHeader = document.createElement("h3");
const weightSpan = document.createElement("span");
const nameNode = document.createTextNode(
  `${user.first_name} ${user.last_name} : `
);

// User Data
userContainer.classList.add("user-wrapper");
weightSpan.append("1");
nameHeader.appendChild(nameNode);
nameHeader.appendChild(weightSpan);
userContainer.appendChild(nameHeader);

// Button Content
btnContainer.classList.add("btn-container");
btnContainer.appendChild(addBtn);
btnContainer.appendChild(subBtn);

addBtn.append("+");
subBtn.append("-");
userContainer.appendChild(btnContainer);
const usersEl = document.querySelector(".users-container");

usersEl.appendChild(userContainer);

// {
//     user: {},
//     users: [
//         {_id: 347834783545, first_name: "Denise", last_name: "Justice"},
//         {_id: 347834783545, first_name: "Denise", last_name: "Justice"},
//         {_id: 347834783545, first_name: "Denise", last_name: "Justice"},
//         {_id: 347834783545, first_name: "Denise", last_name: "Justice"},
//         {_id: 347834783545, first_name: "Denise", last_name: "Justice"},
//         {_id: 347834783545, first_name: "Denise", last_name: "Justice"},
//     ]
// }
