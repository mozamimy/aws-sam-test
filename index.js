'use strict';

exports.handler = (event, context, callback) => {
	console.log(JSON.stringify(event, null, 2));

	callback(null, {
		statusCode: '200',
		body: `hello, ${event.body}!`,
	});
};
