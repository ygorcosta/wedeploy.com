# [wedeploy.com](http://wedeploy.com) [![Built with Electric](https://img.shields.io/badge/built%20with-electric-f3c302.svg?style=flat)](http://electricjs.com)

> Contains the [wedeploy.com](http://wedeploy.com) static pages like homepage, docs, blog, etc.

## Setup

1. Make sure you have [node and npm](https://nodejs.org/en/download/) installed:

	```sh
node -v && npm -v
	```

2. Install our global dependencies:

	```sh
[sudo] npm i -g electric-cli
	```

3. Go to `ui` folder:

	```sh
cd ui
	```

4. Install our local dependencies:

	```sh
npm i
	```

## Usage

To run these commands above, make sure you are in `ui` folder.

### build

* Builds the site and places file in dist directory.

	```
electric build
	```

### server

* Starts up a local development server.

	```
electric server
	```

### watch

* Watches for changes and triggers build.

	```
electric watch
	```

### run

* Runs the `build`, `watch`, and `server` commands for quick development.

	```
electric run
	```

## License

[BSD License](https://github.com/wedeploy/wedeploy.com/blob/master/LICENSE.md) © Liferay, Inc.
