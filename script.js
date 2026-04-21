let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

// PRODUCT DATA (30+ items)
const products = [
  { name: "Dog T-Shirt", price: 499, img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e" },
  { name: "Winter Dog Jacket", price: 899, img: "https://images.unsplash.com/photo-1601758003122-58b3b7b4c6b0" },
  { name: "Pedigree Dog Food", price: 999, img: "https://images.unsplash.com/photo-1601758123927-196cb6b67f62" },
  { name: "Dog Toy Bone", price: 299, img: "https://images.unsplash.com/photo-1598133894009-61f6d3cb6c0b" },
  { name: "Calcium Bones Pack", price: 399, img: "https://images.unsplash.com/photo-1558944351-c0c6c9b6c3c3" },
  { name: "Dog Chew Stick", price: 199, img: "https://images.unsplash.com/photo-1601758177266-bc599de87707" },
  { name: "Dog Hoodie", price: 799, img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b" },
  { name: "Dog Sweater", price: 699, img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d" },
  { name: "Dog Collar", price: 249, img: "https://images.unsplash.com/photo-1558944351-c0c6c9b6c3c3" },
  { name: "Dog Leash", price: 349, img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b" },
  { name: "Dog Bed", price: 1499, img: "https://images.unsplash.com/photo-1558788353-f76d92427f16" },
  { name: "Dog Shampoo", price: 299, img: "https://images.unsplash.com/photo-1583512603879-63d2d7d3c7c1" },
  { name: "Dog Brush", price: 199, img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238" },
  { name: "Dog Ball Toy", price: 149, img: "https://images.unsplash.com/photo-1574158622682-e40e69881006" },
  { name: "Dog Rope Toy", price: 199, img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
  { name: "Dog Biscuit Pack", price: 249, img: "https://images.unsplash.com/photo-1598133894009-61f6d3cb6c0b" },
  { name: "Chicken Dog Treats", price: 349, img: "https://images.unsplash.com/photo-1601758177266-bc599de87707" },
  { name: "Fish Dog Treats", price: 399, img: "https://images.unsplash.com/photo-1601758123927-196cb6b67f62" },
  { name: "Dog Raincoat", price: 899, img: "https://images.unsplash.com/photo-1507149833265-60c372daea22" },
  { name: "Dog Boots", price: 799, img: "https://images.unsplash.com/photo-1558788353-f76d92427f16" },
  { name: "Dog Cap", price: 199, img: "https://images.unsplash.com/photo-1583512603879-63d2d7d3c7c1" },
  { name: "Dog Sunglasses", price: 299, img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d" },
  { name: "Dog Feeding Bowl", price: 249, img: "https://images.unsplash.com/photo-1558788353-f76d92427f16" },
  { name: "Automatic Feeder", price: 1999, img: "https://images.unsplash.com/photo-1601758177266-bc599de87707" },
  { name: "Dog Water Bottle", price: 399, img: "https://images.unsplash.com/photo-1574158622682-e40e69881006" },
  { name: "Dog Carrier Bag", price: 1499, img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b" },
  { name: "Dog Blanket", price: 599, img: "https://images.unsplash.com/photo-1558788353-f76d92427f16" },
  { name: "Dog Toothbrush Kit", price: 299, img: "https://images.unsplash.com/photo-1583512603879-63d2d7d3c7c1" },
  { name: "Dog Training Pads", price: 499, img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238" },
  { name: "Dog Perfume", price: 349, img: "https://images.unsplash.com/photo-1583512603879-63d2d7d3c7c1" }
];

// LOAD PRODUCTS
function displayProducts() {
  let container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
      </div>
    `;
  });
}

// SEARCH FUNCTION
function searchProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let filtered = products.filter(p => p.name.toLowerCase().includes(input));

  let container = document.getElementById("product-list");
  container.innerHTML = "";

  filtered.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
      </div>
    `;
  });
}

// INITIAL LOAD
displayProducts();