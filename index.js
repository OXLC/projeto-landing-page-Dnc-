var setaesquerda= window.document.getElementById("setaesquerda")
var card1= window.document.getElementById("card1")
var card2= window.document.getElementById("card2")
var card3= window.document.getElementById("card3")
var setadireita= window.document.getElementById("setadireita")

function RolarParaDireita(){
    card1.style="display:none"
    card3.style="display: flex"
    setadireita.style="display:none"
    setaesquerda.style="display:flex"
}
function RolarParaEsquerda(){
    card1.style="display:flex"
    card3.style="display:none"
    setadireita.style="display:flex"
    setaesquerda.style="display:none"
}

