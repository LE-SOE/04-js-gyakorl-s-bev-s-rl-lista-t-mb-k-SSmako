
let termekek = []
let db= 0
function reset(){
   // console.log('Termékek válotzói: ',termekek)
   // console.log('Ez a plüssmaci?',termekek[2])

   let blista = document.getElementById("bev_lista")
      while (blista.hasChildNodes()) {
        blista.removeChild(blista.firstChild);
        termekek.pop();
      }

    db= termekek.length
    document.getElementById("darab").innerHTML=db
    console.log("darab:",db)


}
function hozzaad() {

   let cuccNeve = document.getElementById("cucc").value
   let blista = document.getElementById("bev_lista")
   //blista.innerHTML = blista.innerHTML+`<li>${cuccNeve}</li>`
   blista.innerHTML +=`<li>${cuccNeve}</li>`
   termekek.push(blista)
   db= termekek.length
   document.getElementById("darab").innerHTML=db
   console.log(cuccNeve)
   console.log(blista)
   console.log("darab:",db)
}


