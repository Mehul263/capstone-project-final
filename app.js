var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var addButtons = document.getElementsByClassName("button");

var items=[
    {
    name: "Solar Panels",
    quantity: 0,
    dollars: 45,
    cents: 99,
},
{
    name: "LED bulbs",
    quantity: 0,
    dollars: 20,
    cents: 99,
},
{
    name: "Tree Saplings",
    quantity: 0,
    dollars: 6,
    cents: 99,
},
];

function updateCart() {
    let cart = 0;
    for (index = 0; index < items.length; index++){
        cart = cart + items[index].quantity;
    }
    cartValue.innerHTML=cart;
}

for (let i = 0; i < addButtons.length;i++){
    addButtons[i].onclick = (e) => {
       items[i].quantity++;
        updateCart();
        };
}

var finalDollars = 0;
var finalCents = 0;

function updatePrice() {
    let totalPriceInCents = 0;

    for(index = 0; index < items.length; index++){
        totalPriceInCents=totalPriceInCents + items[index].quantity * (items[index].dollars * 100 + items[index].cents)
    }
    finalDollars = Math.floor(totalPriceInCents / 100);
    finalCents = totalPriceInCents % 100;
}

var whatsappLink = 
"https://api.whatsapp.com/send?phone=919000000000&text=Order%20details";


function updateWhatsappLink() {
    for(let index = 0; index < items.length; index++){
        if (items[index].quantity != 0) {
          whatsappLink += "%0A" + items[index].name + "%20" + items[index].quantity;   
    }
}
whatsappLink += 
"%0A" + "Total%20Price:%20$" + finalDollars + "%20" + finalCents + "c";
}

cartButton.onclick = () => {
    updatePrice();
    updateWhatsappLink();
    window.open(whatsappLink, "_blank");
};