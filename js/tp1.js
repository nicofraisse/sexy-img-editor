function noirEtBlanc(imageOriginale) {
  console.log(imageOriginale);
  for (x = 0; x < imageOriginale.length; x++) {
    for (y = 0; y < imageOriginale[0].length; y++) {
      var new_r = imageOriginale[x][y].r * 0.2126;
      var new_g = imageOriginale[x][y].g * 0.7152;
      var new_b = imageOriginale[x][y].b * 0.0722;
      var rgb = new_r + new_g + new_b
      imageOriginale[x][y] = {r: rgb, g: rgb, b: rgb}
    }
  }
  return imageOriginale;
}

function correctionClarte(imageOriginale, quantite) {
  for (x = 0; x < imageOriginale.length; x++) {
    for (y = 0; y < imageOriginale[0].length; y++) {
      var new_r = ((imageOriginale[x][y].r / 255) ** quantite) * 255
      var new_g = ((imageOriginale[x][y].g / 255) ** quantite) * 255
      var new_b = ((imageOriginale[x][y].b / 255) ** quantite) * 255
      imageOriginale[x][y] = {r: new_r, g: new_g, b: new_b}
    }
  }
  return imageOriginale;
}



function flou(imageOriginale, taille) {
  console.log(imageOriginale.length)
  console.log(imageOriginale[0].length)

  var max = Math.floor(taille / 2);
  for (k = 0; k < max; k++) {
    for (var x = 0; x < imageOriginale.length; x++) {
      imageOriginale[x].push({r : 0, g : 0, b : 0})
      imageOriginale[x].unshift({r : 0, g : 0, b : 0})
    }
  }
  for (k = 0; k < max; k++) {
    new_line = []
    for (var y = 0; y < imageOriginale[0].length; y++) {
      new_line.push({r : 0, g : 0, b : 0})
    }
    imageOriginale.push(new_line)
    imageOriginale.unshift(new_line)
  }
  for (var i = max; i < imageOriginale.length - max; i++) {
    for (var j = max; j < imageOriginale[0].length - max; j++) {
      var ponderation = 1 / taille ** 2;
      var moyenneR = 0;
      var moyenneG = 0;
      var moyenneB = 0;
      if (taille % 2 == 1) {
        for (var x = -max; x <= max; x++) {
          for (var y = -max; y <= max; y++) {
            moyenneR += ponderation * imageOriginale[i+x][j+y].r
            moyenneG += ponderation * imageOriginale[i+x][j+y].g
            moyenneB += ponderation * imageOriginale[i+x][j+y].b
          }
        }
      }
      else {
        for (var x = -max; x <= max - 1; x++) {
          for (var y = -max; y <= max - 1; y++) {
            moyenneR += ponderation * imageOriginale[i+x][j+y].r
            moyenneG += ponderation * imageOriginale[i+x][j+y].g
            moyenneB += ponderation * imageOriginale[i+x][j+y].b
          }
        }
      }
      var pixel = imageOriginale[i][j]
      pixel.r = moyenneR
      pixel.g = moyenneG
      pixel.b = moyenneB
    }
  }

  if (taille % 2 == 0 ) {
    for (k = 0; k < imageOriginale.length; k++) {
      imageOriginale[k] = imageOriginale[k].slice(max + 1, imageOriginale[k].length - max + 1)
    }
    return imageOriginale.slice(max + 1,imageOriginale.length - max + 1);
  }
  for (k = 0; k < imageOriginale.length; k++) {
    imageOriginale[k] = imageOriginale[k].slice(max, imageOriginale[k].length - max)
  }
  return imageOriginale.slice(max,imageOriginale.length - max);
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

