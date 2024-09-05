function init() {
  renderMenus();
  renderShoppingBasket();
  addBasket();
}

function renderMenus() {
  let menuContainer = document.getElementById("menu");

  for (let categoryIndex = 0; categoryIndex < menu.length; categoryIndex++) {
    menuContainer.innerHTML += /*html*/ `
        <div class="category">
            <h3>${menu[categoryIndex].category}</h3>
        </div>
        <!-- <img src="${menu[categoryIndex].menu_imge}" alt="foto"> -->
        <div id="category${categoryIndex}"></div>
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
    basketContainer.innerHTML = /*html*/ `
        <h3>Fülle deinen Warenkorb</h3>
        <h4>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</h4>
    `;
  }
}

function addBasket(categoryIndex, itemIndex) {
  let basketContainer = document.getElementById(`shoppingBasket`);

  if (menu[categoryIndex] && menu[categoryIndex].items[itemIndex]) {
    let item = menu[categoryIndex].items[itemIndex];

    for (let basketIndex = 0; basketIndex < item.length; basketIndex++) {
      let basketIndex = menuBasket.findIndex((basketItem) => {
        return basketItem === dish;
      });

      if (basketIndex === -1) {
        menuBasket.push({ dish: item.dish, amount: 1, price: item.price });
      } else {
        menuBasket[basketIndex]["amount"]++;
      }
    }
    basketContainer.innerHTML += /*html*/ `
                <h3>${menu[categoryIndex].category}</h3>
                <h3>${item.dish} - ${item.price.toFixed(2)}€</h3>
                <img class="icon" src="./assets/icons/add.png" alt="add">
                <img class="icon" src="./assets/icons/minus.png" alt="minus">
                
        `;
  }
}
