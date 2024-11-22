let sum = 0;
let isDeliverySelected = true;

function init() {
    renderMenus();
    //    loadBasket();
    renderShoppingBasket();
    renderBasket();
    closeCashDesk();
    renderCategory();
    mobilCashDesk();
}

function renderMenus() {
    let menuContainer = document.getElementById("menu");

    for (let categoryIndex = 0; categoryIndex < menu.length; categoryIndex++) {
        menuContainer.innerHTML += /*html*/ `
        <div class="menu-mobil">
            <div class="category">
                <h3 id="${menu[categoryIndex].category.toLowerCase()}">${
            menu[categoryIndex].category
        }</h3>
            </div>
            <img src="${menu[categoryIndex].menu_imge}" alt="foto">
            <div id="category${categoryIndex}"></div>
        </div>
        `;

        renderItems(categoryIndex);
    }
}

function renderBasket() {
    let basketContainer = document.getElementById("basket");
    basketContainer.innerHTML = "";
    basketContainer.innerHTML += /*html*/ `
        <div class="basket-warenkorp" id="basket">
            <button onclick="mobilCloseMenue()">
                <img class="close" src="./assets/icons/close.png" alt="close">
            </button>
            <h2>Warenkorb</h2>
            <div class="cart-header">
                <button id="deliveryBtn" class="delivery active" onclick="toggleDelivery()">
                    Lieferung<br />20 - 45 min <br>ab 20 €
                </button>
                <button id="pickupBtn" class="pickup" onclick="togglePickup()">
                    Abholung<br />15 min
                </button>
            </div>

            <div id="shoppingBasket"></div>
            <div onclick="closeCashDesk()" id="cashDeskContainer"></div>
        </div>`;

    renderShoppingBasket();
}

function renderItems(categoryIndex) {
    let itemContainer = document.getElementById(`category${categoryIndex}`);

    for (
        let itemIndex = 0;
        itemIndex < menu[categoryIndex].items.length;
        itemIndex++
    ) {
        const item = menu[categoryIndex].items[itemIndex];
        itemContainer.innerHTML += /*html*/ `
              <h4>${item.dish} - ${item.price.toFixed(2)}€</h4>
              <p>Zutaten: ${item.ingredients} </p>
              <p>Kommentare: </p>
          `;

        if (item.comments && item.comments.length > 0) {
            item.comments.forEach((comment) => {
                itemContainer.innerHTML += `
              <p class="comment">${comment.name}: "${comment.comment}"</p>
              `;
            });
        } else {
            itemContainer.innerHTML += /*html*/ `
              <p class="comment">Keine Kommentare vorhanden</p>
              `;
        }

        itemContainer.innerHTML += /*html*/ `
          <button class="button-menu" onclick="addBasket(${categoryIndex},${itemIndex})">hinzufügen</button>
          `;
    }
}

function renderShoppingBasket() {
    let basketContainer = document.getElementById("shoppingBasket");

    if (basketContainer) {
        basketContainer.innerHTML = "";

        if (menuBasket.length > 0) {
            for (let i = 0; i < menuBasket.length; i++) {
                let basketItem = menuBasket[i];
                basketContainer.innerHTML += /*html*/ `
                <div class="basket">
                    <div>
                        <strong class="basket-menu">
                            <div>${basketItem.dish}</div>
                            <div>${basketItem.price.toFixed(2)}€</div>
                        </strong>
                    </div>
                    <div class="amount">
                        <div class="trash">
                            <button class="button-minus" onclick="trash(${i})">
                                <img class="basket-icon" src="./assets/icons/trash.png" alt="trash">
                            </button>
                        </div>
                        <button class="button-add" onclick="increaseAmount(${i})">
                            <img class="basket-icon" src="./assets/icons/add.png" alt="add">
                        </button>
                        <strong>${basketItem.amount}</strong>
                        <button class="button-minus" onclick="decreaseAmount(${i})">
                            <img class="basket-icon" src="./assets/icons/minus.png" alt="minus">
                        </button>
                    </div>
                </div>
                `;
            }
            calculatePrice();
        } else {
            basketContainer.innerHTML = /*html*/ `
                <div class="empty-basket">
                    <img class="empty-icon" src="./assets/icons/empty-basket.png" alt="empty basket">
                    <h3>Fülle deinen Warenkorb</h3>
                    <p>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
                </div>
            `;
        }

        // mobilCashDesk();
    }
}

// toggle
function toggleDelivery() {
    let deliveryBtn = document.getElementById("deliveryBtn");
    let pickupBtn = document.getElementById("pickupBtn");

    deliveryBtn.classList.add("active");
    pickupBtn.classList.remove("active");
    isDeliverySelected = true;
}

function togglePickup() {
    let deliveryBtn = document.getElementById("deliveryBtn");
    let pickupBtn = document.getElementById("pickupBtn");

    pickupBtn.classList.add("active");
    deliveryBtn.classList.remove("active");
    isDeliverySelected = false;
}
// toggle end

function addBasket(categoryIndex, itemIndex) {
    if (menu[categoryIndex] && menu[categoryIndex].items[itemIndex]) {
        let item = menu[categoryIndex].items[itemIndex];

        let foundIndex = menuBasket.findIndex((basketItem) => {
            return basketItem.dish === item.dish;
        });

        if (foundIndex === -1) {
            menuBasket.push({
                dish: item.dish,
                price: item.price,
                amount: 1,
            });
        } else {
            menuBasket[foundIndex].amount++;
        }

        renderShoppingBasket();
        saveBasket();
    }
}

function calculatePrice() {
    sum = 0;

    if (menuBasket && menuBasket.length > 0) {
        for (
            let menuBasketIndex = 0;
            menuBasketIndex < menuBasket.length;
            menuBasketIndex++
        ) {
            sum +=
                menuBasket[menuBasketIndex].price *
                menuBasket[menuBasketIndex].amount;
        }

        let basketContainer = document.getElementById("shoppingBasket");
        if (basketContainer) {
            basketContainer.innerHTML += /*html*/ `
                <button onclick="openCashDesk()" id="cashDesk" class="total-price">
                    <strong>Gesamtpreis: ${sum.toFixed(2)}€</strong>
                </button>`;
        }
    }

    mobilCashDesk();
}

function increaseAmount(index) {
    menuBasket[index].amount++;
    renderShoppingBasket();
    saveBasket();
}

function decreaseAmount(index) {
    menuBasket[index].amount--;
    if (menuBasket[index].amount <= 0) {
        menuBasket.splice(index, 1);
    }
    renderShoppingBasket();
    saveBasket();
}

function showSnackbar(message) {
    const snackbar = document.getElementById("snackbar");
    snackbar.textContent = message;
    snackbar.className = "show";
    setTimeout(() => snackbar.className = snackbar.className.replace("show", ""), 3000);
}

function openCashDesk() {
    if (isDeliverySelected && sum < 20.0) {
        showSnackbar("Der Mindestbestellwert beträgt 20,00€.");
        return;
    }

    document.getElementById("cashDeskContainer").innerHTML = "";
    document.getElementById("cashDeskContainer").classList.remove("d-none");
    document.getElementById("cashDeskContainer").innerHTML = /*html*/ `
        <div class="centered-container">
            <div class="text">
                <p>Das ist ein Lieferando-Testprojekt.</p>
                <br>
                <p>Umzuschließen, im Fenster Drucken</p>
            </div>
        </div>
    `;
    
    deleteAll();
    sum = 0;
    mobilCashDesk();
}

function closeCashDesk() {
    document.getElementById("cashDeskContainer").classList.add("d-none");
}

function mobilOpenMenu() {
    let basketContainer = document.getElementById("basket");
    basketContainer.classList.add("basket-container-mobil");

    renderBasket();
}

function mobilCashDesk() {
    let basketContainer = document.getElementById("mobilCashDesk");

    basketContainer.innerHTML = "";
    basketContainer.innerHTML += /*html*/ `
       <button id="mobilMenu" class="mobilMenu" onclick="mobilOpenMenu()">
           Kasse ${sum.toFixed(2)}€
       </button>`;
}

function mobilCloseMenue() {
    document.getElementById("basket").classList.add("basket-container");
    document
        .getElementById("basket")
        .classList.remove("basket-container-mobil");
}

function renderCategory() {
    let categoryContainer = document.getElementById("categoryTop");

    for (let categoryIndex = 0; categoryIndex < menu.length; categoryIndex++) {
        categoryContainer.innerHTML += /*html*/ `
        <div class="category">
            <a href="#${menu[categoryIndex].category.toLowerCase()}">${
            menu[categoryIndex].category
        }</a>
        </div>
                `;
    }
}

function deleteAll() {
    menuBasket = [];

    renderShoppingBasket();
}

function saveBasket() {
    localStorage.setItem("basket", JSON.stringify(menuBasket));
    renderShoppingBasket();
}

function trash(menuIndex) {
    menuBasket.splice(menuIndex, 1);
    saveBasket();
}
