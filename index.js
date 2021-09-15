function convertir() {
    
    let valor= parseFloat(document.getElementById("cantidad").value);
    let de = document.getElementById("elije-moneda-one").value;
    let a = document.getElementById("elije-moneda-two").value;
    let dolar = 19.92;
    let euro = 23.50;
    let pesoColombiano = 0.0052;
    let libraEsterlina = 27.49;
    resultado =0;

    //Peso mexicano a dolar
    if (de == 1 && a == 2) 
    {
        resultado = valor/dolar;
        
    }
    //peso mexicano a euro
    else if (de == 1 && a == 4) {
        resultado = valor/euro;
    }
    //pesomexicano a peso colomiano
    else if (de == 1 && a == 3) {
        resultado = valor/pesoColombiano;
    }
    //peso mexicano a libra esterlina
    else if (de == 1 && a == 5) {
        resultado = valor/libraEsterlina;
    }
    //dolar a peso mexicano
    else if (de == 2 && a == 1) {
        resultado = valor * dolar;
    }
    //dolar a peso colombiano
    else if (de == 2 && a == 3) {
        resultado = valor * (dolar/pesoColombiano);
    }
    //dolar a euro
    else if (de == 2 && a == 4) {
        resultado = valor*(dolar/euro);
    }
    //dolar a libras esterlinas
    else if (de == 2 && a == 5) {
        resultado = valor*(dolar/libraEsterlina);
    }
    //peso colombiano a peso mexicano
    else if ( de == 3 && a == 1) {
        resultado = valor*pesoColombiano;
    }
    //Peso colombiano a dolar
    else if (de == 3 && a == 2) {
        resultado = valor*(pesoColombiano/dolar);
    }
    //peso colombiano a euro
    else if (de == 3 && a == 4) {
        resultado= valor*(pesoColombiano/euro);
    }
    //peso colombiano a libras esterlinas
    else if(de == 3 && a == 5){
        resultado = valor*(pesoColombiano/libraEsterlina);
    }
    //euro a peso mexicano
    else if (de == 4 && a == 1) {
        resultado= valor*euro;
    }
    //euro a dolar
    else if (de == 4 && a == 2) {
        resultado = valor*(euro/dolar);
    }
    //Euro a peso colombiano
    else if (de == 4 && a == 3) {
        resultado = valor*(euro/pesoColombiano);
    }
    //euro a libras esterlinas
    else if (de == 4 && a == 5) {
        resultado = valor*(euro/libraEsterlina);
    }
    //libra esterlina a peso mexicano
    else if (de == 5 && a == 1) {
        resultado = valor * libraEsterlina;
    }
    //libra esterlina a dolar
    else if (de == 5 && a == 2) {
        resultado = valor *(libraEsterlina/dolar);
        
    }
    //libra esterlina a peso colombiano
    else if (de == 5 && a == 3) {
        resultado = valor * (libraEsterlina/pesoColombiano);    
    }
    // libra esterlina a euro
    else if(de == 5 && a == 4 ){
        resultado = valor*(libraEsterlina/euro);
    }
    else{
        resultado = valor;
    }
document.getElementById("resultado").innerHTML="resultado: $ "+resultado.toFixed(2);

    
}
