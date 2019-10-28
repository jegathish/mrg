
const timeToBeReach = new Date("Nov 3, 2019 22:00:00").getTime();

const updateCountDown = setInterval(() => {

  const now = new Date().getTime();

  const timeDistance = timeToBeReach - now;

  const days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);

  const countDown = document.getElementById('countdown');

  countDown.innerHTML = `
    <div class="time-box">${days} <span>days</span></div>
    <div class="time-box">${hours} <span>hours</span></div>
    <div class="time-box">${minutes} <span>minutes</span></div>
    <div class="time-box">${seconds} <span>seconds</span></div>
  `;

  countDown.style.opacity = 1;

  //if time is up
  if (timeDistance < 0) {
    clearInterval(updateCountDown);
    countDown.innerHTML = "It's time !";
  }

}, 1000);



var blink = document.getElementById('blink');
      setInterval(function() {
         blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
      }, 500);



$('.button').on('click',function(){
  console.log("click");
  $('.main').removeClass('active');
  $('.moogurtham').removeClass('active')
  $('.end').removeClass('active')
  $('.intro').addClass('active');
  var elmnt = document.getElementById("content");
  elmnt.scrollIntoView();
  });
