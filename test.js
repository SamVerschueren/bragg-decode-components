import test from 'ava';
import m from './';

const decode = ctx => {
	m()(ctx);
	return ctx;
};

test(t => {
	t.deepEqual(decode({params: {foo: 'foo%20bar'}}), {params: {foo: 'foo bar'}});
	t.deepEqual(decode({query: {foo: 'foo%20bar'}}), {query: {foo: 'foo bar'}});
});
