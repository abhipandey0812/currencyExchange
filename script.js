const currencyEle_one = document.getElementById("currency-1");
const amount_one = document.getElementById("amount-1");
const ratePlaceholder = document.getElementById("rate");
const currencyEle_two = document.getElementById("currency-2");
const amount_two = document.getElementById("amount-2");
const swap = document.getElementById("swap");

//fetch exchange rates and updates dom
function calculate() {
  const currencyOne = currencyEle_one.value;
  const currencyTwo = currencyEle_two.value;

  fetch(`https://open.er-api.com/v6/latest/${currencyOne}`)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data.rates);
      const rate = data.rates[currencyTwo];
      ratePlaceholder.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
      amount_two.value = (amount_one.value * rate).toFixed(2);
    });
}

currencyEle_one.addEventListener("change", calculate);
amount_one.addEventListener("input", calculate);
currencyEle_two.addEventListener("change", calculate);
amount_two.addEventListener("change", calculate);
swap.addEventListener("click", () => {
  const temp = currencyEle_one.value;
  currencyEle_one.value = currencyEle_two.value;
  currencyEle_two.value = temp;
  calculate();
});

calculate();
