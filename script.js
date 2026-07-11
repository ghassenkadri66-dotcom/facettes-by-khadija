/*==========================================

            NAVBAR SCROLL

==========================================*/

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});


/*==========================================

            MOBILE MENU

==========================================*/

const menuToggle=document.querySelector(".menu-toggle");

const navLinks=document.querySelector(".nav-links");

menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});


const links=document.querySelectorAll(".nav-links a");

links.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

document.addEventListener("click", (e) => {

    if (
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {

        navLinks.classList.remove("active");

    }

});


window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        navLinks.classList.remove("active");

    }

});


/*==========================================

            universe section showslide

==========================================*/

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide() {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[currentSlide].classList.add("active");

}

function nextSlide() {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide();
    
}
setInterval(nextSlide,4000);





/*==========================================

           section collection add products

==========================================*/

const productsContainer = document.querySelector(".products-container");

const products = [

    {

        id:1,

        name:"Hidden Freedom",

        gender :"homme",

        price:"62 DT",

        image:"images/produit-1.jpeg",

        hoverImage:"images/hoverimagee.jpeg"

    },

    {

        id:2,

        name:"Forbidden Game",

        gender :"femme",

        price:"62 DT",

        image:"images/produit-2.jpeg",

        hoverImage:"images/produit-2-cover.jpeg"

    },

    {

        id:3,

        name:"Imperial Flame",

        gender :"homme",

        price:"62 DT",

        image:"images/produit-3.jpeg",

        hoverImage:"images/produit-3-cover.jpeg"

    },
     {

        id:4,

        name:"Entre Deux Mondes",

        gender :"femme",

        price:"62 DT",

        image:"images/produit-4.jpeg",

        hoverImage:"images/produit-4-cover.jpeg"

    },
     {

        id:5,

        name:"Next Horizon",

        gender :"femme",

        price:"62 DT",

        image:"images/produit-5.jpeg",

        hoverImage:"images/produit-5-cover.jpeg"

    },
     {

        id:6,

        name:"Devine Ember",

        gender :"unisex",

        price:"62 DT",

        image:"images/produit-6.jpeg",

        hoverImage:"images/produit-6-cover.jpeg"

    },
     {

        id:7,

        name:"Bonbon sur la cerise",

        gender :"femme",

        price:"62 DT",

        image:"images/produit-7.jpeg",

        hoverImage:"images/produit-7-cover.jpeg"

    },

    

];

products.forEach(product => {

    productsContainer.innerHTML += `

        <div class="product-card" data-gender="${product.gender}">

            <div class="product-image">

                <img src="${product.image}" alt="${product.name}" class="main-image">
                <img src="${product.hoverImage}" alt="${product.name}" class="hover-image">
                <button class='btn-img'>apercu rapide</button>
            </div>

            <h3>${product.name}</h3>

            <span class="gender">

                 ${product.gender}

            </span>

            <p>${product.price}</p>

        <div class="quantity">

            <button class="minus">−</button>

            <span class="count">1</span>

            <button class="plus">+</button>

        </div>

          <button
                class="order-btn"
                data-id="${product.id}"
            >

                Order via WhatsApp

            </button>
        

    `;
    

});

/* gender function */


const filterButtons = document.querySelectorAll(".filter-btn");

const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        productCards.forEach(card=>{

            if(

                filter==="all" ||

                card.dataset.gender===filter

            ){

                card.style.display="block";

            }

            else{

                card.style.display="none";

            }

        });


    });

});

/* quantite function */
const quantityBoxes = document.querySelectorAll(".quantity");

quantityBoxes.forEach(box => {

    const minus = box.querySelector(".minus");

    const plus = box.querySelector(".plus");

    const count = box.querySelector(".count");

    let quantity = 1;

        plus.addEventListener("click",()=>{

        quantity++;


        count.textContent = quantity;

    }) 
        minus.addEventListener("click",()=>{

        if(quantity > 1){

            quantity--;

            count.textContent = quantity;

        }

    });

});


/*==========================================

            order via  whats up 

==========================================*/

const modal = document.querySelector("#orderModal");
const modalProductName = document.querySelector(".modal-product-name");
const modalProductPrice = document.querySelector(".modal-product-price");


const modalProductQuantity=document.querySelector(".modal-product-quantity");


const customerName=document.querySelector(".customer-name");

const customerPhone=document.querySelector(".customer-phone");

const sendOrder=document.querySelector(".send-order");

let selectedProduct=null;

let selectedQuantity=1;







const modalProductTotal = document.querySelector(".modal-product-total");
const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const card = button.closest(".product-card");

        const quantity = Number(

            card.querySelector(".count").textContent

        );

        modalProductQuantity.textContent = quantity;

        const price = 85;

        const total = quantity * price;

        modalProductTotal.textContent = total + " DT";

        modal.classList.add("active");

    });
            

    
orderButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const productId=Number(button.dataset.id);

        selectedProduct=products.find(product=>product.id===productId);

        const card=button.closest(".product-card");

        selectedQuantity=Number(

            card.querySelector(".count").textContent

        );

        const price=parseFloat(selectedProduct.price);

        const total=price*selectedQuantity;

        modalProductName.textContent=selectedProduct.name;

        modalProductPrice.textContent=selectedProduct.price;

        modalProductQuantity.textContent=selectedQuantity;

        modalProductTotal.textContent=total+" DT";

        modal.classList.add("active");

    });

});

});


modalProductTotal.style.color='var(--gold-color) ';
modalProductPrice.style.color='var(--gold-color)';
modalProductName.style.color='var(--green-color)';
modalProductQuantity.style.color='black';

/*==========================================

          close order modal

==========================================*/

const closeModal = document.querySelector(".close-modal");

closeModal.addEventListener("click",()=>{

    modal.classList.remove("active");

});

modal.addEventListener("click", e => {

    if(e.target === modal){

        modal.classList.remove("active");

    }

});



/*==========================================

          send order 

==========================================*/
const errorMessage = document.querySelector(".error-message");


sendOrder.addEventListener("click",()=>{

    const name=customerName.value.trim();

    const phone=customerPhone.value.trim();
    customerName.addEventListener("input", () => {

    errorMessage.style.display = "none";

});

customerPhone.addEventListener("input", () => {

    errorMessage.style.display = "none";

});

    if(name==="" || phone===""){

errorMessage.style.display = "block";
errorMessage.style.color = "red";

errorMessage.textContent = "Please enter your name and phone number.";

return;

}
errorMessage.style.display = "none";


    const message=

`Hello,

Product : ${selectedProduct.name}

Price : ${selectedProduct.price}

Quantity : ${selectedQuantity}

Total : ${modalProductTotal.textContent}

Name : ${name}

Phone : ${phone}   

 `;

    const whatsappNumber="21626889987";
    

    window.open(

`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)} `,

"_blank" 



);
customerName.value="";

customerPhone.value="";


modal.classList.remove("active");

});



/*==========================================

      PARTNERSHIP WHATSAPP

==========================================*/

const partnershipForm = document.querySelector(".partnership-form");

partnershipForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const firstName = document.querySelector("#firstName").value.trim();

    const lastName = document.querySelector("#lastName").value.trim();

    const email = document.querySelector("#email").value.trim();

    const phone = document.querySelector("#phone").value.trim();

    const company = document.querySelector("#company").value.trim();

    const message = document.querySelector("#message").value.trim();

    if(
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !company ||
        !message
    ){

        alert("Veuillez remplir tous les champs.");

        return;

    }

    const whatsappMessage = ` Demande de partenariat

Nom : ${firstName}

Prénom : ${lastName}

Email : ${email}

Téléphone : ${phone}

Entreprise : ${company}

Message :

${message}`;

    const whatsappNumber = "21626889987";

    window.open(

        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,

        "_blank"

    );

});


