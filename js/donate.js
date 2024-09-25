const donateButton = document.getElementById("donate-btn");
donateButton.addEventListener("click", function () {
  const donateAmount = parseFloat(
    document.getElementById("donate-amount").value
  );
  console.log(donateAmount);
  const previousAmount = parseFloat(
    document.getElementById("previous-amount").innerText
  );
  console.log(previousAmount);
  const reserveAmount = parseFloat(
    document.getElementById("reserve-amount").innerText
  );
  const remainingBalane = reserveAmount - donateAmount;
  document.getElementById("reserve-amount").innerText = remainingBalane;
  const afterDonationAmount = previousAmount + donateAmount;
  console.log(afterDonationAmount);
  document.getElementById("previous-amount").innerText = afterDonationAmount;

  //history section
  const historyItem = document.createElement("div");
  historyItem.className =
    "bg-white rounded-xl container mx-auto border py-10 px-5 my-10 rounded-xl";
  historyItem.innerHTML = `
  <h1 class='text-4xl font-bold'>${donateAmount} Taka is Donated for famine-2024 at Feni,Bangladesh</h1>
  <p class='text-gray-400 text-xl  mt-7'>Date : ${new Date()}</p>
  
  `;
  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

// history tab funtionality
const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-lime-300");
  donationTab.classList.remove("bg-lime-300");
  donationTab.classList.add("outline-1");

  const donateSections = document.getElementById("donate-sections");
  donateSections.classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});
donationTab.addEventListener("click", function () {
  donationTab.classList.add("bg-lime-300");
  donationTab.classList.remove("hidden");
  historyTab.classList.remove("bg-lime-300");

  //section toogle
  document.getElementById("donate-sections").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});

// 2nd card functionality
const donateButton1 = document.getElementById("donate-btn-1");
donateButton1.addEventListener("click", function () {
  const donateAmount1 = parseFloat(
    document.getElementById("donate-amount-1").value
  );

  const previousAmount1 = parseFloat(
    document.getElementById("previous-amount-1").innerText
  );

  const reserveAmount1 = parseFloat(
    document.getElementById("reserve-amount").innerText
  );
  const remainingBalane1 = reserveAmount1 - donateAmount1;
  document.getElementById("reserve-amount").innerText = remainingBalane1;
  const afterDonationAmount1 = previousAmount1 + donateAmount1;

  document.getElementById("previous-amount-1").innerText = afterDonationAmount1;

  //history section
  const historyItem = document.createElement("div");
  historyItem.className =
    "bg-white rounded-xl container mx-auto border py-10 px-5 my-10 rounded-xl";
  historyItem.innerHTML = `
  <h1 class='text-4xl font-bold'>${donateAmount1} Taka is Donated for flood relief in Feni,Bangladesh</h1>
  <p class='text-gray-400 text-xl  mt-7'>Date : ${new Date()}</p>
  
  `;
  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

// 3rd card functionality
const donateButton2 = document.getElementById("donate-btn-2");
donateButton2.addEventListener("click", function () {
  const donateAmount2 = parseFloat(
    document.getElementById("donate-amount-2").value
  );

  const previousAmount2 = parseFloat(
    document.getElementById("previous-amount-2").innerText
  );

  const reserveAmount2 = parseFloat(
    document.getElementById("reserve-amount").innerText
  );
  const remainingBalane2 = reserveAmount2 - donateAmount2;
  document.getElementById("reserve-amount").innerText = remainingBalane2;
  const afterDonationAmount2 = previousAmount2 + donateAmount2;

  document.getElementById("previous-amount-2").innerText = afterDonationAmount2;

  //history section
  const historyItem = document.createElement("div");
  historyItem.className =
    "bg-white rounded-xl container mx-auto border py-10 px-5 my-10 rounded-xl";
  historyItem.innerHTML = `
  <h1 class='text-4xl font-bold'>${donateAmount2} Taka is Donated for injured in Quota Movement,Bangladesh</h1>
  <p class='text-gray-400 text-xl  mt-7'>Date : ${new Date()}</p>
  
  `;
  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});
