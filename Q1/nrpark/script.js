function checkGame(randVal, userVal) {
  let text_result = document.querySelector(".text-result");
  console.log(text_result);
  switch (randVal) {
    case "β":
      randVal = "1";
      break;
    case "π":
      randVal = "2";
      break;
    case "βοΈ":
      randVal = "0";
      break;
  }
  if (randVal == userVal) {
    alert("λΉκ²Όμ΅λλ€");
    text_result.innerHTML = "λΉκ²Όμ΅λλ€";
  } else {
    if (randVal == 0) {
      result = userVal == 1 ? "μ΄κ²Όμ΅λλ€" : "μ‘μ΅λλ€";
    } else if (randVal == 1) {
      result = userVal == 2 ? "μ΄κ²Όμ΅λλ€" : "μ‘μ΅λλ€";
    } else if (randVal == 2) {
      result = userVal == 0 ? "μ΄κ²Όμ΅λλ€" : "μ‘μ΅λλ€";
    }
    alert(result);
    text_result.innerHTML = result;
  }
}
function runGame() {
  randVal.innerHTML = arr[index++];
  if (index == arr.length) index = 0;
}

const randVal = document.querySelector(".content");
const arr = ["β", "π", "βοΈ"];
let index = 0;
const btn = document.querySelectorAll(".btn");
const btn_restart = document.querySelector(".btn_restart");

let setGame = setInterval(runGame, 500);

btn.forEach(function (element) {
  element.addEventListener("click", function () {
    switch (this.innerHTML) {
      case "λ°μ":
        userVal = "1";
        break;
      case "λ³΄":
        userVal = "2";
        break;
      case "κ°μ":
        userVal = "0";
        break;
    }
    clearInterval(setGame);
    checkGame(randVal.innerHTML, userVal);
  });
});

btn_restart.addEventListener("click", function () {
  setGame = setInterval(runGame, 500);
});
