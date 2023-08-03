"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _createForOfIteratorHelper(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(t);if(e){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}var Arrows=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"_handleArrows",value:function(t){var e=t.target,n=this._currentIndex,r=this._slideAmount;e.closest(".js-carousel-forward")&&this._switchSlide(n!==r?n+1:0),e.closest(".js-carousel-backward")&&this._switchSlide(0!==n?n-1:r)}}]),t}(),Buttons=function(t){_inherits(n,Arrows);var e=_createSuper(n);function n(){return _classCallCheck(this,n),e.apply(this,arguments)}return _createClass(n,[{key:"_handleButtons",value:function(t){for(var e,n=t.target,r=this._container,i=r.querySelector(".js-carousel-triggers");;){if(n===r)return;if(n.parentElement==i){e=this._getIndex(n);break}n=n.parentElement}e>this._currentIndex&&this._switchSlide(e),e<this._currentIndex&&this._switchSlide(e)}},{key:"_selectButton",value:function(t){var e,n=this._container.querySelectorAll(".js-carousel-triggers > *"),r=_createForOfIteratorHelper(n);try{for(r.s();!(e=r.n()).done;){e.value.classList.remove("is-active")}}catch(t){r.e(t)}finally{r.f()}n[t].classList.add("is-active")}},{key:"_getIndex",value:function(t){for(var e=t.parentElement.firstElementChild,n=0;e!==t&&null!==e.nextElementSibling;)e=e.nextElementSibling,n++;return n}}]),n}(),Carousel=function(t){_inherits(n,Buttons);var e=_createSuper(n);function n(t){var r,i=t.container;_classCallCheck(this,n),(r=e.call(this))._container=i,r._slides=r._container.querySelector(".js-carousel-slides"),r._slideAmount=r._slides.children.length-1,r._container.dataset.initiated=!0,r._currentIndex=0;var o=r._container.querySelector(".js-carousel-slides"),s=r._container.querySelector(".js-carousel-triggers");return o.children[0].classList.add("is-active"),s.children[0].classList.add("is-active"),r}return _createClass(n,[{key:"listenEvents",value:function(){var t=this,e=this._container;e.onclick=function(e){t._handleArrows.call(t,e),t._handleButtons.call(t,e)},e.ontouchstart=function(e){t._interval&&clearTimeout(t._timeoutID),t._handleTouchStart.call(t,e)},e.ontouchmove=function(e){t._handleTouchMove.call(t,e)},e.ontouchend=function(e){t._interval&&t.runSlideshow(t._interval),t._handleTouchEnd.call(t,e)},e.onmouseenter=function(){clearTimeout(t._timeoutID)},e.onmouseleave=function(){t.runSlideshow(t._interval)}}},{key:"runSlideshow",value:function(t){this._interval=t,this._timeoutID=setTimeout(function e(){var n=this._currentIndex,r=this._slideAmount;this._switchSlide(n!==r?n+1:0),this._timeoutID=setTimeout(e.bind(this),t)}.bind(this),t)}},{key:"_handleTouchStart",value:function(t){this._startX=t.touches[0].clientX,this._startY=t.touches[0].clientY}},{key:"_handleTouchMove",value:function(t){this._endX=t.touches[0].clientX,this._endY=t.touches[0].clientY}},{key:"_handleTouchEnd",value:function(){var t,e=this._currentIndex,n=this._slideAmount;if(this._endX&&this._endY&&(t=Math.abs(this._startX-this._endX))>Math.abs(this._startY-this._endY)){if(t<50)return;this._startX<this._endX?this._switchSlide(0!==e?e-1:n):this._switchSlide(e!==n?e+1:0),this._endX=null,this._endY=null}}},{key:"_switchSlide",value:function(t){var e=this._currentIndex;!0!==this._isPending&&t!==e&&(this._handleFadingEffect(t),this._selectButton(t),this._currentIndex=t)}},{key:"_handleFadingEffect",value:function(t){var e=this,n=this._container.querySelector(".js-carousel-slides"),r=n.children[this._currentIndex],i=n.children[t],o=this._getDuration(n)+30;this._isPending=!0,n.style.opacity=0,setTimeout((function(){r.classList.remove("is-active"),i.classList.add("is-active"),n.style.opacity=1,setTimeout((function(){e._isPending=!1}),o)}),o)}},{key:"_getDuration",value:function(t){return 1e3*parseFloat(getComputedStyle(t).transitionDuration)}}]),n}(),element=document.querySelector(".js-carousel-toggle");if(element){var carousel=new Carousel({container:element});carousel.listenEvents(),carousel.runSlideshow(+element.dataset.interval)}