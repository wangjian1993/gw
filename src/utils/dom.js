<<<<<<< HEAD
import Vue from 'vue';
const isServer = Vue.prototype.$isServer;

export const on = (function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();

export const off = (function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
})();

export const getAbsPoint = e => {
  var x = e.offsetLeft;
  var y = e.offsetTop;
  while (e = e.offsetParent) {
    x += e.offsetLeft;
    y += e.offsetTop;
  }
  return { 'x': x, 'y': y };
=======
import Vue from 'vue';
const isServer = Vue.prototype.$isServer;

export const on = (function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();

export const off = (function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
})();

export const getAbsPoint = e => {
  var x = e.offsetLeft;
  var y = e.offsetTop;
  while (e = e.offsetParent) {
    x += e.offsetLeft;
    y += e.offsetTop;
  }
  return { 'x': x, 'y': y };
>>>>>>> a827187f5e6d0753c62a8b21147968a59880e1cc
};