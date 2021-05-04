const LinkedListNode = require('../LinkedListNode')

describe('LinkedListNode', () => {
  it('should create list node with value', () => {
    const node = new LinkedListNode(1)

    expect(node.value).toBe(1)
    expect(node.next).toBeNull()
  })

  it('should link nodes together', () => {
    const node2 = new LinkedListNode(2)
    const node1 = new LinkedListNode(1, node2)

    expect(node1.next).toBeDefined()
    expect(node2.next).toBeNull()
    expect(node1.value).toBe(1)
    expect(node2.value).toBe(2)
  })
})
