import test from 'ava';
import m from './';

const decode = request => {
	m()({request});
	return request;
};

test(t => {
	t.deepEqual(decode({params: {foo: 'foo%20bar'}}), {params: {foo: 'foo bar'}, query: {}});
	t.deepEqual(decode({params: {foo: 1}, query: {'%C3%A5': 2}}), {params: {foo: 1}, query: {å: 2}});
	t.deepEqual(decode({query: {foo: 'foo%20bar'}}), {params: {}, query: {foo: 'foo bar'}});
	t.deepEqual(decode({query: {'%C3%A5': '%st%C3%A5le%'}}), {params: {}, query: {å: '%ståle%'}});
});
