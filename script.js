


// Copy email to clipboard
function copyEmail() {
  const emailText = document.getElementById("email").innerText;
  navigator.clipboard.writeText(emailText).then(() => {
    alert("Email copied to clipboard!");
  });
}

// Smooth scroll (optional if using anchor tags)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
function toggleCalculator() {
  const box = document.getElementById("calculatorBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operation").value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers.";
  } else {
    switch (op) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
    }
  }

  document.getElementById("result").innerText = `Result: ${result}`;
}