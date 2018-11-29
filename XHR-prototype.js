'use strict';

var XhrPrototype = function(baseUrl, targetElement, animationClass) {
    this.constructor(baseUrl, targetElement, animationClass);
};

XhrPrototype.prototype.constructor = function(baseUrl, targetElement, animationClass) {
    this.that = this;
    this.baseUrl = baseUrl;
    this.targetElement = targetElement;
    this.animationClass = animationClass;
};

XhrPrototype.prototype.makeRequest = async function(uri, callback) {
    this.toggleLoader('on');

    var that = this;

    var xhr = this.getXHR();
    xhr.open('GET', this.baseUrl + uri, true);
    xhr.onload = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(xhr.responseText);
                that.toggleLoader('off');
            } else {
                console.error(xhr.statusText);
            }
        }
    };

    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };

    xhr.send(null);
};

XhrPrototype.prototype.toggleLoader(state) {
    var toggleStates = ['off', 'on'];
    var targetElement = document.querySelector(this.targetElement);

    if (toggleStates.indexOf(state)) {
        targetElement.classList.add(this.animationClass);
    } else {
        targetElement.classList.remove(this.animationClass);
    }
};

/**
 * Define XHR Class to utilize
 *
 * Ref: https://stackoverflow.com/questions/23272611/make-cors-ajax-requests-using-xmlhttprequest
 * @returns {*}
 */
XhrPrototype.prototype.getXHR = function() {
    try {
        return new XMLHttpRequest();
    } catch (e) {
    }
    try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0");
    } catch (e) {
    }
    try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0");
    } catch (e) {
    }
    try {
        return new ActiveXObject("Microsoft.XMLHttp");
    } catch (e) {
    }
    console.log("Could not find XMLHttpRequest");
};


