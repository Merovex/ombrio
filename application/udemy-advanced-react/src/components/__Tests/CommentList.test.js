import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
beforeEach(() => {
  const initialState = {
    comments: ['one','two']
  };
  wrapped = mount(<Root initialState={initialState}><CommentList /></Root>);
});
afterEach(() => {
  wrapped.unmount();
});

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});
it('displays text for each comment',()=>{
  expect(wrapped.render().text()).toContain('one')
  expect(wrapped.render().text()).toContain('two')
});
