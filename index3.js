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

// Finall Accepted Solution ~103ms ~49mb

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

function ListNode(val, next) {
  this.val = val === undefined ? undefined : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let newl1 = [];
  let newl2 = [];
  let l3 = new ListNode();

  [current1, current2] = [l1, l2];

  while (current1 || current2) {
    if (current1) {
      newl1.push(+current1.val);
      current1 = current1.next;
    }

    if (current2) {
      newl2.push(+current2.val);
      current2 = current2.next;
    }
  }

  let num1 = BigInt(newl1.reverse().join(""));
  let num2 = BigInt(newl2.reverse().join(""));
  let sum = [...(num1 + num2).toString().split("")].reverse().map((x) => +x);

  let add = (element) => {
    var node = new ListNode(element);
    var current;

    if (l3.val == undefined && l3.next == null) l3 = node;
    else {
      current = l3;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
  };

  for (let i = 0; i < sum.length; i++) {
    add(sum[i]);
  }

  return l3;
};

// function ListNode(val, next) {
//   this.val = val === undefined ? undefined : val;
//   this.next = next === undefined ? null : next;
// }

// var addTwoNumbers = function (l1, l2) {
//   // inputs: are 2 linked lists: l1 and l2
//   // output: a linked list: l3
//   // l3 = l1 + l2
//   // convert l3 to a linked list

//   let sum = [];
//   let newl1 = [];
//   let newl2 = [];
//   let l3 = new ListNode();

//   [current1, current2] = [l1.head, l2.head];

//   while (current1 || current2) {
//     if (current1) {
//       newl1.push(+current1.element);
//       current1 = current1.next;
//     }

//     if (current2) {
//       newl2.push(+current2.element);
//       current2 = current2.next;
//     }
//   }

//   newl1 = BigInt(newl1.reverse().join(""));
//   newl2 = BigInt(newl2.reverse().join(""));
//   sum = [...(newl1 + newl2).toString().split("")].reverse().map((x) => +x);

//   let add = (element) => {
//     var node = new ListNode(element);
//     var current;

//     if (l3.val == undefined && l3.next == null) l3 = node;
//     else {
//       current = l3;

//       while (current.next) {
//         current = current.next;
//       }

//       current.next = node;
//     }
//   };

//   for (let i = 0; i < sum.length; i++) {
//     add(sum[i]);
//   }

//   return l3;
// };

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

// let newList1 = new LinkedList();
// let newList2 = new LinkedList();

// let jump = [
//   1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 1,
// ];
// let sit = [5, 6, 4];

// for (let i in jump) {
//   newList1.add(jump[i]);
// }

// for (let i in sit) {
//   newList2.add(sit[i]);
// }

// console.log(addTwoNumbers(newList1, newList2));

/////////////////
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// function ListNode(val, next) {
//   this.val = val === undefined ? undefined : val;
//   this.next = next === undefined ? null : next;
// }

// var addTwoNumbers = function (l1, l2) {
//   let sum = [];
//   let newl1 = [];
//   let newl2 = [];

//   current1 = l1;
//   current2 = l2;

//   while (current1) {
//     newl1.push(current1.val);
//     current1 = current1.next;
//   }

//   while (current2) {
//     newl2.push(current2.val);
//     current2 = current2.next;
//   }

//   let num1 = "",
//     num2 = "";

//   newl1.reverse().map((num) => {
//     num1 += num;
//   });
//   newl2.reverse().map((num) => {
//     num2 += num;
//   });

//   let sum1 = (+num1 + +num2).toString().split("");
//   sum = [...sum1].reverse().map((x) => +x);

//   let l3 = new ListNode();

//   let add = (element) => {
//     var node = new ListNode(element);

//     var current;

//     if (l3.val === undefined && l3.next == null) l3 = node;
//     else {
//       current = l3;

//       while (current.next) {
//         current = current.next;
//       }

//       current.next = node;
//     }
//   };

//   for (let i = 0; i < sum.length; i++) {
//     add(sum[i]);
//   }

//   console.log(l3);
//   return l3;
// };
