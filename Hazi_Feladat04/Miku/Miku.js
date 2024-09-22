let ajándékok = []
let db= 0

function hozzáad() {

   let aji_neve = document.getElementById("aji").value
   let mlista = document.getElementById("miku_lista")

   mlista.innerHTML +=`<li>${aji_neve}</li>`
   ajándékok.push(mlista)

   db= ajándékok.length
   document.getElementById("darab").innerHTML=db

   console.log(aji_neve)
   console.log(mlista)
   console.log("darab:",db)
}
function törlés(){
    let mlista = document.getElementById("miku_lista")

    mlista.removeChild(mlista.lastChild);
    ajándékok.pop();

    db= ajándékok.length
    document.getElementById("darab").innerHTML=db
    
    console.log("darab:",db)


}
function reset(){

    let mlista = document.getElementById("miku_lista")
       while (mlista.hasChildNodes()) {
         mlista.removeChild(mlista.lastChild);
         ajándékok.pop();
       }
 
     db= ajándékok.length
     document.getElementById("darab").innerHTML=db

     console.log("darab:",db)
 
 
 }
 