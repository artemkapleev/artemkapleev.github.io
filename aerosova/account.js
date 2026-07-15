const formatMoneyAccount = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0
});

let accountOrders = JSON.parse(localStorage.getItem("aerosovaOrders") || "[]");

const accountName = document.querySelector("#accountName");
const accountEmail = document.querySelector("#accountEmail");
const ordersList = document.querySelector("#ordersList");
const toast = document.querySelector("#toast");

function randomDelay() {
  return Math.floor(1000 + Math.random() * 1000);
}

function passengerList(order) {
  if (Array.isArray(order.passengers)) {
    return order.passengers;
  }
  return [{
    firstName: order.passenger?.split(" ")[0] || "Пассажир",
    lastName: order.passenger?.split(" ").slice(1).join(" ") || "",
    seat: "",
    document: ""
  }];
}

function saveOrders() {
  localStorage.setItem("aerosovaOrders", JSON.stringify(accountOrders));
}

function boardingCode(order, passenger, index) {
  return `${order.number}-${index + 1}-${(passenger.lastName || "PAX").slice(0, 3).toUpperCase()}`;
}

function checkIn(orderNumber) {
  const order = accountOrders.find((item) => item.number === orderNumber);
  if (!order) {
    return;
  }

  const button = document.querySelector(`[data-checkin="${orderNumber}"]`);
  if (button) {
    button.disabled = true;
    button.textContent = "Регистрация...";
  }

  window.setTimeout(() => {
    order.checkedIn = true;
    order.status = "checked-in";
    order.boardingPasses = passengerList(order).map((passenger, index) => ({
      code: boardingCode(order, passenger, index),
      passenger: `${passenger.firstName} ${passenger.lastName}`.trim(),
      seat: passenger.seat || `AUTO-${index + 1}`,
      gate: `B${4 + index}`,
      boarding: order.departTime
    }));
    saveOrders();
    renderAccount();
    showToast("Регистрация завершена. Посадочные талоны готовы.");
  }, randomDelay());
}

function showToast(text) {
  toast.textContent = text;
  toast.hidden = false;
  window.setTimeout(() => {
    toast.hidden = true;
  }, 3400);
}

function renderAccount() {
  if (!accountOrders.length) {
    accountName.textContent = "Гость Аэросовы";
    accountEmail.textContent = "Купите билет, чтобы создать демо-профиль.";
    ordersList.innerHTML = `
      <article class="empty-orders">
        <strong>Заказов пока нет</strong>
        <span>Вернитесь на главную страницу, найдите рейс и завершите покупку.</span>
        <a class="primary-action compact-action" href="./index.html" data-page-link>Купить билет</a>
      </article>
    `;
    return;
  }

  const latest = accountOrders[0];
  accountName.textContent = latest.passenger || "Пассажир Аэросовы";
  accountEmail.textContent = latest.email || "email не указан";
  ordersList.innerHTML = accountOrders.map((order) => {
    const passengers = passengerList(order);
    return `
      <article class="account-order">
        <div class="order-topline">
          <div>
            <span>${order.number}</span>
            <strong>${order.fromCity} - ${order.toCity}</strong>
            <small>${order.flight}, ${order.date}, вылет ${order.departTime}, прилет ${order.arriveTime}</small>
          </div>
          <div>
            <strong>${formatMoneyAccount.format(order.total || 0)}</strong>
            <small>${order.fare}, ${passengers.length} пасс.</small>
          </div>
        </div>
        <div class="passenger-list">
          ${passengers.map((passenger, index) => `
            <span>${index + 1}. ${passenger.firstName || "Пассажир"} ${passenger.lastName || ""} ${passenger.seat ? `- место ${passenger.seat}` : ""}</span>
          `).join("")}
        </div>
        ${order.checkedIn ? renderBoardingPasses(order) : `
          <button class="primary-action compact-action" type="button" data-checkin="${order.number}">Зарегистрироваться на рейс</button>
        `}
      </article>
    `;
  }).join("");

  ordersList.querySelectorAll("[data-checkin]").forEach((button) => {
    button.addEventListener("click", () => checkIn(button.dataset.checkin));
  });
}

function renderBoardingPasses(order) {
  return `
    <div class="boarding-list">
      ${(order.boardingPasses || []).map((pass) => `
        <article class="boarding-pass">
          <span>Посадочный талон</span>
          <strong>${pass.passenger}</strong>
          <p>${order.fromCity} - ${order.toCity}</p>
          <small>${order.flight}, место ${pass.seat}, выход ${pass.gate}, код ${pass.code}</small>
        </article>
      `).join("")}
    </div>
  `;
}

function setupPageTransitions(root = document) {
  const loader = document.querySelector("#pageLoader");
  root.querySelectorAll("[data-page-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      event.preventDefault();
      if (loader) loader.hidden = false;
      window.setTimeout(() => {
        window.location.href = href;
      }, randomDelay());
    });
  });
}

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("open");
});

renderAccount();
setupPageTransitions();
