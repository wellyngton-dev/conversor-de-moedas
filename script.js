function converter() {
    //valor a ser convertido.
    var real = document.getElementById("valorReal").value;

    //valor e nome da moeda a ser convertida
    var deMoeda = document.getElementById("deMoeda");
    var deMoedaVal = deMoeda.value;
    var deMoedaText = deMoeda.options[deMoeda.selectedIndex].text;

    //valor e nome da moeda destino
    var paraMoeda = document.getElementById("paraMoeda");
    var paraMoedaVal = paraMoeda.value;
    var paraMoedaText = paraMoeda.options[paraMoeda.selectedIndex].text;
     
    //extraindo sigla do nome da moeda do select   
    var sigla = deMoedaText.slice(-4, -1);

    //extraindo nome sem a sigla da moeda do select
    var moeda = deMoedaText.replace(/ *\([^)]*\) */g, "");
    
    var valorBase = (1 * deMoedaVal) / paraMoedaVal;

    
    
      var resultado = (real * deMoedaVal) / paraMoedaVal;
  
      

      //convertendo nome da moeda para o plural
      if(real != 1){
          if(moeda == "Real"){
              moeda = "Reais"
          } else if (moeda == "Euro"){
              moeda = "Euros"
          } else if(moeda == "Bitcoin"){
              moeda = "Bitcoins";
          }
      }
      
      //convertendo moeda para
    var valorConvertido = resultado.toLocaleString("pt-BR", {
      minimumFractionDigits: 6,
      style: "currency",
      currency: sigla
    });
  
    var imprimeResultado = document.getElementById("imprimir");
    imprimeResultado.innerHTML = `
    <h1> Conversão de ${real} ${moeda} (${sigla}) para ${paraMoedaText} = ${valorConvertido}</h1>
    <h3>1 ${deMoedaText} = ${(valorBase)}</h3>
    `;
  }
  