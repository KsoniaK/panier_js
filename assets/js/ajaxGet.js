// // CREATION DE 4 PARAMETRES OBLIGATOIRES
// // console.log("hello")
// //PREMIER
// function requete(){
//     let xhr = new XMLHttpRequest();
//     //DEUXIEME = PREPARATION DE LA METHODE
//     let method = "GET";
//     //TROISIEME = ICI ON RECUPERE LE CONTENU COMPRIS DANS MON URL
//     let url = './produit.json'
//     console.log(url)
//     //QUATRIEME = ICI ON OUVRE LA METHODE ET L'URL
//     xhr.open(method, url);
//     xhr.onload = function(e){
//         //ICI ON VERIFIE SI LA REQUETE EST TERMINEE
//         if (this.readyState === XMLHttpRequest.DONE){
//             //ICI ON VERIFIE QUE SON STATUT EST BIEN A 0
            
//             if (this.status === 200){
//                 const response = JSON.parse(this.responseText);
//                     console.log(response);
//             }else
//                 console.log("erreur")
//         }
//         //ICI ON AFFICHE LE RESULTAT
//         xhr.send();
//     }
// }
// requete();
