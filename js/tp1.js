/* Auteurs: PERSONNE 1 (matricule), PERSONNE 2 (matricule)

   TODO : Remplacez ce commentaire par un commentaire expliquant
   l'utilité de ce programme
 */

function noirEtBlanc(imageOriginale) {
  for (x = 0; x < imageOriginale.length; x++) {
    for (y = 0; y < imageOriginale[0].length; y++)
      imageOriginale[x][y] = {
        r:imageOriginale[x][y].r * 0.2126 + imageOriginale[x][y].g * 0.7152 + imageOriginale[x][y].b * 0.0722,
        g:imageOriginale[x][y].r * 0.2126 + imageOriginale[x][y].g * 0.7152 + imageOriginale[x][y].b * 0.0722,
        b:imageOriginale[x][y].r * 0.2126 + imageOriginale[x][y].g * 0.7152 + imageOriginale[x][y].b * 0.0722,
      }
      // imageOriginale[x][y].r = 0;
      // imageOriginale[x][y].g = 0;
      // imageOriginale[x][y].b = 0;

      // console.log(x);
      // // console.log(y);
      // if (x < 10 && y < 10) {
      //   console.log(imageOriginale[x][y])
      //   console.log("hi")
      // }


  }
  return imageOriginale; // Remplacer par la nouvelle image
}

function correctionClarte(imageOriginale, quantite) { // image.length = 465
    for (var i = 0; i < imageOriginale.length; i++)
    console.log(imageOriginale[i][i]); // TODO : Compléter cette fonction
    return imageOriginale; // Remplacer par la nouvelle image
}
   /* for (var x = 0, imageOriginale.length, x++) {
        for (var y = 0, imageOriginale.length, y++) {
          imageOriginale.y =
        }
    }*/

function flou(imageOriginale, taille) {
  for (var i = 10; i < imageOriginale.length - 10; i++) {
    for (var j = 10; j < imageOriginale[0].length - 10; j++) {
      var max = Math.floor(taille/2);
      var ponderation = 1 / taille;
      moyenneR = 0;
      moyenneG = 0;
      moyenneB = 0;
      for (var x = -max; x <= max; x++) {
        for (var y = -max; y <= max; y++) {
          moyenneR += ponderation * imageOriginale[i+x][j+y].r
          moyenneG += ponderation * imageOriginale[i+x][j+y].g
          moyenneB += ponderation * imageOriginale[i+x][j+y].b
        }
      }
      var pixel = imageOriginale[i][j]
      pixel.r = moyenneR
      pixel.g = moyenneG
      pixel.b = moyenneB
    }
  }
  return imageOriginale;
}

function detectionContours(imageOriginale) {
    console.log('TODO'); // TODO : Compléter cette fonction
    return imageOriginale; // Remplacer par la nouvelle image
}

// ==> N'hésitez pas à ajouter vos propres fonctions pour vous aider <==
// function ...

function tests() {
    /* TODO : Ajoutez des tests unitaires pour les 4 fonctions
       demandées et pour vos propres fonctions */
}

