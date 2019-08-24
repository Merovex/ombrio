import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});
afterEach(() => {
  wrapped.unmount();
});
it('has a textarea and button', () => {
  wrapped = mount(<CommentBox />);
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
