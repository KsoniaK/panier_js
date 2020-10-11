
function requete() {
    //LES 4 PREMIERES ELEMENTS SONT OBLIGATOIRES EN AJAX
    //OBJET/CLASSE PROPRE A JS ET PERMET DE FAIRE LA REQUETE AJAX
    let xhr = new XMLHttpRequest();
    // console.log(xhr);
    //JE PREPARE MA METHODE
    let method = "GET";
    //JE PREPARE MON URL DANS LEQUEL JE VAIS RECUPER LE CONTENU
    let url = `assets/js/produit.json`;
    //OUVRIR MA REQUETE (LA METHODE ET L'ENDROIT OU ALLER CHERCHER L'INFO ET UN TROISIEME FACULTATIF TRUE/FALSE)
    xhr.open(method, url);
    //POSSIBLE D'ECRIRE COMME CA
    // xhr.open("GET", `./js/doc.json`);
    xhr.onload = function (event) {
        //VERIFIE SI LA REQUETE EST TERMINEE
        //XMLHttpRequest.DONE EQUIVAUT A 4
        if (this.readyState === XMLHttpRequest.DONE) {
            // ET QUE SON STATUT EST BIEN A 200
            // VERIFIER DANS LE NETWORK
            if (this.status === 200) {
                const response = JSON.parse(this.responseText);
                // console.log(response[0].idProduit);
                
            // ON AFFICHE LES OBJETS DU JSON (TEST)
                //DECLARATION D UNE VARIABLE A VIDE
                // let contenuJson = ``;

                //ICI UN FOREACH ARTICLE
                // response.forEach(function (post) {
                    //INCREMENTATION
                //     contenuJson += `
                //     <article class= "article_json">
                    //ON VA CHERCHER CHAQUE ELEMENT DE NOTRE TABLEAU D OBJET DANS LE JSON (ID, NOM, IMAGE, PRIX)
                //         <h2 id="${post.idProduit}">${post.nomProduit}</h2>
                //         <img src="${post.imageProduit}" alt="${post.imageProduit}">
                //         <p>Prix : ${post.prixProduit}</p>
                //         <button class="button" value="${post.idProduit}">Ajouter</button>
                //     </article>
                //     `
                // });
            //DANS L ELEMENT DONT L'ID EST RECAPITULATIF
                // document.getElementById(`recapitulatif`).innerHTML = contenuJson;
                // console.log(contenuJson);

            } else {
                console.log(this.status);
                alert(`Erreur`)
            }
        }
    }
    //AFFICHER LE RESULTAT (APPEL)
    xhr.send();
}
//ON OUBLIE PAS D APPELER LA FONCTION
requete();

//---------------------------------------------------------------------------------->
//ON COMMENCE PAR CREER LES ELEMENTS HTML EN JAVASCRIPT
//ICI ON CREE LA DIV PANIER, LA SECTION, LES ARTICLES, LES DIV IMAGE, LES H2, LES P (LES PRIX), LES BOUTONS "AJOUTER AU PANIER"

//ICI LA DIV QUI CONTIENT L IMAGE DU LOGO
let logo = document.createElement("div")
//ICI L IMAGE DU LOGO
let imgTitrePremier = new Image();
imgTitrePremier.src = './assets/img/pokemon.svg';
//ICI LE H1
let hUn = document.createElement("h1");

//ICI LA DIV ET LE BOUTTON PANIER
let panier = document.createElement("div")
let boutton = document.createElement("button")

//ICI LA SECTION
let section = document.createElement('section');

//ICI LES ARTICLES
let article = document.createElement('article');
let articleDeux = document.createElement('article');
let articleTrois = document.createElement('article');
let articleQuatre = document.createElement('article');
let articleCinq = document.createElement('article');
let articleSix = document.createElement('article');
let articleSept = document.createElement('article');
let articleHuit = document.createElement('article');

//ICI LES DIV IMAGE
let div = document.createElement('div');
let divDeux = document.createElement('div');
let divTrois = document.createElement('div');
let divQuatre = document.createElement('div');
let divCinq = document.createElement('div');
let divSix = document.createElement('div');
let divSept = document.createElement('div');
let divHuit = document.createElement('div');

//ICI LES IMAGES
let img = new Image();
img.src = './assets/img/grodoudou_gx.jpeg';
let imgDeux = new Image();
imgDeux.src = './assets/img/heatran_gx.jpg';
let imgTrois = new Image();
imgTrois.src = './assets/img/leviator_gx.jpg';
let imgQuatre = new Image();
imgQuatre.src = './assets/img/necrozma_gx.jpg';
let imgCinq = new Image();
imgCinq.src = './assets/img/dracaufeu_gx.jpg';
let imgSix = new Image();
imgSix.src = './assets/img/raichu_gx.jpg';
let imgSept = new Image();
imgSept.src = './assets/img/mewtwo_gx.png';
let imgHuit = new Image();
imgHuit.src = './assets/img/onix_gx.jpeg';


//ICI LES H2
let titre = document.createElement('h2');
let titreDeux = document.createElement('h2');
let titreTrois = document.createElement('h2');
let titreQuatre = document.createElement('h2');
let titreCinq = document.createElement('h2');
let titreSix = document.createElement('h2');
let titreSept = document.createElement('h2');
let titreHuit = document.createElement('h2');
//ICI LES P
let prix = document.createElement('p');
let prixDeux = document.createElement('p');
let prixTrois = document.createElement('p');
let prixQuatre = document.createElement('p');
let prixCinq = document.createElement('p');
let prixSix = document.createElement('p');
let prixSept = document.createElement('p');
let prixHuit = document.createElement('p');

//ICI LES BOUTONS
let button = document.createElement('button');
let buttonDeux = document.createElement('button');
let buttonTrois = document.createElement('button');
let buttonQuatre = document.createElement('button');
let buttonCinq = document.createElement('button');
let buttonSix = document.createElement('button');
let buttonSept = document.createElement('button');
let buttonHuit = document.createElement('button');
// console.log(button)

//ICI LA SECTION AJOUT/SUPPRESSION DU PANIER
let recapitulatif = document.createElement("section");

//ICI LES P ET LE BUTTON DE LA SECTION RECAPITULATIF
let ajout = document.createElement("div");
let buttonR = document.createElement("button")
let prixAvantRemise = document.createElement("p");
let remise = document.createElement("p");
let prixApresRemise = document.createElement("p");


//--------------------------------------------------------------------------------------------------------------->


// ON LEUR MET UN ID

//A LA DIV OU SE TROUVE L IMAGE DU LOGO
logo.id = "div_logo"
//A L IMAGE DU LOGO
imgTitrePremier.id = "logo"
//AU H1
hUn.id = "titrePage"

//A LA DIV PANIER
panier.id = "panier"
boutton.id = "boutton"

//A LA SECTION
section.id = "fiche_produit"

//AUX ARTICLES
article.id = "article";
articleDeux.id = "articleDeux";
articleTrois.id = "articleTrois";
articleQuatre.id = "articleQuatre";
articleCinq.id = "articleCinq";
articleSix.id = "articleSix";
articleSept.id = "articleSept";
articleHuit.id = "articleHuit";

//AUX DIV
div.id = "image";
divDeux.id = "imageDeux";
divTrois.id = "imageTrois";
divQuatre.id = "imageQuatre";
divCinq.id = "imageCinq";
divSix.id = "imageSix";
divSept.id = "imageSept";
divHuit.id = "imageHuit";

//AUX IMG
img.id = "img"
imgDeux.id = "imgDeux"
imgTrois.id = "imgTrois"
imgQuatre.id = "imgQuatre"
imgCinq.id = "imgCinq"
imgSix.id = "imgSix"
imgSept.id = "imgSept"
imgHuit.id = "imgHuit"

//AUX H2
titre.id = "nom";
titreDeux.id = "nomDeux";
titreTrois.id = "nomTrois";
titreQuatre.id = "nomQuatre";
titreCinq.id = "nomCinq";
titreSix.id = "nomSix";
titreSept.id = "nomSept";
titreHuit.id = "nomHuit";

//AUX P
prix.id = "prix";
prixDeux.id = "prixDeux";
prixTrois.id = "prixTrois";
prixQuatre.id = "prixQuatre";
prixCinq.id = "prixCinq";
prixSix.id = "prixSix";
prixSept.id = "prixSept";
prixHuit.id = "prixHuit";

//AUX BUTTONS
button.id = "valider";
buttonDeux.id = "valider";
buttonTrois.id = "validerTrois";
buttonQuatre.id = "validerQuatre";
buttonCinq.id = "validerCinq";
buttonSix.id = "validerSix";
buttonSept.id = "validerSept";
buttonHuit.id = "validerHuit";
// console.log(button.id)

//A LA SECTION RECAPITULATIF
recapitulatif.id = "recapitulatif"

// AUX P DE LA SECTION RECAPITULATIF
ajout.id = "ajout"
buttonR.className = "supprimer"
prixAvantRemise.id = "prixAvantRemise"
remise.id = "remise"
prixApresRemise.id = "prixApresRemise"


//--------------------------------------------------------------------------------------------------------------->


//ON CREE UN NOEUD DE TYPE TEXTE

//AU H1
hUn.textContent = "PoKéMoN"

//A LA DIV PANIER
boutton.textContent = "ICI LE PANIER"

//AUX H2
titre.textContent = "GRODOUDOU"
titreDeux.textContent = "HEATRAN"
titreTrois.textContent = "LEVIATOR"
titreQuatre.textContent = "NECROZMA"
titreCinq.textContent = "DRACAUFEU"
titreSix.textContent = "RAICHU"
titreSept.textContent = "MEWTWO"
titreHuit.textContent = "ONIX"

//AUX P
prix.textContent = "60"
prixDeux.textContent = "35"
prixTrois.textContent = "80"
prixQuatre.textContent = "35"
prixCinq.textContent = "100"
prixSix.textContent = "60"
prixSept.textContent = "150"
prixHuit.textContent = "40"

//AUX BUTTONS
button.textContent = "Ajouter au panier"
buttonDeux.textContent = "Ajouter au panier"
buttonTrois.textContent = "Ajouter au panier"
buttonQuatre.textContent = "Ajouter au panier"
buttonCinq.textContent = "Ajouter au panier"
buttonSix.textContent = "Ajouter au panier"
buttonSept.textContent = "Ajouter au panier"
buttonHuit.textContent = "Ajouter au panier"
// console.log(button.textContent)

//AUX P DE LA SECTION RECAPITULATIF
prixAvantRemise.textContent = "MONTANT DU PANIER AVANT REMISE : " + totalPrix
remise.textContent = "MONTANT RESTANT AVANT REMISE :" + totalPrixDeux
prixApresRemise.textContent = "MONTANT DU PANIER APRES REMISE :" + totalPrixTrois



//--------------------------------------------------------------------------------------------------------------->



//ON INSERE L ARTICLE CREE DANS LE BODY (ICI ON INSERE TOUJOURS L OBJET EN TEMPS QUE DERNIER OBJET DU BODY)

//LA DIV QUI CONTIENT LE LOGO
document.body.appendChild(logo)
//L IMAGE DU LOGO
document.body.appendChild(imgTitrePremier);
//LE H1
document.body.appendChild(hUn);

//LA DIV PANIER
document.body.appendChild(panier)
//document.body.appendChild(boutton)

//LA SECTION
document.body.appendChild(section)

//LES ARTICLES
document.body.appendChild(article);
document.body.appendChild(articleDeux);
document.body.appendChild(articleTrois);
document.body.appendChild(articleQuatre);
document.body.appendChild(articleCinq);
document.body.appendChild(articleSix);
document.body.appendChild(articleSept);
document.body.appendChild(articleHuit);

//LES DIV
document.body.appendChild(div);
document.body.appendChild(divDeux);
document.body.appendChild(divTrois);
document.body.appendChild(divQuatre);
document.body.appendChild(divCinq);
document.body.appendChild(divSix);
document.body.appendChild(divSept);
document.body.appendChild(divHuit);

//LES IMAGES
document.body.appendChild(img);
document.body.appendChild(imgDeux);
document.body.appendChild(imgTrois);
document.body.appendChild(imgQuatre);
document.body.appendChild(imgCinq);
document.body.appendChild(imgSix);
document.body.appendChild(imgSept);
document.body.appendChild(imgHuit);

//LES H2
document.body.appendChild(titre);
document.body.appendChild(titreDeux);
document.body.appendChild(titreTrois);
document.body.appendChild(titreQuatre);
document.body.appendChild(titreCinq);
document.body.appendChild(titreSix);
document.body.appendChild(titreSept);
document.body.appendChild(titreHuit);

//LES PRIX
document.body.appendChild(prix);
document.body.appendChild(prixDeux);
document.body.appendChild(prixTrois);
document.body.appendChild(prixQuatre);
document.body.appendChild(prixCinq);
document.body.appendChild(prixSix);
document.body.appendChild(prixSept);
document.body.appendChild(prixHuit);

//LES BUTTONS
document.body.appendChild(button);
document.body.appendChild(buttonDeux);
document.body.appendChild(buttonTrois);
document.body.appendChild(buttonQuatre);
document.body.appendChild(buttonCinq);
document.body.appendChild(buttonSix);
document.body.appendChild(buttonSept);
document.body.appendChild(buttonHuit);

//LA SECTION RECAPITULATIF
document.body.appendChild(recapitulatif);

//LES P DE LA SECTION RECAPITULATIF
document.body.appendChild(buttonR)
document.body.appendChild(prixAvantRemise);
document.body.appendChild(remise);
document.body.appendChild(prixApresRemise);

//LE BOUTON DE LA DIV AJOUT
document.body.appendChild(ajout);
// console.log(ajout)



//--------------------------------------------------------------------------------------------------------------->


//ON MET L IMAGE DU LOGO DANS LA DIV LOGO
let logoParent = document.getElementById('div_logo')
logoParent.appendChild(imgTitrePremier)

//ICI ON MET LE BOUTON DANS LA DIV PANIER
let panierParent = document.getElementById("panier")
panierParent.appendChild(boutton);

//ICI ON MET LES ARTICLES DANS LA SECTION
let sectionParent = document.getElementById("fiche_produit")
sectionParent.appendChild(article);
sectionParent.appendChild(articleDeux);
sectionParent.appendChild(articleTrois);
sectionParent.appendChild(articleQuatre);
sectionParent.appendChild(articleCinq);
sectionParent.appendChild(articleSix);
sectionParent.appendChild(articleSept);
sectionParent.appendChild(articleHuit);

//ICI ON MET LA DIV DANS L'ARTICLE
let articleParent = document.getElementById("article")
articleParent.appendChild(div);
let articleParentDeux = document.getElementById("articleDeux")
articleParentDeux.appendChild(divDeux);
let articleParentTrois = document.getElementById("articleTrois")
articleParentTrois.appendChild(divTrois);
let articleParentQuatre = document.getElementById("articleQuatre")
articleParentQuatre.appendChild(divQuatre);
let articleParentCinq = document.getElementById("articleCinq")
articleParentCinq.appendChild(divCinq);
let articleParentSix = document.getElementById("articleSix")
articleParentSix.appendChild(divSix);
let articleParentSept = document.getElementById("articleSept")
articleParentSept.appendChild(divSept);
let articleParentHuit = document.getElementById("articleHuit")
articleParentHuit.appendChild(divHuit);

//ICI ON MET LE H2 DANS L ARTICLE
let articleParentTitre = document.getElementById("article")
articleParent.appendChild(titre);
let articleParentDeuxTitre = document.getElementById("articleDeux")
articleParentDeux.appendChild(titreDeux);
let articleParentTroisTitre = document.getElementById("articleTrois")
articleParentTrois.appendChild(titreTrois);
let articleParentQuatreTitre = document.getElementById("articleQuatre")
articleParentQuatre.appendChild(titreQuatre);
let articleParentCinqTitre = document.getElementById("articleCinq")
articleParentCinq.appendChild(titreCinq);
let articleParentSixTitre = document.getElementById("articleSix")
articleParentSix.appendChild(titreSix);
let articleParentSeptTitre = document.getElementById("articleSept")
articleParentSept.appendChild(titreSept);
let articleParentHuitTitre = document.getElementById("articleHuit")
articleParentHuit.appendChild(titreHuit);

//ICI ON ME LE P DANS L ARTICLE
let articleParentP = document.getElementById("article")
articleParent.appendChild(prix);
let articleParentDeuxP = document.getElementById("articleDeux")
articleParentDeux.appendChild(prixDeux);
let articleParentTroisP = document.getElementById("articleTrois")
articleParentTrois.appendChild(prixTrois);
let articleParentQuatreP = document.getElementById("articleQuatre")
articleParentQuatre.appendChild(prixQuatre);
let articleParentCinqP = document.getElementById("articleCinq")
articleParentCinq.appendChild(prixCinq);
let articleParentSixP = document.getElementById("articleSix")
articleParentSix.appendChild(prixSix);
let articleParentSeptP = document.getElementById("articleSept")
articleParentSept.appendChild(prixSept);
let articleParentHuitP = document.getElementById("articleHuit")
articleParentHuit.appendChild(prixHuit);

//ICI ON MET LES BUTTONS DANS L ARTICLE
let articleParentB = document.getElementById("article")
articleParentB.appendChild(button)
let articleParentDeuxB = document.getElementById("articleDeux")
articleParentDeuxB.appendChild(buttonDeux)
let articleParentTroisB = document.getElementById("articleTrois")
articleParentTroisB.appendChild(buttonTrois)
let articleParentQuatreB = document.getElementById("articleQuatre")
articleParentQuatreB.appendChild(buttonQuatre)
let articleParentCinqB = document.getElementById("articleCinq")
articleParentCinqB.appendChild(buttonCinq)
let articleParentSixB = document.getElementById("articleSix")
articleParentSixB.appendChild(buttonSix)
let articleParentSeptB = document.getElementById("articleSept")
articleParentSeptB.appendChild(buttonSept)
let articleParentHuitB = document.getElementById("articleHuit")
articleParentHuitB.appendChild(buttonHuit)

//ICI ON MET L'IMG DANS LA DIV
let divParent = document.getElementById("image")
divParent.appendChild(img);
let divParentDeux = document.getElementById("imageDeux")
divParentDeux.appendChild(imgDeux);
let divParentTrois = document.getElementById("imageTrois")
divParentTrois.appendChild(imgTrois);
let divParentQuatre = document.getElementById("imageQuatre")
divParentQuatre.appendChild(imgQuatre);
let divParentCinq = document.getElementById("imageCinq")
divParentCinq.appendChild(imgCinq);
let divParentSix = document.getElementById("imageSix")
divParentSix.appendChild(imgSix);
let divParentSept = document.getElementById("imageSept")
divParentSept.appendChild(imgSept);
let divParentHuit = document.getElementById("imageHuit")
divParentHuit.appendChild(imgHuit);

//ICI ON MET LES P DANS LA SECTION RECAPITULATIF
let sectionRecapitulatif = document.getElementById("recapitulatif")
sectionRecapitulatif.appendChild(ajout)
sectionRecapitulatif.appendChild(prixAvantRemise)
sectionRecapitulatif.appendChild(remise)
sectionRecapitulatif.appendChild(prixApresRemise)


//ICI ON MET LE buttonR dans le recapitulatifDiv
let recapitulatifAjout = document.getElementById("ajout")
recapitulatifAjout.appendChild(buttonR)


//--------------------------------------------------------------------------------------------------------------->


//ICI ON VEUT METTRE UN EVENEMENT AU CLIC DU BOUTON "Ajouter au panier", QUAND ON CLIC DESSUS , L ARTICLE SELECTIONNE S'AJOUTE AU PANIER (SECTION RECAPITULATIF)

//ON RECUPERE LE BUTTON AU CLIC
var click = document.querySelectorAll('button');
// console.log(click)
//INITIALISATION DES VARIABLES
var totalPrix = 0
var totalPrixDeux = 0
var totalPrixTrois = 0
//ICI UN FOREACH CAR PRBLM AVEC LA BOUCLE FOR
click.forEach(element => {
//LE addEventListener est là pour écouter au clic, grâce à la fonction on lui dit ce qu'il doit faire
element.addEventListener('click', function(e) {
    // console.log(element)
    e.preventDefault(); // On bloque l'action par défaut de cet événement


//ICI ON CHERCHE A CIBLER LE NOM ET LE PRIX DE CHAQUE PRODUIT DANS LE HTML
    let nomPokemon = element.parentNode.childNodes[1].innerHTML
    let prixPokemon = element.parentNode.childNodes[2].innerHTML
    // console.log(prixPokemon)
    let recupereImage = element.parentNode.childNodes[0].innerHTML
    let number = Number(prixPokemon)
    let numberRemise = Number((prixPokemon*5)/100)
    let numberFinal = Number(number - numberRemise)
    // console.log(numberFinal)

//INCREMENTATION
    totalPrix += number
    totalPrixDeux -= numberRemise
    totalPrixTrois += numberFinal
    // console.log(totalPrix)
    // console.log(totalPrixDeux)
    // console.log(totalPrixTroisFinal)

//A CHAQUE CLIC SUR LE BOUTON AJOUTER AU PANIER ON INDIQUE l'IMAGE, LE NOM ET LE PRIX DU PRODUIT AJOUTE
    document.getElementById("ajout").innerHTML += recupereImage + ' ' + nomPokemon + "" +' a été ajouté au panier' + ' ' + prixPokemon + "€" + '<button class="supprimer">X</button>\n'//----> \n ou \r sert à faire un retour à la ligne (ne marche pas evidemment...)

//ICI LE MONTANT DU PANIER AVANT REMISE
    prixAvantRemise.textContent = "MONTANT DU PANIER AVANT REMISE : " + totalPrix
//ICI LE MONTANT DE LA REMISE (ICI ON APPLIQUE UNE REMISE DE 5% (PAR EXEMPLE) DES LE PREMIER ARTICLE AJOUTE AU PANIER, POUR APPLIQUER UNE REDUCTION A PARTIR DE 200E, FAIRE UNE CONDITION)
    remise.textContent = "MONTANT RESTANT AVANT REMISE :" + totalPrixDeux
//ICI LE MONTANT TOTAL DE LA COMMANDE APRES REMISE
    prixApresRemise.textContent = "MONTANT DU PANIER APRES REMISE :" + totalPrixTrois

//ICI ON RECUPERE LE BOUTON "SUPPRIMER"
    let supprimer = document.getElementsByClassName("supprimer");
        console.log(supprimer)// ------>on récupère bien les boutons "supprimer" une fois le produit ajouté
    for(i=0; i<supprimer.length; i++){
    //LE addEventListener est là pour écouter au clic, grâce à la fonction on lui dit ce qu'il doit faire
    supprimer[i].addEventListener('click', function(e) {
        e.preventDefault();
    //INSTRUCTION: AU CLIC ON SUPPRIME L ARTICLE SELECTIONNE DANS LE PANIER (ICI SUPPRIME TOUTE LA SELECTION... TROUVER COMMENT SUPPRIMER UNIQUEMENT L ELEMENT SELECTIONNE)
    document.getElementById("ajout").innerHTML = ""
 
    

            })

        }

    });
})

//SERT A RENDRE LE CHAMPS VIDE A CHAQUE AJOUT (CACHE LE BOUTON SUPPRIMER DES LE DEPART)
var tmp = ajout.innerHTML;
ajout.innerHTML = '';


