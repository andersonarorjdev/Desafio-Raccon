//Tentei abstrair da forma mais simples que consegui econtrar para criar um menu hamburguer, tendo em vista que nunca fiz um desses sem o Botstrap.
const ShowMenu = props =>{
    let Menu = document.getElementById('Menu');
     Menu.style.display = "block";
     Menu.style.position = "absolute";
  }

const HideMenu = props =>{
    let Menu = document.getElementById('Menu');
    Menu.style.display = "none";
}