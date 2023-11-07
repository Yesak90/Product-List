// DIsplay products

function displayProducts(products) {
  const sectionCenter = document.querySelector(".section-center");
  sectionCenter.innerHTML = products
    .map(
      (product) => `
        <div class="product-item">
          <img src="${product.images[0]}" alt="${product.title}">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <p>$${product.price}</p>
        </div>
      `
    )
    .join("");
}

// Category Buttons

function displayCategoryButtons(products) {
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];
  const btnContainer = document.querySelector(".btn-container");
  btnContainer.innerHTML = categories
    .map(
      (category) => `
    <button class="category-btn">${category}</button>
  `
    )
    .join(""); //

  // add event listener to buttons

  btnContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("category-btn")) {
      const category = e.target.textContent;
      const filteredProducts =
        category === "All"
          ? products
          : products.filter((product) => product.category === category);
      displayProducts(filteredProducts);
    }
  });
}

displayProducts(products);
displayCategoryButtons(products);
