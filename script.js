// Floating Hearts

const heartsContainer = document.getElementById("hearts-container");

for(let i=0;i<40;i++){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(15+Math.random()*25)+"px";

    heart.style.animationDuration=
    (8+Math.random()*10)+"s";

    heart.style.animationDelay=
    Math.random()*10+"s";

    heartsContainer.appendChild(heart);
}

// Music

const song=document.getElementById("birthdaySong");
const musicBtn=document.getElementById("musicBtn");

let started=false;

document.body.addEventListener("click",()=>{

    if(!started){

        song.play();
        started=true;
    }

},{once:true});

musicBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    if(song.paused){

        song.play();
        musicBtn.innerHTML="🎵";

    }else{

        song.pause();
        musicBtn.innerHTML="🔇";
    }

});

// Quiz

const questions=[

{
q:"What is my absolute favorite nickname for you?",
a:["Monmonty","Lolo","Nony","Just Mona"],
correct:"Lolo"
},

{
q:"Which food always reminds me of you?",
a:["Shin Ramen","Qashtota Manga","Burger","Sushi"],
correct:"Qashtota Manga"
},

{
q:"What is the one thing I desire most in this world?",
a:["Money","Success","To marry you","Ma7shy"],
correct:"To marry you"
},

{
q:"What is my favorite physical feature or thing about you?",
a:["Eyes","Smile","Your nose","Hair"],
correct:"Your nose"
},

{
q:"What is the sentence you say that I love hearing the most?",
a:[
"Ya sabah el kheir",
"Bs ya zeft",
"Ya haywan",
"Enta Fein"
],
correct:"Bs ya zeft"
}

];

let current=0;

const qEl=document.getElementById("question");
const answers=document.getElementById("answers");
const feedback=document.getElementById("feedback");
const qNum=document.getElementById("questionNumber");

function loadQuestion(){

    const q=questions[current];

    qNum.innerHTML=
    `Question ${current+1} of ${questions.length}`;

    qEl.innerHTML=q.q;

    answers.innerHTML="";

    feedback.innerHTML="";

    q.a.forEach(answer=>{

        const btn=document.createElement("button");

        btn.className="answer-btn";

        btn.innerHTML=answer;

        btn.onclick=()=>selectAnswer(answer);

        answers.appendChild(btn);
    });
}

function selectAnswer(answer){

    const correct=
    questions[current].correct;

    if(answer===correct){

        feedback.innerHTML="Correct 💖";

        setTimeout(()=>{

            current++;

            if(current<questions.length){

                loadQuestion();

            }else{

                finishQuiz();
            }

        },800);

    }else{

        feedback.innerHTML=
        "Try again, ya ghabya!";
    }
}

loadQuestion();

function finishQuiz(){

    launchConfetti();

    document
    .getElementById("finale")
    .classList.remove("hidden");
}

function launchConfetti(){

    for(let i=0;i<200;i++){

        const conf=
        document.createElement("div");

        conf.classList.add("confetti");

        conf.style.left=
        Math.random()*100+"vw";

        conf.style.background=
        `hsl(${Math.random()*360},90%,70%)`;

        document.body.appendChild(conf);

        setTimeout(()=>{
            conf.remove();
        },5000);
    }
}
