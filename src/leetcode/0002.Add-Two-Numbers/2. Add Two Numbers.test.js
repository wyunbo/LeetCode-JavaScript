import {
  deserializeLinkedList,
  serializeLinkedList,
} from '../../utils/linked-list-util';
import addTwoNumbers from './2. Add Two Numbers';

test('Add Two Numbers', () => {
  expect(
    serializeLinkedList(
      addTwoNumbers(
        deserializeLinkedList('2,4,3'),
        deserializeLinkedList('5,6,4')
      )
    )
  ).toEqual('7,0,8');
});
