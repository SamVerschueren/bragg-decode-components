import test from 'ava';
import m from './';

const decode = request => {
	m()({request});
	return request;
};

test(t => {
	t.deepEqual(decode({params: {foo: 'foo%20bar'}}), {params: {foo: 'foo bar'}});
	t.deepEqual(decode({params: {foo: 1}}), {params: {foo: 1}});
	t.deepEqual(decode({query: {foo: 'foo%20bar'}}), {query: {foo: 'foo bar'}});
});
