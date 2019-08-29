import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

let wrapped;
beforeEach(() => {
  wrapped = mount( <Root><App /></Root> );
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      {name : 'comment 1'},
      {name : 'comment 2'}
    ]
 })
});
afterEach(() => {
  moxios.uninstall();
  wrapped.unmount();
});

it('can fetct & display comments',(done) => {
  wrapped.find('.fetch-comments').simulate('click');
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
  });
});
