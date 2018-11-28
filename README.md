# XHR Prototype

This is a prototype!

`XHR-prototype.js ` is a JavaScript Class demonstrating an introductory approach of a XmlHttpRequest with asynchronous 
behaviour.


Made with pure vanilla JavaScript.
It is made available for demo purposed only. You should [fork it](https://github.com/cowglow/XHR-Prototype) and use it 
to build something cool.


### About the class
  - Constructor function is utilized as configuration
  - Method: `makeRequest(server_path, callback)`
  - Method: `toggleLoader(state)`
  - Method: `getXHR()`

### Front-end setup
  - You'll need a CSS animation class
  - This Demo contains an example using `svg`
  - And a little JavaScript configuration

### Server options
Do you not use MAMP? or XAMP? But are you a cool hipster on a mac who has php native?
Don't worry, I got you. 
  - Open Terminal
  - Navigate to git project
  - try some of this PHP
  
  ```sh
  php -S localhost:8888
  ```
 > btw, expected capability of being able to launch a localhost project



### Demo details

After importing the `XHR-prototype.js` file. Set some variables in a new `<script>` tag.

```sh
requestor = new XhrPrototype(`path_to_server`, `dom_element_target`, `loading_animation_css`);
```

> btw, `requestor` is an arbitrary variable name. You can come up with a better one. I believe in you! 

###
###

Preferably, initialize on and event. In this case we use:
```sh
window.addEventListener('load', function([event]){
    ...
});
```

###
###

Execute the request:
```sh
requestor.makeRequest(`request_method`, callback);
```
Because you already bond the DOM Element which you want the animation to attach to while you wait for the response, you 
just need write your callback function to handle the data that comes in from the request.

```sh
someDomElement.innerHTML = {response_data};
```

### About me

I'm mercenary coder at [tollwerk GmbH](https://github.com/tollwerk)

* [@cowglow](https://twitter.com/cowglow) - Say 'hi' on twitter!
* [YouTube](https://youtube.com/c/cowglow) - I'm a filmmaker
* [GitHub](https://github.com/cowglow) - but I know how to code


### Todos

 - Fork it
 - Write Code!

License
----

MIT
