# Landing

[![Build Status](https://travis-ci.com/wedeploy/landing.svg?token=ixZ9XiEPW4YH62ixq7Av)](https://travis-ci.com/wedeploy/landing)

> Contains the [wedeploy.com](http://wedeploy.com) static pages like homepage, docs, etc.

## Setup

1. Make sure you have [Node.js and npm](https://nodejs.org/en/download/) installed:

	```sh
node -v && npm -v
	```

2. Install our global dependencies:

	```sh
npm i -g bower gulp
	```

3. Install our local dependencies:

	```sh
npm i && bower i
	```

## Usage

* Build the site locally:

	```
gulp build
	```

	This will create a `dist` folder with everything inside of it.

* Run the site on a local server:

	```
gulp server
	```

	This will run the `build` task and serve all generated files.

* Deploy to production:

	```
gulp deploy
	```

	This will run the `build` task and send to `gh-pages` branch.

## License

[BSD License](./LICENSE.md) © Liferay, Inc.
