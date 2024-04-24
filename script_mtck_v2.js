function initMatchstickInteraction() {
  var mtckWrap = document.querySelector(".mtck-wrap");
  var matchstickElems = mtckWrap.querySelectorAll(".mtck-elem");

  matchstickElems.forEach(function (elem) {
    var offsetX = elem.offsetLeft;
    var offsetY = elem.offsetTop;

    elem.style.left = offsetX + "px";
    elem.style.top = offsetY + "px";
  });

  function moveMatchstickWithMouse(e) {
    var initialMouseX = e.clientX;
    var initialMouseY = e.clientY;
    var initialElementX = parseFloat(this.style.left);
    var initialElementY = parseFloat(this.style.top);

    function moveAt(pageX, pageY) {
      this.style.left = pageX + "px";
      this.style.top = pageY + "px";

      // Получаем координаты всех точек текущей спички
      var movedElemStart = {
        x: this.querySelector(".start").getBoundingClientRect().left,
        y: this.querySelector(".start").getBoundingClientRect().top,
      };
      var movedElemMiddle = {
        x: this.querySelector(".middle").getBoundingClientRect().left,
        y: this.querySelector(".middle").getBoundingClientRect().top,
      };
      var movedElemEnd = {
        x: this.querySelector(".end").getBoundingClientRect().left,
        y: this.querySelector(".end").getBoundingClientRect().top,
      };

      // Проходим по всем спичкам, кроме текущей, и проверяем их точки
      matchstickElems.forEach(function (otherElem) {
        if (otherElem !== elem) {
          // Получаем координаты всех точек другой спички
          var otherElemStart = {
            x: otherElem.querySelector(".start").getBoundingClientRect().left,
            y: otherElem.querySelector(".start").getBoundingClientRect().top,
          };
          var otherElemMiddle = {
            x: otherElem.querySelector(".middle").getBoundingClientRect().left,
            y: otherElem.querySelector(".middle").getBoundingClientRect().top,
          };
          var otherElemEnd = {
            x: otherElem.querySelector(".end").getBoundingClientRect().left,
            y: otherElem.querySelector(".end").getBoundingClientRect().top,
          };

          // Проверяем совпадение координат с допустимым порогом (например, 3 пикселей)
          if (
            isPointInRange(movedElemStart, otherElemStart) ||
            isPointInRange(movedElemStart, otherElemMiddle) ||
            isPointInRange(movedElemStart, otherElemEnd)
          ) {
            console.log("Точка start совмещена с другой спичкой!");
          }
          if (
            isPointInRange(movedElemMiddle, otherElemStart) ||
            isPointInRange(movedElemMiddle, otherElemMiddle) ||
            isPointInRange(movedElemMiddle, otherElemEnd)
          ) {
            console.log("Точка middle совмещена с другой спичкой!");
          }
          if (
            isPointInRange(movedElemEnd, otherElemStart) ||
            isPointInRange(movedElemEnd, otherElemMiddle) ||
            isPointInRange(movedElemEnd, otherElemEnd)
          ) {
            console.log("Точка end совмещена с другой спичкой!");
          }
        }
      });
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

      // Получаем координаты всех точек текущей спички
      var movedElemStart = {
        x: this.querySelector(".start").getBoundingClientRect().left,
        y: this.querySelector(".start").getBoundingClientRect().top,
      };
      var movedElemMiddle = {
        x: this.querySelector(".middle").getBoundingClientRect().left,
        y: this.querySelector(".middle").getBoundingClientRect().top,
      };
      var movedElemEnd = {
        x: this.querySelector(".end").getBoundingClientRect().left,
        y: this.querySelector(".end").getBoundingClientRect().top,
      };

      // Проходим по всем спичкам, кроме текущей, и проверяем их точки
      matchstickElems.forEach(function (otherElem) {
        if (otherElem !== elem) {
          // Получаем координаты всех точек другой спички
          var otherElemStart = {
            x: otherElem.querySelector(".start").getBoundingClientRect().left,
            y: otherElem.querySelector(".start").getBoundingClientRect().top,
          };
          var otherElemMiddle = {
            x: otherElem.querySelector(".middle").getBoundingClientRect().left,
            y: otherElem.querySelector(".middle").getBoundingClientRect().top,
          };
          var otherElemEnd = {
            x: otherElem.querySelector(".end").getBoundingClientRect().left,
            y: otherElem.querySelector(".end").getBoundingClientRect().top,
          };

          // Проверяем совпадение координат с допустимым порогом (например, 3 пикселей)
          if (
            isPointInRange(movedElemStart, otherElemStart) ||
            isPointInRange(movedElemStart, otherElemMiddle) ||
            isPointInRange(movedElemStart, otherElemEnd)
          ) {
            console.log("Точка start совмещена с другой спичкой!");
          }
          if (
            isPointInRange(movedElemMiddle, otherElemStart) ||
            isPointInRange(movedElemMiddle, otherElemMiddle) ||
            isPointInRange(movedElemMiddle, otherElemEnd)
          ) {
            console.log("Точка middle совмещена с другой спичкой!");
          }
          if (
            isPointInRange(movedElemEnd, otherElemStart) ||
            isPointInRange(movedElemEnd, otherElemMiddle) ||
            isPointInRange(movedElemEnd, otherElemEnd)
          ) {
            console.log("Точка end совмещена с другой спичкой!");
          }
        }
      });
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
}

function isPointInRange(point1, point2) {
  return Math.abs(point1.x - point2.x) < 3 && Math.abs(point1.y - point2.y) < 3;
}

window.addEventListener("load", initMatchstickInteraction);
