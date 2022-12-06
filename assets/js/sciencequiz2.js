const begin_btn  = document.querySelector(".begin_btn button");
const instructions = document.querySelector(".instructions");
const leave = instructions.querySelector(".buttons .leave");
const continue_btn = instructions.querySelector(".buttons .continue");
const quiz_box = document.querySelector(".questions");
const result_box = document.querySelector(".final_score");
const option_list = document.querySelector(".rules_game");
const time_line = document.querySelector("header .straight-line");
const timeText = document.querySelector(".timer .how-long");
const timeCount = document.querySelector(".how-long-time");

begin_btn .onclick = ()=>{
    instructions.classList.add("activeInfo"); 
}


leave.onclick = ()=>{
    instructions.classList.remove("activeInfo"); 
}