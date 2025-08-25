function classificarHeroi() {
let heroi = document.getElementById("nome").value;
let xp = Number(document.getElementById("xp").value);
let resultado =" ";

 if (xp < 1000) {
    resultado = `O Herói de nome ${heroi} está no nível Ferro`;
  } else if (xp >= 1001 && xp <= 2000) {
    resultado = `O Herói de nome ${heroi} está no nível Bronze`;
  } else if (xp >= 2001 && xp <= 5000) {
    resultado = `O Herói de nome ${heroi} está no nível Prata`;
  } else if (xp >= 5001 && xp <= 7000) {
    resultado = `O Herói de nome ${heroi} está no nível Ouro`;
  } else if (xp >= 7001 && xp <= 8000) {
    resultado = `O Herói de nome ${heroi} está no nível Platina`;
  } else if (xp >= 8001 && xp <= 9000) {
    resultado = `O Herói de nome ${heroi} está no nível Ascendente`;
  } else if (xp >= 9001 && xp <= 10000) {
    resultado = `O Herói de nome ${heroi} está no nível Imortal`;
  } else if (xp > 10000) {
    resultado = `O Herói de nome ${heroi} está no nível Radiante`;
  } else {
    resultado = "XP inválido";
  }

    document.getElementById("resultado").innerText = resultado;
}

document.getElementById("btn-classificar").addEventListener("click", classificarHeroi);
