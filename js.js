let table = document.getElementById("resulta");
let affichage = document.getElementById("entrer");
let premierNombre;
let operateur;
let deuxiemeNombre;
let resultat;
let nombreActuel = "";

document.getElementById("sept7").addEventListener("click", function () {
  affichage.textContent += "7";
  nombreActuel += "7";
});

document.getElementById("huit8").addEventListener("click", function () {
  affichage.textContent += "8";
  nombreActuel += "8";
});

document.getElementById("neuf9").addEventListener("click", function () {
  affichage.textContent += "9";
  nombreActuel += "9";
});

document.getElementById("quatre4").addEventListener("click", function () {
  affichage.textContent += "4";
  nombreActuel += "4";
});

document.getElementById("cinq5").addEventListener("click", function () {
  affichage.textContent += "5";
  nombreActuel += "5";
});

document.getElementById("six6").addEventListener("click", function () {
  affichage.textContent += "6";
  nombreActuel += "6";
});

document.getElementById("un1").addEventListener("click", function () {
  affichage.textContent += "1";
  nombreActuel += "1";
});

document.getElementById("deux2").addEventListener("click", function () {
  affichage.textContent += "2";
  nombreActuel += "2";
});

document.getElementById("trois3").addEventListener("click", function () {
  affichage.textContent += "3";
  nombreActuel += "3";
});

document.getElementById("zero0").addEventListener("click", function () {
  affichage.textContent += "0";
  nombreActuel += "0";
});

// Bouton C
document.getElementById("aull_dellet").addEventListener("click", function () {
  affichage.textContent = "";
  premierNombre = undefined;
  operateur = undefined;
  deuxiemeNombre = undefined;
  resultat = undefined;
  nombreActuel = "";
  table.textContent = "";
});

// Bouton SUP
document.getElementById("supprimer").addEventListener("click", function () {
  affichage.textContent = affichage.textContent.slice(0, -1);
  nombreActuel = nombreActuel.slice(0, -1);
});

// Bouton +
document.getElementById("somme").addEventListener("click", function () {
  premierNombre = Number(nombreActuel);
  operateur = "+";
  affichage.textContent += " + ";
  nombreActuel = "";
});

// Bouton -
document.getElementById("soustraction").addEventListener("click", function () {
  premierNombre = Number(nombreActuel);
  operateur = "-";
  affichage.textContent += " - ";
  nombreActuel = "";
});

// Bouton ×
document.getElementById("Multiplication").addEventListener("click", function () {
  premierNombre = Number(nombreActuel);
  operateur = "*";
  affichage.textContent += " * ";
  nombreActuel = "";
});

// Bouton ÷
document.getElementById("diviser").addEventListener("click", function () {
  premierNombre = Number(nombreActuel);
  operateur = "/";
  affichage.textContent += " / ";
  nombreActuel = "";
});

// Bouton décimal
document.getElementById("virgule").addEventListener("click", function () {
  if (!nombreActuel.includes(".")) {
    affichage.textContent += ".";
    nombreActuel += ".";
  }
});
 
// poucentage
document.getElementById("pourcentage").addEventListener("click", function () {
  if (nombreActuel === "") return;

  nombreActuel = String(Number(nombreActuel) / 100);

  if (operateur === undefined) {
    affichage.textContent = nombreActuel;
  } else {
    affichage.textContent =
      premierNombre + " " + operateur + " " + nombreActuel;
  }
});

// Bouton =
document.getElementById("egale").addEventListener("click", function () {
  if (operateur === "+") {
    deuxiemeNombre = Number(nombreActuel);
    resultat = premierNombre + deuxiemeNombre;
  } else if (operateur === "-") {
    deuxiemeNombre = Number(nombreActuel);
    resultat = premierNombre - deuxiemeNombre;
  } else if (operateur === "*") {
    deuxiemeNombre = Number(nombreActuel);
    resultat = premierNombre * deuxiemeNombre;
  } else if (operateur === "/") {
    deuxiemeNombre = Number(nombreActuel);

    if (deuxiemeNombre === 0) {
      affichage.textContent = "Erreur";
      table.textContent = "Division par zéro impossible";
      return;
    }

    resultat = premierNombre / deuxiemeNombre;
  } else {
    return;
  }

  affichage.textContent = resultat;
  afficher();
});

// Affiche l'historique du calcul
function afficher() {
  table.textContent =
    premierNombre + " " + operateur + " " + deuxiemeNombre + " = " + resultat;
}