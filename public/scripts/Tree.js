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

    getPersonByPid(pid) {
        return this.tree[this.tree.findIndex(e => pid === e.pid)];
    }

    exportTree() {
        // exports as an array of [ pid, name, [parent_pid, ...], [child_pid, ... ], [cid, ... ] ]
        return this.tree.map( person => {
            return [ 
                person.pid,
                person.name,
                person.parents.map( parent => parent.pid),
                person.children.map( child => child.pid),
                person.conditions
            ];
        });
    }
    
    exportTreeForGraph(pid, graph, i, child_i) {
        if (graph === undefined) graph = [];
        if (i === undefined) i = 0;
        let person = this.getPersonByPid(pid)
        graph.push({
            id: i,
            pid: child_i === undefined ? undefined : child_i,
            name: person.name,
            tags: child_i === undefined ? ["blue"] : undefined,
            img: "https://via.placeholder.com/150"
        })
        let next_i = i;
        person.parents.forEach(p => {
            console.log(p.name)
            next_i++;
            this.exportTreeForGraph(p.pid, graph, next_i, i);
        })
        return graph
    }

    static importTree(arr, tid) {
        let tree = new FamilyTree(tid);
        let pids = arr.map( p => p[0]);
        let people = pids.map( pid => new Person(pid));
        people.forEach( (person, i) => {
            person.name = arr[i][1]
            arr[i][2].map( parent_pid => {
                let parent_index = pids.findIndex((e) => e === parent_pid);
                console.log(parent_index)
                person.addParent(people[parent_index]);
            });
            arr[i][3].map( child_pid => {
                let child_index = pids.findIndex((e) => e === child_pid);
                person.addChild(people[child_index]);
            });
            arr[i][4].forEach( condition => person.addCondition(condition));
        });
        people.forEach( person => tree.addPerson(person))
        return tree;
    }
}


// Node
class Person {
    constructor(pid) {
        //get info like name from server
        this.name = "jack"

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

    static getRelativeDepth(person) {
        if(person.children.length === 0) {
            return 0;
        }
        let depth = 0;
        person.children.forEach((child) => {
            let child_depth = this.getRelativeDepth(child)
            if(child_depth > depth){
                depth = child_depth
            };
        })
        return depth + 1;
    }

    static getRelativeHeight(person) {
        if(person.parents.length === 0) {
            return 0;
        }
        let depth = 0;
        person.parents.forEach((parent) => {
            let parent_height = this.getRelativeDepth(parent)
            if(parent_height > depth){
                depth = parent_height
            };
        })
        return depth + 1;
    }
}
