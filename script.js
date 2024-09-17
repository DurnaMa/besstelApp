function init() {
    renderMenus();
    renderShoppingBasket();
}

function renderMenus() {
    let menuContainer = document.getElementById("menu");

    for (let categoryIndex = 0; categoryIndex < menu.length; categoryIndex++) {
        menuContainer.innerHTML += /*html*/ `
        <div class="">
            <div class="category">
                <h3>${menu[categoryIndex].category}</h3>
            </div>
            <img src="${menu[categoryIndex].menu_imge}" alt="foto">
            <div id="category${categoryIndex}"></div>
        </div>
        `;

        renderItems(categoryIndex);
    }
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
              <p>Zutaten: ${item.ingredients}</p>
              <p >Kommentare: </p>
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
          <button class="button" onclick="addBasket(${categoryIndex},${itemIndex})">hinzufügen</button>
          `;
    }
}

function renderShoppingBasket() {
    let basketContainer = document.getElementById("shoppingBasket");

    if (basketContainer) {
        basketContainer.innerHTML = ''; // Inhalt des Warenkorbs zurücksetzen

        if (menuBasket[0].items.length > 0) {
            // Jeden Artikel im Warenkorb durchlaufen und anzeigen
            for (let i = 0; i < menuBasket[0].items.length; i++) {
                let basketItem = menuBasket[0].items[i];
                basketContainer.innerHTML += /*html*/ `
                    <h3>${basketItem.dish} - ${basketItem.price.toFixed(2)}€</h3>
                    <h4>Anzahl: ${basketItem.amount}</h4>
                    <button onclick="increaseAmount(${i})">
                        <img class="icon" src="./assets/icons/add.png" alt="add">
                    </button>
                    <button onclick="decreaseAmount(${i})">
                        <img class="icon" src="./assets/icons/minus.png" alt="minus">
                    </button>
                `;
            }
            // Gesamtpreis berechnen und anzeigen
            calculatePrice();
        } else {
            // Wenn der Warenkorb leer ist
            basketContainer.innerHTML = /*html*/ `
                <h3>Fülle deinen Warenkorb</h3>
                <h4>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</h4>
            `;
        }
    }
}


function addBasket(categoryIndex, itemIndex) {
    let basketContainer = document.getElementById(`shoppingBasket`);

    if (menu[categoryIndex] && menu[categoryIndex].items[itemIndex]) {
        let item = menu[categoryIndex].items[itemIndex];

        let foundIndex = menuBasket[0].items.findIndex((basketItem) => {
            return basketItem.dish === item.dish;
        });

        if (foundIndex === -1) {
            menuBasket[0].items.push({
                dish: item.dish,
                price: item.price,
                amount: 1,
            });
        } else {
            menuBasket[0].items[foundIndex].amount++;
        }

        renderShoppingBasket();
    }
}

function calculatePrice() {
    let totalPrice = 0;

    if (menuBasket && menuBasket[0] && menuBasket[0].items) {
        for (let i = 0; i < menuBasket[0].items.length; i++) {
            let item = menuBasket[0].items[i];
            totalPrice += item.price * item.amount;
        }
    }

    // Gesamtpreis im Warenkorb anzeigen
    let basketContainer = document.getElementById("shoppingBasket");
    if (basketContainer) {
        basketContainer.innerHTML += `<h3>Gesamtpreis: ${totalPrice.toFixed(2)}€</h3>`;
    }
}

function increaseAmount(index) {
    menuBasket[0].items[index].amount++;
    renderShoppingBasket();
}

function decreaseAmount(index) {
    menuBasket[0].items[index].amount--;
    if (menuBasket[0].items[index].amount <= 0) {
        // Artikel aus dem Warenkorb entfernen
        menuBasket[0].items.splice(index, 1);
    }
    renderShoppingBasket();
}
