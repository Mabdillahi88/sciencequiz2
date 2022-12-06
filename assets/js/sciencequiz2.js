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


