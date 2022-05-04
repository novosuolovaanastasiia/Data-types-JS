buyChocolate()
returnContraryNumber()
accruedInterest()


function buyChocolate() {
  let money = prompt("Введіть суму грошей у вашому гаманці(грн)");
  let pricechocolate = prompt("Введіть ціну шоколадки (грн)");
  let amountofchocolate = Math.floor(money / pricechocolate);
  alert(`За дану суму ви отримаєте ${amountofchocolate} шоколадки`);
  let change = money % pricechocolate;
  alert(`Ваша решта ${change} грн`)
}

function returnContraryNumber() {
  let number = prompt('Введіть тризначне число')
  let contrarynumber = 0 
      while (number) {
      contrarynumber = contrarynumber * 10 + number % 10;
      number = Math.floor(number / 10);
      }
  alert(contrarynumber)
}

function accruedInterest() {
  let investment = prompt("Введіть суму вкладу в банк (грн)")
  let interest = investment * 0.05;
  let interestfor2month = (interest / 12) * 2;
  alert(`Сума нарахованих відсотків за 2 місяці дорівнює ${interestfor2month} грн`)
}
