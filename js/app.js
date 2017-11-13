var mostrarOcultar = function(e){
    var tabSeleccionado = e.target.dataset.tabSeleccionado;
    var desayuno = document.getElementById('desayuno');
    var comida = document.getElementById('comida');
    var cena = document.getElementById('cena');
    
    if( tabSeleccionado === 'tabDesayuno'){
        console.log('Vamos a desayunar');
        //ocultar comida y cena y mostrar el desayuno
        comida.style.display = 'none';
        cena.style.display = 'none';
        desayuno.style.display = 'block';

    }else if(tabSeleccionado === 'tabComida'){
        console.log('vamos a comer');
        comida.style.display = 'block';
        cena.style.display = 'none';
        desayuno.style.display = 'none';

    }else if(tabSeleccionado === 'tabCena'){
        console.log('Vamos a cenar');
        comida.style.display = 'none';
        cena.style.display = 'block';
        desayuno.style.display = 'none';
    }
}
var cargarPagina = function (){
    var desayuno = document.getElementById('desayuno');
    var comida = document.getElementById('comida');
    var cena = document.getElementById('cena');
    desayuno.style.display='none';
    comida.style.display='none';
    cena.style.display='none';

    var elementosTab = document.getElementsByClassName('tab');
    for( var i = 0; i < elementosTab.length; i++){
        elementosTab[i].addEventListener('click',mostrarOcultar);
    }
}
cargarPagina();