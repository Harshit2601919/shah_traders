const products = [
  {
    id: 1,
    name: "Industrial Mixer Pro 3000",
    category: "MultiMix/Jar",
    price: 1299.99,
    image: "images/id1.jpeg",
    description:
      "Professional-grade industrial mixer with variable speed control",
    detailedDescription:
      "The Industrial Mixer Pro 3000 is a heavy-duty mixer designed for industrial applications. With its powerful motor and durable construction, it can handle the most demanding mixing tasks.",
    features: [
      "Variable speed control from 100-1000 RPM",
      "Heavy-duty stainless steel construction",
      "Digital display with programmable presets",
      "3-year manufacturer warranty",
      "Compatible with all standard attachments",
    ],
  },
  {
    id: 2,
    name: "Heavy Duty Storage Jar",
    category: "MultiMix/Jar",
    price: 199.99,
    image: "images/jars.png",
    description: "20L capacity industrial storage jar with airtight seal",
    detailedDescription:
      "Our Heavy Duty Storage Jar is perfect for storing and processing materials safely. Made from high-quality materials, this jar features an airtight seal to preserve your contents.",
    features: [
      "20L capacity",
      "Heat-resistant borosilicate glass",
      "Airtight silicone seal",
      "Dishwasher safe",
      "Compatible with all MultiMix models",
    ],
  },
  {
    id: 3,
    name: "Mixer Blade Assembly",
    category: "Blade",
    price: 149.99,
    image: "images/blades.png",
    description:
      "Replacement blade assembly for Industrial Mixer Pro series",
    detailedDescription:
      "This high-quality replacement blade assembly is designed specifically for the Industrial Mixer Pro series. Made from durable stainless steel, it ensures consistent performance and longevity.",
    features: [
      "Precision-engineered stainless steel blades",
      "Easy installation - no special tools required",
      "Compatible with Pro 2000, 3000, and 4000 models",
      "Balanced design for smooth operation",
      "Dishwasher safe for easy cleaning",
    ],
  },
  {
    id: 4,
    name: "Juicer",
    category: "Juicer",
    price: 799.99,
    image: "images/juicer.png",
    description: "Compact industrial mixer for small to medium batches",
    detailedDescription:
      "The Compact Mixer X1 offers professional mixing capabilities in a smaller footprint. Perfect for laboratories, small businesses, or any application where space is at a premium.",
    features: [
      "Compact design with 10L capacity",
      "5 speed settings with pulse function",
      "Whisper-quiet operation",
      "Energy efficient motor",
      "Includes 3 mixing attachments",
    ],
  },
  {
    id: 5,
    name: "blender op",
    category: "Blender",
    price: 799.99,
    image: "/images/blender.png",
    description: "Compact industrial mixer for small to medium batches",
    detailedDescription:
      "The Compact Mixer X1 offers professional mixing capabilities in a smaller footprint. Perfect for laboratories, small businesses, or any application where space is at a premium.",
    features: [
      "Compact design with 10L capacity",
      "5 speed settings with pulse function",
      "Whisper-quiet operation",
      "Energy efficient motor",
      "Includes 3 mixing attachments",
    ],
  },
];


const productsGrid = document.getElementById("productsGrid");
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const applyFilters = document.getElementById("applyFilters");
const resetFilters = document.getElementById("resetFilters");


renderProducts(products);


categoryFilter.addEventListener("change", applyFiltersHandler);
searchButton.addEventListener("click", applyFiltersHandler);
applyFilters.addEventListener("click", applyFiltersHandler);
resetFilters.addEventListener("click", resetFiltersHandler);

// Functions
function renderProducts(productsArray) {
  productsGrid.innerHTML = "";
  productsArray.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "col-md-4 mb-4";
    productCard.innerHTML = `
              <div class="product-card" data-bs-toggle="modal" data-bs-target="#productModal" onclick="openProductModal(${
                product.id
              })">
                  <img src="${product.image}" class="product-img" alt="${
      product.name
    }">
                  <div class="product-content">
                      <h3 class="product-title">${product.name}</h3>
                      <p class="product-desc">${product.description}</p>
                      <div class="product-price">$${product.price.toFixed(
                        2
                      )}</div>
                  </div>
              </div>
          `;
    productsGrid.appendChild(productCard);
  });
}

function openProductModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    document.getElementById("modalProductTitle").textContent =
      product.name;
    document.getElementById("modalProductImage").src = product.image;
    document.getElementById(
      "modalProductPrice"
    ).textContent = `$${product.price.toFixed(2)}`;
    document.getElementById("modalProductDescription").textContent =
      product.detailedDescription;
    const featuresList = document.getElementById("modalProductFeatures");
    featuresList.innerHTML = "";
    product.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      featuresList.appendChild(li);
    });
  }
}

function applyFiltersHandler() {
  const selectedCategory = categoryFilter.value;
  const searchTerm = searchInput.value.toLowerCase();

  let filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "all" ||
        product.category === selectedCategory) &&
      (product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm))
    );
  });

  renderProducts(filteredProducts);
}

function resetFiltersHandler() {
  categoryFilter.value = "all";
  searchInput.value = "";
  renderProducts(products);
}