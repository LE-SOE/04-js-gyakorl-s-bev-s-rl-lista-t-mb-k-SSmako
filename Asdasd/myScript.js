let db=0
let termekek = ['Tej', 'Vaj', 'Plüssmaci', 'Kávé']

function reset(){
    console.log('Termékek válotzói: ',termekek)
    console.log('Ez a plüssmaci?',termekek[2])
    let blista = document.getElementById("bev_lista")

    for(termek of termekek) {
        console.log(termek)
        blista.innerHTML += `<li>${termek}</li>`
    }

}
function hozzaad() {

   let cuccNeve = document.getElementById("cucc").value
   let blista = document.getElementById("bev_lista")
   //blista.innerHTML = blista.innerHTML+`<li>${cuccNeve}</li>`
   blista.innerHTML +=`<li>${cuccNeve}</li>`
   db ++
   document.getElementById("darab").innerHTML=db
   console.log(cuccNeve)
   console.log(blista)
   console.log("darab:",db)
}


