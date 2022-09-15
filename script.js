const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");

function onAddInfo(e) {
  e.preventDefault();
  const pavarde = document.getElementById("pavarde").value;
  const vardas = document.getElementById("vardas").value;
  const amzius = document.getElementById("amzius").value; 
  



  tbodyEl.innerHTML += `
      <tr>
          <td>${vardas}</td>
          <td>${pavarde}</td>
          <td>${amzius}</td>
      </tr>
  `;
  
}


formEl.addEventListener("submit", onAddInfo);
