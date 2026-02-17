const loadProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  displayProducts(data);
};

const displayProducts = (products) => {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  for (let product of products) {
    const card = document.createElement("div");
    card.classList.add("card", "bg-base-100", "shadow-xl");

    card.innerHTML = `
        <figure class="p-5">
          <img src="${product.image}" class="h-40 object-contain" />
        </figure>

        <div class="card-body">
          <h2 class="card-title">${product.title}</h2>
          <p class="text-sm text-gray-500">${product.category}</p>

          <p class="font-bold text-lg">$${product.price}</p>

          <div class="card-actions justify-end">
            <button onclick="showDetails(${product.id})"
             class="btn btn-primary">
              View Details
            </button>
          </div>
        </div>
    `;

    productContainer.appendChild(card);
  }
};

const showDetails = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();

  alert(data.title);
};


loadProducts();