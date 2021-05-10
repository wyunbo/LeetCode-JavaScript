import {
  deserializeLinkedList,
  serializeLinkedList,
} from '../../utils/linked-list-util';
import { reverseListR, reverseList } from './206. Reverse Linked List';

describe('Reverse Linked List', () => {
  it('Reverse Linked List by recursion', () => {
    expect(
      serializeLinkedList(reverseListR(deserializeLinkedList('1,2,3,4,5')))
    ).toEqual('5,4,3,2,1');
  });
  it('Reverse Linked List by while', () => {
    expect(
      serializeLinkedList(reverseList(deserializeLinkedList('1,2,3,4,5')))
    ).toEqual('5,4,3,2,1');
  });
});
