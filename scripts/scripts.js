document.getElementById("scrollButton").addEventListener("click", function () {
  // Get the target element
  var targetElement = document.getElementById("targetElement");

  // Scroll to the target element
  targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
});

const allBtn = document.getElementsByClassName("seat-btn");

let count = 0;
let ticketPrice = 550;
let totalPrice = 0;

for (const btn of allBtn) {
  btn.addEventListener("click", function (element) {
    if (count < 4) {
      count++;
      document.getElementById("seat-count").innerText = count;
      document.getElementById("available-seat").innerText = 40 - count;
      element.target.style.backgroundColor = "#1DD100";
      const getSeat = element.target.innerText;

      // let ticketPrice = parseInt(document.getElementById("seat-price").innerText);
      // console.log(typeof ticketPrice);

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
      divCon.classList.add("flex", "flex-row", "justify-between", "font-bold");

      totalPrice += ticketPrice;
      document.getElementById("total-price").innerText = totalPrice;
      if (count === 4) {
        for (const button of allBtn) {
          if (!button.classList.contains("selected")) {
            button.disabled = true;
          }
        }
        alert("You have selected maximum number of seats");
      }
    }
  });
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
  // console.log("clicked");

  const couponElement = document.getElementById("input-discount").value;
  const couponCode = couponElement.split(" ").join("").toUpperCase();
  // console.log(couponCode);
  if (couponCode === "NEW15") {
    const discountContainer = document.getElementById("discounted-amount");
    const disAmount = totalPrice * 0.15;
    const disDiv = document.createElement("div");
    const p1 = document.createElement("p");
    p1.innerText = "Discount amount";
    const p2 = document.createElement("p");
    p2.innerText = disAmount;
    disDiv.appendChild(p1);
    disDiv.appendChild(p2);
    discountContainer.appendChild(disDiv);
    disDiv.classList.add("flex", "justify-between");

    const hideContainer = document.getElementById("discount-container");
    hideContainer.classList.add("hidden");
  } else {
    alert("Invalid coupon");
  }
});
