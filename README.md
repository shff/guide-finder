# Guide Finder

This is a very simple tour finding app.

It's not super advanced but it's fun to use and has some nifty animations.

Illustrations were provided by Katerina Limpitsouni @ https://undraw.co/

It's published @ https://guide-finder.shff.now.sh

Hope you folks like it!

-----

## How to run

### Preparing your environment

You need Node.js to build it.

The best way to install Node.js is to use a package manager.

Here are some instructions: https://nodejs.org/en/download/package-manager/

Next, use NPM to install the packages:

```
npm install
```

### Building the static site

After that, just run this script to build it in the `dist` directory:

```
npm run build
```

### Use the build server to develop it

Want to run a local server with hot-reloading support? Just run this:

```
npm run serve
```

After that your console will display a local address where you can access the app.

-----

## Technology choices

### Vue.js

Vue.js is one of the most popular javascript frameworks of the late 2010s.

It uses an easy-to-grasp reactive paradigm that allows programmers to build richer interfaces without worrying much about state.

I personally enjoy how single-file-components help me keep all related code in the same place.

It is a great choice for web projects of any size.

### Poi

Poi is a convention-over-configuration Webpack wrapper that abstracts away most of its complexities.

It's great when you need Webpack's power but doesn't want to spend time configuring it.

It is similar to vue-cli or create-react-app, except it's framework agnostic and simpler to customize. It doesn't need code-generation or ejection, just install it with npm/yarn and you're done!

Just like Vue, it works for all kinds of projects, big and small.

### Tailwind

Tailwind is an Atomic CSS framework.

That's my first time using it. I'm a big fan of other similar frameworks like Tachyons and BassCSS, so I decided to try another one!

Atomic CSS (also known as Functional CSS) is a CSS methodology that uses small, single-purpose helper classes whose names that are based on its visual function.

Those styles are then combined in the markup. It might seem messy and verbose, but I think it works fine when you're using reusable components.

The advantages are small CSS files and no visual bugs caused by styling changes.

The technique was presented in this article: https://www.smashingmagazine.com/2013/10/challenging-css-best-practices-atomic-approach/

The author of Tailwind has great arguments for it: https://adamwathan.me/css-utility-classes-and-separation-of-concerns/

### Zeit Now

Zeit Now is a serverless platform! It's great to publish static websites and Lambda functions.

I used it to publish it publically.
