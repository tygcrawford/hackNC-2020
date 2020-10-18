
let fam = [
    ["0", "oof", [], ["1"], ["gay"]],
    ["1", "oofie", ["0", "2"], [], ["gay"]],
    ["2", "oops", [], ["1"], ["gay"]]
];
let tree = FamilyTree.importTree(fam);
let graph = tree.exportTreeForGraph("1");
let arrt = tree.exportTree();

let person = tree.getPersonByPid("1")
console.log(person)

console.log(arrt)
console.log(graph)

window.onload = function () {
    OrgChart.templates.family_template = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.family_template.size = [86, 86];
    OrgChart.templates.family_template.plus = "";
    OrgChart.templates.family_template.minus = "";
    OrgChart.templates.family_template.rippleRadius = 40;
    OrgChart.templates.family_template.name = '<text style="font-size: 12px;" fill="#000000" x="43" y="-10" text-anchor="middle">{val}</text>';
    OrgChart.templates.family_template.img = '<clipPath id="{randId}"><circle cx="43" cy="43" r="38.5"></circle></clipPath></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="3" y="3"  width="80" height="80"></image>';
    OrgChart.templates.family_template.node = '<circle stroke-width="3" fill="none" stroke="#aeaeae" cx="43" cy="43" r="41.5"></circle>';
    OrgChart.templates.family_template.href = '<a href="{val}"><circle fill="none" pointer-events="visible" cx="43" cy="43" r="41.5"></circle></a>';
    OrgChart.templates.family_template_blue = Object.assign({}, OrgChart.templates.family_template);
    OrgChart.templates.family_template_blue.node = '<circle stroke-width="3" fill="none" stroke="#039BE5" cx="43" cy="43" r="41.5"></circle>';

    var chart = new OrgChart(document.getElementById("tree"), {
        template: "family_template",
        enableSearch: false,
        siblingSeparation: 100,
        nodeMouseClick: OrgChart.action.none,
        // orientation: OrgChart.orientation.bottom,
        nodeBinding: {
            name: "name",
            img: "img",
            href: "href"
        },
        tags: {
            blue: {
                template: "family_template_blue"
            }
        }
    });

    chart.on('render-link', function(sender, args){
        if (args.cnode.ppid != undefined){
            args.html += '<use xlink:href="#baby" x="'+ args.p.xa +'" y="'+ args.p.ya +'"/>';
        }
    });
    chart.load(graph);
};