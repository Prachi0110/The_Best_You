'use strict'
// Questions Database
const questionsDb = [
    {
        
        question:' Q1: Who is the most famous bodybuilder in the world?',
        correct:'ans1',
        a:'Arnold Schwarzenegger',
        b:'Gaurav Taneja',
        c:'The Rock',
        d:'Phil Heath'
        
    },
    {
        
        question:'  Q2: How many calories should we consume daily?',
        correct:'ans4',
        a:'2200 for women & 2000 for men',
        b:'1000 for women & 1500 for men',
        c:'1500 for women & 1000 for men',
        d:'2000 for women & 2500 for men'
        
    },
    {
       
        question:' Q3: Which among the following has the highest protein quantity?',
        correct:'ans2',
        a:'Wheat',
        b:'Soyabean',
        c:'Rice',
        d:'Gram'
        
    },
    {
        
        question:'Q4: Rep is a short form for?',
        correct:'ans3',
        a:'Reputation',
        b:'Repository',
        c:'Repetitions',
        d:'Reptile'
        
    },
    {
      
        question:'Q5:Dark chocolate consists of?',
        correct:'ans1',
        a:'50-90% cocoa solids',
        b:'10% cocoa',
        c:'20% cocoa',
        d:'5% cocoa'
        
    }
    // ,
    // {
      
    //     question:'Q6: Which one of the following is a Ladakh dish?',
    //     correct:'ans4',
    //     a:'Puran Poli',
    //     b:'Chebureki',
    //     c:'Chexo',
    //     d:'Tigmo'
        
    // },
    // {
        
    //     question:'Q7: Which one of the following is a Tibbetan dish?',
    //     correct:'ans1',
    //     a:'Cheser mog',
    //     b:'Anarsa',
    //     c:'Aato',
    //     d:'Bara'
        
    // },
    // {
      
    //     question:'Q8: Which one of the following is a Nepalese dish?',
    //     correct:'ans4',
    //     a:'Akini Chokibo',
    //     b:'Samathu',
    //     c:'Axone',
    //     d:'Alu Chop'
        
    // },
    // {
       
    //     question:'Q9: Which one of the following is a French dessert?',
    //     correct:'ans3',
    //     a:'Rizogalo',
    //     b:'Halva with Semolina',
    //     c:'Pears Belle Helene',
    //     d:'Bougatsa'
        
    // },
    // {
      
    //     question:'Q10: Which one of the following is an Egyptian dish?',
    //     correct:'ans1',
    //     a:'Qatayef',
    //     b:'Greenlandic cake',
    //     c:'Caribou',
    //     d:'Suaasat'
        
    // },
];
 //Referencing HTML Elements
const question = document.querySelector('.question');
const option1 = document.getElementById('Option1');
const option2 = document.getElementById('Option2');
const option3 = document.getElementById('Option3');
const option4 = document.getElementById('Option4');
const submit =document.getElementById('submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.getElementById('showscore');
let questionCount=0;
let score=0;
 
//Loading the questions
const loadQuestion=()=> {
    const questionList =questionsDb[questionCount];
    question.innerText =questionList.question;

    option1.innerText= questionList.a;
    option2.innerText= questionList.b;
    option3.innerText= questionList.c;
    option4.innerText= questionList.d;

}
loadQuestion();


//Checking the answers
const getCheckAnswer= () =>{
    let answer;
    answers.forEach(curAnsElem => {
        if(curAnsElem.checked){
            answer =curAnsElem.id;
        }
        
    });
    return answer;

};


//Deselecting the answers
const deselectAll= ()=> {
    answers.forEach((curAnsElem) => curAnsElem.checked=false);
}

//Onclick Submit
submit.addEventListener('click' , ()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===questionsDb[questionCount].correct){
        score++;
    };
    questionCount++;
    deselectAll();

    if(questionCount< questionsDb.length){
        loadQuestion();

    }else{
            showScore.innerHTML =`
            <h3> You scored ${score}/${questionsDb.length} 😉</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
            `;
            showScore.classList.remove('scoreArea');
    }
})

