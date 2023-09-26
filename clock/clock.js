const clockContainer = document.querySelector('.js-clock'),
  clockTit = clockContainer.querySelector('h1');

function getTime() {
  const date = new Date();
  const min = date.getMinutes();
  const hours = date.getHours();
  const sec = date.getSeconds();
  clockTit.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
    min < 10 ? `0${min}` : min
  } : ${sec < 10 ? `0${sec}` : sec}`;
}

//setInterval() : 첫번째 인자는 실행할 함수를 받고, 두번째 인자는 함수를 실행하고 싶은 시간을 적는다.
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
