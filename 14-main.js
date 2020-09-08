function getJSON(response) {
  let data = response.json();
  return data
}

function getCurrencyRate(currency) {

  let url = "https://api.exchangeratesapi.io/latest?symbols=" + currency;

  fetch(url)
    .then(getJSON)
    .then(data => {
      // console.log("Data: ", data)
      let rate = Object.values(data.rates)[0];
      document.querySelector("#exchange-results").innerHTML = `1.00 Euro corrisponde a ${ rate } ${ currency }`;
    })
    .catch( err => {
      // console.log("Error: ", err)
      document.querySelector("#exchange-results").innerHTML = `Errore ${ err }`;
    })
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#form").onsubmit = event => {

    // preveniamo il reload della pagina
    event.preventDefault();
    
    // prendiamo la valuta che vogliamo usare per la conversione
    const currency = document.querySelector("#currency").value;

    // richiamiamo la funzione passandole la valuta inserita dall'utente
    getCurrencyRate(currency)

    // "ripuliamo" l'input testuale
    document.querySelector("#currency").value = "";

  }
})
