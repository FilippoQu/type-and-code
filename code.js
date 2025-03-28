export const configurazione = {
  testo: "p",

  dimensione: 0.8,
  interlinea: 0.7,
  allineamento: "centro",
  percorsoFont: "./assets/InputMonoCondensed-BoldItalic.ttf",

  sensibilitàMicrofonoBase: 1,
  densitàPuntiBase: 1,

  nascondiInterfaccia: false,
};

/**
 * Disegna punto
 * Metti qui quello che vuoi disegnare per ogni punto della font!
 *
 * @typedef {Object} Ingredienti
 * @property {number} x - La coordinata x del punto
 * @property {number} y - La coordinata y del punto
 * @property {number} angolo - L'angolo della curva della font in quel punto
 * @property {number} indice - Il numero del punto nella sequenza (0, 1, 2, 3, ...)
 * @property {number} unita - Unita' di misura: corrisponde al 10% della dimensione più piccola della finestra (larghezza o altezza)
 * @property {number} volume - Il volume del microfono - Varia da 0 a 1
 * @property {number} frameCount - Il numero di frame passati dall'avvio del programma
 * @property {number} [alpha] - Device orientation alpha angle (z-axis rotation) - Varia da 0 a 360
 * @property {number} [beta] - Device orientation beta angle (front-to-back tilt) - Varia da -90 a 90
 * @property {number} [gamma] - Device orientation gamma angle (left-to-right tilt) - Varia da -90 a 90
 *
 * @param {Ingredienti} ingredienti
 */
export function disegnaPunto({
  x,
  y,
  angolo,
  indice,
  unita,
  volume,
  frameCount,
  alpha = 0,
  beta = 0,
  gamma = 0,
}) {
  let larghezza = map(volume * 500, 0, 1, 20, 100);

  fill("black");
  noStroke();
  ellipse(x, y, larghezza, random(10, 100));
  fill("#F2B705");
  noStroke();
  ellipse(x + 10, y + 10, larghezza, random(10, 100));
  fill("#F29F05");
  noStroke();
  ellipse(x + 20, y + 20, larghezza, random(10, 100));
  fill("#F28705");
  noStroke();
  ellipse(x + 30, y + 30, larghezza, random(10, 100));
  fill("#F25C05");
  noStroke();
  ellipse(x + 40, y + 40, larghezza, random(10, 100));
  fill("#F23005");
  noStroke();
  ellipse(x + 50, y + 50, larghezza, random(10, 100));
  //////////////////////////////

  // let larghezza = map(sin(frameCount * 5 + indice), -1, 1, 1, 35);
  // let larghezza2 = map(sin(frameCount * 5 + indice), -1, 1, 35, 1);
  // fill("black");
  // noStroke();
  // ellipse(x, y, larghezza);
  // fill("#F2B705");
  // noStroke();
  // ellipse(x, y + 10, larghezza2);
  // fill("#F29F05");
  // noStroke();
  // ellipse(x, y + 20, larghezza);
  // fill("#F28705");
  // noStroke();
  // ellipse(x, y + 30, larghezza2);
  // fill("#F25C05");
  // noStroke();
  // ellipse(x, y + 40, larghezza);
  // fill("#F23005");
  // noStroke();
  // ellipse(x, y + 50, larghezza2);
  // //////////////////////////////

  // push();
  // translate(x, y);
  // rotate(random(0, 360));
  // translate(frameCount, 0);
  // fill("#F28705");
  // ellipse(0, 0, 20, 20);
  // pop();

  //////

  ////////////
  // let larghezza = map(sin(frameCount * 5 + indice), -1, 1, 1, 35);
  // let larghezza2 = map(sin(frameCount * 5 + indice), -1, 1, 35, 1);

  // let rosso = map(volume * 1000, 0, 1, 0, 155);

  // fill(rosso, 0, random(0, 255));
  // noStroke();
  // rect(x, y, larghezza, larghezza);
  //
}

let img;

/**
 * Carica le risorse necessarie
 * Esempio: carica immagini, suoni, ecc.
 */
export function caricamentoRisorse() {
  img = loadImage("assets/brian-griffin-photo-u4-e1552040224686.jpg");
}

/**
 * Imposta le impostazioni iniziali
 * Esempio: impostazioni di frame rate, misura degli angoli, ecc.
 */
export function impostazioni() {
  frameRate(30);
  angleMode(DEGREES);
  rectMode(CENTER);
}

/**
 * Disegna sotto i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sotto(disegnaTesto) {
  background("black");

  // [INFO] Rimuovi il commento per disegnare il testo
  fill("black");
  disegnaTesto();
}

/**
 * Disegna sopra i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sopra(disegnaTesto) {
  // [INFO] Rimuovi il commento per disegnare il testo
  // fill("black");
  // disegnaTesto();
}
