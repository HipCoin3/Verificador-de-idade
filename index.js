function verificar() {

  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById('txtano');
  var res = document.querySelector('#result');

  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    alert('[ERROR] Verifique os dados!');
  } else {
    var fSex = document.getElementsByName('radsex');
    var idade = ano - Number(fAno.value);
    var genero = ''
    var img = document.querySelector('img');
    if (fSex[0].checked) {
      genero = 'Homem'

      if (idade >= 0 && idade <= 5) {
        img.src = 'Homem_bebe.jpg';
      } else if (idade <= 15) {
        img.setAttribute('src', 'fotos/Homem_criança.jpg');
      } else if (idade <= 25) {
        img.setAttribute('src', 'fotos/Homem_adolecente.jpg');
      } else if (idade <= 45) {
        img.setAttribute('src', 'fotos/Homem_meia_idade.jpg');
      } else {
        img.setAttribute('src', 'fotos/Homem_idoso.jpg');
      }

    } else if (fSex[1].checked) {
      genero = 'Feminino'

      if (idade >= 0 && idade <= 5) {
        //bebê
        img.setAttribute('src', 'fotos/Mulher_bebe.jpg');
      } else if (idade <= 15) {
        img.setAttribute('src', 'fotos/mulher-criança.jpeg');
        //criança
      } else if (idade <= 25) {
        img.setAttribute('src', 'fotos/Mulher_adolecente.jpg');
        //Adolecente
      } else if (idade <= 45) {
        img.setAttribute('src', 'fotos/Mulher_meia_idade.jpg');
        //meia idade
      } else {
        img.setAttribute('src', 'fotos/Mulher_idosa.jpg');
        //idoso
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img);

  }

}

