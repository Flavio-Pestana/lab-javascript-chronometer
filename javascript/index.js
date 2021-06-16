const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes;
  printSeconds;

}

function printMinutes() {
  const minutes = chronometer.getMinutes();
  const twoDigitMinutes = chronometer.computeTwoDigitNumber()
  minDecElement.innerText = twoDigitMinutes[0];
  minUniElement.innerText = twoDigitMinutes[1];
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  const twoDigitSeconds = chronometer.computeTwoDigitNumber(minutes);
  minDecElement.innerText = twoDigitSeconds[0];
  minUniElement.innerText = twoDigitSeconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {

  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.classList.replace('reset', 'split');
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');

}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.classList.replace('split', 'reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    printTime();
  } else {

  }

});
