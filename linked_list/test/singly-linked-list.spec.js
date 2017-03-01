import Node from '../src/node';
import LinkedList from '../src/singly-linked-list';

describe('Singly Linked List', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  afterEach(() => {
    list = null;
  });

  it('should add a new node', () => {
    expect(list.length).toEqual(0);
    
    list.add(1);
    list.add(2);

    expect(list.length).toEqual(2);
  });
  
  it('should get node with given position', () => {
    for (let i = 0; i < 5; i++) list.add(i);

    expect(list.get(3).value).toEqual(3);
  });

  it ('should remove node from list', () => {
    for (let i = 0; i < 5; i++) list.add(i);
    
    expect(list.length).toEqual(5);
    expect(list.get(3).value).toEqual(3);

    list.remove(3);
    
    expect(list.length).toEqual(4);
    expect(list.get(3).value).toEqual(4);
  });
});
