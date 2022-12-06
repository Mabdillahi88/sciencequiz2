const start_btn = document.querySelector(".begin_btn button");
const info_box = document.querySelector(".instructions");
const exit_btn = info_box.querySelector(".begin_start .leave");
const continue_btn = info_box.querySelector(".begin_start .next");
const quiz_box = document.querySelector(".mainquestions");
const result_box = document.querySelector(".final_score");
const option_list = document.querySelector(".potential-answers");
const time_line = document.querySelector("header .straight-line");
const timeText = document.querySelector(".time .how-long");
const timeCount = document.querySelector(".time .how-long-time");


start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}


exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
}


continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuetions(0); 
    queCounter(1); 
    startTimer(15); 
    startTimerLine(0); 
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

