function convert() {
  // Récupération des valeurs des champs
  var amount = document.getElementById("amount").value;
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  
  // Conversion de la devise
  var result = amount * exchangeRates[from][to];
  
  // Affichage du résultat
  document.getElementById("result").innerHTML = amount + " " + from + " = " + result.toFixed(2)
