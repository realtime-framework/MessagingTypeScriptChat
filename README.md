# Simple Chat example using TypeScript, React and Realtime Messaging

This example shows how to build a simple web chat using TypeScript, React and the Realtime Messaging platform.

In a nuthsell this example allows users to exchange messages with all the other users subscribing the chat room.

[TypeScript](https://www.typescriptlang.org/) is a typed superset of JavaScript that compiles to plain JavaScript.

[React](https://facebook.github.io/react/) is a JavaScript library for building user interfaces.

[Realtime Messaging](https://framework.realtime.co/messaging/) is a cloud based message broker, enabling developers to build cross-platform apps that require realtime communication between devices.

### Getting your Free Realtime Messaging subscription
If you already have a Realtime Messaging subscription you can skip this step.

Click [here](https://accounts.realtime.co/signup/) to register for a Realtime account and subscribe the Realtime Messaging service using the Free plan. 

You'll get a 6 alpha-numeric application key (aka appkey) and make note of it, you'll have to enter it in your app code when the connection to Realtime is established.


## Running this example
Download or clone this repository and enter your Realtime Messaging application key in the `appkey` property of the `Chat` component defined at `src/index.tsx` file.

Run the following commands in your terminal window to install the dependencies and compile the example:

	npm install -g webpack
	npm install
	webpack

Open the index.html file in your default browser.

NOTE: You'll need to have Node.js and NPM setup on your development environment.


## Author
Realtime.co
