let Form = document.querySelector("#myForm");
let inputField = document.querySelector("#money");

Form.addEventListener("change", (e) => {
  e.preventDefault();

  let Amount = inputField.value;
  let formatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Amount);

  inputField.value = formatted;
});
