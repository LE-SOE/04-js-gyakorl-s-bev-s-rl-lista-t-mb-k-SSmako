let fogyasztas = 8

let autok=[
    {tipus: 'Ford', fogyasztas:8, tank_merete:48},
    {tipus: 'VW Turan', fogyasztas:11, tank_merete:60},
    {tipus: 'Toyota Yaris', fogyasztas:6, tank_merete:45},
]

window.onload = function (){
    for (auto of autok)
        document.getElementById("autok").innerHTML += `<option>${auto.tipus}</option>`
}

function utazas(){
    let benzinmennyiseg= document.getElementById("tank").innerHTML
    let tavolsag_km_ben=document.getElementById("tavolsag").value
    let benzinIgeny = fogyasztas*(tavolsag_km_ben/100)
    
    
    
    if(benzinmennyiseg<benzinIgeny){
        alert("Elfogyott a bendzin")

    } else{
        benzinmennyiseg -=benzinIgeny
        document.getElementById("utvonal").innerHTML +=`<li>${tavolsag_km_ben} km-t utaztunk, benzinfogyasztás:${benzinIgeny} liter </li>`
    }

    document.getElementById("tank").innerHTML= benzinmennyiseg

}