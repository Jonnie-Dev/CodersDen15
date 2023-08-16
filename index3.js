/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // inputs are 2 linked lists: l1 and l2
  // output: a linked list: l3
  // l3 = l1 + l2
  //   convert l3 to a linked list

  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  // function linkedList() {
  //   this.head = null;
  //   this.size = 0;

  //   let add = (element) => {
  //     var node = new ListNode(element);

  //     var current;

  //     if (this.head == null) this.head = node;
  //     else {
  //       current = this.head;

  //       while (current.next) {
  //         current = current.next;
  //       }

  //       current.next = node;
  //     }
  //     this.size++;
  //   };
  // }

  let sum = [];
  let newl1 = [];
  let newl2 = [];

  current1 = l1.head;
  current2 = l2.head;

  while (current1 && current2) {
    newl1.push(current1.element);
    newl2.push(current2.element);
    current1 = current1.next;
    current2 = current2.next;
  }

  let num1 = "",
    num2 = "";

  newl1.map((num, i) => {
    num1 += num;
  });
  newl2.map((num, i) => {
    num2 += num;
  });

  let sum1 = (+num1 + +num2 + "").split("");
  sum = [...sum1].reverse().map((x) => +x);

  let l3 = new ListNode();

  let add = (element, list) => {
    var node = new ListNode(element);

    var current;
    console.log(list);

    if (list.head == null) {
      list.head = node;

      console.log(node);
    } else {
      current = list.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    console.log(current);
  };

  for (let i = 0; i < sum.length; i++) {
    add(sum[i], l3);
  }

  console.log(l3);
  return l3;
};

// head -> elemnent
//         next -> element
//                 next -> element
//                         next -> null

// User defined class node
class Node {
  // constructor
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// linkedlist class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    // creates a new node
    var node = new Node(element);

    // to store current node
    var current;

    // if list is Empty add the
    // element and make it head
    if (this.head == null) this.head = node;
    else {
      current = this.head;

      // iterate to the end of the
      // list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
    }
    this.size++;
  }

  // insert element at the position index
  // of the list
  insertAt(element, index) {
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");
    else {
      // creates a new node
      var node = new Node(element);
      var curr, prev;

      console.log(node);

      curr = this.head;
      console.log(curr);

      // add the element to the
      // first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;

        // iterate over the list to find
        // the position to insert
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // adding an element
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }
}

let newList1 = new LinkedList();
let newList2 = new LinkedList();

newList1.add(2);
newList1.add(4);
newList1.add(3);

newList2.add(5);
newList2.add(6);
newList2.add(4);

console.log(addTwoNumbers(newList1, newList2));

// console.log(9999999 + 9999)
