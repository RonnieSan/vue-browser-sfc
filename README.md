# Vue Browser Component

> Template for build setup to compile Single File Components (.vue) into a standalone JS file for use in the browser

This template is useful for compiling VueJS single file components into standalone JS files for use in the browser. This is useful for devs that want to create a simple component that can be used on a site without having to build an entire app around it, similar to the way a JQuery plugin might be used. The template, script, and styles are all compiled to a single JS file.

The compiler is setup to allow you to use either LESS or SASS (scss or sass) if you want to.

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

### 1. Create a new Vue project

At the command line, enter the following commands in parent folder of where you will be keeping your project.

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

### 2. Create and compile a component

Create a `.vue` file anywhere in the `src` folder of the project you just created.

Then, run the webpack compiler and point the `--env.file` argument to the .vue file you created (you don't need to add the extension). The path should be relative to the `src` folder, so if you created your `.vue` file in the `src` folder, the path would just be the name of the file.  For example, ff the file is located in `src/sub-folder/my-component.vue`, the path you would enter for the `--env.file` argument would be `sub-folder/my-component`.

``` bash
$ webpack --env.file=path/to/my-component
```

The webpack compiler runs in watch mode so any changes you make will update the compiled file. Whenever you make changes to you component, as long as the webpack compiler is running, the changes will be re-compiled and saved over the same output file. The compiled output file will be created at the same relative path in the `dist` folder that it was located in the `src` folder. So if you create a component at `src/some-sub-folder/my-rad-component.vue`, the compiled file will be located in `dist/some-sub-folder/my-rad-component.js`.

Once you've completed the development of your component and want to use it, you can take the compiled `.js` file and place it wherever you want

Make sure you add a `name` property to the script section of the component. This is what will be used as the tag for your component when you use it in your app/HTML file.

Giving your component a name property of `my-component` means you will add your component to the app as `<my-component></my-component>`.

### 3. Use the compiled JS file

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

## Included Example
The template package includes a sample component (`my-component.vue`) that you can test it all out with. The command you would use to compile it would be `webpack --env.file=example`. The component has a name property of `example`, the the tagname you would use in your HTML woudl be `<example></example>`.

## Converting an existing Vue Single File Component to a standalone JS file
To convert an existing Vue Single File Component to a standalone JS file, simple add it to the `src` folder along with all the required dependencies (make sure all the paths are correct for the dependencies).  Then run the compiler (`webpack` command) with the `--env.file` argument pointing to the component. If anything goes wrong, the compiler will tell you what errors occured.

## IMPORTANT!!!

* Make sure you give your component a `name` property. It will be used as the tagname for your component

## Other Notes

* Excluding styles can greatly decrease the size of your compiled JS file as it doesn't need to add logic to inject the styles on the page
