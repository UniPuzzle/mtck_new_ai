var matchstickData = {}; // Объект для хранения координат спичек и их точек

function setInitialPositions() {
  var mtckWrap = document.querySelector(".mtck-wrap");
  var matchstickElems = mtckWrap.querySelectorAll(".mtck-elem");

  matchstickElems.forEach(function (elem) {
    var offsetX = elem.offsetLeft;
    var offsetY = elem.offsetTop;

    elem.style.left = offsetX + "px";
    elem.style.top = offsetY + "px";

    var matchstickCoords = {
      left: offsetX + "px",
      top: offsetY + "px",
      points: {},
    };
    matchstickData[elem.classList[1]] = matchstickCoords;

    var points = elem.querySelectorAll(".start, .middle, .end");

    points.forEach(function (point) {
      var pointOffsetX = point.offsetLeft;
      var pointOffsetY = point.offsetTop;

      var pointRelativeToElemX = pointOffsetX;
      var pointRelativeToElemY = pointOffsetY;

      var pointRelativeToWrapX = offsetX + pointOffsetX;
      var pointRelativeToWrapY = offsetY + pointOffsetY;

      var pointCoords = {
        relativeToElem: {
          left: pointRelativeToElemX + "px",
          top: pointRelativeToElemY + "px",
        },
        relativeToWrap: {
          left: pointRelativeToWrapX + "px",
          top: pointRelativeToWrapY + "px",
        },
      };

      matchstickData[elem.classList[1]].points[point.classList[0]] =
        pointCoords;
    });
  });

  console.log("Координаты спичек и их точек:");
  console.log(matchstickData);
}

function moveMatchstick(e) {
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

    updateMatchstickData(elem);
  };
}

function updateMatchstickData(elem) {
  var elemId = elem.classList[1];
  var offsetX = parseFloat(elem.style.left);
  var offsetY = parseFloat(elem.style.top);

  matchstickData[elemId].left = offsetX + "px";
  matchstickData[elemId].top = offsetY + "px";

  var points = elem.querySelectorAll(".start, .middle, .end");
  points.forEach(function (point) {
    var pointOffsetX = point.offsetLeft;
    var pointOffsetY = point.offsetTop;

    var pointRelativeToWrapX = offsetX + pointOffsetX;
    var pointRelativeToWrapY = offsetY + pointOffsetY;

    var pointCoords = {
      relativeToElem: {
        left: pointOffsetX + "px",
        top: pointOffsetY + "px",
      },
      relativeToWrap: {
        left: pointRelativeToWrapX + "px",
        top: pointRelativeToWrapY + "px",
      },
    };

    matchstickData[elemId].points[point.classList[0]] = pointCoords;
  });

  console.clear(); // Очищаем консоль перед выводом обновленных данных
  console.log("Обновленные координаты спички и ее точек:");
  console.log(matchstickData);

  // Для вывода всего объекта целиком:
  // console.log(matchstickData);
}

function stopDrag() {
  this.style.zIndex = "auto";
  this.style.pointerEvents = "auto";
  this.style.userSelect = "auto";
  this.style.webkitUserSelect = "auto";
  this.style.MozUserSelect = "auto";
  this.style.msUserSelect = "auto";
  this.style.OUserSelect = "auto";

  document.onmouseup = null;
}

var elems = document.querySelectorAll(".mtck-elem");
elems.forEach(function (elem) {
  elem.addEventListener("mousedown", moveMatchstick);
});

window.addEventListener("load", setInitialPositions);
