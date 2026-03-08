const messages = {
    1: "Desde el primer día que hablamos, super que formariamos algo lindo y no me equivoque porque contigo se que formare la familia que tanto anhelo.",
    2: "Ya 3 meses de amor y felicidad a tu lado, rapido no? jeje Gracias por ser mi noviecita hermoshita.",
    3: "Me encanta como me haces sentir cada dia a tu lado mi niña, simplemente a tu lado todo es tan unico y especial, gracias por ser tu.",
    4: "Gracias por estar conmigo siempre y no abandonarme como todos.",
    5: "Eres mi persona favorita, mi lugar seguro y siempre lo seras porque se que nunca nadie podra ser ni mejor ni como tu.",
    6: "No puedo esperar a cumplir muchos meses más a tu lado creando algo hermoso me crea tanta ilusion jeje </3.",
    'special': "Mi cori, Mi tunita, Te amo con toda mi alma mi amor, gracias por hacerme el chico mas feliz del mundo, realmente solo he podido ser feliz a tu lado, gracias por amarme como nadie mas y ser mi refugio, mi lugar seguro, mi mundo y la unica persona en quien puedo confiar. Gracias por estos 3 meses de relacion tan hermosos juntos <3 Psdt: Hay un mensaje mas despues de tocar (para el amor de mi vida)."
};

const welcomeText = "Hola, Mi Niña Hermosa... Este regalito es para ti.<3";
const finalMessageText = "Mi Niña, este mensaje lo modifique... No se que es lo que te hizo hacer lo que hiciste, me duele pero si como tu dices, es por tu bien, no te molestare porque yo solo quiero tu felicidad y que estes bien, para mi no es lo mejor eso te lo aseguro pero no importa, te esperare el tiempo que sea necesario. ❤️";

// 1. Bienvenida con Efecto Escritura
window.onload = () => {
    const welcomeContainer = document.getElementById('welcome-text-container');
    let k = 0;
    function typeWelcome() {
        if (k < welcomeText.length) {
            welcomeContainer.innerHTML += welcomeText.charAt(k);
            k++;
            setTimeout(typeWelcome, 60);
        } else {
            // Esperar un momento y desaparecer
            setTimeout(() => {
                const screen = document.getElementById('welcome-screen');
                screen.style.opacity = '0';
                screen.style.transition = '1s';
                setTimeout(() => {
                    screen.classList.add('hidden');
                    document.getElementById('main-content').classList.remove('hidden');
                }, 1000);
            }, 1500);
        }
    }
    typeWelcome();
};

// 2. Control de Cartas
function openCard(id) {
    const modal = document.getElementById('card-modal');
    const container = document.getElementById('typewriter-text');
    modal.classList.remove('hidden');
    container.innerHTML = "";
    
    let i = 0;
    function type() {
        if (i < messages[id].length) {
            container.innerHTML += messages[id].charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
    if(id === 'special') document.getElementById('bg-music').play();
}

function closeCard() {
    document.getElementById('card-modal').classList.add('hidden');
}

// 3. Secuencia Final
function startFinalSequence() {
    const grid = document.querySelector('.cards-grid');
    const btn = document.getElementById('final-btn');
    grid.style.transform = "scale(0)";
    grid.style.opacity = "0";
    btn.style.opacity = "0";
    
    setTimeout(() => {
        document.getElementById('main-content').classList.add('hidden');
        document.getElementById('final-screen').classList.remove('hidden');
        
        setTimeout(() => {
            const heart = document.getElementById('heart-container');
            heart.style.opacity = '0';
            heart.style.transition = '1s';
            
            setTimeout(() => {
                heart.classList.add('hidden');
                const extra = document.getElementById('extra-final-text');
                extra.classList.remove('hidden');
                
                let j = 0;
                function typeFinal() {
                    if (j < finalMessageText.length) {
                        extra.innerHTML += finalMessageText.charAt(j);
                        j++;
                        setTimeout(typeFinal, 70);
                    }
                }
                typeFinal();
            }, 1000);
        }, 3500);
    }, 1000);
}