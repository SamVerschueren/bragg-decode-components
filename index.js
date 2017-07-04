'use strict';
const decodeComponent = require('decode-uri-component');

const decode = obj => {
	obj = obj || {};

	const ret = Object.create(null);

	for (const key of Object.keys(obj || {})) {
		if (typeof obj[key] === 'string') {
			ret[decodeURIComponent(key)] = decodeComponent(obj[key]);
		} else {
			ret[decodeURIComponent(key)] = obj[key];
		}
	}

	return ret;
};

module.exports = () => {
	return ctx => {
		ctx.request.params = decode(ctx.request.params);
		ctx.request.query = decode(ctx.request.query);
	};
};
