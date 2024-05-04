function initMatchstickInteraction() {
  var mtckWrap = document.querySelector(".mtck-wrap");
  var matchstickElems = mtckWrap.querySelectorAll(".mtck-elem");

  matchstickElems.forEach(function (elem) {
    var offsetX = elem.offsetLeft;
    var offsetY = elem.offsetTop;

    elem.style.left = offsetX + "px";
    elem.style.top = offsetY + "px";
  });

  var onMouseMove, onMouseUp, onTouchMove, onTouchEnd;

  function moveMatchstickWithMouse(e) {
    var initialMouseX = e.clientX;
    var initialMouseY = e.clientY;
    var initialElementX = parseFloat(this.style.left);
    var initialElementY = parseFloat(this.style.top);

    onMouseMove = function (e) {
      moveAt(
        e.clientX - initialMouseX + initialElementX,
        e.clientY - initialMouseY + initialElementY
      );
    };

    onMouseUp = function () {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      stopDrag.call(this);
      checkPoints.call(this);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    var elem = this;
    function moveAt(pageX, pageY) {
      elem.style.left = pageX + "px";
      elem.style.top = pageY + "px";
    }
  }

  function moveMatchstickWithTouch(e) {
    var initialTouchX = e.touches[0].clientX;
    var initialTouchY = e.touches[0].clientY;
    var initialElementX = parseFloat(this.style.left);
    var initialElementY = parseFloat(this.style.top);

    onTouchMove = function (e) {
      moveAt(
        e.touches[0].clientX - initialTouchX + initialElementX,
        e.touches[0].clientY - initialTouchY + initialElementY
      );
    };

    onTouchEnd = function () {
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      stopDrag.call(this);
      checkPoints.call(this);
    };

    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);

    var elem = this;
    function moveAt(pageX, pageY) {
      elem.style.left = pageX + "px";
      elem.style.top = pageY + "px";
    }
  }

  function stopDrag() {
    // Очистка обработчиков событий
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", onTouchEnd);
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

window.addEventListener("load", initMatchstickInteraction);
