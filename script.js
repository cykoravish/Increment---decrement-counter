const countValue = document.getElementById("counter");

function increment() {
  // getting the value from UI
  let value = parseInt(countValue.innerText);
  //Updating the value
  value = value + 1;
  //setting the updated value on UI
  countValue.innerText = value;
}

function decrement() {
  // getting the value from UI
  let value = parseInt(countValue.innerText);
  //Updating the value
  value = value - 1;
  //setting the updated value on UI
  countValue.innerText = value;
}
