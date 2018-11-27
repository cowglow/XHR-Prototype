'use strict';

class XhrPrototype {
    constructor(baseUrl) {
        this.that = this;
        this.baseUrl = baseUrl;
    }

    // TODO: Convert to async function
    async makeRequest(uri, callback) {
        this.toggleLoader('on');

        const that = this;

        const xhr = this.getXHR();
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

    }


    toggleLoader(state) {
        const toggleStates = ['off', 'on'];
        const targetElement = document.querySelector('body');

        if (toggleStates.indexOf(state)) {
            targetElement.classList.add('Loading');
        } else {
            targetElement.classList.remove('Loading');
        }
    }

    /**
     * Define XHR Class to utilize
     *
     * Ref: https://stackoverflow.com/questions/23272611/make-cors-ajax-requests-using-xmlhttprequest
     * @returns {*}
     */
    getXHR() {
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

}


