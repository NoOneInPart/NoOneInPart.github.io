window.requestAnimationFrame = window.requestAnimationFrame
                               || window.mozRequestAnimationFrame
                               || window.webkitRequestAnimationFrame
                               || window.msRequestAnimationFrame
                               || function(f){return setTimeout(f, 1000/60)}


function updateclock(){
 var curdate = new Date()
 var hour_as_percentage = ((( curdate.getHours() + (curdate.getMinutes()/60) + (curdate.getSeconds()/60)/60) / 24) * 100) + 5 //converts time to % accurate down to seconds, +5% added to result to calibrate daynight indicator
 $(".daynight").css("object-position", hour_as_percentage + "% 0") //configures object-position of daynight indicator based on calculated percentage above
 requestAnimationFrame(updateclock)
}

requestAnimationFrame(updateclock)