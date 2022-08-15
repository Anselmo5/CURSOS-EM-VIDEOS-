//Aula 08 (parte 2 operadores) treino de funções relacionadas 

//var r1 = 5 > 2
//console.log(r1);
//var r2 = 7< 4
//console.log(r2);
//var r3 = 8 >= 8
//console.log(r3);
//var r4 = 10
//var r5 = '10'
//var re = r4!==r5
//console.log(re);



//Treino


var n1 = 4  // funciona se estiver dentro da mesma formula ex: n1 = 4 > 3
var n2 = 3
var res = n1 > n2  // teste de formula se n1 > que n2, deu certo
console.log(res);

// sempre o software do site que você usa para programar vai analizar o codigo da esquerda para direita ex: n1 > n2, a variavel n1 vai ser analizada primeiro

var n3 = 4
var n4 = 2
var rel = n3<n4  // a função funciona mesmo tendo as variaveis perto
console.log(rel);  // teste para saber se n3 era < que n4 funcionou

var n5 = 6
var n6 = 6
var reu = n5>=n6
console.log(reu); // operação funcionou mostrando que n5 e >= que n6

var n7 = 8
var n8 = 8
var rels = n7==n8
console.log(rels);  // operação mostrou que n7 e == a n8

var n9 = 7
var n10 = 3
var reuls = n9!=n10 // deu certo mostrou que n9 é != de n10  
console.log(reuls);

// teste de verificação

var n11 = '19'
var n12 = 19
var resultado = n11 == n12 // aqui mostra que n11 é n12 são ==
console.log(resultado);

var n13 = '19' 
var n14 =  19
var relsu = n13 === n14 // já aqui podemos ver que elas não são ==, pelo fato de uma ser string é a outra ser number.
console.log(relsu);

// teste logico


 var  a = 5
 var b = 5 
  var r = true &&  false

  console.log(r);

  var p = 12
  var t = 13
  var l = true && true
  console.log(l);  // && precisa que as duas informações estejam certas para da true

  var x =14
  var ç = 12
  var e = true|| false
  console.log(e);   //  o || so precisa de uma informação certa para que ele da true

// treino de variavel


var f = a >= b && b % 2 == 0
console.log(f); // essa equação mostra que a >= b são == é b sendo && de b % por 2  que da false, pelo fato de não ter as duas  informações verdadeiras


var m = a <= b || b % 2 == 0
console.log(m);  // essa equação nos mostra que a é <= b que || de b % 2 == 0, que nos traz o valor de true, porque uma das informações esta certa


//var y = !"50"
//var y = !true
//console.log(y);


// treino do operador ternario

// primero teste
var media = 6
var q = media <= 7? "aprovado" : "reprovado"
console.log(q);

//segunto teste
media += 6
var h = media >= 7? "aprovado" : "reprovado"
console.log(h);
console.log(media);


//primeiro
var logica = 1
var d = logica > 5 ? "logico" : "sem logica"
console.log(d);

// segundo teste
logica += 8
var x = logica > 5 ? "logico" : "sem logica"
console.log(x);
console.log(logica);

// primeiro teste
var desenpenho = 10
var foco = desenpenho < 0.9 ? "focado" : "sem foco"
console.log(foco);

//segundo teste
desenpenho -= 10.9
var força = desenpenho < 0.9 ? "focado" : "sem foco"
console.log(força);

// primeiro teste
var kill = 5
var open = kill == 10 ? "empate" : "derrota"
console.log(open);

// segundo test
kill *= 2
var trive = kill == 10 ? "empate" : "derrota"
console.log(trive);

// primeiro teste
var alemanha = 5   // da manha
var fuso = alemanha != 5 ? "diferença" : "igualdade"
console.log(fuso);


alemanha *= 3
var horario = alemanha != 5 ?"diferente" : "igualdade"
console.log(horario);

