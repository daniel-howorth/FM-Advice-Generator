const adviceDisplay = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-id");
const getAdviceBtn = document.querySelector("#get-advice-btn");
const getAdviceBtnContainer = document.querySelector(".btn-container");

async function getAdvice() {
  try {
    let response = await fetch("https://api.adviceslip.com/advice");
    if (response.ok) {
      let jsonResponse = await response.json();
      displayAdvice(jsonResponse);
    }
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}

function displayAdvice(data) {
  adviceId.textContent = `ADVICE #${data.slip.id}`;
  adviceDisplay.textContent = `"${data.slip.advice}"`;
}

getAdviceBtn.addEventListener("click", getAdvice);
getAdviceBtnContainer.addEventListener("click", getAdvice);

document.addEventListener("DOMContentLoaded", getAdvice());
