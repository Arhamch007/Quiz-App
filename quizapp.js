const quizData = [
    {
        question: 'How Old I am?',
        a: '12',
        b: '20',
        c: '19',
        d: '15',
        correct: 'c'
    },
    {
        question: 'Which uni is best for CS in Pakistan?',
        a: 'FAST',
        b: 'UET',
        c: 'LUMS',
        d: 'COMSATS',
        correct: 'd'
    },
    {
        question: 'Who was the winner of Asia Cup 2022?',
        a: 'Sri Lanka',
        b: 'Pakistan',
        c: 'India',
        d: 'None of these',
        correct: 'a'
    },
    {
        question: 'Who was the winner of FIFA world cup 2022?',
        a: 'France',
        b: 'Italy',
        c: 'Brazil',
        d: 'Argentina',
        correct: 'd'
    },
    {
        question: 'Who is the world best batsman of cricket?',
        a: 'Quinton de Kock',
        b: 'Rassie van der Dussen',
        c: 'David Warner',
        d: 'Babar Azam',
        correct: 'd'
    },
]
const answerEls=document.querySelectorAll(".answer");
const questionEl=document.getElementById('question');
const quiz=document.getElementById('quiz');
const a_text=document.getElementById('a-text');
const b_text=document.getElementById('b-text');
const c_text=document.getElementById('c-text');
const d_text=document.getElementById('d-text');
const sumbitbtn=document.getElementById('submit')


let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz(){
    deselectanswers();
    const currentQuizData=quizData[currentQuiz];
    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d; 

    
}
function getSelected(){
   
    let answer=undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked)
        answer= answerEl.id;
    });
    return answer ;
}
function deselectanswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked=false;
    });
}
sumbitbtn.addEventListener('click',()=>{
    //Checked to see the answer
    const answer= getSelected();

    if(answer){

        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
    
        }else{
            quiz.innerHTML= `<h2>You answer correctly at ${score}/${quizData.length}.</h2>
            <button onClick="location.reload()" >Reload</button>`;
        }

    }
    
    
})