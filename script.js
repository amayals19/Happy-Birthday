const bunny = document.getElementById("bunny");
const subtitle = document.getElementById("subtitle");
const bgMusic = document.getElementById("bgMusic");
let noCount = 0;
const letterText =
`Dear Navi ,

Happy Birthday! Even though miles separate us today, my heart is right there with you, celebrating every moment of your special day.
Mona kettipidich kore Ummah ippo theranm enn ind pakshe ndakana.
Ellam natil vannitt theram.
Enik mona kaanan kothiavua vegam povatte divasangal.

Miss you so much

Love,
Amaya ❤️`;

const finalText = `

Thank you for being part of my life.

I know this little website
can't replace a real hug,

but every click,
every flower,
and every letter
was made with all my heart.

Happy Birthday, Navi ❤️

I Love You Forever.
see you soon 

– Amaya ❤️

`;
window.onload = function () {
    startIntro();
};

function startIntro() {
    const questionBox = document.getElementById("questionBox");

    // 🎊 Confetti immediately
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });

    // Hide question initially (extra safety)
    questionBox.classList.add("hidden");

    // after 2 sec show next message
    setTimeout(() => {
        document.getElementById("subtitle").innerText =
            "";

        questionBox.classList.remove("hidden");
        questionBox.classList.add("show");
    }, 2000);
}
function typeLetter(){

    const typedLetter = document.getElementById("typedLetter");

    typedLetter.innerHTML = "";

    let i = 0;

    function typing(){

        if(i < letterText.length){

            if(letterText.charAt(i) === "\n"){

                typedLetter.innerHTML += "<br>";

            }else{

                typedLetter.innerHTML += letterText.charAt(i);

            }

            i++;

            setTimeout(typing,40);

        }

    }

    typing();

}
function typeFinal(){

    const finalMessage = document.getElementById("finalMessage");

    finalMessage.innerHTML = "";

    let i = 0;

    function typing(){

        if(i < finalText.length){

            if(finalText.charAt(i) === "\n"){

                finalMessage.innerHTML += "<br>";

            }else{

                finalMessage.innerHTML += finalText.charAt(i);

            }

            i++;

            setTimeout(typing,35);

        }

    }

    typing();

}

function yesGift() {
    bgMusic.play();
    bunny.src = "images/bunny/bunny-happy.png";

subtitle.innerText = "Let's open your surprise! 🎁";
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
    setTimeout(() => {
    document.getElementById("scene1").classList.add("hidden");

    document.getElementById("scene2").classList.remove("hidden");
    }, 1500);
}

function noClicked() {

    noCount++;

    bunny.src = "images/bunny/bunny-sad.png";

    if (noCount === 1) {

        subtitle.innerText = "Please...? 🥺";

    } else if (noCount === 2) {
        bunny.src = "images/bunny/bunny-confused.png";

        subtitle.innerText = "please Mone? ❤️";

    } else {
        bunny.src = "images/bunny/bunny-smile.png";

        subtitle.innerText = "Only YES works! 😂";

    }

}
// ----------------------------
// Gift 1 → Bouquet
// ----------------------------

let flowerOpened = false;

document.getElementById("gift1").onclick = function(){

    if(flowerOpened) return;

    flowerOpened = true;

    confetti({

        particleCount:150,

        spread:90,

        origin:{ y:0.6 }

    });

    this.classList.add("giftShake");

    setTimeout(()=>{

        document.getElementById("scene2").classList.add("hidden");

        document.getElementById("scene3").classList.remove("hidden");

    },700);

};
document.getElementById("giftContinue").onclick = function(){

    document.getElementById("scene3").classList.add("hidden");

    document.getElementById("scene2").classList.remove("hidden");

    const gift1 = document.getElementById("gift1");

    gift1.src = "images/gift/gift-closed.png";

    gift1.classList.add("giftCompleted");

    document.querySelector(".giftItem:first-child .giftName").innerHTML =
        "";
};

// ----------------------------
// Gift 2
// ----------------------------


let letterVisited = false;

document.getElementById("gift2").onclick = function(){

    if(letterVisited) return;

    letterVisited = true;

    this.classList.add("giftShake");

    confetti({

        particleCount:120,

        spread:80,

        origin:{y:0.6}

    });

    setTimeout(()=>{

        document.getElementById("scene2").classList.add("hidden");

        document.getElementById("scene4").classList.remove("hidden");

    },700);

};
document.getElementById("seal").onclick = function(){

    document
        .getElementById("letterPaper")
        .classList.add("show");

    setTimeout(()=>{

        document
            .getElementById("letterMessage")
            .classList.add("show");
        typeLetter();    

    },700);

    setTimeout(()=>{

    document
        .getElementById("letterContinue")
        .classList.remove("hidden");

    }, letterText.length * 40 + 1200);

}
document.getElementById("letterContinue").onclick = function(){

    document.getElementById("scene4").classList.add("hidden");

    document.getElementById("scene2").classList.remove("hidden");

};

// ----------------------------
// Gift 3 → Cake
// ----------------------------

let cakeVisited = false;

document.getElementById("gift3").onclick = function(){

    if(cakeVisited) return;

    cakeVisited = true;

    this.classList.add("giftShake");

    confetti({

        particleCount:150,

        spread:90,

        origin:{y:0.6}

    });

    setTimeout(()=>{

        document.getElementById("scene2").classList.add("hidden");

        document.getElementById("scene5").classList.remove("hidden");

    },700);

};

const birthdayCake = document.getElementById("birthdayCake");

let cakeCut = false;

birthdayCake.addEventListener("click", cutCake);

function cutCake(){

    if(cakeCut) return;

    cakeCut = true;

    confetti({

        particleCount:250,

        spread:120,

        origin:{y:0.6}

    });

    birthdayCake.style.transform = "scale(1.08)";

    document.querySelector("#scene5 .giftText").innerHTML =
    "Happy Birthday My Love ❤️<br>May all your dreams come true!";

    document
        .getElementById("cakeContinue")
        .classList.remove("hidden");

}
document.getElementById("cakeContinue").onclick = function(){

    document.getElementById("scene5").classList.add("hidden");

    document.getElementById("scene6").classList.remove("hidden");

}
document.getElementById("finalContinue").onclick = function(){

    document.getElementById("scene6").classList.add("hidden");

    document.getElementById("scene7").classList.remove("hidden");

    confetti({

        particleCount:300,

        spread:180,

        origin:{y:0.6}

    });

    typeFinal();

}