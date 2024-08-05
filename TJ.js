const products = [
    {
        name: "Glaxy-Cc-TV",
        url:"images/cc-cam5.jpeg",
        category:"cc-Tv",
        price: 199.99
    },
    {
        name: "HP-Cc-TV",
        url:"images/cc-cam4.webp",
        category:"cc-Tv",
        price: 599.99
    },
    
    {
        name: "Canon-camera",
        url:"images/cam4.jpeg",
        category:"cameras",
        price: 499.99
    },
    {
        name: "Sony-LED",
        url: "images/Lcd4.webp",
        category:"lcd's",
        price: 599.99
    },
    {
        name: "Canon-camera",
        url:"images/cam5.jpeg",
        category:"cameras",
        price: 499.99
    },
   
    {
        name: "Dell-LED",
        url:"images/Lcd5.jpeg",
        category:"lcd's",
        price: 599.99
    },
    {
        name: "SamSung-Cc-TV",
        url:"images/cc-cam6.jpeg",
        category:"cc-Tv",
        price: 399.99
    },
    
    {
        name: "Nokia-LED",
        url: "images/Lcd1.jpg",
        category:"lcd's",
        price: 449.99
    },
    {
        name: "Lemda-Speaker",
        url:"images/sp1.jpg",
        category:"speaker",
        price: 299.99,
    },
    {
        name: "Helta-Play",
        url:"images/play5.jpg",
        category:"games",
        price: 199.99
    },
    {
        name: "SamSung-Tab",
        url:"images/sam-tab-4.webp",
        category:"tablets",
        price: 599.99
    },
    {
        name: "Glaxo-Speaker",
        url:"images/sp10.jpeg",
        category:"speaker",
        price: 1.99
    },
    {
        name: "Dell-Tab",
        url:"images/sony-tab-3.jpg",
        category:"tablets",
        price: 699.99
    },
    {
        name: "Mujure-Tab",
        url:"images/sam-tab-1.jpeg",
        category:"tablets",
        price: 299.99
    },
    {
        name: "Sony-Speaker",
        url:"images/sp2.jpeg",
        category:"speaker",
        price: 399.99
    },
    {
        name: "Helric-camera",
        url:"images/cam3.jpg",
        category:"cameras",
        price: 395.99
    },
    {
        name: "Nelia-Speaker",
        url:"images/sp3.webp",
        category:"speaker",
        price: 499.99
    },
    {
        name: "Sony-Play",
        url:"images/play3.jpg",
        category:"games",
        price: 399.99
    },
];

const productsWrapper = document.getElementById("products-wrapper");
const checkboxes = document.querySelectorAll(".check");
const filtersContainer = document.getElementById("filters-container");
const searchInput = document.getElementById("search");
const cartCount = document.getElementById("cart-count");

let cartItemCount  = 0;

const productElements = [];

filtersContainer.addEventListener("change", filterProducts);
searchInput.addEventListener("input", filterProducts);
products.forEach((product)=>{
    const productElement = createProductElement(product);   

    productElements.push(productElement);
    productsWrapper.appendChild(productElement)
});

function createProductElement(product){
    const productElement = document.createElement("div")
    productElement.className = "item space-y-2";

    productElement.innerHTML = `
       <div
        class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl"
      >
        <img 
            src="${product.url}" 
            alt="${product.name}" 
           class="w-full h-full object-cover"
        />
        <button
          class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0"
        >
          Add To Cart
        </button>

        </div>
        <p class="text-xl">${product.name}</p>
        <strong>$${product.price.toLocaleString()}</strong>
    `;
    productElement.querySelector(".status").addEventListener("click", updateCart);
    return productElement;
}

function updateCart(e){
    const statusEl = e.target;
    if(statusEl.classList.contains("added")){
        statusEl.classList.remove("added");
        statusEl.innerText = "Add To Cart";
        statusEl.classList.remove("bg-red-600");
        statusEl.classList.add("bg-gray-800");
        
        cartItemCount--;
    }else{
        statusEl.classList.add("added");
        statusEl.innerText = "Remove From Cart";
        statusEl.classList.remove("bg-gray-800");
        statusEl.classList.add("bg-red-600");
        
        cartItemCount++;
    }
    cartCount.innerText = cartItemCount.toString();
}
function filterProducts( ) {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const checkedCategories = Array.from(checkboxes)
      .filter((check) => check.checked)
      .map((check) => check.id);
    productElements.forEach((productElement, index) => {
      const product = products[index];
      const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
      const isInCheckedCategory =
        checkedCategories.length === 0 ||
        checkedCategories.includes(product.category);
      if (matchesSearchTerm && isInCheckedCategory) {
        productElement.classList.remove('hidden');
      } else {
        productElement.classList.add('hidden');
      }
    });
  }
