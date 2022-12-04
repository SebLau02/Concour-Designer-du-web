const descriptionProduit = document.querySelector('.text');
const liste = document.querySelector('#liste')
const btn1 = document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')

btn1.addEventListener('click', () => {
	liste.classList.remove('unvisible')
	descriptionProduit.classList.add('unvisible')
})

btn2.addEventListener('click', () => {
	liste.classList.add('unvisible')
	descriptionProduit.classList.remove('unvisible')
})

const quantiteArticlePanier = document.querySelector('.quantite-article-panier')
const btnAjouter = document.querySelector('.bouton-ajouter')
const quantiteArticleChoisi = document.querySelector('.quantite-produit')

let x = 0;
btnAjouter.addEventListener('click', () => {
	let y = Number(quantiteArticleChoisi.value)
	x += y;
	console.log(x)
	quantiteArticlePanier.innerHTML = x;
})

const hamburgerBtn = document.querySelector(".menu-burger");
const navigation = document.querySelector(".nav");

hamburgerBtn.addEventListener("click", toggleNav);
function toggleNav(){
	hamburgerBtn.classList.toggle("active")
	navigation.classList.toggle("active")
};