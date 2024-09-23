let szamok=[]

function hozzadEsRendez(){
    let szam= document.getElementById("szam").value
    szamok.push(Number(szam))
    console.log(szamok)

    for(let i=0; i<szamok.length; i++){

        for(let j=0; j<szamok.length-1; j++)
        {
            if(szamok[j]> szamok[j+1])
            {
                let tmp = szamok[j]
                szamok[j]=szamok[j+1]
                szamok[j+1]=tmp
            }
        }
    }

    let lista = document.getElementById("lista")
    lista.innerHTML=''
    for(sz of szamok) {
        lista.innerHTML += `<li>${sz}</li>`
    }

}