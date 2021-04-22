var $hands = $('#coolclock div.hand')

window.requestAnimationFrame = window.requestAnimationFrame
                               || window.mozRequestAnimationFrame
                               || window.webkitRequestAnimationFrame
                               || window.msRequestAnimationFrame
                               || function(f){return setTimeout(f, 60)}


function updateclock(){
 var curdate = new Date()
 var hour_as_degree = ( curdate.getHours() + curdate.getMinutes()/60 ) / 12 * 360
 var minute_as_degree = ( curdate.getMinutes() + curdate.getSeconds()/60) / 60 * 360
 var second_as_degree = ( curdate.getSeconds() + curdate.getMilliseconds()/1000 ) /60 * 360
 $hands.filter('.hour').css({transform: 'rotate(' + hour_as_degree + 'deg)' })
 $hands.filter('.minute').css({transform: 'rotate(' + minute_as_degree + 'deg)' })
 $hands.filter('.second').css({transform: 'rotate(' + second_as_degree + 'deg)' })
 requestAnimationFrame(updateclock) //
}

requestAnimationFrame(updateclock)

/*function currentTime(){
	var date = new Date(); 
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec= date.getSeconds();
	hour = updateTime(hour);
	min = updateTime(min);
	sec = updateTime(sec);
	document.getElementById("digitalClock").innerText = hour + " : " + min + " : " + sec;
	var t = setTimeout(function(){ currentTime() }, 1000)
	var midday = "AM";
	midday = (hour >=12) ? "PM" : "AM";
	hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
}

function updateTime(k) {
	if ( k < 10){
		return "0" + k;
	}
	else {
		return k;
	}
}

currentTime(); */

let minusElevenclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()-4;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }
	if (hrs == 0) {
    hrs = 12;
  } else if (hrs < 0) {
    hrs = hrs + 12;
    period = "PM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC-11 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("minusElevenclockDST").innerText = time;
  setTimeout(minusElevenclockDST, 1000);
};

minusElevenclockDST();


let minusTenclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()-3;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }
	if (hrs == 0) {
    hrs = 12;
  } else if (hrs < 0) {
    hrs = hrs + 12;
    period = "PM";
  }  
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC-10 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("minusTenclockDST").innerText = time;
  setTimeout(minusTenclockDST, 1000);
};

minusTenclockDST();


let minusNineclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()-2;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }
	if (hrs == 0) {
    hrs = 12;
  } else if (hrs < 0) {
    hrs = hrs + 12;
    period = "PM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC-9 ${hrs}:${mins}:${secs}:${period}`;
  document.getElementById("minusNineclockDST").innerText = time;
  setTimeout(minusNineclockDST, 1000);
};

minusNineclockDST();


let minusEightclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()-1;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }
    if (hrs == 0) {
    hrs = 12;
  } else if (hrs < 0) {
    hrs = hrs + 12;
    period = "PM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC-8 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("minusEightclockDST").innerText = time;
  setTimeout(minusEightclockDST, 1000);
};

minusEightclockDST();


let minusSevenclockDST = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }

      if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC-7 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("minusSevenclockDST").innerText = time;
  setTimeout(minusSevenclockDST, 1000);
};

minusSevenclockDST();


let minusSixclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+1;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

      if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC-6 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("minusSixclockDST").innerText = time;
  setTimeout(minusSixclockDST, 1000);
};

minusSixclockDST();


let minusFiveclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+2;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

      if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC-5 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("minusFiveclockDST").innerText = time;
  setTimeout(minusFiveclockDST, 1000);
};

minusFiveclockDST();


let minusFourclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+3;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

      if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC-4 ${hrs}:${mins}:${secs}:${period}`;
  document.getElementById("minusFourclockDST").innerText = time;
  setTimeout(minusFourclockDST, 1000);
};

minusFourclockDST();


let minusThreeclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+4;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

      if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC-3 ${hrs}:${mins}:${secs}:${period}`;
  document.getElementById("minusThreeclockDST").innerText = time;
  setTimeout(minusThreeclockDST, 1000);
};

minusThreeclockDST();


let minusTwoclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+5;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

      if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC-2 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("minusTwoclockDST").innerText = time;
  setTimeout(minusTwoclockDST, 1000);
};

minusTwoclockDST();


let minusOneclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+6;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

      if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC-1 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("minusOneclockDST").innerText = time;
  setTimeout(minusOneclockDST, 1000);
};

minusOneclockDST();


let zeroclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+7;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

    if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC-0 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("zeroclockDST").innerText = time;
  setTimeout(zeroclockDST, 1000);
};

zeroclockDST();


let plusOneclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+8;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

    if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC+1 ${hrs}:${mins}:${secs}:${period}`;
  document.getElementById("plusOneclockDST").innerText = time;
  setTimeout(plusOneclockDST, 1000);
};

plusOneclockDST();


let plusTwoclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+9;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

    if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC+2 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("plusTwoclockDST").innerText = time;
  setTimeout(plusTwoclockDST, 1000);
};

plusTwoclockDST();


let plusThreeclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+10;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

    if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC+3 ${hrs}:${mins}:${secs}:${period}`;
  document.getElementById("plusThreeclockDST").innerText = time;
  setTimeout(plusThreeclockDST, 1000);
};

plusThreeclockDST();


let plusFourclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+11;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

    if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC+4 ${hrs}:${mins}:${secs}:${period}`;
  document.getElementById("plusFourclockDST").innerText = time;
  setTimeout(plusFourclockDST, 1000);
};

plusFourclockDST();


let plusFiveclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+12;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

    if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC+5 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("plusFiveclockDST").innerText = time;
  setTimeout(plusFiveclockDST, 1000);
};

plusFiveclockDST();


let plusSixclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+13;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

    if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC+6 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("plusSixclockDST").innerText = time;
  setTimeout(plusSixclockDST, 1000);
};

plusSixclockDST();


let plusSevenclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+14;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

    if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC+7 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("plusSevenclockDST").innerText = time;
  setTimeout(plusSevenclockDST, 1000);
};

plusSevenclockDST();


let plusEightclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+15;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

    if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC+8 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("plusEightclockDST").innerText = time;
  setTimeout(plusEightclockDST, 1000);
};

plusEightclockDST();


let plusNineclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+16;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

    if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC+9 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("plusNineclockDST").innerText = time;
  setTimeout(plusNineclockDST, 1000);
};

plusNineclockDST();


let plusTenclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+17;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }

    if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC+10 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("plusTenclockDST").innerText = time;
  setTimeout(plusTenclockDST, 1000);
};

plusTenclockDST();


let plusElevenclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+18;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

    if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC+11 ${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("plusElevenclockDST").innerText = time;
  setTimeout(plusElevenclockDST, 1000);
};

plusElevenclockDST();


let plusTwelveclockDST = () => {
  let date = new Date();
  let hrs = date.getHours()+19;
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

    if (hrs == 0) {
    hrs = 12;
    period = "AM";
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "AM";
  }
  hrs = hrs < 10? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `DST: UTC+12 ${hrs}:${mins}:${secs}:${period}`;
  document.getElementById("plusTwelveclockDST").innerText = time;
  setTimeout(plusTwelveclockDST, 1000);
};

plusTwelveclockDST();