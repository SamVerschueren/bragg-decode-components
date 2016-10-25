'use strict';
const decode = obj => {
	obj = obj || {};

	const keys = Object.keys(obj);

	for (const key of keys) {
		obj[key] = decodeURIComponent(obj[key]);
	}
};

module.exports = () => {
	return ctx => {
		decode(ctx.request.params);
		decode(ctx.request.query);
	};
};
