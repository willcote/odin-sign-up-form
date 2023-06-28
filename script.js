const p1 = document.querySelector("#password");
const p2 = document.querySelector("#confirmPassword");
const errorMsg = document.querySelector(".password-error-text");

p1.addEventListener("keyup", () => {
  if (p1.value.length != 0) checkPassword();
  // console.log(`1:${p1.innerHTML} 2:${p1.innerText} 3:${p1.value}`);
  // console.log(`p1: ${p1.value} p2: ${p2.value}`);
});

p2.addEventListener("keyup", () => {
  if (p2.value.length != 0) checkPassword();
});

function checkPassword() {
  if (p1.value !== p2.value) {
    addErrorClass(p1, p2);
    showErrorMsg();
  } else {
    removeErrorClass(p1, p2);
    hideErrorMsg();
  }
}

function addErrorClass(...elements) {
  for (const e of elements) {
    if (!e.classList.contains("error")) {
      e.classList.add("error");
    }
  }
}

function removeErrorClass(...elements) {
  for (const e of elements) {
    if (e.classList.contains("error")) {
      e.classList.remove("error");
      // console.log(e.classList.contains("error"));
    }
  }
}

function showErrorMsg() {
  errorMsg.setAttribute("style", "visibility: visible");
}

function hideErrorMsg() {
  errorMsg.setAttribute("style", "visibility: hidden");
}
