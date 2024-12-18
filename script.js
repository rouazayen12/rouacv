const questions = [
    {
        question: "1. Quelle est la première étape dans la création d'un site web ?",
        reponse: [
            { text: "Choisir une palette de couleurs", correct: false },
            { text: "Concevoir une maquette", correct: true },
            { text: "Créer le contenu du site", correct: false },

        ]
    },
    {
        question: "2. Quelle est l'une des langues de programmation les plus utilisées pour le web ?",
        reponse: [
            { text: "Python", correct: false },
            { text: "C", correct: false },
            { text: "JavaScript", correct: true },

        ]
    },
    {
        question: "3.Quelle est la discipline sportive qui se pratique sur un terrain de tennis ?",
        reponse: [
            { text: "Football", correct: false },
            { text: "Tennis", correct: true },
            { text: "Rugby", correct: false },

        ]
    },
    {
        question: "4.Quel est l'élément principal pour une base de maquillage réussie ?",
        reponse: [
            { text: "Fond de teint", correct: true },
            { text: "Rouge à lèvres ", correct: false },
            { text: "Crème hydratante<", correct: false },

        ]
    },
    {
        question: "5.Quel est le langage le plus utilisé pour le développement web ?  ?",
        reponse: [
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },
            { text: "C++", correct: false },

        ]
    },  {
        question: "6. Qui est l'artiste principal du genre musical 'pop' ?",
        reponse: [
            { text: "Michael Jackson", correct: true },
            { text: "Beethoven", correct: false },
            { text: "Mozart", correct: false },

        ]
    },
    {
        question: "6. Quel ingrédient est essentiel pour faire lever une pâte à gâteau ?",
        reponse: [
            { text: "Levure", correct: true },
            { text: "Farine", correct: false },
            { text: "Sucre", correct: false },

        ]
    },
    {
        question: "7. Quel est l'outil utilisé pour appliquer un fond de teint liquide ?",
        reponse: [
            { text: "Pinceau", correct: false },
            { text: "Éponge", correct: true },
            { text: "Doigts", correct: false },

        ]
    },
    {
        
        question: "8. Que signifie “HTML” en informatique ?",
        reponse: [
            { text: "HyperText Markup Language", correct: true },
            { text: "HighText Machine Learning", correct: false },
            { text: "Hyperlink Text Management Layout", correct: false },

        ]
    },
    {
    question: "9. Quel est l'instrument principal dans un orchestre symphonique ?",
      reponse: [
            { text: "Piano", correct: false },
            { text: "Violon", correct: true },
            { text: "Guitare", correct: false },

        ]
    },
    {
        question: "10.  En football, combien de joueurs y a-t-il dans une équipe sur le terrain ?",
        reponse: [
            { text: "9", correct: false },
            { text: "11", correct: true },
            { text: "12", correct: false },

        ]
    },
    {
    question: "11. Quel ingrédient est essentiel pour préparer une pâte à crêpes ?",
    reponse: [
        { text: "Farine", correct: true },
        { text: "Beurre", correct: false },
        { text: "Levure", correct: false }
    ]
},
{
    question: "15. Que signifie 'CSS' dans le développement web ?",
    reponse: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Creative Style System", correct: false },
        { text: "Computer Style Syntax", correct: false }
    ]
},
]
const questionElement = document.getElementById("question");
const Boutonderéponse = document.getElementById('Bouton-de-réponse');
const suivantbtn = document.getElementById('suivant-btn');

let currentQuestionIndex = 0;
let score =0;


function startQuiz(){
    currentQuestionIndex = 0; //nomro question
    score =0;
    suivantbtn.innerHTML = "Suivant"; 
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.reponse.forEach(reponse => {
        const button = document.createElement("button");
        button.innerHTML = reponse.text;
        button.classList.add("btn");
        Boutonderéponse.appendChild(button);
        if(reponse.correct){
            button.dataset.correct = reponse.correct;
        }
        button.addEventListener("click",Sélectionneruneréponse);
    });
}

function resetState(){
    suivantbtn.style.display = "none";
    while(Boutonderéponse.firstChild){
        Boutonderéponse.removeChild(Boutonderéponse.firstChild);
        


    }
}

function Sélectionneruneréponse(e){
    const selectedBtn = e.target;
    const Laréponseestcorrecte = selectedBtn.dataset.correct === "true";
    if(Laréponseestcorrecte){
        selectedBtn.classList.add("reponse-correcte");
        score++;
    }
    else{
        selectedBtn.classList.add("reponse-incorrecte");
    }
    Array.from(Boutonderéponse.children).forEach(button => {
        if(button.dataset.correcte === "true"){
            button.classList.add("reponse-correcte");

        }
        button.disabled = true;


    }
    );
    suivantbtn.style.display = "block";
}

function showScore(){
    resetState();
    
    suivantbtn.innerHTML ="Rejouer";
    suivantbtn.style.display ="block";
}

function handlesuivantbtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

suivantbtn.addEventListener("click", ()=> {
   if(currentQuestionIndex < questions.length) {
    handlesuivantbtn();
   }
   else{
    startQuiz()
   }
}
)


startQuiz();

