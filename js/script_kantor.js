{
const calculateTotal = (amount, currency) => {
    const EUR = 4.58;
    const USD = 4.16;
    const GBP = 5.21;

    switch (currency) {
        case "EUR":
        return amount / EUR;
        typeElement.innerText = "€";

        case "USD":
            return amount / USD;
        typeElement.innerText = "$";
     
        case "GBP":
            return amount / GBP;
        typeElement.innerText = "£";
    }
};

const onFormSubmit = (event) => {
event.preventDefault();

const plnElement = document.querySelector(".js-PLN");
const currencyElement = document.querySelector(".js-currency");
const totalElement = document.querySelector(".js-total");
const typeElement = document.querySelector(".js-type");

const total = calculateTotal(plnElement.value, currencyElement.value);    
totalElement.innerText = total.toFixed(2);
}


const init = () => {
const formElement = document.querySelector(".js-form");
formElement.addEventListener("submit", onFormSubmit);
};

init();
}