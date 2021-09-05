const LinkedList = require('./LinkedList');


describe('linkedList testing', () => {
    test.skip('testing insertAtHead', () => {

        const ll = new LinkedList();
        ll.insertAtHead(10);
        let oldHead = ll.head;

        ll.insertAtHead(20);
        let newHead = ll.head;

        expect(ll.length).toBe(2);
        expect(ll.head.value).toBe(20);
        expect(ll.head.next).toBe(oldHead);

        // console.log(oldHead);
        // console.log(newHead);
    });

    test.skip('testing getNodeAtIndex', () =>{
        const ll = new LinkedList();
        let elements = [10, 20, 30, 40, 50];
        for(let i = 0; i < elements.length; i++){
            ll.insertAtHead(elements[i]);
        }

        //console.log(ll);

        const node = ll.getNodeAtIndex(-1);
        expect(node).toBeNull();

        const head = ll.getNodeAtIndex(0);
        expect(head).toBe(ll.head);

        const node7 = ll.getNodeAtIndex(7);
        expect(node7).toBeNull();

        const node2 = ll.getNodeAtIndex(3);
        expect(node2.value).toBe(20);
        expect(node2.next).not.toBeNull();

    })

    test.skip('testing insertNodeAtIndex', () =>{
        const ll = new LinkedList();
        let elements = [10, 20, 30, 40, 50];
        for(let i = 0; i < elements.length; i++){
            ll.insertAtHead(elements[i]);
        }

        let result = ll.insertNodeAtIndex(60,-2);
        expect(result).toBe(false);
        expect(ll.length).toBe(5);
        
        let result2 = ll.insertNodeAtIndex(70,5);
        expect(result2).toBe(false);
        expect(ll.length).toBe(5);

          
        let result3 = ll.insertNodeAtIndex(70,0);
        expect(result3).toBe(true);
        expect(ll.length).toBe(6);
        expect(ll.head.value).toBe(70);

        let result4 = ll.insertNodeAtIndex(80,3);
        expect(result4).toBe(true);
        // console.log(ll);
        let node3 = ll.getNodeAtIndex(3);
        expect(node3.value).toBe(80);
        expect(node3.next.value).toBe(30);
        expect(ll.length).toBe(7);
    

    })

    test('testing deleteNodeAtIndex', () =>{
        const ll = new LinkedList();
        let elements = [10, 20, 30, 40, 50];
        for(let i = 0; i < elements.length; i++){
            ll.insertAtHead(elements[i]);
        }

        let result = ll.deleteNodeAtIndex(-2);
        expect(result).toBe(false);
        expect(ll.length).toBe(5);
        
        let result2 = ll.deleteNodeAtIndex(5);
        expect(result2).toBe(false);
        expect(ll.length).toBe(5);

         
        let result3 = ll.deleteNodeAtIndex(3);
        expect(result3).toBe(true);
        expect(ll.length).toBe(4);
          
        let result4 = ll.deleteNodeAtIndex(0);
        expect(result4).toBe(true);
        expect(ll.length).toBe(3);
    

    })
})