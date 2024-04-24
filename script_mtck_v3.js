// // Получаем элемент mtck-elem
// const mtckElem = document.querySelector(".mtck-elem");

// // Получаем размеры и позицию элемента mtck-elem
// const rect = mtckElem.getBoundingClientRect();

// // Определяем центр элемента по горизонтали и вертикали
// const centerX = rect.left + rect.width / 2;
// const centerY = rect.top + rect.height / 2;

// // Получаем элемент middle
// const middleElement = document.querySelector(".middle");

// // Получаем размеры и позицию элемента middle
// const middleRect = middleElement.getBoundingClientRect();

// // Определяем смещение для совмещения с центральной точкой
// const offsetX = centerX - (middleRect.left + middleRect.width / 2);
// const offsetY = centerY - (middleRect.top + middleRect.height / 2);

// // Применяем смещение к элементу middle
// middleElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

// // Определяем один край элемента mtck-elem (например, верхний край)
// const edgeX = rect.left + rect.width / 2; // В данном случае возьмем верхний край

// // Получаем элемент start
// const startElement = document.querySelector(".start");

// // Получаем размеры и позицию элемента start
// const startRect = startElement.getBoundingClientRect();

// // Определяем смещение для совмещения с центром края mtck-elem
// const offsetXStart = edgeX - (startRect.left + startRect.width / 2);
// const offsetYStart = rect.top - startRect.top;

// // Применяем смещение к элементу start
// startElement.style.transform = `translate(${offsetXStart}px, ${offsetYStart}px)`;

// // Определяем другой край элемента mtck-elem (например, нижний край)
// const edgeXEnd = rect.right - rect.width / 2; // В данном случае возьмем нижний край

// // Получаем элемент end
// const endElement = document.querySelector(".end");

// // Получаем размеры и позицию элемента end
// const endRect = endElement.getBoundingClientRect();

// // Определяем смещение для совмещения с центром другого края mtck-elem
// const offsetXEnd = edgeXEnd - (endRect.left + endRect.width / 2);
// const offsetYEnd = rect.bottom - endRect.bottom;

// // Применяем смещение к элементу end
// endElement.style.transform = `translate(${offsetXEnd}px, ${offsetYEnd}px)`;
// =====================================================================
// // Получаем все элементы с классом .mtck-elem
// const mtckElems = document.querySelectorAll(".mtck-elem");

// // Проходимся по каждому элементу
// mtckElems.forEach((mtckElem) => {
//   // Получаем размеры и позицию элемента mtck-elem
//   const rect = mtckElem.getBoundingClientRect();

//   // Определяем центр элемента по горизонтали и вертикали
//   const centerX = rect.left + rect.width / 2;
//   const centerY = rect.top + rect.height / 2;

//   // Получаем элемент middle внутри текущего mtck-elem
//   const middleElement = mtckElem.querySelector(".middle");

//   // Получаем размеры и позицию элемента middle
//   const middleRect = middleElement.getBoundingClientRect();

//   // Определяем смещение для совмещения с центральной точкой
//   const offsetX = centerX - (middleRect.left + middleRect.width / 2);
//   const offsetY = centerY - (middleRect.top + middleRect.height / 2);

//   // Применяем смещение к элементу middle
//   middleElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

//   // Определяем один край элемента mtck-elem (например, верхний край)
//   const edgeX = rect.left + rect.width / 2; // В данном случае возьмем верхний край

//   // Получаем элемент start внутри текущего mtck-elem
//   const startElement = mtckElem.querySelector(".start");

//   // Получаем размеры и позицию элемента start
//   const startRect = startElement.getBoundingClientRect();

//   // Определяем смещение для совмещения с центром края mtck-elem
//   const offsetXStart = edgeX - (startRect.left + startRect.width / 2);
//   const offsetYStart = rect.top - startRect.top;

//   // Применяем смещение к элементу start
//   startElement.style.transform = `translate(${offsetXStart}px, ${offsetYStart}px)`;

//   // Определяем другой край элемента mtck-elem (например, нижний край)
//   const edgeXEnd = rect.right - rect.width / 2; // В данном случае возьмем нижний край

//   // Получаем элемент end внутри текущего mtck-elem
//   const endElement = mtckElem.querySelector(".end");

//   // Получаем размеры и позицию элемента end
//   const endRect = endElement.getBoundingClientRect();

//   // Определяем смещение для совмещения с центром другого края mtck-elem
//   const offsetXEnd = edgeXEnd - (endRect.left + endRect.width / 2);
//   const offsetYEnd = rect.bottom - endRect.bottom;

//   // Применяем смещение к элементу end
//   endElement.style.transform = `translate(${offsetXEnd}px, ${offsetYEnd}px)`;
// });
// // Получаем все элементы с классом .mtck-elem
// const mtckElems = document.querySelectorAll(".mtck-elem");

// // Проходимся по каждому элементу
// mtckElems.forEach((mtckElem) => {
//   // Получаем значение transform rotate
//   const transformValue = window
//     .getComputedStyle(mtckElem)
//     .getPropertyValue("transform");
//   const rotateValue = extractRotateValue(transformValue);

//   // Получаем размеры и позицию элемента mtck-elem
//   const rect = mtckElem.getBoundingClientRect();

//   // Определяем центр элемента по горизонтали и вертикали
//   const centerX = rect.left + rect.width / 2;
//   const centerY = rect.top + rect.height / 2;

//   // Получаем элемент middle внутри текущего mtck-elem
//   const middleElement = mtckElem.querySelector(".middle");

//   // Получаем размеры и позицию элемента middle
//   const middleRect = middleElement.getBoundingClientRect();

//   // Определяем смещение для совмещения с центральной точкой
//   let offsetX, offsetY;

//   if (rotateValue === 0 || rotateValue === 180) {
//     offsetX = centerX - (middleRect.left + middleRect.width / 2);
//     offsetY = centerY - (middleRect.top + middleRect.height / 2);
//   } else {
//     // Дополнительная логика для случая, когда transform rotate не равен 0 или 180 градусов
//     // Допишите вашу логику здесь
//   }

//   // Применяем смещение к элементу middle
//   middleElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

//   // Определяем один край элемента mtck-elem (например, верхний край)
//   const edgeX = rect.left + rect.width / 2; // В данном случае возьмем верхний край

//   // Получаем элемент start внутри текущего mtck-elem
//   const startElement = mtckElem.querySelector(".start");

//   // Получаем размеры и позицию элемента start
//   const startRect = startElement.getBoundingClientRect();

//   // Определяем смещение для совмещения с центром края mtck-elem
//   let offsetXStart, offsetYStart;

//   if (rotateValue === 0 || rotateValue === 180) {
//     offsetXStart = edgeX - (startRect.left + startRect.width / 2);
//     offsetYStart = rect.top - startRect.top;
//   } else {
//     // Дополнительная логика для случая, когда transform rotate не равен 0 или 180 градусов
//     // Допишите вашу логику здесь
//   }

//   // Применяем смещение к элементу start
//   startElement.style.transform = `translate(${offsetXStart}px, ${offsetYStart}px)`;

//   // Определяем другой край элемента mtck-elem (например, нижний край)
//   const edgeXEnd = rect.right - rect.width / 2; // В данном случае возьмем нижний край

//   // Получаем элемент end внутри текущего mtck-elem
//   const endElement = mtckElem.querySelector(".end");

//   // Получаем размеры и позицию элемента end
//   const endRect = endElement.getBoundingClientRect();

//   // Определяем смещение для совмещения с центром другого края mtck-elem
//   let offsetXEnd, offsetYEnd;

//   if (rotateValue === 0 || rotateValue === 180) {
//     offsetXEnd = edgeXEnd - (endRect.left + endRect.width / 2);
//     offsetYEnd = rect.bottom - endRect.bottom;
//   } else {
//     // Дополнительная логика для случая, когда transform rotate не равен 0 или 180 градусов
//     // Допишите вашу логику здесь
//   }

//   // Применяем смещение к элементу end
//   endElement.style.transform = `translate(${offsetXEnd}px, ${offsetYEnd}px)`;
// });

// // Функция для извлечения угла поворота из строки transform
// function extractRotateValue(transformValue) {
//   const match = transformValue.match(/rotate\(([^deg]+)deg\)/);
//   return match ? parseFloat(match[1]) : 0;
// }
// Получаем все элементы с классом .mtck-elem
const mtckElems = document.querySelectorAll(".mtck-elem");

// Проходимся по каждому элементу
mtckElems.forEach((mtckElem) => {
  // Получаем значение transform rotate
  const transformValue = window
    .getComputedStyle(mtckElem)
    .getPropertyValue("transform");
  const rotateValue = extractRotateValue(transformValue);

  // Получаем размеры и позицию элемента mtck-elem
  const rect = mtckElem.getBoundingClientRect();

  // Определяем центр элемента по горизонтали и вертикали
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Получаем элемент middle внутри текущего mtck-elem
  const middleElement = mtckElem.querySelector(".middle");

  // Получаем размеры и позицию элемента middle
  const middleRect = middleElement.getBoundingClientRect();

  // Определяем смещение для совмещения с центральной точкой
  let offsetX, offsetY;

  if (rotateValue === 0 || rotateValue === 180) {
    offsetX = centerX - (middleRect.left + middleRect.width / 2);
    offsetY = centerY - (middleRect.top + middleRect.height / 2);
  } else {
    // Вычисляем смещение для повернутого элемента
    const rotatedOffset = calculateRotatedOffset(rect, rotateValue);

    offsetX =
      centerX - (middleRect.left + middleRect.width / 2) + rotatedOffset.x;
    offsetY =
      centerY - (middleRect.top + middleRect.height / 2) + rotatedOffset.y;
  }

  // Применяем смещение к элементу middle
  middleElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

  // Определяем один край элемента mtck-elem (например, верхний край)
  const edgeX = rect.left + rect.width / 2; // В данном случае возьмем верхний край

  // Получаем элементы start и end внутри текущего mtck-elem
  const startElement = mtckElem.querySelector(".start");
  const endElement = mtckElem.querySelector(".end");

  // Вычисляем смещение для точки start
  const offsetXStart =
    edgeX -
    (startElement.getBoundingClientRect().left +
      startElement.getBoundingClientRect().width / 2);
  const offsetYStart = rect.top - startElement.getBoundingClientRect().top;

  // Применяем смещение к элементу start
  startElement.style.transform = `translate(${offsetXStart}px, ${offsetYStart}px)`;

  // Определяем другой край элемента mtck-elem (например, нижний край)
  const edgeXEnd = rect.right - rect.width / 2; // В данном случае возьмем нижний край

  // Вычисляем смещение для точки end
  const offsetXEnd =
    edgeXEnd -
    (endElement.getBoundingClientRect().left +
      endElement.getBoundingClientRect().width / 2);
  const offsetYEnd = rect.bottom - endElement.getBoundingClientRect().bottom;

  // Применяем смещение к элементу end
  endElement.style.transform = `translate(${offsetXEnd}px, ${offsetYEnd}px)`;
});

// Функция для извлечения угла поворота из строки transform
function extractRotateValue(transformValue) {
  const match = transformValue.match(/rotate\(([^deg]+)deg\)/);
  return match ? parseFloat(match[1]) : 0;
}

// Функция для вычисления смещения для повернутого элемента
function calculateRotatedOffset(rect, rotateValue) {
  // Вычисляем смещение для поворота элемента
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const rotatedX = centerX - rect.left;
  const rotatedY = centerY - rect.top;

  // Применяем угол поворота к смещению
  const radians = (rotateValue * Math.PI) / 180;
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  const rotatedOffsetX = rotatedX * cos - rotatedY * sin;
  const rotatedOffsetY = rotatedX * sin + rotatedY * cos;

  return { x: rotatedOffsetX, y: rotatedOffsetY };
}
