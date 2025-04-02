document.addEventListener("DOMContentLoaded", () => {
    const pacchetto = document.querySelector(".pacchetto-container");
    const descrizione = document.querySelector(".descrizione");
    const dettagli = document.querySelectorAll(".dettagli figure");
    const musicaButton = document.getElementById("musica");
    let audio = new Audio("audio/romantica.mp3");
    audio.loop = true;
    audio.play();
    let muted = false;

    musicaButton.addEventListener("click", function() {
        if (!muted) {
            audio.muted = true;
            musicaButton.textContent = "🔇 Musica Mutata";
        } else {
            audio.muted = false;
            musicaButton.textContent = "🔊 Musica Attiva";
        }
        muted = !muted;
    });

    // Mostra pacchetto dopo il caricamento
    setTimeout(() => {
        pacchetto.style.opacity = "1";
    }, 1000);

    // Mostra la descrizione con un effetto di dissolvenza
    setTimeout(() => {
        descrizione.style.display = "block";
        descrizione.style.opacity = "0";
        setTimeout(() => {
            descrizione.style.opacity = "1";
            descrizione.style.transition = "opacity 1.5s ease-in-out";
        }, 200);
    }, 2000);

    // Mostra le immagini una dopo l'altra con dissolvenza
    dettagli.forEach((figura, index) => {
        const immagine = figura.querySelector("img");
        const testo = figura.querySelector("figcaption");

        // Nascondiamo inizialmente l'immagine e il testo
        immagine.style.opacity = "0";
        testo.style.opacity = "0";

        setTimeout(() => {
            testo.style.opacity = "1"; // Mostriamo prima il testo
        }, 2500 + index * 3000); // Mostra il testo 2.5 secondi dopo

        setTimeout(() => {
            immagine.style.display = "block"; // Mostriamo l'immagine dopo il testo
            setTimeout(() => {
                immagine.style.opacity = "1"; // A questo punto facciamo comparire l'immagine
                immagine.style.transition = "opacity 1.5s ease-in-out";
            }, 200);
        }, 3500 + index * 3000); // Mostra l'immagine dopo il testo (1 secondo dopo)
    });

    // Creazione di cuoricini animati come neve
    function creaCuoricini() {
        if (document.querySelectorAll(".cuoricino").length >= 50) return;
        
        const cuore = document.createElement("div");
        cuore.classList.add("cuoricino");
        cuore.innerHTML = "❤️";
        document.body.appendChild(cuore);
        
        const size = Math.random() * 20 + 10;
        cuore.style.fontSize = `${size}px`;
        cuore.style.left = `${Math.random() * 100}%`;
        cuore.style.top = "-10px";
        cuore.style.position = "absolute";
        cuore.style.animation = `caduta ${Math.random() * 5 + 3}s linear infinite`;
        
        setTimeout(() => cuore.remove(), 8000);
    }

    setInterval(creaCuoricini, 500);
});
