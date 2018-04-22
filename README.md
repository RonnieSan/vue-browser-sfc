# Vue Browser Component

> Template for build setup to compile Single File Components (.vue) into a standalone JS file for use in the browser

This template is useful for compiling VueJS single file components into standalone JS files for use in the browser. This is useful for devs that want to create a simple component that can be used on a site without having to build an entire app around it, similar to the way a JQuery plugin might be used. The template, script, and styles are all compiled to a single JS file.

The compiler is setup to allow you to use either LESS or SASS (scss or sass) if you want to.

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

### Create a new Vue project

``` bash
# Install vue-cli if you haven't already
$ npm install -g vue-cli

# Create a new project based on this template
$ vue init ronniesan/browser-component my-project

# Navigate into your new project folder
$ cd my-project

# Install dependencies
$ npm install
```

### Create and compile component

First, create your `.vue` file anywhere in the `src` folder.

Second, run the webpack compiler and point the `--env.file` argument to the .vue file you created (you don't need to add the extension)
``` bash
$ webpack --env.file=test
```

The webpack compiler runs in watch mode so any changes you make will update the compiled file.  The compiled file will be created at the same relative path in the `dist` folder.  So if you create a component at `src/my-component/my-rad-component.vue`, the compiled file will be located in `dist/my-component/my-rad-component.js`. You can now do what you want with the compiled JS file.

Make sure you add a `name` property to the script section of the component. This is what will be used as the tag for your component when you use it in your app/HTML file.

Giving your component a name property of `my-component` means you will add your component to the app as `<my-component></my-component>`.

### Use the compiled JS file

You will still need to include VueJS on your HTML page and create a root VueJS app in order to use your component.

Add a reference to the compiled component file (`.js`) in a script tag. Make sure it is added _AFTER_ you add VueJS to the page.

You can then include the component on your page using the `name` property you set as the tag.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>VueJS Component Test</title>
    <script src="https://unpkg.com/vue"></script>
    <script src="my-component.js"></script>
</head>
<body>
    <div id="wrapper">
      <my-component></my-component>
    </div>
    <script>
    var app = new Vue({
      el : '#wrapper'
    });
    </script>
</body>
</html>
```

You can try it using the sample component we included in the `src` folder...

## IMPORTANT!!!

* Make sure you give your component a `name` property. It will be used as the tagname for your component

## Other Notes

* Excluding styles can greatly decrease the size of your compiled JS file as it doesn't need to add logic to inject the styles on the page
