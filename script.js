$(document).ready(function(){

let setMins = 20;
let sec = 0;
let isPause = true;
let setMinsBreak = 5;
let secBreak = 0;
let breakTime = false;
let finalAng = 360 / ($("#displayR").text()*60);
let finalAngB = 360 / ($("#displayL").text()*60);
let i = 0;
let j = 0;

//SVG


function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
  
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }
  
  function describeArc(x, y, radius, startAngle, endAngle){
  
      var start = polarToCartesian(x, y, radius, endAngle);
      var end = polarToCartesian(x, y, radius, startAngle);
  
      var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  
      var d = [
          "M", start.x, start.y, 
          "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ");
  
      return d;       
  }
  
  
    


  //Logic

    let timeBreak = setInterval(function(){
         
        if (breakTime){
            $("#timerDiv2").css(
                {
                   "border": "2px red solid",
                   "box-shadow": "0px 0px 10px red, 0px 0px 20px red, 0px 0px 30px red, 0px 0px 40px red"
               });
               $("#time").css({
                "text-shadow": "0px 0px 10px red, 0px 0px 20px red, 0px 0px 30px red, 0px 0px 40px red, 0px 0px 50px red, 0px 0px 60px red"
           });
            $("#arc1").attr("stroke", "red");
            document.getElementById("arc1").setAttribute("d", describeArc(125, 125, 113, 0, finalAngB*j));
           
            console.log(setMinsBreak);
            $("#sec").text(secBreak);
            $("#min").text(setMinsBreak);
            if (!isPause){
                // console.log(setMinsBreak, secBreak);
                if (secBreak === 0){
                    if (setMinsBreak ===0){
                        setMinsBreak = $("#displayL").text();
                        secBreak = 1;
                        j = 0;
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
                j++;
            }
        }
        
        
    
    }, 1000);
    
    let time = setInterval(function(){
        console.log(finalAng);
        if(!breakTime){
            $("#arc1").attr("stroke", "purple");
            $("#timerDiv2").css(
                {
                   "border": "2px purple solid",
                   "box-shadow": "0px 0px 10px purple, 0px 0px 20px purple, 0px 0px 30px purple, 0px 0px 40px purple"
               });
               $("#time").css({
                    "text-shadow": "0px 0px 10px purple, 0px 0px 20px purple, 0px 0px 30px purple, 0px 0px 40px purple, 0px 0px 50px purple, 0px 0px 60px purple, 0px 0px 70px purple"
               });
        $("#sec").text(sec);
        $("#min").text(setMins);
        
        // finalAng = 360/(setMins * 60 + sec);
        console.log(finalAng, i);
        document.getElementById("arc1").setAttribute("d", describeArc(125, 125, 113, 0, finalAng*i));
            if (!isPause){
                // console.log(sec);
                if (sec === 0){
                    // console.log(sec);
                    if (setMins ===0){
                        setMins = $("#displayR").text();
                        sec = 1;
                        breakTime = !breakTime;
                        i = 0;
                        // clearInterval(time);
                        console.log(breakTime);
                    }
                    else {
                        sec = 60;
                        setMins--;
                    }
                    
                }
                // finalAng = finalAng + finalAng;
                sec--;
                i++;
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
    finalAngB = 360 / ($("#displayL").text()*60);
    j = 0;
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
    finalAngB = 360 / ($("#displayL").text()*60);
    j = 0;
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
    finalAng = 360 / ($("#displayR").text()*60);
    i = 0;
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
    // console.log(curVal);
    $("#sec").text(sec);
    $("#min").text(setMins);
    finalAng = 360 / ($("#displayR").text()*60);
    i = 0;
    // console.log(finalArg);
    }
    
});
     

  
    


});
// x60 = 360   i = 6
// x120 = 360  i = 3
//
