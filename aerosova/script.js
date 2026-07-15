const formatMoney = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0
});

const routeSeeds = [
  { flight: "AS 124", depart: "07:20", duration: "2ч 45м", durationMin: 165, base: 7200 },
  { flight: "AS 308", depart: "12:35", duration: "2ч 40м", durationMin: 160, base: 8600 },
  { flight: "AS 712", depart: "19:10", duration: "2ч 55м", durationMin: 175, base: 9400 }
];

const fareMultiplier = {
  "Лайт": 1,
  "Оптимум": 1.18,
  "Комфорт": 1.42,
  "Бизнес": 2.25
};

const countryData = [
  "Австралия|Сидней|Мельбурн|Брисбен",
  "Австрия|Вена|Зальцбург",
  "Азербайджан|Баку|Гянджа",
  "Албания|Тирана",
  "Алжир|Алжир",
  "Ангола|Луанда",
  "Андорра|Андорра-ла-Велья",
  "Антигуа и Барбуда|Сент-Джонс",
  "Аргентина|Буэнос-Айрес|Кордова",
  "Армения|Ереван|Гюмри",
  "Афганистан|Кабул",
  "Багамы|Нассау",
  "Бангладеш|Дакка|Читтагонг",
  "Барбадос|Бриджтаун",
  "Бахрейн|Манама",
  "Беларусь|Минск|Гомель",
  "Белиз|Бельмопан|Белиз-Сити",
  "Бельгия|Брюссель|Антверпен",
  "Бенин|Котону",
  "Болгария|София|Варна",
  "Боливия|Ла-Пас|Санта-Крус",
  "Босния и Герцеговина|Сараево",
  "Ботсвана|Габороне",
  "Бразилия|Сан-Паулу|Рио-де-Жанейро|Бразилиа",
  "Бруней|Бандар-Сери-Бегаван",
  "Буркина-Фасо|Уагадугу",
  "Бурунди|Бужумбура",
  "Бутан|Тхимпху",
  "Вануату|Порт-Вила",
  "Ватикан|Ватикан",
  "Великобритания|Лондон|Манчестер|Эдинбург",
  "Венгрия|Будапешт",
  "Венесуэла|Каракас",
  "Восточный Тимор|Дили",
  "Вьетнам|Ханой|Хошимин|Дананг",
  "Габон|Либревиль",
  "Гаити|Порт-о-Пренс",
  "Гайана|Джорджтаун",
  "Гамбия|Банжул",
  "Гана|Аккра",
  "Гватемала|Гватемала",
  "Гвинея|Конакри",
  "Гвинея-Бисау|Бисау",
  "Германия|Берлин|Мюнхен|Франкфурт",
  "Гондурас|Тегусигальпа",
  "Гонконг|Гонконг",
  "Гренада|Сент-Джорджес",
  "Греция|Афины|Салоники",
  "Грузия|Тбилиси|Батуми",
  "Дания|Копенгаген",
  "Джибути|Джибути",
  "Доминика|Розо",
  "Доминиканская Республика|Санто-Доминго|Пунта-Кана",
  "Египет|Каир|Хургада|Шарм-эш-Шейх",
  "Замбия|Лусака",
  "Зимбабве|Хараре",
  "Израиль|Тель-Авив|Иерусалим",
  "Индия|Дели|Мумбаи|Гоа",
  "Индонезия|Джакарта|Денпасар",
  "Иордания|Амман|Акаба",
  "Ирак|Багдад",
  "Иран|Тегеран|Шираз",
  "Ирландия|Дублин",
  "Исландия|Рейкьявик",
  "Испания|Мадрид|Барселона|Малага",
  "Италия|Рим|Милан|Венеция",
  "Йемен|Сана",
  "Кабо-Верде|Прая",
  "Казахстан|Астана|Алматы|Шымкент",
  "Камбоджа|Пномпень|Сиемреап",
  "Камерун|Дуала|Яунде",
  "Канада|Торонто|Ванкувер|Монреаль",
  "Катар|Доха",
  "Кения|Найроби|Момбаса",
  "Кипр|Ларнака|Пафос",
  "Киргизия|Бишкек|Ош",
  "Кирибати|Тарава",
  "Китай|Пекин|Шанхай|Гуанчжоу",
  "Колумбия|Богота|Медельин",
  "Коморы|Морони",
  "Конго|Браззавиль",
  "ДР Конго|Киншаса",
  "Коста-Рика|Сан-Хосе",
  "Косово|Приштина",
  "Кот-д'Ивуар|Абиджан",
  "Куба|Гавана|Варадеро",
  "Кувейт|Эль-Кувейт",
  "Лаос|Вьентьян",
  "Латвия|Рига",
  "Лесото|Масеру",
  "Либерия|Монровия",
  "Ливан|Бейрут",
  "Ливия|Триполи",
  "Литва|Вильнюс",
  "Лихтенштейн|Вадуц",
  "Люксембург|Люксембург",
  "Маврикий|Порт-Луи",
  "Мавритания|Нуакшот",
  "Мадагаскар|Антананариву",
  "Макао|Макао",
  "Малави|Лилонгве",
  "Малайзия|Куала-Лумпур|Лангкави",
  "Мали|Бамако",
  "Мальдивы|Мале",
  "Мальта|Валлетта",
  "Марокко|Касабланка|Марракеш|Рабат",
  "Маршалловы Острова|Маджуро",
  "Мексика|Мехико|Канкун",
  "Микронезия|Паликир",
  "Мозамбик|Мапуту",
  "Молдова|Кишинев",
  "Монако|Монако",
  "Монголия|Улан-Батор",
  "Мьянма|Янгон|Нейпьидо",
  "Намибия|Виндхук",
  "Науру|Ярен",
  "Непал|Катманду",
  "Нигер|Ниамей",
  "Нигерия|Лагос|Абуджа",
  "Нидерланды|Амстердам|Роттердам",
  "Никарагуа|Манагуа",
  "Новая Зеландия|Окленд|Веллингтон",
  "Норвегия|Осло|Берген",
  "ОАЭ|Дубай|Абу-Даби|Шарджа",
  "Оман|Маскат",
  "Пакистан|Исламабад|Карачи|Лахор",
  "Палау|Корор",
  "Палестина|Рамалла",
  "Панама|Панама",
  "Папуа - Новая Гвинея|Порт-Морсби",
  "Парагвай|Асунсьон",
  "Перу|Лима|Куско",
  "Польша|Варшава|Краков",
  "Португалия|Лиссабон|Порту",
  "Пуэрто-Рико|Сан-Хуан",
  "Россия|Москва|Санкт-Петербург|Сочи|Екатеринбург|Казань",
  "Руанда|Кигали",
  "Румыния|Бухарест|Клуж-Напока",
  "Сальвадор|Сан-Сальвадор",
  "Самоа|Апиа",
  "Сан-Марино|Сан-Марино",
  "Сан-Томе и Принсипи|Сан-Томе",
  "Сахалин|Южно-Сахалинск|Долинск|Корсаков|Холмск|Невельск|Оха|Поронайск",
  "Саудовская Аравия|Эр-Рияд|Джидда",
  "Северная Корея|Пхеньян",
  "Северная Македония|Скопье",
  "Сейшелы|Виктория",
  "Сенегал|Дакар",
  "Сент-Винсент и Гренадины|Кингстаун",
  "Сент-Китс и Невис|Бастер",
  "Сент-Люсия|Кастри",
  "Сербия|Белград|Ниш",
  "Сингапур|Сингапур",
  "Сирия|Дамаск",
  "Словакия|Братислава",
  "Словения|Любляна",
  "Соломоновы Острова|Хониара",
  "Сомали|Могадишо",
  "Судан|Хартум",
  "Суринам|Парамарибо",
  "США|Нью-Йорк|Лос-Анджелес|Майами",
  "Сьерра-Леоне|Фритаун",
  "Таджикистан|Душанбе|Худжанд",
  "Таиланд|Бангкок|Пхукет|Самуи",
  "Тайвань|Тайбэй",
  "Танзания|Дар-эс-Салам|Занзибар",
  "Того|Ломе",
  "Тонга|Нукуалофа",
  "Тринидад и Тобаго|Порт-оф-Спейн",
  "Тувалу|Фунафути",
  "Тунис|Тунис|Джерба",
  "Туркменистан|Ашхабад",
  "Турция|Стамбул|Анталья|Анкара|Измир",
  "Уганда|Кампала",
  "Узбекистан|Ташкент|Самарканд",
  "Украина|Киев|Львов",
  "Уругвай|Монтевидео",
  "Фиджи|Нади|Сува",
  "Филиппины|Манила|Себу",
  "Финляндия|Хельсинки",
  "Франция|Париж|Ницца|Лион",
  "Хорватия|Загреб|Дубровник",
  "ЦАР|Банги",
  "Чад|Нджамена",
  "Черногория|Подгорица|Тиват",
  "Чехия|Прага|Брно",
  "Чили|Сантьяго",
  "Швейцария|Цюрих|Женева",
  "Швеция|Стокгольм|Гётеборг",
  "Шри-Ланка|Коломбо",
  "Эквадор|Кито|Гуаякиль",
  "Экваториальная Гвинея|Малабо",
  "Эритрея|Асмэра",
  "Эсватини|Мбабане",
  "Эстония|Таллин",
  "Эфиопия|Аддис-Абеба",
  "ЮАР|Йоханнесбург|Кейптаун",
  "Южная Корея|Сеул|Пусан",
  "Южный Судан|Джуба",
  "Ямайка|Кингстон|Монтего-Бей",
  "Япония|Токио|Осака"
].map((line, index) => {
  const [country, ...cities] = line.split("|");
  return { country, cities, premium: Math.round(index * 185 + cities[0].length * 130) };
});

const promoPrices = {
  "Австралия|Сидней": 10000,
  "Сахалин|Южно-Сахалинск": 8900,
  "Сахалин|Долинск": 7900,
  "Россия|Сочи": 7200,
  "Турция|Анталья": 9800,
  "ОАЭ|Дубай": 12900
};

let searchRequestId = 0;
let orders = JSON.parse(localStorage.getItem("aerosovaOrders") || "[]");

const countryUtcOffsets = {
  "Австралия": 10,
  "Сахалин": 10,
  "Россия": 3,
  "Турция": 3,
  "ОАЭ": 4,
  "Армения": 4,
  "Казахстан": 5,
  "Киргизия": 6,
  "Узбекистан": 5,
  "Таджикистан": 5,
  "Грузия": 4,
  "Азербайджан": 4,
  "Китай": 8,
  "Япония": 9,
  "Южная Корея": 9,
  "Таиланд": 7,
  "Индия": 5.5,
  "Германия": 1,
  "Франция": 1,
  "Италия": 1,
  "Испания": 1,
  "Великобритания": 0,
  "США": -5,
  "Канада": -5,
  "Бразилия": -3,
  "Египет": 2
};

const cityUtcOffsets = {
  "Россия|Екатеринбург": 5,
  "Россия|Сочи": 3,
  "Россия|Казань": 3,
  "Россия|Санкт-Петербург": 3,
  "Сахалин|Южно-Сахалинск": 10,
  "Сахалин|Долинск": 10,
  "Сахалин|Корсаков": 10,
  "Сахалин|Холмск": 10,
  "Сахалин|Невельск": 10,
  "Сахалин|Оха": 10,
  "Сахалин|Поронайск": 10,
  "Австралия|Сидней": 10,
  "Австралия|Мельбурн": 10,
  "Австралия|Брисбен": 10,
  "США|Лос-Анджелес": -8,
  "США|Майами": -5,
  "Канада|Ванкувер": -8,
  "ОАЭ|Дубай": 4
};

let selectedFlight = null;

const searchForm = document.querySelector("#flightSearch");
const fromCountry = document.querySelector("#fromCountry");
const toCountry = document.querySelector("#toCountry");
const fromCity = document.querySelector("#fromCity");
const toCity = document.querySelector("#toCity");
const fromCityField = document.querySelector(".from-city-field");
const toCityField = document.querySelector(".to-city-field");
const departDate = document.querySelector("#departDate");
const returnDate = document.querySelector("#returnDate");
const returnField = document.querySelector(".return-field");
const passengers = document.querySelector("#passengers");
const fare = document.querySelector("#fare");
const flightResults = document.querySelector("#flightResults");
const resultsSummary = document.querySelector("#resultsSummary");
const resultsSection = document.querySelector(".results-section");
const bookingModal = document.querySelector("#bookingModal");
const bookingForm = document.querySelector("#bookingForm");
const bookingRoute = document.querySelector("#bookingRoute");
const basePrice = document.querySelector("#basePrice");
const addonsPrice = document.querySelector("#addonsPrice");
const totalPrice = document.querySelector("#totalPrice");
const toast = document.querySelector("#toast");
const ordersList = document.querySelector("#ordersList");
const accountName = document.querySelector("#accountName");
const accountEmail = document.querySelector("#accountEmail");

function setInitialDates() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 8);
  departDate.value = tomorrow.toISOString().slice(0, 10);
  departDate.min = new Date().toISOString().slice(0, 10);
  returnDate.value = nextWeek.toISOString().slice(0, 10);
  returnDate.min = departDate.value;
}

function getCountry(countryName) {
  return countryData.find((item) => item.country === countryName);
}

function populateCountrySelect(select) {
  const placeholder = select.querySelector("option");
  select.innerHTML = "";
  select.append(placeholder);
  countryData.forEach(({ country }) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    select.append(option);
  });
}

function populateCitySelect(countrySelect, citySelect, cityField, preferredCity = "") {
  const country = getCountry(countrySelect.value);
  citySelect.innerHTML = "";

  if (!country) {
    citySelect.disabled = true;
    cityField.hidden = true;
    return;
  }

  country.cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.append(option);
  });

  if (preferredCity && country.cities.includes(preferredCity)) {
    citySelect.value = preferredCity;
  }

  citySelect.disabled = false;
  cityField.hidden = false;
}

function routeLabel(countrySelect, citySelect) {
  return `${citySelect.value}, ${countrySelect.value}`;
}

function routeShortName(countrySelect, citySelect) {
  return citySelect.value || countrySelect.value;
}

function utcOffset(countryName, cityName) {
  return cityUtcOffsets[`${countryName}|${cityName}`] ?? countryUtcOffsets[countryName] ?? 3;
}

function formatTimeFromMinutes(totalMinutes) {
  const minutes = ((totalMinutes % 1440) + 1440) % 1440;
  const hours = Math.floor(minutes / 60).toString().padStart(2, "0");
  const mins = (minutes % 60).toString().padStart(2, "0");
  return `${hours}:${mins}`;
}

function flightTiming(seed) {
  const [hours, minutes] = seed.depart.split(":").map(Number);
  const fromOffset = utcOffset(fromCountry.value, fromCity.value);
  const toOffset = utcOffset(toCountry.value, toCity.value);
  const localDepartMinutes = hours * 60 + minutes;
  const arrivalMinutes = localDepartMinutes - fromOffset * 60 + seed.durationMin + toOffset * 60;
  return {
    depart: seed.depart,
    arrive: formatTimeFromMinutes(arrivalMinutes),
    duration: seed.duration
  };
}

function priceFor(seed, index) {
  const destination = getCountry(toCountry.value);
  const cityIndex = destination ? Math.max(destination.cities.indexOf(toCity.value), 0) : 0;
  const passengerCount = Number(passengers.value);
  const tripMultiplier = searchForm.trip.value === "roundtrip" ? 1.86 : 1;
  const tariff = fareMultiplier[fare.value] || 1;
  const promoKey = `${toCountry.value}|${toCity.value}`;
  const promoBase = promoPrices[promoKey];
  const regularBase = seed.base + (destination ? destination.premium + cityIndex * 900 : 0);
  const base = promoBase ? promoBase + index * 950 : regularBase + index * 700;
  return Math.round(base * tariff * passengerCount * tripMultiplier);
}

function setResultsLoading() {
  resultsSummary.textContent = "Ищем лучшие рейсы и применяем акционные тарифы...";
  flightResults.innerHTML = `
    <article class="flight-card loading-card">
      <div class="loading-strip"></div>
      <div class="loading-copy">
        <strong>Подбираем рейсы Аэросовы</strong>
        <span>Проверяем тарифы, акции и доступные места</span>
      </div>
    </article>
  `;
}

function renderFlightCards() {
  const from = routeShortName(fromCountry, fromCity);
  const to = routeShortName(toCountry, toCity);
  const passengerLabel = Number(passengers.value) === 1 ? "1 пассажир" : `${passengers.value} пассажира`;
  const promoKey = `${toCountry.value}|${toCity.value}`;
  const promoText = promoPrices[promoKey] ? " Акционный тариф применен." : "";
  resultsSummary.textContent = `${from} - ${to}, ${departDate.value}, ${passengerLabel}, тариф ${fare.value}.${promoText}`;

  const cards = routeSeeds.map((seed, index) => {
    const price = priceFor(seed, index);
    const timing = flightTiming(seed);
    const promoBadge = promoPrices[promoKey] ? "<span class=\"promo-badge\">Акция</span>" : "";
    return `
      <article class="flight-card">
        <div class="flight-main">
          <div class="flight-code">
            <strong>${seed.flight}</strong>
            <span>Airbus A321neo</span>
          </div>
          <div class="route-line">
            <span>
              <b>${timing.depart}</b>
              <small>${from}, местное</small>
            </span>
            <span class="route-plane" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M10.5 20.5 13 13l7.5-2.5a1.6 1.6 0 0 0 .2-3L3.8 1.9a1.4 1.4 0 0 0-1.7 1.7L7.7 20.5a1.6 1.6 0 0 0 3-.1Z"></path></svg>
            </span>
            <span>
              <b>${timing.arrive}</b>
              <small>${to}, местное</small>
            </span>
          </div>
          <div class="flight-meta">
            <strong>В пути ${timing.duration}</strong><br>
            прилет по местному времени, ${fare.value} ${promoBadge}
          </div>
        </div>
        <div class="price-box">
          <strong>${formatMoney.format(price)}</strong>
          <button class="book-button" type="button" data-book="${index}">Забронировать</button>
        </div>
      </article>
    `;
  });

  flightResults.innerHTML = cards.join("");
}

function renderResults(event) {
  if (event) {
    event.preventDefault();
  }

  if (!fromCountry.value || !toCountry.value || !fromCity.value || !toCity.value) {
    resultsSummary.textContent = "Выберите страну вылета и прилета. Город появится после выбора страны.";
    flightResults.innerHTML = "";
    return;
  }

  if (fromCountry.value === toCountry.value && fromCity.value === toCity.value) {
    resultsSummary.textContent = "Страна и город вылета совпадают с прилетом. Выберите другое направление.";
    flightResults.innerHTML = "";
    return;
  }

  const currentRequest = ++searchRequestId;
  setResultsLoading();
  if (event) {
    resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  window.setTimeout(() => {
    if (currentRequest === searchRequestId) {
      renderFlightCards();
    }
  }, event ? 2000 : 0);
}

function openBooking(index) {
  const seed = routeSeeds[index];
  const timing = flightTiming(seed);
  selectedFlight = {
    ...seed,
    from: routeLabel(fromCountry, fromCity),
    to: routeLabel(toCountry, toCity),
    fromCity: fromCity.value,
    toCity: toCity.value,
    date: departDate.value,
    departTime: timing.depart,
    arriveTime: timing.arrive,
    duration: timing.duration,
    passengers: Number(passengers.value),
    fare: fare.value,
    flightIndex: index,
    price: priceFor(seed, index)
  };
  startPurchaseWizard();
}

let wizardState = null;

function randomDelay() {
  return Math.floor(1000 + Math.random() * 1000);
}

function passengerCount() {
  return selectedFlight ? selectedFlight.passengers : 1;
}

function seatCatalog() {
  const letters = ["A", "B", "C", "D", "E", "F"];
  const seats = [];
  for (let row = 1; row <= 28; row += 1) {
    letters.forEach((letter) => {
      seats.push({
        code: `${row}${letter}`,
        price: row <= 3 ? 1600 : row <= 8 ? 900 : 600,
        busy: ["2B", "4E", "7A", "12C", "18D", "22F"].includes(`${row}${letter}`)
      });
    });
  }
  return seats;
}

function startPurchaseWizard() {
  wizardState = {
    step: 0,
    fare: selectedFlight.fare,
    passengers: Array.from({ length: passengerCount() }, (_, index) => ({
      firstName: index === 0 ? "Анна" : "",
      lastName: index === 0 ? "Соколова" : "",
      email: index === 0 ? "mail@example.com" : "",
      phone: index === 0 ? "+7 900 000-00-00" : "",
      document: "",
      seat: "",
      meal: "standard"
    })),
    baggage: "0",
    priority: false,
    paymentStage: ""
  };

  bookingModal.hidden = false;
  document.body.style.overflow = "hidden";
  renderWizard();
}

function currentTicketPrice() {
  const currentFare = fare.value;
  fare.value = wizardState.fare;
  const price = priceFor(selectedFlight, selectedFlight.flightIndex || 0);
  fare.value = currentFare;
  return price;
}

function wizardAddonsTotal() {
  const baggage = Number(wizardState.baggage) * passengerCount();
  const meals = wizardState.passengers.reduce((sum, passenger) => {
    if (passenger.meal === "hot") return sum + 950;
    if (passenger.meal === "kids") return sum + 650;
    return sum;
  }, 0);
  const seats = wizardState.passengers.reduce((sum, passenger) => {
    const seat = seatCatalog().find((item) => item.code === passenger.seat);
    return sum + (seat ? seat.price : 0);
  }, 0);
  const priority = wizardState.priority ? 700 * passengerCount() : 0;
  return baggage + meals + seats + priority;
}

function wizardTotal() {
  return currentTicketPrice() + wizardAddonsTotal();
}

function wizardSteps() {
  return ["Тариф", "Пассажиры", "Багаж", "Питание", "Места", "Карта", "Оплата"];
}

function renderWizard() {
  const dialog = document.querySelector(".booking-dialog");
  dialog.innerHTML = `
    <button class="icon-button close-modal" type="button" data-close-modal aria-label="Закрыть бронирование">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"></path></svg>
    </button>
    <div class="booking-head">
      <p class="eyebrow">Покупка билета</p>
      <h2 id="bookingTitle">${wizardState.step === 6 ? "Оплата и бронирование" : "Оформление билета"}</h2>
      <p>${selectedFlight.flight}: ${selectedFlight.fromCity} - ${selectedFlight.toCity}, ${selectedFlight.date}, прилет ${selectedFlight.arriveTime} по местному времени.</p>
    </div>
    <div class="wizard-steps">${wizardSteps().map((step, index) => `
      <span class="${index === wizardState.step ? "active" : ""} ${index < wizardState.step ? "done" : ""}">${index + 1}. ${step}</span>
    `).join("")}</div>
    <div class="wizard-layout">
      <section class="wizard-screen">${renderWizardScreen()}</section>
      <aside class="summary-box wizard-summary">
        <div><span>Билет</span><strong>${formatMoney.format(currentTicketPrice())}</strong></div>
        <div><span>Доп. услуги</span><strong>${formatMoney.format(wizardAddonsTotal())}</strong></div>
        <div class="total"><span>Итого</span><strong>${formatMoney.format(wizardTotal())}</strong></div>
      </aside>
    </div>
    <div class="wizard-actions">
      <button class="book-button ghost" type="button" data-wizard-back ${wizardState.step === 0 ? "disabled" : ""}>Назад</button>
      <button class="primary-action" type="button" data-wizard-next>${wizardState.step === 6 ? "Начать оплату" : "Далее"}</button>
    </div>
  `;

  dialog.querySelectorAll("[data-close-modal]").forEach((element) => element.addEventListener("click", closeBooking));
  dialog.querySelector("[data-wizard-back]").addEventListener("click", wizardBack);
  dialog.querySelector("[data-wizard-next]").addEventListener("click", wizardNext);
  bindWizardScreen(dialog);
}

function renderWizardScreen() {
  if (wizardState.step === 0) {
    const fares = [
      ["Лайт", "Только ручная кладь, минимум сервиса", "Самая низкая цена"],
      ["Оптимум", "Багаж 20 кг и стандартный выбор места", "Для обычной поездки"],
      ["Комфорт", "Больше гибкости, питание и места впереди", "Для долгих перелетов"],
      ["Бизнес", "Приоритет, просторное место и максимум сервиса", "Премиум-тариф"]
    ];
    return `<div class="fare-cards">${fares.map(([name, desc, note]) => `
      <label class="fare-card ${wizardState.fare === name ? "selected" : ""}">
        <input type="radio" name="wizardFare" value="${name}" ${wizardState.fare === name ? "checked" : ""}>
        <strong>${name}</strong>
        <span>${desc}</span>
        <small>${note}</small>
      </label>
    `).join("")}</div>`;
  }

  if (wizardState.step === 1) {
    return `<div class="passenger-forms">${wizardState.passengers.map((passenger, index) => `
      <fieldset>
        <legend>Пассажир ${index + 1}</legend>
        <div class="booking-grid">
          <label class="field"><span>Имя</span><input data-passenger="${index}" data-field="firstName" value="${passenger.firstName}" required></label>
          <label class="field"><span>Фамилия</span><input data-passenger="${index}" data-field="lastName" value="${passenger.lastName}" required></label>
          <label class="field"><span>Email</span><input data-passenger="${index}" data-field="email" type="email" value="${passenger.email}" required></label>
          <label class="field"><span>Телефон</span><input data-passenger="${index}" data-field="phone" value="${passenger.phone}" required></label>
          <label class="field"><span>Документ</span><input data-passenger="${index}" data-field="document" value="${passenger.document}" placeholder="4512 345678" required></label>
        </div>
      </fieldset>
    `).join("")}</div>`;
  }

  if (wizardState.step === 2) {
    return `<div class="addon-list">
      ${[
        ["0", "Без багажа", "ручная кладь до 10 кг"],
        ["1800", "Багаж 20 кг", "для чемодана в отпуск"],
        ["3200", "Багаж 30 кг", "для долгой поездки"]
      ].map(([value, title, desc]) => `
        <label class="addon">
          <input type="radio" name="wizardBaggage" value="${value}" ${wizardState.baggage === value ? "checked" : ""}>
          <span><strong>${title}</strong><small>${desc}</small></span>
          <b>${formatMoney.format(Number(value))}</b>
        </label>
      `).join("")}
      <label class="toggle full-row">
        <input type="checkbox" name="wizardPriority" ${wizardState.priority ? "checked" : ""}>
        <span>Приоритетная посадка для всех пассажиров</span>
        <b>${formatMoney.format(700 * passengerCount())}</b>
      </label>
    </div>`;
  }

  if (wizardState.step === 3) {
    return `<div class="meal-grid">${wizardState.passengers.map((passenger, index) => `
      <label class="field">
        <span>Питание: пассажир ${index + 1}</span>
        <select data-meal="${index}">
          <option value="standard" ${passenger.meal === "standard" ? "selected" : ""}>Стандартное, 0 ₽</option>
          <option value="hot" ${passenger.meal === "hot" ? "selected" : ""}>Горячее меню, 950 ₽</option>
          <option value="kids" ${passenger.meal === "kids" ? "selected" : ""}>Детский набор, 650 ₽</option>
        </select>
      </label>
    `).join("")}</div>`;
  }

  if (wizardState.step === 4) {
    const selectedSeats = wizardState.passengers.map((passenger) => passenger.seat).filter(Boolean);
    return `<div class="seat-screen">
      <div class="plane-map">
        <img src="./images/PLANA320Neo.webp" alt="План салона Airbus A320neo">
      </div>
      <div class="seat-picker">
        <p>Выберите место для каждого пассажира. Цветные места на плане самолета соответствуют салону A320neo.</p>
        ${wizardState.passengers.map((passenger, index) => `
          <label class="field">
            <span>Пассажир ${index + 1}</span>
            <select data-seat="${index}">
              <option value="">Автоматически</option>
              ${seatCatalog().map((seat) => `
                <option value="${seat.code}" ${passenger.seat === seat.code ? "selected" : ""} ${seat.busy || (selectedSeats.includes(seat.code) && passenger.seat !== seat.code) ? "disabled" : ""}>
                  ${seat.code} - ${formatMoney.format(seat.price)}${seat.busy ? " занято" : ""}
                </option>
              `).join("")}
            </select>
          </label>
        `).join("")}
      </div>
    </div>`;
  }

  if (wizardState.step === 5) {
    return `<div class="payment-card">
      <label class="field"><span>Номер карты</span><input inputmode="numeric" placeholder="2200 0000 0000 0000" maxlength="19"></label>
      <div class="booking-grid">
        <label class="field"><span>Срок</span><input placeholder="12/29" maxlength="5"></label>
        <label class="field"><span>CVV</span><input placeholder="123" maxlength="3"></label>
      </div>
      <label class="field"><span>Владелец</span><input placeholder="ANNA SOKOLOVA"></label>
      <p>Это демо. Данные карты никуда не отправляются, ниже будет симуляция связи с банком и транзакции.</p>
    </div>`;
  }

  return `<div class="payment-process">
    <strong>${wizardState.paymentStage || "Готово к оплате"}</strong>
    <div class="bank-progress"><span></span></div>
    <p>После успешной оплаты заказ появится в личном кабинете. Там можно пройти регистрацию на рейс и получить посадочный талон.</p>
  </div>`;
}

function bindWizardScreen(dialog) {
  dialog.querySelectorAll("input[name='wizardFare']").forEach((input) => {
    input.addEventListener("change", () => {
      wizardState.fare = input.value;
      selectedFlight.fare = input.value;
      renderWizard();
    });
  });
  dialog.querySelectorAll("[data-passenger]").forEach((input) => {
    input.addEventListener("input", () => {
      wizardState.passengers[Number(input.dataset.passenger)][input.dataset.field] = input.value;
    });
  });
  dialog.querySelectorAll("input[name='wizardBaggage']").forEach((input) => {
    input.addEventListener("change", () => {
      wizardState.baggage = input.value;
      renderWizard();
    });
  });
  const priority = dialog.querySelector("input[name='wizardPriority']");
  if (priority) {
    priority.addEventListener("change", () => {
      wizardState.priority = priority.checked;
      renderWizard();
    });
  }
  dialog.querySelectorAll("[data-meal]").forEach((select) => {
    select.addEventListener("change", () => {
      wizardState.passengers[Number(select.dataset.meal)].meal = select.value;
      renderWizard();
    });
  });
  dialog.querySelectorAll("[data-seat]").forEach((select) => {
    select.addEventListener("change", () => {
      wizardState.passengers[Number(select.dataset.seat)].seat = select.value;
      renderWizard();
    });
  });
}

function wizardBack() {
  if (wizardState.step > 0) {
    wizardState.step -= 1;
    renderWizard();
  }
}

function passengersValid() {
  return wizardState.passengers.every((passenger) =>
    passenger.firstName.trim() && passenger.lastName.trim() && passenger.email.trim() && passenger.phone.trim() && passenger.document.trim()
  );
}

function wizardNext() {
  if (wizardState.step === 1 && !passengersValid()) {
    wizardState.paymentStage = "";
    alert("Заполните данные всех пассажиров.");
    return;
  }

  if (wizardState.step < 6) {
    wizardState.step += 1;
    renderWizard();
    return;
  }

  simulatePayment();
}

function simulatePayment() {
  const stages = ["Связь с банком...", "Проверка карты...", "Выполнение транзакции...", "Генерация номера бронирования..."];
  let index = 0;
  const button = document.querySelector("[data-wizard-next]");
  button.disabled = true;
  button.textContent = "Оплата...";
  const tick = () => {
    wizardState.paymentStage = stages[index];
    renderWizard();
    index += 1;
    if (index < stages.length) {
      window.setTimeout(tick, 650);
      return;
    }
    window.setTimeout(() => {
      saveWizardOrder();
      renderSuccessScreen();
    }, 650);
  };
  tick();
}

function makeBookingNumber() {
  return `AS-${Math.random().toString(36).slice(2, 5).toUpperCase()}${Date.now().toString().slice(-4)}`;
}

function saveWizardOrder() {
  const bookingNumber = makeBookingNumber();
  const order = {
    number: bookingNumber,
    status: "paid",
    checkedIn: false,
    passenger: `${wizardState.passengers[0].firstName} ${wizardState.passengers[0].lastName}`,
    email: wizardState.passengers[0].email,
    flight: selectedFlight.flight,
    fromCity: selectedFlight.fromCity,
    toCity: selectedFlight.toCity,
    date: selectedFlight.date,
    departTime: selectedFlight.departTime,
    arriveTime: selectedFlight.arriveTime,
    fare: wizardState.fare,
    passengers: wizardState.passengers,
    baggage: wizardState.baggage,
    priority: wizardState.priority,
    total: wizardTotal(),
    boardingPasses: []
  };
  orders = [order, ...orders].slice(0, 8);
  localStorage.setItem("aerosovaOrders", JSON.stringify(orders));
  selectedFlight.bookingNumber = bookingNumber;
  renderOrders();
}

function renderSuccessScreen() {
  const dialog = document.querySelector(".booking-dialog");
  dialog.innerHTML = `
    <button class="icon-button close-modal" type="button" data-close-modal aria-label="Закрыть бронирование">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"></path></svg>
    </button>
    <div class="booking-head success-head">
      <p class="eyebrow">Оплата прошла</p>
      <h2>Билет куплен</h2>
      <p>Номер бронирования ${selectedFlight.bookingNumber}. Заказ сохранен в личном кабинете.</p>
    </div>
    <div class="boarding-preview">
      ${wizardState.passengers.map((passenger, index) => `
        <article class="boarding-pass">
          <span>Маршрутная квитанция</span>
          <strong>${passenger.firstName} ${passenger.lastName}</strong>
          <p>${selectedFlight.fromCity} - ${selectedFlight.toCity}</p>
          <small>${selectedFlight.flight}, место ${passenger.seat || "назначит система"}, ${selectedFlight.date}</small>
        </article>
      `).join("")}
    </div>
    <div class="wizard-actions">
      <a class="primary-action" href="./account.html" data-page-link>Открыть личный кабинет</a>
      <button class="book-button ghost" type="button" data-close-modal>Закрыть</button>
    </div>
  `;
  dialog.querySelectorAll("[data-close-modal]").forEach((element) => element.addEventListener("click", closeBooking));
  setupPageTransitions(dialog);
  showToast();
}

function closeBooking() {
  bookingModal.hidden = true;
  document.body.style.overflow = "";
}

function numericValue(selector) {
  const element = bookingForm.querySelector(selector);
  return element ? Number(element.value) : 0;
}

function bookingTotals() {
  if (!selectedFlight) {
    return { addons: 0, total: 0 };
  }

  const baggage = numericValue('input[name="baggage"]:checked');
  const meal = bookingForm.meal.checked ? Number(bookingForm.meal.value) * selectedFlight.passengers : 0;
  const priority = bookingForm.priority.checked ? Number(bookingForm.priority.value) * selectedFlight.passengers : 0;
  const seat = Number(bookingForm.seat.value) * selectedFlight.passengers;
  const addons = baggage + meal + priority + seat;

  return {
    addons,
    total: selectedFlight.price + addons
  };
}

function updateBookingTotal() {
  if (!selectedFlight) {
    return;
  }

  const totals = bookingTotals();

  basePrice.textContent = formatMoney.format(selectedFlight.price);
  addonsPrice.textContent = formatMoney.format(totals.addons);
  totalPrice.textContent = formatMoney.format(totals.total);
}

function showToast() {
  toast.hidden = false;
  window.setTimeout(() => {
    toast.hidden = true;
  }, 3600);
}

function renderOrders() {
  if (!orders.length) {
    ordersList.innerHTML = `
      <article class="empty-orders">
        <strong>Заказов пока нет</strong>
        <span>Найдите билет и завершите бронирование, чтобы он появился здесь.</span>
      </article>
    `;
    accountName.textContent = "Гость Аэросовы";
    accountEmail.textContent = "Оформите первый билет, чтобы создать профиль.";
    return;
  }

  const latest = orders[0];
  accountName.textContent = latest.passenger;
  accountEmail.textContent = latest.email;
  ordersList.innerHTML = orders.map((order) => `
    <article class="order-card">
      <div>
        <span>${order.number}</span>
        <strong>${order.fromCity} - ${order.toCity}</strong>
        <small>${order.date}, вылет ${order.departTime}, прилет ${order.arriveTime} по местному времени</small>
      </div>
      <div>
        <span>${order.flight}</span>
        <strong>${formatMoney.format(order.total)}</strong>
        <small>${order.fare}, ${Array.isArray(order.passengers) ? order.passengers.length : order.passengers} пасс.</small>
      </div>
    </article>
  `).join("");
}

function saveOrder() {
  const formData = new FormData(bookingForm);
  const totals = bookingTotals();
  const order = {
    number: `AS-${Date.now().toString().slice(-6)}`,
    passenger: `${formData.get("firstName")} ${formData.get("lastName")}`,
    email: formData.get("email"),
    flight: selectedFlight.flight,
    fromCity: selectedFlight.fromCity,
    toCity: selectedFlight.toCity,
    date: selectedFlight.date,
    departTime: selectedFlight.departTime,
    arriveTime: selectedFlight.arriveTime,
    fare: selectedFlight.fare,
    passengers: selectedFlight.passengers,
    total: totals.total
  };

  orders = [order, ...orders].slice(0, 8);
  localStorage.setItem("aerosovaOrders", JSON.stringify(orders));
  renderOrders();
}

function setupCarousel() {
  const slides = [...document.querySelectorAll(".slide")];
  const dots = [...document.querySelectorAll(".carousel-dots button")];
  const prev = document.querySelector(".carousel-control.prev");
  const next = document.querySelector(".carousel-control.next");
  let current = 0;
  let timer;

  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === current));
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === current));
  };

  const schedule = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => show(current + 1), 5500);
  };

  prev.addEventListener("click", () => {
    show(current - 1);
    schedule();
  });

  next.addEventListener("click", () => {
    show(current + 1);
    schedule();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      show(index);
      schedule();
    });
  });

  schedule();
}

function setupPageTransitions(root = document) {
  const loader = document.querySelector("#pageLoader");
  root.querySelectorAll("[data-page-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) {
        return;
      }
      event.preventDefault();
      if (loader) {
        loader.hidden = false;
      }
      window.setTimeout(() => {
        window.location.href = href;
      }, randomDelay());
    });
  });
}

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("open");
});

document.querySelector("#swapRoute").addEventListener("click", () => {
  const route = {
    country: fromCountry.value,
    city: fromCity.value
  };

  fromCountry.value = toCountry.value;
  populateCitySelect(fromCountry, fromCity, fromCityField, toCity.value);

  toCountry.value = route.country;
  populateCitySelect(toCountry, toCity, toCityField, route.city);
});

fromCountry.addEventListener("change", () => {
  populateCitySelect(fromCountry, fromCity, fromCityField);
});

toCountry.addEventListener("change", () => {
  populateCitySelect(toCountry, toCity, toCityField);
});

searchForm.trip.forEach((radio) => {
  radio.addEventListener("change", () => {
    returnField.hidden = searchForm.trip.value !== "roundtrip";
  });
});

departDate.addEventListener("change", () => {
  returnDate.min = departDate.value;
  if (returnDate.value < departDate.value) {
    returnDate.value = departDate.value;
  }
});

searchForm.addEventListener("submit", renderResults);

flightResults.addEventListener("click", (event) => {
  const button = event.target.closest("[data-book]");
  if (button) {
    openBooking(Number(button.dataset.book));
  }
});

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeBooking);
});

bookingForm.addEventListener("input", updateBookingTotal);
bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveOrder();
  closeBooking();
  showToast();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !bookingModal.hidden) {
    closeBooking();
  }
});

populateCountrySelect(fromCountry);
populateCountrySelect(toCountry);
setInitialDates();
renderResults();
setupCarousel();
renderOrders();
setupPageTransitions();
