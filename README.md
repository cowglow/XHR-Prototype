# XHR Prototype

This is a prototype!

`XHR-prototype.js ` is a JavaScript Class demonstrating an introductory approach to making an XmlHttpRequest with asynchronous 
behaviour. It was made with pure vanilla JavaScript and with the intentions of making it available for demo purposed only.
You should [fork it](https://github.com/cowglow/XHR-Prototype) and use it to build something cool.


### About the class
  - Constructor function is utilized for configuration
  - Method: `makeRequest(server_path, callback)`
  - Method: `toggleLoader(state)`
  - Method: `getXHR()`

### Front-end setup
  - You'll need a CSS animation class
  - This demo contains an example using `svg` 
  - And a little JavaScript setup

### Server options
Do you not use MAMP? or XAMP? Are you a cool hipster on a Mac who has php already installed?
Don't worry, I got you.
  - Open Terminal
  - Navigate to the project's directory
  - try some of this PHP magic
  
  ```sh
  php -S localhost:8888
  ```
 > btw, I'm expecting that you have the capability of being able to launch a localhost project.


### Demo details

After importing the `XHR-prototype.js` file. Set some variables in a new `<script>` tag.

```sh
requestor = new XhrPrototype(`path_to_server`, `dom_element_target`, `loading_animation_css`);
```

> btw, `requestor` is an arbitrary variable name. You can come up with a better one. I believe in you! 


It's preferable that you initialize on an Event. In this case we use `load`:
```sh
window.addEventListener('load', function([event]){
    ...
});
```


Execute the request:
```sh
requestor.makeRequest(`request_method`, callback);
```
Because you already bonded the DOM Element when you instantiated the javascript class; it already knows where to attach the animation while it waits for the request to finish. You just need to write your callback function to handle the data from the response. It's totally up to you. For example:

```sh
someDomElement.innerHTML = {response_data};
```

### About me

I'm a mercenary coder at [tollwerk GmbH](https://github.com/tollwerk)

* [@cowglow](https://twitter.com/cowglow) - Say 'hi' on twitter!
* [YouTube](https://youtube.com/c/cowglow) - I'm a filmmaker
* [GitHub](https://github.com/cowglow) - but I know how to code


### Todos

 - Fork it
 - Code it!
 - Do it on your own!

License
----

MIT
