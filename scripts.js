const letExample = () => {
  const letOutput = document.getElementById("letOutput");
  let errorMessage = "";
  let x = 7;
  let y = 6;
  x = prompt("Enter in a number value to multiply by 6. What happens if you don't enter a number?");
  if (isNaN(x) || x == "")
  {
    x = 7;
    errorMessage = (`<p class="returnStyle">Number not entered, defaulting to 7. This shows that a <strong>let</strong>
    value can be altered.</p>`);
  }
  letOutput.innerHTML = (errorMessage + `<p>x = ${x}, y = ${y}</p> <p>${x} * ${y} = ${x * y}</p>`);
}

const constExample = () => {
  const constOutput = document.getElementById("constOutput");
  constOutput.innerHTML = (`<p>You should not be able to enter a number value. Press F12, then click 'Console'</p>
  <p>It shows that you are trying to assign a value to an already declared <strong>const</strong> value.`);
  const x2 = 7;
  const y2 = 6;
  x2 = prompt("Enter in a number value");


}

console.log("If you can see this, than all of your code ran properly!");
