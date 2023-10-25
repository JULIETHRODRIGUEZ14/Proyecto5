let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonSonido = new Audio ('../Proyecto5/sound/botonbailar.mp3');
let botonAudio = new Audio ('../Proyecto5/sound/Quiero mover el Bote.mp3');

function bailar(){
    if (esqueleto == "off"){ /*== compara*/
        esqueleto = "on"; /*= asigna*/
        esqueletoStop.classList.add("on"); /*clase agregada on */
        esqueletoStop.addEventListener('click',()=>{
            botonSonido.play();
        })
        esqueletoStop.addEventListener('click',()=>{
            botonAudio.play();
        })
        console.log("On");    
    }else{
        esqueleto = "off";
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click', ()=>{
            botonAudio.pause();
        })
        console.log("Off");
    }
}