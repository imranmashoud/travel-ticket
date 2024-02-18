document.getElementById("scrollButton").addEventListener("click", function () {
  // Get the target element
  var targetElement = document.getElementById("targetElement");

  // Scroll to the target element
  targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
});

const allBtn = document.getElementsByClassName("seat-btn");

let count = 0;

for (const btn of allBtn) {
  btn.addEventListener("click", function (element) {
    count++;
    document.getElementById("seat-count").innerText = count;
    document.getElementById("available-seat").innerText = 40 - count;
    element.target.style.backgroundColor = "#1DD100";
    const getSeat = element.target.innerText;
    const ticketPrice = document.getElementById("seat-price").innerText;
    // console.log(getSeat);

    const parentContainer = document.getElementById("seat-number");

    const divCon = document.createElement("div");
    const p = document.createElement("p");
    p.innerText = getSeat;
    const p1 = document.createElement("p");
    p1.innerText = ticketPrice;

    const p2 = document.createElement("p");
    p2.innerText = "economy";
    divCon.appendChild(p);
    divCon.appendChild(p2);
    divCon.appendChild(p1);

    parentContainer.appendChild(divCon);
    divCon.classList.add("flex", "flex-row", "justify-between");
  });
}
