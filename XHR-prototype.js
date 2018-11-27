'use strict';

class XhrPrototype {
    constructor(baseUrl) {
        this.that = this;
        this.baseUrl = baseUrl;
    }

    // TODO: Convert to async function
    makeRequest(uri, callback) {
        this.toggleLoader('on');

        const xhr = this.getXHR();

        if ('withCredentials' in xhr) {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    var response = JSON.parse(xhr.responseText);
                    // var response = xhr.responseText;

                    if (response.status === "ok") {
                        // console.log("You just posted some valid geoJSON");
                    } else if (response.status === "error") {
                        // console.log("There was a problem with your geoJSON " + response.message);
                    } else {
                        // console.log("Response has been recieved using " + response.status);
                        console.log(xhr.responseText);
                        callback(xhr.responseText);
                    }

                }
            };

            xhr.open('get', this.baseUrl + uri, true);
            xhr.send();
        }

        this.toggleLoader('off');
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


