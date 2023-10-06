// "use strict";
/* Berikut beberapa hal yang tidak dapat dilakukan jika menggunakan mode Strict:
Menggunakan variabel sebelum mendeklarasikannya. 
Menghapus variabel, function dan argumen.
Menggunakan definisi object property yang berulang.
Menggunakan definisi parameter pada function yang berulang.
Menulis pada property jenis readonly.
Menggunakan angka dengan penulisan oktal.
Menulis pada property jenis get.
Menghapus undelete property seperti pada property jenis prototype.
Menggunakan string “eval” dan “argument” sebagai variabel.
Menggunakan statement jenis with.
Menggunakan future keyword reserve seperti implements, interface, package, private, protected, public, static, yield.
*/

console.log("Selamat Anda berhasil menggunakan JavaScript pada Website");
// alert("Terimakasih.");

const calculator = {
  displayNumber: "0",
  operator: null,
  firstNumber: null,
  isWaitForSecondNumber: false,
};

function updateDisplay() {
  document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
  calculator.displayNumber = "0";
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.isWaitForSecondNumber = false;
}

function inputDigit(digit) {
  if (calculator.displayNumber === "0") {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
}

function inverseNumber() {
  if (calculator.displayNumber === "0") {
    return;
  }
  calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
  if (!calculator.isWaitForSecondNumber) {
    calculator.operator = operator;
    calculator.isWaitForSecondNumber = true;
    calculator.firstNumber = calculator.displayNumber;

    // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
    calculator.displayNumber = "0";
  } else {
    alert("operator sudah ditetapkan");
  }
}

function performCalculation() {
  if (calculator.firstNumber == null || calculator.operator == null) {
    alert("Anda belum menetapkan operator");
    return;
  }

  let result = 0;
  if (calculator.operator === "+") {
    result =
      parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
  } else {
    result =
      parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
  }

  // objek yang akan dikirimkan sebagai argumen fungsi putHistory()
  const history = {
    firstNumber: calculator.firstNumber,
    secondNumber: calculator.displayNumber,
    operator: calculator.operator,
    result: result,
  };
  putHistory(history);
  calculator.displayNumber = result;
  renderHistory();
}

const buttons = document.querySelectorAll(".button");

for (const button of buttons) {
  button.addEventListener("click", (event) => {
    // mendapatkan objek yang di klik
    const target = event.target;

    if (target.classList.contains("clear")) {
      clearCalculator();
      updateDisplay();
      return;
    }

    if (target.classList.contains("negative")) {
      inverseNumber();
      updateDisplay();
      return;
    }

    if (target.classList.contains("equals")) {
      performCalculation();
      updateDisplay();
      return;
    }

    if (target.classList.contains("operator")) {
      handleOperator(target.innerText);
      return;
    }

    inputDigit(target.innerText);
    updateDisplay();
  });
}
