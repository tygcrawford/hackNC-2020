// Graph
class FamilyTree {
    constructor(tid) {
        this.tid = tid;
        
        //list of people
        this.tree = [];
    }

    addPerson(person) {
        this.tree.push(person);
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
        let tree = new FamilyTree(tid);
        let pids = arr.map( p => p[0]);
        let people = pids.map( pid => new Person(pid));
        people.forEach( person => {
            arr[i][1].map( parent_pid => {
                let parent_index = pids.findIndex(parent_pid)
                person.addParent(people[parent_index])
            })
            arr[i][2].map( child_pid => {
                let child_index = pids.findIndex(child_pid)
                person.addChild(people[child_index])
            })
            arr[i][3].forEach( condition => person.addCondition(condition));
        });
        people.forEach( person => tree.addPerson(person))
        return tree;
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
        this.parents.push(person);
    }

    addChild(person) {
        this.children.push(person);
    }
    
    addCondition(condition) {
        this.conditions.push(condition);
    }
}