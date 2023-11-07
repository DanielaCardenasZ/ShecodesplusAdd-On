setInterval(function () {
  let seattleElement = document.querySelector("#seattle");
  let seattleDateElement = seattleElement.querySelector(".date");
  let seattleTimeElement = seattleElement.querySelector(".time");
  let seattleTime = moment().tz("US/Pacific");
  seattleDateElement.innerHTML = seattleTime.format("MMMM Do, YYYY");
  seattleTimeElement.innerHTML = seattleTime.format(
    `h:mm:ss[<small>]A[</small>]`
  );

  let spainElement = document.querySelector("#spain");
  let spainDateElement = spainElement.querySelector(".date");
  let spainTimeElement = spainElement.querySelector(".time");
  let spainTime = moment().tz("Europe/Madrid");
  spainDateElement.innerHTML = spainTime.format("MMMM Do, YYYY");
  spainTimeElement.innerHTML = spainTime.format(`h:mm:ss[<small>]A[</small>]`);

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(`h:mm:ss[<small>]A[</small>]`);

  let monterreyElement = document.querySelector("#monterrey");
  let monterreyDateElement = monterreyElement.querySelector(".date");
  let monterreyTimeElement = monterreyElement.querySelector(".time");
  let monterreyTime = moment().tz("America/Monterrey");
  monterreyDateElement.innerHTML = monterreyTime.format("MMMM Do, YYYY");
  monterreyTimeElement.innerHTML = monterreyTime.format(
    `h:mm:ss[<small>]A[</small>]`
  );
}, 1000);
