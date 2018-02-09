//To do: Add sound effect on clicking, add 0 for 1 digit mins.
$(document).ready(function(){

let setMins = 20;
let sec = 00;
let isPause = true;
let setMinsBreak = 5;
let secBreak = 0;
let breakTime = false;
let finalAng = 360 / ($("#displayR").text()*60);
let finalAngB = 360 / ($("#displayL").text()*60);
let i = 0;
let j = 0;
let opa;


//SVG Logic


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
  
  
    


  //Clock Logic

  //Break Logic

    let timeBreak = setInterval(function(){
         
        if (breakTime){                                              //Checks if session or break is active   
            $("#purple").css("opacity", "0");                       //Style change
            $("#red").css("opacity", opa*j);
            $("#timerDiv2").css(
                {
                   "border": "2px #FFCF02 solid",
                   "box-shadow": "0px 0px 10px #FFCF02, 0px 0px 20px #FFCF02, 0px 0px 30px #FFCF02, 0px 0px 40px #FFCF02"
               });
            $("#time").css({
                "text-shadow": "0px 0px 10px #FFCF02, 0px 0px 20px #FFCF02, 0px 0px 30px #FFCF02, 0px 0px 40px #FFCF02, 0px 0px 50px #FFCF02, 0px 0px 60px #FFCF02"
           });
           $("h1").css({
            "text-shadow": "0px 0px 10px #FFCF02, 0px 0px 20px #FFCF02, 0px 0px 30px #FFCF02, 0px 0px 40px #FFCF02"
           });
            $("#arc1").attr("stroke", "#FFCF02");
            $('#timerDiv2 a').css("color", "rgb(255,207,2)");
            document.getElementById("arc1").setAttribute("d", describeArc(125, 125, 113, 0, finalAngB*j));
            $("#sec").text(secBreak);
            $("#min").text(setMinsBreak);
            if (!isPause){                                        //Checks if the clock is paused
                if (secBreak === 0){
                    if (setMinsBreak ===0){
                        setMinsBreak = $("#displayL").text();
                        secBreak = 1;
                        j = 0;
                        breakTime = !breakTime;
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
    

//Session Logic
    
    let time = setInterval(function(){
        if(!breakTime){
            $("#red").css("opacity", "0");
            $("#purple").css("opacity", opa*i);
            $("#arc1").attr("stroke", "#00BAD0");
            $('#timerDiv2 a').css("color", "rgb(0,186,208)");
            $("#timerDiv2").css(
                {
                   "border": "2px #00BAD0 solid",
                   "box-shadow": "0px 0px 10px #00BAD0, 0px 0px 20px #00BAD0, 0px 0px 30px #00BAD0, 0px 0px 40px #00BAD0"
               });
            $("#time").css({
                "text-shadow": "0px 0px 10px #00BAD0, 0px 0px 20px #00BAD0, 0px 0px 30px #00BAD0, 0px 0px 40px #00BAD0, 0px 0px 50px #00BAD0, 0px 0px 60px #00BAD0, 0px 0px 70px #00BAD0"
               });
            $("h1").css({
                "text-shadow": "0px 0px 10px #00BAD0, 0px 0px 20px #00BAD0, 0px 0px 30px #00BAD0, 0px 0px 40px #00BAD0"
            });
            $("#sec").text(sec);
            $("#min").text(setMins);
            document.getElementById("arc1").setAttribute("d", describeArc(125, 125, 113, 0, finalAng*i));
                if (!isPause){          
                    if (sec === 0){
                        if (setMins ===0){
                            setMins = $("#displayR").text();
                            sec = 1;
                            breakTime = !breakTime;
                            i = 0;
                        }
                        else {
                            sec = 60;
                            setMins--;
                        }
                    }
                sec--;
                i++;
            }
        }
    }, 1000);



//Toggle b/w session and break logic || Play/Pause logic

$("#timerDiv2 a:nth-of-type(1)").on("click", function(e){
    e.preventDefault();
    isPause = !isPause;       //Switch!
    if($('#play').hasClass("fa-play")){
         $('#play').fadeOut(500, function() {  
            $('#play').removeClass('fa-play');
        });
        $('#play').fadeIn(500, function() { 
            $('#play').addClass('fa-pause');
        });
    } 
    else {
        $('#play').fadeOut(500, function() { 
           $('#play').removeClass('fa-pause');
        });
        $('#play').fadeIn(500, function() { 
            $('#play').addClass('fa-play');
         });
        }
});

//Stop/Reset Button

$("#timerDiv2 a:nth-of-type(2)").on("click", function(e){
    e.preventDefault();
    setMins = 20;
    sec = 00;
    isPause = true;
    setMinsBreak = 5;
    secBreak = 0;
    breakTime = false;
    finalAng = 360 / ($("#displayR").text()*60);
    finalAngB = 360 / ($("#displayL").text()*60);
    i = 0;
    j = 0;
    $("#sec").text(sec);
    $("#min").text(setMins);
    $("#displayR").text(setMins);
    $("#displayL").text(setMinsBreak);
    $('#play').removeClass('fa-pause');
    $('#play').addClass('fa-play');

});
//Plus, Minus sign click handlers
$("#plusL").on("click", function(e){
    e.preventDefault();
    if (!isPause){

    }
    else {
        let curVal = Number($("#displayL").text());
        curVal+= 1;
        if (curVal > 60){
            curVal = 60;
            setMinsBreak = curVal;
        }
        else {
            $("#displayL").text(curVal);
        }
        setMinsBreak =  $("#displayL").text();
        finalAngB = 360 / ($("#displayL").text()*60);
        opa = 1/($("#displayL").text()*60);
        j = 0;
        secBreak = 0;
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
    setMinsBreak =  $("#displayL").text();
    finalAngB = 360 / ($("#displayL").text()*60);
    opa = 1/($("#displayL").text()*60);
    j = 0;
    secBreak = 0;
    }
    
});

$("#plusR").on("click", function(e){
    e.preventDefault();
    if (!isPause){

    }
    else {
        let curVal = Number($("#displayR").text());
        curVal+= 1;
        sec = 0;
        setMins+=1;
        if (curVal > 60){
            curVal = 60;
            setMins = 60;
        }
        else {
            $("#displayR").text(setMins);
        }
        $("#sec").text(sec);
        $("#min").text(setMins);
        finalAng = 360/($("#displayR").text()*60);
        opa = 1/($("#displayR").text()*60);
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
        sec = 0
        setMins-=1;
        if (curVal < 1){
            curval = 1;
            setMins = 1;
            $("#displayR").text(setMins);
        }
        else {
            $("#displayR").text(curVal);
        }
        $("#sec").text(sec);
        $("#min").text(setMins);
        finalAng = 360 / ($("#displayR").text()*60);
        opa = 1/($("#displayR").text()*60);
        i = 0;
    }

//Sign hover handler
});
$("#minusR, #plusR").hover(
    function(){
        $(this).css("color", "#00BAD0");

},
    function(){
        $(this).css("color", "white");
    });

$("#minusL, #plusL").hover(
    function(){
        $(this).css("color", "#FFCF02");

},
    function(){
        $(this).css("color", "white");
});

});

//The End.