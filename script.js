// let i = 0;

// function showTime() {
//   document.getElementById("screen").innerText = i;
//   startStopWatch();
// }

// function startStopWatch() {
//   i++;
//   if (i > 0) {
//     setTimeout(showTime, 1000);
//   }
// }

// document.getElementById("startBtn").addEventListener("click", () => {
//   startStopWatch();
// });

// document.getElementById("stopBtn").addEventListener("click", () => {
//   clearTime();
// });

// function clearTime() {
//   document.getElementById("screen").innerText = "";
// }

/////////////////////////////////////////////////////////////////////////////////////////

// let start = () => console.log('start');
// let start1 = () => {
//     console.log('start');
// }
/*function foo() {
    console.log('start');
}
function bar() {
    console.log('end');
}
function fn(start, end) {
    start();
    end();
}

fn(foo, bar);*/

/*function myOnClick() {
    alert('Clicked');
}
document.querySelector('#myButton')
    .addEventListener('click', myOnClick);*/

////////////////////////////////////////////////////////////////////////////

// function callGoogleUsers(id, successCallback, failureCallback) {
//   let msg;
//   if (Math.random() > 0.5) {
//     msg = successCallback(id);
//   } else {
//     msg = failureCallback(id);
//   }
//   console.log(msg);
// }

// function onSuccess(id) {
//   return `The user information for ${id} has been retrieved`;
// }
// function onFailure(id) {
//   return `Failure to retrieve user information for ${id}`;
// }

// callGoogleUsers(57, onSuccess, onFailure);
// callGoogleUsers(undefined, onSuccess, onFailure);

//////////////////////////////////////////////////////////////////////////////////////////

import { FormReader } from "./class2";

const reader = new FormReader("form1");
const reader1 = new FormReader("form2");
