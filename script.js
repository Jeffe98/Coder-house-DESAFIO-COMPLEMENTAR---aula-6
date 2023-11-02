

function calcular(){
   var xvalor = document.getElementById("valor")
   var xparcela = document.getElementById("parcela")
   var xjuros = document.getElementById("juros")
   var table = document.getElementById("lista")

   var resultado = Number(xvalor.value) * (Number(xjuros.value) / 100) * Number(xparcela.value)
    
   
   var total = resultado * Number(xparcela.value)
    
    
   for(var i = total; i >= 0; i -= (resultado)){
        
       const row = document.createElement("tr")
       row.innerHTML = 
        `
        <td>#</td>
        <td>R$ ${resultado.toFixed(2)} </td>
        <td> ${xjuros.value} % </td>
        <td>R$ ${i.toFixed(2)}</td>

        `
        table.appendChild(row)
        
   }
   

}