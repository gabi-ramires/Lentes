
var contador = 0;

function Mostrar(){
    console.log("-------------------------------------");

    

    let GED = document.getElementById('GED').value;
    let GEE = document.getElementById('GEE').value;
    let GCD = document.getElementById('GCD').value;
    let GCE = document.getElementById('GCE').value;

    let aux1 = 0;
    let aux2 = 0;
    let aux3 = 0;

    let main = document.getElementById('area');
    let divAviso = document.getElementById('aviso');

    if ( GED== "" || GEE== "" || GCD== "" || GCE== "" ){
        
        console.log("Preencha todos os campos!") 
        let aviso = "Preencha todos os campos!";

        divAviso.innerHTML = aviso;
    }

    else{
        let aviso = "";
        divAviso.innerHTML = aviso;
       if (GCD==0 && GCE==0){

            if (((GED<=-3) || (GEE<=-3)) && ((GED>=-12) || (GEE>=-12))){
                console.log("Lente PRIME 1");
                
                aux1 = aux1 + 1;
            }
            
        }
        else{

            if (((GED<=-3) || (GEE<=-3)) && ((GED>=-10) || (GEE>=-10))){

                if (((GCD<=0) || (GCE<=0)) && ((GCD>=-2) || (GCE>=-2))) {
                console.log("Lente PRIME 2");
                aux2 = aux2 + 1;
                }
            }

        }

        if ((((GED<=0) || (GEE<=0)) && ((GED>=-15) || (GEE>=-15))) && (((GCD<=0) || (GCE<=0)) && ((GCD>=-5) || (GCE>=-5)))){

            console.log("Lente VISION");
            aux3 = aux3 +1;
        }
    }

    if ((aux1 == 1 || aux2 == 1) && (aux3=!0)){
        console.log("Resultado: PRIME");

        let texto = "Lente Prime";

        main.innerHTML = texto;

    }
    
    else if ((aux1 == 0 && aux2 == 0) && (aux3==1)){
        console.log("Resultado: VISION");

        let texto = "Lente Vision";

        main.innerHTML = texto;
    }

    else {
        console.log("Nenhuma lente");

        let texto = "nenhuma";

        main.innerHTML = texto;
    }

    var cont = document.getElementById('contador');
    contador = contador+1;
    console.log(contador);
    cont.innerHTML = "Resultado n°: "+contador;

    console.log("-------------------------------------");
}


function Limpar(){
    let GED = document.getElementById('GED');
    let GEE = document.getElementById('GEE');
    let GCD = document.getElementById('GCD');
    let GCE = document.getElementById('GCE');

    GED.value = 0;
    GEE.value = 0;
    GCD.value = 0;
    GCE.value = 0;
}


// VERIFICAÇÃO DO INTERVALO E INCREMENTO DO -> GED <- 
function VerificarGED(){
    console.log("Verificado");
    let GEDvalue = document.getElementById('GED').value;
    let GED = document.getElementById('GED');
    var y = GEDvalue % 0.25;

    // verifica incremento de 0,25 em 0,25
    if (y != 0){
        console.log(y);
    
        let divAviso = document.getElementById('aviso');
        let aviso = "Apenas valores incrementados de 0,25 em 0,25.";

        divAviso.innerHTML = aviso;

        CampoVermelho('GED');
        BotaoDesabilitado();
    }

    // verifica intervalo de -15 a 0
    else if (GEDvalue <-15 || GEDvalue >0){
        console.log("fora do intervalo")
       
        let divAviso = document.getElementById('aviso');
        let aviso = "Intervalo de valores deve ser entre -15 a 0!";

        divAviso.innerHTML = aviso;

        CampoVermelho('GED');
        BotaoDesabilitado();
    }
   
    else{
        CampoNormal('GED');
        BotaoHabilitado();
        let divAviso = document.getElementById('aviso');
        let aviso = "";

        divAviso.innerHTML = aviso;
    }
}

// VERIFICAÇÃO DO INTERVALO E INCREMENTO DO -> GEE <- 
function VerificarGEE(){
    console.log("Verificado");
    let GEEvalue = document.getElementById('GEE').value;
    let GEE = document.getElementById('GEE');
    var y = GEEvalue % 0.25;
    
    // verifica incremento de 0,25 em 0,25
    if (y != 0){
        console.log(y);
    
        let divAviso = document.getElementById('aviso');
        let aviso = "Apenas valores incrementados de 0,25 em 0,25.";

        divAviso.innerHTML = aviso;

        CampoVermelho('GEE');
        BotaoDesabilitado();
    }

    // verifica intervalo de -15 a 0
    else if (GEEvalue <-15 || GEEvalue >0){
        console.log("fora do intervalo")
       
        let divAviso = document.getElementById('aviso');
        let aviso = "Intervalo de valores deve ser entre -15 a 0!";

        divAviso.innerHTML = aviso;

        CampoVermelho('GEE');
        BotaoDesabilitado();
    }
   
    else{
        CampoNormal('GEE');
        BotaoHabilitado();
        let divAviso = document.getElementById('aviso');
        let aviso = "";

        divAviso.innerHTML = aviso;
    }
}

// VERIFICAÇÃO DO INTERVALO E INCREMENTO DO -> GCD <- 
function VerificarGCD(){
    console.log("Verificado");
    let GCDvalue = document.getElementById('GCD').value;
    let GCD = document.getElementById('GCD');
    var y = GCDvalue % 0.25;
    
    // verifica incremento de 0,25 em 0,25
    if (y != 0){
        console.log(y);
    
        let divAviso = document.getElementById('aviso');
        let aviso = "Apenas valores incrementados de 0,25 em 0,25.";

        divAviso.innerHTML = aviso;

        CampoVermelho('GCD');
        BotaoDesabilitado();
    }

    // verifica intervalo de -6 a 0
    else if (GCDvalue <-6 || GCDvalue >0){
        console.log("fora do intervalo")
       
        let divAviso = document.getElementById('aviso');
        let aviso = "Intervalo de valores deve ser entre -6 a 0!";

        divAviso.innerHTML = aviso;

        CampoVermelho('GCD');
        BotaoDesabilitado();
    }
   
    else{
        CampoNormal('GCD');
        BotaoHabilitado();
        let divAviso = document.getElementById('aviso');
        let aviso = "";

        divAviso.innerHTML = aviso;
    }
}

// VERIFICAÇÃO DO INTERVALO E INCREMENTO DO -> GCE <- 
function VerificarGCE(){
    console.log("Verificado");
    let GCEvalue = document.getElementById('GCE').value;
    let GCE = document.getElementById('GCE');
    var y = GCEvalue % 0.25;
    
    // verifica incremento de 0,25 em 0,25
    if (y != 0){
        console.log(y);
    
        let divAviso = document.getElementById('aviso');
        let aviso = "Apenas valores incrementados de 0,25 em 0,25.";

        divAviso.innerHTML = aviso;

        CampoVermelho('GCE');
        BotaoDesabilitado();
    }

    // verifica intervalo de -6 a 0
    else if (GCEvalue <-6 || GCEvalue >0){
        console.log("fora do intervalo")
       
        let divAviso = document.getElementById('aviso');
        let aviso = "Intervalo de valores deve ser entre -6 a 0!";

        divAviso.innerHTML = aviso;

        CampoVermelho('GCE');
        BotaoDesabilitado();
    }
   
    else{
        CampoNormal('GCE');
        BotaoHabilitado();
        let divAviso = document.getElementById('aviso');
        let aviso = "";

        divAviso.innerHTML = aviso;
    }
}

// Função para deixar a cor do input vermelho
function CampoVermelho(id){

    var input = document.getElementById(id);
    var classe = input.getAttribute('class');

    console.log(classe);

   
    input.classList.add('Vermelho');
   
}


// Função para retornar a cor normal do input
function CampoNormal(id){

    var input = document.getElementById(id);
    var classe = input.getAttribute('class');

    console.log(classe);

   
    input.classList.remove('Vermelho');
}

function BotaoDesabilitado(){

    console.log("botao desabilitado");
    
    // DESABILITA o botão
    var botao = document.querySelector("button");
    botao.setAttribute("disabled","disabled");

    // deixa CINZA o botão
    var btn = document.getElementById('botaoID');
    btn.classList.add('desabilitado');

}

function BotaoHabilitado(){

    console.log("botao habilitado");

    // HABILITA o botão
    var botao = document.querySelector("button");
    botao.removeAttribute("disabled","disabled");

    // deixa VERDE o botão
    var btn = document.getElementById('botaoID');
    btn.classList.remove('desabilitado');

}



