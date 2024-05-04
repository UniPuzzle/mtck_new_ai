// var matchstickData = {}; // Объект для хранения координат спичек и их точек

// function setInitialPositions() {
//   var mtckWrap = document.querySelector(".mtck-wrap");
//   var matchstickElems = mtckWrap.querySelectorAll(".mtck-elem");

//   matchstickElems.forEach(function (elem) {
//     var offsetX = elem.offsetLeft;
//     var offsetY = elem.offsetTop;

//     var matchstickCoords = {
//       left: offsetX + "px",
//       top: offsetY + "px",
//       points: {},
//     };
//     matchstickData[elem.classList[1]] = matchstickCoords;

//     var points = elem.querySelectorAll(".start, .middle, .end");

//     points.forEach(function (point) {
//       var pointOffsetX = point.offsetLeft;
//       var pointOffsetY = point.offsetTop;

//       var pointRelativeToElemX = pointOffsetX;
//       var pointRelativeToElemY = pointOffsetY;

//       var pointRelativeToWrapX = offsetX + pointOffsetX;
//       var pointRelativeToWrapY = offsetY + pointOffsetY;

//       var pointCoords = {
//         relativeToElem: {
//           left: pointRelativeToElemX + "px",
//           top: pointRelativeToElemY + "px",
//         },
//         relativeToWrap: {
//           left: pointRelativeToWrapX + "px",
//           top: pointRelativeToWrapY + "px",
//         },
//       };

//       matchstickData[elem.classList[1]].points[point.classList[0]] =
//         pointCoords;
//     });
//   });

//   console.log("Координаты спичек и их точек:");
//   console.log(matchstickData);
// }

// function updateMatchstickData(elem) {
//   var elemId = elem.classList[1];
//   var offsetX = parseFloat(elem.style.left);
//   var offsetY = parseFloat(elem.style.top);

//   matchstickData[elemId].left = offsetX + "px";
//   matchstickData[elemId].top = offsetY + "px";

//   var points = elem.querySelectorAll(".start, .middle, .end");
//   points.forEach(function (point) {
//     var pointOffsetX = point.offsetLeft;
//     var pointOffsetY = point.offsetTop;

//     var pointRelativeToWrapX = offsetX + pointOffsetX;
//     var pointRelativeToWrapY = offsetY + pointOffsetY;

//     var pointCoords = {
//       relativeToElem: {
//         left: pointOffsetX + "px",
//         top: pointOffsetY + "px",
//       },
//       relativeToWrap: {
//         left: pointRelativeToWrapX + "px",
//         top: pointRelativeToWrapY + "px",
//       },
//     };

//     matchstickData[elemId].points[point.classList[0]] = pointCoords;
//   });

//   console.clear(); // Очищаем консоль перед выводом обновленных данных
//   console.log("Обновленные координаты спички и ее точек:");
//   console.log(matchstickData);
// }

// window.addEventListener("load", setInitialPositions);
// ================
var matchstickData = {}; // Объект для хранения координат спичек и их точек

function setInitialPositions() {
  var mtckWrap = document.querySelector(".mtck-wrap");
  var matchstickElems = mtckWrap.querySelectorAll(".mtck-elem");

  matchstickElems.forEach(function (elem) {
    var rect = elem.getBoundingClientRect();
    var offsetX = rect.left - mtckWrap.getBoundingClientRect().left;
    var offsetY = rect.top - mtckWrap.getBoundingClientRect().top;

    var transformValues = window
      .getComputedStyle(elem)
      .getPropertyValue("transform")
      .split("(")[1]
      .split(")")[0]
      .split(",");
    var rotation = Math.atan2(transformValues[1], transformValues[0]);
    var rotationDegrees = rotation * (180 / Math.PI);

    var matchstickCoords = {
      left: offsetX + "px",
      top: offsetY + "px",
      rotation: rotationDegrees + "deg", // сохраняем угол поворота
      points: {},
    };
    matchstickData[elem.classList[1]] = matchstickCoords;

    var points = elem.querySelectorAll(".start, .middle, .end");

    points.forEach(function (point) {
      var pointRect = point.getBoundingClientRect();
      var pointOffsetX = pointRect.left - mtckWrap.getBoundingClientRect().left;
      var pointOffsetY = pointRect.top - mtckWrap.getBoundingClientRect().top;

      var pointCoords = {
        relativeToWrap: {
          left: pointOffsetX + "px",
          top: pointOffsetY + "px",
        },
        relativeToElem: {
          left: pointOffsetX - offsetX + "px", // коррекция относительно сдвига спички
          top: pointOffsetY - offsetY + "px",
        },
      };

      matchstickData[elem.classList[1]].points[point.classList[0]] =
        pointCoords;
    });
  });

  console.log("Координаты спичек и их точек:");
  console.log(matchstickData);
}

function updateMatchstickData(elem) {
  var elemId = elem.classList[1];
  var rect = elem.getBoundingClientRect();
  var offsetX = rect.left - elem.offsetLeft;
  var offsetY = rect.top - elem.offsetTop;

  var transformValues = window
    .getComputedStyle(elem)
    .getPropertyValue("transform")
    .split("(")[1]
    .split(")")[0]
    .split(",");
  var rotation = Math.atan2(transformValues[1], transformValues[0]);
  var rotationDegrees = rotation * (180 / Math.PI);

  matchstickData[elemId].left = elem.offsetLeft + "px";
  matchstickData[elemId].top = elem.offsetTop + "px";
  matchstickData[elemId].rotation = rotationDegrees + "deg"; // обновляем угол поворота

  var points = elem.querySelectorAll(".start, .middle, .end");
  points.forEach(function (point) {
    var pointRect = point.getBoundingClientRect();
    var pointOffsetX = pointRect.left - elem.offsetLeft;
    var pointOffsetY = pointRect.top - elem.offsetTop;

    var pointCoords = {
      relativeToWrap: {
        left: pointOffsetX + "px",
        top: pointOffsetY + "px",
      },
      relativeToElem: {
        left: pointOffsetX - offsetX + "px", // коррекция относительно сдвига спички
        top: pointOffsetY - offsetY + "px",
      },
    };

    matchstickData[elemId].points[point.classList[0]] = pointCoords;
  });

  console.clear(); // Очищаем консоль перед выводом обновленных данных
  console.log("Обновленные координаты спички и ее точек:");
  console.log(matchstickData);
}

window.addEventListener("load", setInitialPositions);
