const donateButton = document.getElementById("donate-btn");
donateButton.addEventListener("click", function () {
  const donateAmount = parseFloat(
    document.getElementById("donate-amount").value
  );

  const previousAmount = document.getElementById("previous-amount").va;
  previousAmount.innerText = donateAmount + previousAmont;
});
