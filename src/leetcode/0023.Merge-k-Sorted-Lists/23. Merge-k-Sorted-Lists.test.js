import {
  deserializeLinkedList,
  serializeLinkedList,
} from '../../utils/linked-list-util';
import mergeKLists from './23. Merge-k-Sorted-Lists';

test('Merge k Sorted Lists', () => {
  expect(
    serializeLinkedList(
      mergeKLists([
        deserializeLinkedList('1,4,5'),
        deserializeLinkedList('1,3,4'),
        deserializeLinkedList('2,6'),
      ])
    )
  ).toEqual('1,1,2,3,4,4,5,6');
});
