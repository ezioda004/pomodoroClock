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
            $("#purple").css("opacity", "0");
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
            $('#timerDiv2 a').css("color", "#00BAD0");
            document.getElementById("arc1").setAttribute("d", describeArc(125, 125, 113, 0, finalAngB*j));
           
            // console.log(setMinsBreak);
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
        // console.log(finalAng);
        if(!breakTime){
            // console.log(opa*i);
            $("#red").css("opacity", "0");
            $("#purple").css("opacity", opa*i);
            $("#arc1").attr("stroke", "#00BAD0");
            $('#timerDiv2 a').css("color", "#00BAD0");
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
            // if ($("#min").text().length === 1){
            //     $("#min").text("0"+setMins)
            // }
            // else {
            //     $("#min").text(setMins);
            // }
            // console.log(typeof $("#min").text())
            
        
        // finalAng = 360/(setMins * 60 + sec);
        // console.log(finalAng, i);
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
                        // console.log(breakTime);
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




$("#timerDiv2 a").on("click", function(e){
    e.preventDefault();
    isPause = !isPause;
    // $("#play").toggleClass("fa-play fa-pause");
    // $("#play").fadeOut("300", function(){
    //     $("#play").toggleClass("fa-play fa-pause");
    // });
    // $("#play").fadeIn("300", function(){
    //     $("#play").show();
    // })
    if($('#play').hasClass("fa-play"))
        {
           // alert();
         $('#play').fadeOut(500, function() { 
           
          
           $('#play').removeClass('fa-play');
           $('#play').fadeIn(500, function() { 
            // $('#play').addClass('fa-pause');
            $('#play').addClass('fa-pause');
         });
        });
       
        
          
        } else {
        $('#play').fadeOut(500, function() { 
           $('#play').removeClass('fa-pause');
        });
        $('#play').fadeIn(500, function() { 
            $('#play').addClass('fa-play');
         });
        }
    // alert("test");
    // console.log(isPause, "pause");
    
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
    // console.log(curVal);
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
        $("#displayR").text(curVal);
        sec = 0;
        console.log(curVal);
        setMins+=1;
        finalAng = 360/($("#displayR").text()*60);
        opa = 1/($("#displayR").text()*60);
        i = 0;
    }
    
});
$("#minusR").on("click", function(e){
    e.preventDefault();
    // $("#displayR").removeClass("animated fadeIn");
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
    opa = 1/($("#displayR").text()*60);
    i = 0;
    console.log(curVal);
    // console.log(finalArg);
    }
    
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
// x60 = 360   i = 6
// x120 = 360  i = 3
//
// Here's my understanding of this. The parameter of a function is local scoped meaning

// ```
// function bar(a){
//     console.log(a); //underfined
// }
// console.log(a); // Refrence error
// ```

// a gets hoisted to the top of the function. Js engine intreprts the above code as:
// ```
// function bar(a){
//     var a;
//     console.log(a); //underfined
// }
// console.log(a); // Refrence error
// ```

// So what happens under the hood of js engine here?:
// ```
// function foo(x) {
// 	x = x + 1;
//     x; // 3
// }

// var a = 2;
// var b = a 

// foo(b);
// console.log(b); // 2, not 3
// ```

// Something like this:
// ```
// var a;
// var b;
// a = 2;
// b = a; // b = 2

// function foo(x){
//     var x;
//     x = b; // These 2 steps happen during hositing of function and the below step happens in the execution phase.
//     x = x + 1; // since x = b this expression becomes x = b + 1 
//     console.log(x) // 3
//     console.log(b) // 2 
// }
// foo(b);
// console.log(b); //2
// ```

// I honestly had to do a bunch of research to *really* understand this, hope this helps!

