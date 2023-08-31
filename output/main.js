/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./buy button.js":
/*!***********************!*\
  !*** ./buy button.js ***!
  \***********************/
/***/ (() => {

eval("//'этот фрагмент работал до того как подключил load_books \r\n\r\nconst buyBut = document.querySelectorAll(\"buy\");\r\nvar counterElement = document.querySelector(\".header__section-counter-num\");[0];\r\nconst redDot = document.getElementsByClassName(\"header__section-counter-dot\")[0];\r\nlet count = 0;\r\n\r\nfor (let i = 0; i < buyBut.length; i++) {\r\n    buyBut[i].addEventListener(\"click\", () => {\r\n        redDot.classList.remove(\"hidden\");\r\n        counterElement.classList.remove(\"hidden\");\r\n        count = count + 1;\r\n        counterElement.innerHTML = count;\r\n        if(count>9){\r\n            counterElement.innerHTML = \"9+\";\r\n        }\r\n        console.log(\"красный кружок\");\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./buy_button.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header style.css */ \"./header style.css\");\n/* harmony import */ var _slider_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider style.css */ \"./slider style.css\");\n/* harmony import */ var _aside_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aside style.css */ \"./aside style.css\");\n/* harmony import */ var _card_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card style.css */ \"./card style.css\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider.js */ \"./slider.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav.js */ \"./nav.js\");\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nav_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _buy_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buy button.js */ \"./buy button.js\");\n/* harmony import */ var _buy_button_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_buy_button_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _load_books_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./load_books.js */ \"./load_books.js\");\n/* harmony import */ var _load_books_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_load_books_js__WEBPACK_IMPORTED_MODULE_7__);\n\r\n// импорты\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//import \"./test\";       // для проверки работы\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./load_books.js":
/*!***********************!*\
  !*** ./load_books.js ***!
  \***********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n  const apiKey = \"AIzaSyB8BmaLD2wDywVHVwimfVooqbXjfrVrhbU\";\r\n  const booksSection = document.querySelector(\".main__cards\");\r\n  const loadMoreButton = document.querySelector(\".loadMore\");\r\n  const categories = document.querySelectorAll(\".aside__button\");\r\n\r\n  let currentPage = 1;\r\n  let activeCategory = categories[0].textContent;\r\n\r\n  function createBookCard(book) {\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"main__card\");\r\n\r\n    const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(\", \") : \"Unknown Author\";\r\n    const thumbnail = book.volumeInfo.imageLinks?.thumbnail || \"placeholder.jpg\";\r\n    const rating = book.volumeInfo.averageRating ? `${book.volumeInfo.averageRating} (${book.volumeInfo.ratingsCount || 0} reviews)` : \"\";\r\n    const description = book.volumeInfo.description ? (book.volumeInfo.description.length > 150 ? book.volumeInfo.description.slice(0, 150) + \"...\" : book.volumeInfo.description) : \"No description available\";\r\n    const price = book.saleInfo.listPrice ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : \"\";\r\n\r\n    card.innerHTML = `\r\n      <div class=\"main__card-pic\">\r\n        <img src=\"${thumbnail}\" alt=\"Book Cover\">\r\n      </div>\r\n      <div class=\"main__card-description\">\r\n        <p class=\"author\">${authors}</p>\r\n        <h3 class=\"bookName\">${book.volumeInfo.title}</h3>\r\n        <div class=\"rewiews\">${rating}</div>\r\n        <p class=\"description\">${description}</p>\r\n        <p class=\"price\">${price}</p>\r\n        <button class=\"buy\">Buy now</button>\r\n      </div>\r\n    `;\r\n\r\n    booksSection.appendChild(card);\r\n  }\r\n\r\n  async function fetchBooks(category, maxResults = 6) {\r\n    const startIndex = (currentPage - 1) * maxResults;\r\n    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=${maxResults}&startIndex=${startIndex}&key=${apiKey}`;\r\n\r\n    try {\r\n      const response = await fetch(apiUrl);\r\n      const data = await response.json();\r\n      return data.items || [];\r\n    } catch (error) {\r\n      console.error(\"Error fetching books:\", error);\r\n      return [];\r\n    }\r\n  }\r\n\r\n  async function loadMoreBooks() {\r\n    currentPage++;\r\n    const books = await fetchBooks(activeCategory);\r\n    books.forEach(book => createBookCard(book));\r\n  }\r\n\r\n  if (loadMoreButton) {\r\n    loadMoreButton.addEventListener(\"click\", loadMoreBooks);\r\n  }\r\n\r\n  categories.forEach(category => {\r\n    category.addEventListener(\"click\", async () => {\r\n      currentPage = 1;\r\n      activeCategory = category.textContent;\r\n      booksSection.innerHTML = \"\";\r\n      if (loadMoreButton) {\r\n        loadMoreButton.disabled = false;\r\n      }\r\n      await loadMoreBooks();\r\n    });\r\n  });\r\n\r\n  (async function init() {\r\n    await loadMoreBooks();\r\n  })();\r\n});\r\n\n\n//# sourceURL=webpack:///./load_books.js?");

/***/ }),

/***/ "./nav.js":
/*!****************!*\
  !*** ./nav.js ***!
  \****************/
/***/ (() => {

eval("const numButtons = 16;\r\n\r\nfor (let i = 1; i <= numButtons; i++) {\r\n    const button = document.getElementById(`but${i}`);\r\n    button.addEventListener(\"click\", () => handleButtonClick(button));\r\n}\r\n\r\nfunction handleButtonClick(clickedButton) {\r\n    const buttons = document.querySelectorAll(\".aside__button\");\r\n\r\n    buttons.forEach(button => {\r\n        if (button === clickedButton) {\r\n            button.classList.add(\"aside__button-active\");\r\n            console.log(button.id);\r\n        } else {\r\n            button.classList.remove(\"aside__button-active\");\r\n        }\r\n    });\r\n\r\n    updateButtons();\r\n}\r\n\r\nfunction updateButtons() {\r\n    const buttons = document.querySelectorAll(\".aside__button\");\r\n\r\n    buttons.forEach(button => {\r\n        const isActive = button.classList.contains(\"aside__button-active\");\r\n        const existingImage = button.querySelector(`#${button.id} .aside__button-active-dot`);\r\n\r\n        if (isActive && !existingImage) {\r\n            const image = document.createElement(\"img\");\r\n            image.src = \"logos/purp-dot.svg\";\r\n            image.classList.add(\"aside__button-active-dot\");\r\n            button.insertBefore(image, button.firstChild);\r\n        } else if (!isActive && existingImage) {\r\n            existingImage.remove();\r\n        }\r\n    });\r\n}\r\n\r\nsetInterval(updateButtons, 100);\r\n\n\n//# sourceURL=webpack:///./nav.js?");

/***/ }),

/***/ "./aside style.css":
/*!*************************!*\
  !*** ./aside style.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./aside_style.css?");

/***/ }),

/***/ "./card style.css":
/*!************************!*\
  !*** ./card style.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./card_style.css?");

/***/ }),

/***/ "./header style.css":
/*!**************************!*\
  !*** ./header style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./header_style.css?");

/***/ }),

/***/ "./slider style.css":
/*!**************************!*\
  !*** ./slider style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./slider_style.css?");

/***/ }),

/***/ "./slider.js":
/*!*******************!*\
  !*** ./slider.js ***!
  \*******************/
/***/ (() => {

eval("let offset= 0;\r\nconst sliderLine = document.querySelector(\".slider-line\");\r\nconst dot1 = document.getElementById (\"fst\");\r\nconst dot2 = document.getElementById (\"scnd\");\r\nconst dot3 = document.getElementById (\"thrd\");\r\n\r\ndocument.querySelector(\"#fst\").addEventListener(\"click\", function(){\r\n    offset = 0;\r\n    sliderLine.style.left = -offset + \"px\";\r\n    dot1.classList.add(\"activeDot\");  \r\n    dot2.classList.remove(\"activeDot\");\r\n    dot3.classList.remove(\"activeDot\");\r\n    console.log(\"button1\");\r\n});\r\ndocument.querySelector(\"#scnd\").addEventListener(\"click\", function(){\r\n    offset = 1113;\r\n    sliderLine.style.left = -offset + \"px\";\r\n    dot2.classList.add(\"activeDot\");\r\n    dot1.classList.remove(\"activeDot\");\r\n    dot3.classList.remove(\"activeDot\");\r\n    console.log(\"button2\");\r\n});\r\ndocument.querySelector(\"#thrd\").addEventListener(\"click\", function(){\r\n    offset = 2233;\r\n    sliderLine.style.left = -offset + \"px\";\r\n    dot3.classList.add(\"activeDot\");\r\n    dot2.classList.remove(\"activeDot\");\r\n    dot1.classList.remove(\"activeDot\");\r\n    console.log(\"button3\");\r\n});\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n    var buttons = [\"fst\", \"scnd\", \"thrd\"];\r\n    var currentIndex = 0;\r\n  \r\n    function clickNextButton() {\r\n      var buttonId = buttons[currentIndex];\r\n      var button = document.getElementById(buttonId);\r\n      button.click();\r\n      currentIndex = (currentIndex + 1) % buttons.length; // Обеспечиваем цикличность действия\r\n      setTimeout(clickNextButton, 5000); // Ждем 5 секунд перед нажатием следующей кнопки\r\n    }\r\n  \r\n    clickNextButton(); // Запускаем первое нажатие сразу после загрузки страницы\r\n  });\r\n  \r\n  \r\n     \n\n//# sourceURL=webpack:///./slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;