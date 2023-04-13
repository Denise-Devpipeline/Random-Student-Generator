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
const usersEl = document.querySelector(".users-container");
const genBtn = document.querySelector("#generatorButton");
const eUserChoice = document.querySelector("#animateMe");
//FETCH DATA
// fetch(mockData.json)
//   .then((response) => response.json())
//   .then((data) => {
//     const firstName = data.results[0].name.first;
//     const lastName = data.results[0].name.last;
//     const randomIndex = math.floor(math.random());

//     if (randomIndex === 0) {
//       console.log("random first name: ${firstName}");
//     } else {
//       console.log("random last name: ${lastName}");
//     }
//   })
//   .catch((error) => console.error(error));
// Weight buttons (Do I need to add in a new list of students? or can I use the mockData from)
const aStudents = JSON.parse(JSON.stringify(mockData.users));
mockData.users.forEach((oUser) => {
  createUsers(oUser);
});

function firstAndLast(oUserData) {
  return `${
    oUserData.first_name[0].toUpperCase() + oUserData.first_name.slice(1)
  } ${oUserData.last_name.slice(0, 1).toUpperCase()} : `;
}

function createUsers(oUser) {
  const usersContainer = document.createElement("div");
  const btnContainer = document.createElement("div");
  const addBtn = document.createElement("button");
  const subBtn = document.createElement("button");
  const nameHeader = document.createElement("h3");
  const weightSpan = document.createElement("span");

  const nameNode = document.createTextNode(firstAndLast(oUser));

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

  addBtn.addEventListener("click", function () {
    let nCurrentWeight = Number(weightSpan.textContent);
    weightSpan.textContent = nCurrentWeight + 1;
    aStudents.push(oUser);
  });
  subBtn.addEventListener("click", function () {
    let nCurrentWeight = Number(weightSpan.textContent);
    if (nCurrentWeight <= 1) {
      return;
    }
    weightSpan.textContent = nCurrentWeight - 1;
  });

  usersEl.appendChild(usersContainer);
}

let shuffleSet;

function shuffleName() {
  const indexStudentRandom = Math.floor(Math.random() * aStudents.length);
  const oStudent = aStudents[indexStudentRandom];
  eUserChoice.textContent = firstAndLast(oStudent);
}

function shuffleTime() {
  shuffleSet = setInterval(() => {
    shuffleName();
  }, 100);
  return new Promise((res, reje) => {
    setTimeout(() => {
      res();
    }, 3000);
  }).then(function () {
    clearInterval(shuffleSet);
  });
}

genBtn.addEventListener("click", function () {
  shuffleTime();
});
