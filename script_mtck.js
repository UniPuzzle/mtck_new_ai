// // Функция для установки начальных координат элементов в пикселях при загрузке страницы
// function setInitialPositions() {
//   // Получаем контейнер mtck-wrap
//   var mtckWrap = document.querySelector(".mtck-wrap");

//   // Получаем все элементы спичек внутри контейнера mtck-wrap
//   var matchstickElems = mtckWrap.querySelectorAll(".mtck-elem");

//   // Перебираем каждый элемент спички
//   matchstickElems.forEach(function (elem) {
//     // Получаем координаты элемента относительно mtck-wrap
//     var offsetX = elem.offsetLeft;
//     var offsetY = elem.offsetTop;

//     // Устанавливаем новые координаты элемента
//     elem.style.left = offsetX + "px";
//     elem.style.top = offsetY + "px";
//   });
// }

// // Функция для перемещения элемента, учитывая угол поворота
// function moveMatchstick(e) {
//   console.log("mousedown", e.clientX, e.clientY);

//   // Получаем начальные координаты курсора и элемента
//   var initialMouseX = e.clientX;
//   var initialMouseY = e.clientY;
//   var initialElementX = parseFloat(this.style.left);
//   var initialElementY = parseFloat(this.style.top);

//   function moveAt(pageX, pageY) {
//     // Устанавливаем новые координаты элемента
//     this.style.left = pageX + "px";
//     this.style.top = pageY + "px";
//   }

//   moveAt = moveAt.bind(this);

//   moveAt(initialElementX, initialElementY);

//   function onMouseMove(e) {
//     console.log("mousemove", e.clientX, e.clientY);
//     moveAt(
//       e.clientX - initialMouseX + initialElementX,
//       e.clientY - initialMouseY + initialElementY
//     );
//   }

//   document.addEventListener("mousemove", onMouseMove);

//   var elem = this;
//   document.onmouseup = function () {
//     console.log("mouseup", e.clientX, e.clientY);
//     document.removeEventListener("mousemove", onMouseMove);
//     stopDrag.call(elem);
//   };
// }

// // Функция для остановки перемещения и присвоения координат спички
// function stopDrag() {
//   // Восстанавливаем возможность выделять текст на странице
//   this.style.zIndex = "auto";
//   this.style.pointerEvents = "auto";
//   this.style.userSelect = "auto";
//   this.style.webkitUserSelect = "auto";
//   this.style.MozUserSelect = "auto";
//   this.style.msUserSelect = "auto";
//   this.style.OUserSelect = "auto";

//   // Убираем обработчик события onmouseup
//   document.onmouseup = null;
// }

// // Назначение обработчиков событий перемещения
// var elems = document.querySelectorAll(".mtck-elem");
// elems.forEach(function (elem) {
//   elem.addEventListener("mousedown", moveMatchstick);
// });

// // Вызываем функцию при загрузке страницы для установки начальных координат элементов
// window.addEventListener("load", setInitialPositions);

function setInitialPositions() {
  var mtckWrap = document.querySelector(".mtck-wrap");
  var matchstickElems = mtckWrap.querySelectorAll(".mtck-elem");

  matchstickElems.forEach(function (elem) {
    var offsetX = elem.offsetLeft;
    var offsetY = elem.offsetTop;

    elem.style.left = offsetX + "px";
    elem.style.top = offsetY + "px";
  });
}

function moveMatchstickWithMouse(e) {
  var initialMouseX = e.clientX;
  var initialMouseY = e.clientY;
  var initialElementX = parseFloat(this.style.left);
  var initialElementY = parseFloat(this.style.top);

  function moveAt(pageX, pageY) {
    this.style.left = pageX + "px";
    this.style.top = pageY + "px";
  }

  moveAt = moveAt.bind(this);

  moveAt(initialElementX, initialElementY);

  function onMouseMove(e) {
    moveAt(
      e.clientX - initialMouseX + initialElementX,
      e.clientY - initialMouseY + initialElementY
    );
  }

  document.addEventListener("mousemove", onMouseMove);

  var elem = this;
  document.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    stopDrag.call(elem);
  };
}

function moveMatchstickWithTouch(e) {
  var initialTouchX = e.touches[0].clientX;
  var initialTouchY = e.touches[0].clientY;
  var initialElementX = parseFloat(this.style.left);
  var initialElementY = parseFloat(this.style.top);

  function moveAt(pageX, pageY) {
    this.style.left = pageX + "px";
    this.style.top = pageY + "px";
  }

  moveAt = moveAt.bind(this);

  moveAt(initialElementX, initialElementY);

  function onTouchMove(e) {
    moveAt(
      e.touches[0].clientX - initialTouchX + initialElementX,
      e.touches[0].clientY - initialTouchY + initialElementY
    );
  }

  document.addEventListener("touchmove", onTouchMove);

  var elem = this;
  document.ontouchend = function () {
    document.removeEventListener("touchmove", onTouchMove);
    stopDrag.call(elem);
  };
}

function stopDrag() {
  document.onmouseup = null;
  document.ontouchend = null;
}

var elems = document.querySelectorAll(".mtck-elem");
elems.forEach(function (elem) {
  if ("ontouchstart" in window) {
    elem.addEventListener("touchstart", moveMatchstickWithTouch);
  } else {
    elem.addEventListener("mousedown", moveMatchstickWithMouse);
  }
});

window.addEventListener("load", setInitialPositions);
