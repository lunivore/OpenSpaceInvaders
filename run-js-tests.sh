#!/bin/sh

node js/jasmine-node/cli.js js
#node jslint/jslint-runner.js js # Darren commented out until jslint stops moaning about __dirname
node jslint/jslint-runner.js js 