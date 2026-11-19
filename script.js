
console.log("Welcome to ELITE MOTORS!");

const cards = document.querySelectorAll(".car-card");

cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.animation = `showCard 0.8s ease ${index * 0.2}s forwards`;
});
