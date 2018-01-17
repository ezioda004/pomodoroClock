$(document).ready(function(){

let setMins = 20;
let sec = 0;
let isPause = false;
let setMinsBreak = 5;
let secBreak = 0;
let breakTime = false;

    let timeBreak = setInterval(function(){
        // console.log(breakTime);
        if (breakTime){
            $("#timerDiv2").css("border", "2px red solid");
            console.log(setMinsBreak);
            $("#sec").text(secBreak);
        $("#min").text(setMinsBreak);
            if (!isPause){
                // console.log(setMinsBreak, secBreak);
                if (secBreak === 0){
                    if (setMinsBreak ===0){
                        setMinsBreak = $("#displayL").text();
                        secBreak = 1;
                        breakTime = !breakTime;
                        // clearInterval(timeBreak);
                        console.log(breakTime);
                    }
                    else {
                        secBreak = 60;
                    setMinsBreak--;
                    }
                    
                }
        
                secBreak--;
            }
        }
        
        
    
    }, 1000);
    
    let time = setInterval(function(){
        
        if(!breakTime){
        $("#timerDiv2").css("border", "2px purple solid");
        $("#sec").text(sec);
        $("#min").text(setMins);
            if (!isPause){
                console.log(sec);
                if (sec === 0){
                    // console.log(sec);
                    if (setMins ===0){
                        setMins = $("#displayR").text();
                        sec = 1;
                        breakTime = !breakTime;
                        // clearInterval(time);
                        console.log(breakTime);
                    }
                    else {
                        sec = 60;
                        setMins--;
                    }
                    
                }
        
                sec--;
            }
        }
            
        
     
        
    }, 1000);




$("#timerDiv2").on("click", function(e){
    e.preventDefault();
    isPause = !isPause; 
    console.log(isPause, "pause");
});
$("#plusL").on("click", function(e){
    e.preventDefault();
    if (!isPause){

    }
    else {
        let curVal = Number($("#displayL").text());
    curVal+= 1;
    $("#displayL").text(curVal);
    setMinsBreak = curVal;
    
    // sec = 0
    // setMins+=1;
    // $("#sec").text(sec);
    // $("#min").text(setMins);
    }
    
});
$("#minusL").on("click", function(e){
    e.preventDefault();
    if (!isPause){

    }
    else {
        let curVal = Number($("#displayL").text());
    curVal-= 1;
    if (curVal < 1){
        curval = 1;
    }
    else {
        $("#displayL").text(curVal);
    }
    console.log(curVal);
    setMinsBreak =  $("#displayL").text();
    
    }
    
});
$("#plusR").on("click", function(e){
    e.preventDefault();
    if (!isPause){

    }
    else {
        let curVal = Number($("#min").text());
    curVal+= 1;
    $("#displayR").text(curVal);
    sec = 0
    setMins+=1;

    }
    
});
$("#minusR").on("click", function(e){
    e.preventDefault();
    if (!isPause){

    }
    else {
    let curVal = Number($("#min").text());
    curVal-= 1;
    // $("#displayR").text(curVal);
    sec = 0
    setMins-=1;
        if (curVal < 1){
        curval = 1;
        setMins = 1;
        }
        else {
            $("#displayR").text(curVal);
        }
    console.log(curVal);
    $("#sec").text(sec);
    $("#min").text(setMins);
    }
    
});
     
   
    


});