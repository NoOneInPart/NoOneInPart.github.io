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

let minusElevenclock = () => {
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

  let time = `UTC-11 ${hrs}:${mins}:${secs} ${period} (American Samoa, Niue)`;
  document.getElementById("minusElevenclock").innerText = time;
  setTimeout(minusElevenclock, 1000);
};

minusElevenclock();


let minusTenclock = () => {
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

  let time = `UTC-10 ${hrs}:${mins}:${secs} ${period} (Honolulu, HST)`;
  document.getElementById("minusTenclock").innerText = time;
  setTimeout(minusTenclock, 1000);
};

minusTenclock();


let minusNineclock = () => {
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

  let time = `UTC-9 ${hrs}:${mins}:${secs}:${period} (Anchorage, AKST)`;
  document.getElementById("minusNineclock").innerText = time;
  setTimeout(minusNineclock, 1000);
};

minusNineclock();


let minusEightclock = () => {
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

  let time = `UTC-8 ${hrs}:${mins}:${secs} ${period} (Los Angeles, Vancouver, PST)`;
  document.getElementById("minusEightclock").innerText = time;
  setTimeout(minusEightclock, 1000);
};

minusEightclock();


let minusSevenclock = () => {
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

  let time = `UTC-7 ${hrs}:${mins}:${secs} ${period} (Denver, Edmonton, MST)`;
  document.getElementById("minusSevenclock").innerText = time;
  setTimeout(minusSevenclock, 1000);
};

minusSevenclock();


let minusSixclock = () => {
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

  let time = `UTC-6 ${hrs}:${mins}:${secs} ${period} (Mexico City, Chicago, CST)`;
  document.getElementById("minusSixclock").innerText = time;
  setTimeout(minusSixclock, 1000);
};

minusSixclock();


let minusFiveclock = () => {
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

  let time = `UTC-5 ${hrs}:${mins}:${secs} ${period} (New York, Toronto, EST)`;
  document.getElementById("minusFiveclock").innerText = time;
  setTimeout(minusFiveclock, 1000);
};

minusFiveclock();


let minusFourclock = () => {
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

  let time = `UTC-4 ${hrs}:${mins}:${secs}:${period} (Santiago, Santo Domingo, AST)`;
  document.getElementById("minusFourclock").innerText = time;
  setTimeout(minusFourclock, 1000);
};

minusFourclock();


let minusThreeclock = () => {
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

  let time = `UTC-3 ${hrs}:${mins}:${secs}:${period} (Sao Paulo, Buenos Aires)`;
  document.getElementById("minusThreeclock").innerText = time;
  setTimeout(minusThreeclock, 1000);
};

minusThreeclock();


let minusTwoclock = () => {
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

  let time = `UTC-2 ${hrs}:${mins}:${secs} ${period} (Fernando de Noronha, SGSSI)`;
  document.getElementById("minusTwoclock").innerText = time;
  setTimeout(minusTwoclock, 1000);
};

minusTwoclock();


let minusOneclock = () => {
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

  let time = `UTC-1 ${hrs}:${mins}:${secs} ${period} (Cape Verde, CVT)`;
  document.getElementById("minusOneclock").innerText = time;
  setTimeout(minusOneclock, 1000);
};

minusOneclock();


let zeroClock = () => {
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

  let time = `UTC-0 ${hrs}:${mins}:${secs} ${period} (London, Dublin, GMT)`;
  document.getElementById("zeroClock").innerText = time;
  setTimeout(zeroClock, 1000);
};

zeroClock();


let plusOneclock = () => {
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

  let time = `UTC+1 ${hrs}:${mins}:${secs}:${period} (Berlin, Rome, BST)`;
  document.getElementById("plusOneclock").innerText = time;
  setTimeout(plusOneclock, 1000);
};

plusOneclock();


let plusTwoclock = () => {
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

  let time = `UTC+2 ${hrs}:${mins}:${secs} ${period} (Cairo, Johannesburg, CEST)`;
  document.getElementById("plusTwoclock").innerText = time;
  setTimeout(plusTwoclock, 1000);
};

plusTwoclock();


let plusThreeclock = () => {
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

  let time = `UTC+3 ${hrs}:${mins}:${secs}:${period} (Moscow, Istanbul, EEST)`;
  document.getElementById("plusThreeclock").innerText = time;
  setTimeout(plusThreeclock, 1000);
};

plusThreeclock();


let plusFourclock = () => {
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

  let time = `UTC+4 ${hrs}:${mins}:${secs}:${period} (Dubai, Baku)`;
  document.getElementById("plusFourclock").innerText = time;
  setTimeout(plusFourclock, 1000);
};

plusFourclock();


let plusFiveclock = () => {
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

  let time = `UTC+5 ${hrs}:${mins}:${secs} ${period} (Karachi, Tashkent)`;
  document.getElementById("plusFiveclock").innerText = time;
  setTimeout(plusFiveclock, 1000);
};

plusFiveclock();


let plusSixclock = () => {
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

  let time = `UTC+6 ${hrs}:${mins}:${secs} ${period} (Dhaka, Almaty)`;
  document.getElementById("plusSixclock").innerText = time;
  setTimeout(plusSixclock, 1000);
};

plusSixclock();


let plusSevenclock = () => {
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

  let time = `UTC+7 ${hrs}:${mins}:${secs} ${period} (Jakarta, Ho Chi Minh City)`;
  document.getElementById("plusSevenclock").innerText = time;
  setTimeout(plusSevenclock, 1000);
};

plusSevenclock();


let plusEightclock = () => {
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

  let time = `UTC+8 ${hrs}:${mins}:${secs} ${period} (Shanghai, Taipei)`;
  document.getElementById("plusEightclock").innerText = time;
  setTimeout(plusEightclock, 1000);
};

plusEightclock();


let plusNineclock = () => {
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

  let time = `UTC+9 ${hrs}:${mins}:${secs} ${period} (Tokyo, Seoul)`;
  document.getElementById("plusNineclock").innerText = time;
  setTimeout(plusNineclock, 1000);
};

plusNineclock();


let plusTenclock = () => {
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

  let time = `UTC+10 ${hrs}:${mins}:${secs} ${period} (Sydney, Port Moresby)`;
  document.getElementById("plusTenclock").innerText = time;
  setTimeout(plusTenclock, 1000);
};

plusTenclock();


let plusElevenclock = () => {
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

  let time = `UTC+11 ${hrs}:${mins}:${secs} ${period} (Noumea, Magadan)`;
  document.getElementById("plusElevenclock").innerText = time;
  setTimeout(plusElevenclock, 1000);
};

plusElevenclock();


let plusTwelveclock = () => {
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

  let time = `UTC+12 ${hrs}:${mins}:${secs}:${period} (Auckland, Suva)`;
  document.getElementById("plusTwelveclock").innerText = time;
  setTimeout(plusTwelveclock, 1000);
};

plusTwelveclock();