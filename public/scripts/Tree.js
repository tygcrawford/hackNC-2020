// Graph
class FamilyTree {
    constructor(tid) {
        this.tid = tid;
        
        //list of people
        this.tree = [];
    }

    addPerson(person) {
        this.tree.append(person);
    }

    exportTree() {
        // exports as an array of [ pid, [parent_pid, ...], [child_pid, ... ], [cid, ... ] ]
        return this.tree.map( person => {
            return [ 
                person.pid,
                person.parents.map( parent => parent.pid),
                person.children.map( child => child.pid),
                person.conditions
            ];
        });
    }

    static importTree(arr, tid) {
        let ft = new FamilyTree(tid);
        pids = arr.map( p => p[0])
        people = pids.map( pid => new Person(pid))
        
    }
}


// Node
class Person {
    constructor(pid) {
        this.pid = pid;
        this.parents = [];
        this.children = [];
        this.conditions = [];
    }

    addParent(person) {
        this.parents.append(person);
    }

    addChild(person) {
        this.children.append(person);
    }
}