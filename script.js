const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const el = e.target;
    createOperations(el);
  });
});

function createOperations(element) {
  const previousOperator = document.querySelector(".previous-operation");
  const currentOperator = document.querySelector(".current-operation");

  if (element.classList.contains("btn-num")) {
    currentOperator.innerHTML += element.innerText;
  }

  if (element.classList.contains("btn-operator")) {
    currentOperator.innerHTML += " " + element.innerText;
  }

  if (element.classList.contains("btn-operator")) {
    previousOperator.innerHTML = currentOperator.textContent;
    currentOperator.innerHTML = "";
  }

  if (element.classList.contains("btn-equal")) {
    createCalculation(currentOperator, previousOperator);
  }

  if (element.classList.contains("btn-clear")) {
    currentOperator.innerHTML = "";
  }

  if (element.classList.contains("btn-clearAll")) {
    currentOperator.innerHTML = "";
    previousOperator.innerHTML = "";
  }

  if (element.classList.contains("btn-del")) {
    currentOperator.textContent = currentOperator.textContent.slice(0, -1);
  }
}

function createCalculation(currentOperator, previousOperator) {
  const current = Number(currentOperator.innerText);
  const previous = Number(previousOperator.innerText.split(" ")[0]);
  const operator =
    previousOperator.innerText.split("")[
      previousOperator.innerText.split("").length - 1
    ];

  if (currentOperator.innerHTML === "") {
    alert("Erro ao realizar cálculo");
    previousOperator.innerHTML = "";
  }

  if (isNaN(currentOperator.textContent)) {
    currentOperator.innerHTML = "";
    previousOperator.innerHTML = "";
    alert("Erro ao realizar cálculo");
  }

  if (operator === "+") {
    currentOperator.innerHTML = current + previous;
    previousOperator.innerHTML = `${previous} ${operator} ${current} =`;
  }

  if (operator === "-") {
    currentOperator.innerHTML = current - previous;
    previousOperator.innerHTML = `${previous} ${operator} ${current} =`;
  }

  if (operator === "x") {
    currentOperator.innerHTML = current * previous;
    previousOperator.innerHTML = `${previous} ${operator} ${current} =`;
  }

  if (operator === "/") {
    currentOperator.innerHTML = current / previous;
    previousOperator.innerHTML = `${previous} ${operator} ${current} =`;
  }
}
