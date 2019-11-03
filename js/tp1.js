function noirEtBlanc(imageOriginale) {
  console.log(imageOriginale);
  for (x = 0; x < imageOriginale.length; x++) {
    for (y = 0; y < imageOriginale[0].length; y++) {
      var r = imageOriginale[x][y].r * 0.2126;
      var g = imageOriginale[x][y].g * 0.7152;
      var b = imageOriginale[x][y].b * 0.0722;
      var rgb = r + g + b
      imageOriginale[x][y] = {r: rgb, g: rgb, b: rgb}
    }
  }
  return imageOriginale;
}

function correctionClarte(imageOriginale, quantite) {
  for (x = 0; x < imageOriginale.length; x++) {
    for (y = 0; y < imageOriginale[0].length; y++) {
      var a = imageOriginale[x][y].r * 0.2126;
      var b = imageOriginale[x][y].g * 0.7152;
      var c = imageOriginale[x][y].b * 0.0722;
      imageOriginale[x][y] = {r: a + b + c, g: a + b + c, b: a + b + c}
    }
  }
  return imageOriginale;
}



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

