async function grabStudents() {
  try {
    const response = await fetch("MOCK_DATA.json", {}).then((res) =>
      res.json()
    );
    return response;
  } catch (err) {
    console.error(err);
  }
}

function add() {
  const plusSymbol = document.getElementById("plusSymbol");
  const minus = parseInt(plusSymbol.value) + 1;
  plusSymbol.value = minusSymbol;

  weightVal(plusSymbol);
}

function subtract() {
  const plus = document.getElementById("plusSymbol");
  const minus = parseInt(plusSymbol.value) - 1;
  plus.value = minusSymbol;
}

const mockData = {
  message: "Logged In",
  user: {
    _id: "6418c3a8e0d2fe0f4f6dd618",
    first_name: "Karely",
    last_name: "Partida",
    email: "karely@devpipeline.com",
    role: "standard",
    cohort: 4,
  },
  users: [
    {
      _id: "6258787aa465bde8088ce848",
      first_name: "mollykate",
      last_name: "greenhalgh",
      user_name: "mollykate-greenhalgh",
      role: "standard",
      __v: 1,
      cohort: 4,
    },
    {
      _id: "6365907e2b20ebab165013f4",
      first_name: "Olivia",
      last_name: "Marolf",
      role: "standard",
      cohort: 4,
      __v: 1,
    },
    {
      _id: "6418c21ae0d2fe0f4f6dd5d2",
      first_name: "John",
      last_name: "Ipson",
      role: "standard",
      cohort: 4,
      __v: 0,
    },
    {
      _id: "6418c311e0d2fe0f4f6dd5e9",
      first_name: "Denise",
      last_name: "Justice",
      role: "standard",
      cohort: 4,
      __v: 0,
    },
    {
      _id: "6418c3a8e0d2fe0f4f6dd618",
      first_name: "Karely",
      last_name: "Partida",
      role: "standard",
      cohort: 4,
      __v: 0,
    },
    {
      _id: "6418c3a9e0d2fe0f4f6dd61a",
      first_name: "Matt",
      last_name: "Reynolds",
      role: "standard",
      cohort: 4,
      __v: 1,
    },
    {
      _id: "6418c3abe0d2fe0f4f6dd61c",
      first_name: "James",
      last_name: "Hales",
      role: "standard",
      cohort: 4,
      __v: 0,
    },
    {
      _id: "6418c3b3e0d2fe0f4f6dd61e",
      first_name: "Enoka",
      last_name: "silipa",
      role: "standard",
      cohort: 4,
      __v: 0,
    },
    {
      _id: "6418c3b9e0d2fe0f4f6dd620",
      first_name: "Mitchell",
      last_name: "Nelson",
      role: "standard",
      cohort: 4,
      __v: 0,
    },
    {
      _id: "6418c41ce0d2fe0f4f6dd63c",
      first_name: "Shawn",
      last_name: "Spangler",
      role: "standard",
      cohort: 4,
      __v: 0,
    },
    {
      _id: "6418c41ee0d2fe0f4f6dd63e",
      first_name: "Jake",
      last_name: "Egbert",
      role: "standard",
      cohort: 4,
      __v: 0,
    },
  ],
};

// let animateMe = document.getElementById("animateMe");

// function animateChars(ehchOne) {
//   let echOnelements = element.querySelector("h1");

// }
// animateChars(animateMe);

function firstAndLast(oMockData) {
  return `${
    oMockData.first_name[0].toUpperCase() + oMockData.first_name.slice(1)
  } ${oMockData.last_name.slice(0, 1).toUpperCase()} : `;
}

const studentArray = [];
mockData.users.forEach((user) => {
  createUsers(user);
});

function weightVal(animateName) {
  document.getElementById("main-container").innerHTML = val * val;
}

function onClick(somethingGoesHere) {
  let addBtn, subBtn, result;
  addBtn = document.getElementById("addButton").value = "+";
  subBtn = document.getElementById("subButton").value = "-";
  document.getElementById("onClick");
  generatorButton.addEventListener("click", onClick);

  const generatorButton = document.getElementById("generatorButton");
  generatorButton.addEventListener("click", onClick);
}

function createUsers(user) {
  const usersContainer = document.createElement("div");
  const btnContainer = document.createElement("div");
  const addBtn = document.createElement("button");
  const subBtn = document.createElement("button");
  const nameHeader = document.createElement("h3");
  const weightSpan = document.createElement("span");

  const nameNode = document.createTextNode(firstAndLast(user));

  const spanNumber = document.createTextNode("1");

  console.log(nameHeader, usersContainer);

  // User Data
  usersContainer.classList.add("user-wrapper");
  weightSpan.append("1");
  nameHeader.appendChild(nameNode);
  nameHeader.appendChild(weightSpan);
  usersContainer.appendChild(nameHeader);

  // Button Content
  btnContainer.classList.add("btn-container");
  btnContainer.appendChild(addBtn);
  btnContainer.appendChild(subBtn);

  addBtn.append("+");
  subBtn.append("-");
  usersContainer.appendChild(btnContainer);
  const usersEl = document.querySelector(".users-container");

  usersEl.appendChild(usersContainer);
}

function shuffleName() {
  const theIndex = math.floor(math.random() * mockData.users.length);
  const indexStudent = mockData.users[indexStudent];
  usersContainer.textContent = firstAndLast(indexStudent);
}

function shuffleTime() {
  shuffleSet = shuffleTime(() => {
    shuffleName();
  }, 5000);
  return new promise((res, reje) => {
    setTimeout(() => {
      clearSettings(shuffleSet);
    });
  });
}

// let plusSymbol = document.querySelector("#plusSymbol");
// plusSymbol.addEventListener("click", function () {
//   let output = document.querySelector("output");
//   let result = parseInt(output.innerText) + 1;

//   output.innerText = result;
// });

//   customerData.forEach (x =>  {
//     console.log()

// fetch("MOCK_DATA.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
