let errorMessage = "";
let errorMessage2 = "";

const letExample = () => {
  const letOutput = document.getElementById("letOutput");

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

const addExample = () => {
  errorMessage = ("");
  errorMessage2 = ("");

  xAdd = Number(prompt("Enter in a number for x please."));
  if (isNaN(xAdd) || xAdd == "")
  {
    xAdd = 4;
    errorMessage = (`<p class="returnStyle">Number not entered for x, defaulting to 4.</p>`);
  }
  yAdd = Number(prompt("Enter in a number for y please."));
  if (isNaN(yAdd) || yAdd == "")
  {
    yAdd = 4;
    errorMessage2 = (`<p class="returnStyle">Number not entered for y, defaulting to 4.</p>`);
  }
    //Calculating the + equation and output it.
    //Display error message(s) if there are any.
    addOutput.innerHTML = (errorMessage + errorMessage2 + `<p>x = ${xAdd}, y = ${yAdd}</p> <p>${xAdd} + ${yAdd} = ${xAdd + yAdd}</p>`);
}

const subExample = () => {
  errorMessage = ("");
  errorMessage2 = ("");

  xSub = prompt("Enter in a number for x please.");
  if (isNaN(xSub) || xSub == "")
  {
    xSub = 6;
    errorMessage = (`<p class="returnStyle">Number not entered for x, defaulting to 6.</p>`);
  }
  ySub = prompt("Enter in a number for y please.");
  if (isNaN(ySub) || ySub == "")
  {
    ySub = 5;
    errorMessage2 = (`<p class="returnStyle">Number not entered for y, defaulting to 5.</p>`);
  }
    //Calculating the - equation and output it.
    //Display error message(s) if there are any.
    subOutput.innerHTML = (errorMessage + errorMessage2 + `<p>x = ${xSub}, y = ${ySub}</p> <p>${xSub} - ${ySub} = ${xSub - ySub}</p>`);
}

const multExample = () => {
  errorMessage = ("");
  errorMessage2 = ("");

  xMult = prompt("Enter in a number for x please.");
  if (isNaN(xMult) || xMult == "")
  {
    xMult = 8;
    errorMessage = (`<p class="returnStyle">Number not entered for x, defaulting to 8.</p>`);
  }
  yMult = prompt("Enter in a number for y please.");
  if (isNaN(yMult) || yMult == "")
  {
    yMult = 3;
    errorMessage2 = (`<p class="returnStyle">Number not entered for y, defaulting to 3.</p>`);
  }
    //Calculating the * equation and output it.
    //Display error message(s) if there are any.
    multOutput.innerHTML = (errorMessage + errorMessage2 + `<p>x = ${xMult}, y = ${yMult}</p> <p>${xMult} * ${yMult} = ${xMult * yMult}</p>`);
}

const divExample = () => {
  errorMessage = ("");
  errorMessage2 = ("");

  xDiv = prompt("Enter in a number for x please.");
  if (isNaN(xDiv) || xDiv == "")
  {
    xDiv = 10;
    errorMessage = (`<p class="returnStyle">Number not entered for x, defaulting to 10.</p>`);
  }
  yDiv = prompt("Enter in a number for y please.");
  if (isNaN(yDiv) || yDiv == "")
  {
    yDiv = 2;
    errorMessage2 = (`<p class="returnStyle">Number not entered for y, defaulting to 2.</p>`);
  }
    //Calculating the / equation and output it. Shorten the answer to 3 decimal places so that its not a large num.
    //Display error message(s) if there are any.
    divOutput.innerHTML = (errorMessage + errorMessage2 +`<p>x = ${xDiv}, y = ${yDiv}</p> <p>${xDiv} / ${yDiv} = ${(xDiv / yDiv).toFixed(3)}</p>`);
}

const gtExample = () => {
  errorMessage = ("");
  errorMessage2 = ("");

  xGT = prompt("Enter in a number for x please.");
  if (isNaN(xGT) || xGT == "")
  {
    xGT = 8;
    errorMessage = (`<p class="returnStyle">Number not entered for x, defaulting to 8.</p>`);
  }
  yGT = prompt("Enter in a number for y please.");
  if (isNaN(yGT) || yGT == "")
  {
    yGT = 4;
    errorMessage2 = (`<p class="returnStyle">Number not entered for y, defaulting to 4.</p>`);
  }
    //Calculating the * equation and output it.
    //Display error message(s) if there are any.
    gtOutput.innerHTML = (errorMessage + errorMessage2 + `<p>x = ${xGT}, y = ${yGT}</p> <p>${xGT} > ${yGT} is ${xGT > yGT}</p>`);
}

const ltExample = () => {
  errorMessage = ("");
  errorMessage2 = ("");

  xLT = prompt("Enter in a number for x please.");
  if (isNaN(xLT) || xLT == "")
  {
    xLT = 8;
    errorMessage = (`<p class="returnStyle">Number not entered for x, defaulting to 8.</p>`);
  }
  yLT = prompt("Enter in a number for y please.");
  if (isNaN(yLT) || yLT == "")
  {
    yLT = 4;
    errorMessage2 = (`<p class="returnStyle">Number not entered for y, defaulting to 4.</p>`);
  }
    //Calculating the * equation and output it.
    //Display error message(s) if there are any.
    ltOutput.innerHTML = (errorMessage + errorMessage2 + `<p>x = ${xLT}, y = ${yLT}</p> <p>${xLT} < ${yLT} is ${xLT < yLT}</p>`);
}

const etExample = () => {
  errorMessage = ("");
  errorMessage2 = ("");

  xET = prompt("Enter in a number for x please.");
  if (isNaN(xET) || xET == "")
  {
    xET = 8;
    errorMessage = (`<p class="returnStyle">Number not entered for x, defaulting to 8.</p>`);
  }
  yET = prompt("Enter in a number for y please.");
  if (isNaN(yET) || yET == "")
  {
    yET = 4;
    errorMessage2 = (`<p class="returnStyle">Number not entered for y, defaulting to 4.</p>`);
  }
    //Calculating the * equation and output it.
    //Display error message(s) if there are any.
    etOutput.innerHTML = (errorMessage + errorMessage2 + `<p>x = ${xET}, y = ${yET}</p> <p>${xET} == ${yET} is ${xET == yET}</p>`);
}

const netExample = () => {
  errorMessage = ("");
  errorMessage2 = ("");

  xNET = prompt("Enter in a number for x please.");
  if (isNaN(xNET) || xNET == "")
  {
    xNET = 8;
    errorMessage = (`<p class="returnStyle">Number not entered for x, defaulting to 8.</p>`);
  }
  yNET = prompt("Enter in a number for y please.");
  if (isNaN(yNET) || yNET == "")
  {
    yNET = 4;
    errorMessage2 = (`<p class="returnStyle">Number not entered for y, defaulting to 4.</p>`);
  }
    //Calculating the * equation and output it.
    //Display error message(s) if there are any.
    netOutput.innerHTML = (errorMessage + errorMessage2 + `<p>x = ${xNET}, y = ${yNET}</p> <p>${xNET} != ${yNET} is ${xNET != yNET}</p>`);
}

console.log("If you can see this, than all of the code ran properly with no errors!");
