import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;
beforeEach(() => {
  wrapped = mount(<Root><CommentBox /></Root>);
});
afterEach(() => {
  wrapped.unmount();
});
it('has a textarea and button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe("user inputing comment", () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    }).update();
  });
  it('has a text area users can type in',() => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  });
  it('has a comment submitted',() => {
    wrapped.find('textarea').simulate('submit', {}).update();
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  });
});
