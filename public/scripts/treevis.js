
window.onload = function () {
    OrgChart.templates.family_template = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.family_template.size = [86, 86];
    OrgChart.templates.family_template.plus = "";
    OrgChart.templates.family_template.minus = "";
    OrgChart.templates.family_template.rippleRadius = 40;
    OrgChart.templates.family_template.name = '<text style="font-size: 12px;" fill="#000000" x="43" y="100" text-anchor="middle">{val}</text>';
    OrgChart.templates.family_template.img = '<clipPath id="{randId}"><circle cx="43" cy="43" r="38.5"></circle></clipPath></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="3" y="3"  width="80" height="80"></image>';
    OrgChart.templates.family_template.node = '<circle stroke-width="3" fill="none" stroke="#aeaeae" cx="43" cy="43" r="41.5"></circle>';
    OrgChart.templates.family_template.plink = '<a href="{val}"><circle fill="none" pointer-events="visible" cx="43" cy="43" r="41.5"></circle></a>';
    OrgChart.templates.family_template_blue = Object.assign({}, OrgChart.templates.family_template);
    OrgChart.templates.family_template_blue.node = '<circle stroke-width="3" fill="none" stroke="#039BE5" cx="43" cy="43" r="41.5"></circle>';

    var chart = new OrgChart(document.getElementById("tree"), {
        template: "family_template",
        enableSearch: false,
        siblingSeparation: 100,
        nodeMouseClick: OrgChart.action.none,
        nodeBinding: {
            name: "name",
            img: "img",
            plink: "plink"
        },
        tags: {
            blue: {
                template: "family_template_blue"
            }
        }
    });

    // chart.on('render-link', function(sender, args){
    //     if (args.cnode.ppid != undefined){
    //         args.html += '<use xlink:href="#baby" x="'+ args.p.xa +'" y="'+ args.p.ya +'"/>';
    //     }
    // });

    chart.load([          
            { plink: "https://www.google.com", id: 1, name: "King George VI", img: "https://cdn.balkan.app/shared/f1.png"},
            { id: 2, pid: 1, tags: ["partner"], name: "Queen Elizabeth", title: "The Queen Mother", img: "https://cdn.balkan.app/shared/f2.png" },
            { id: 3, pid: 1,  ppid: 2, name: "Queen Elizabeth II", img: "https://cdn.balkan.app/shared/f5.png"},
            { id: 4, pid: 3, tags: ["partner"], name: "Prince Philip", title: "Duke of Edinburgh", img: "https://cdn.balkan.app/shared/f3.png"},
            { id: 5, pid: 1, ppid: 2, name: "Princess Margaret", img: "https://cdn.balkan.app/shared/f6.png"},
            { id: 6, pid: 3,tags: ["blue"], ppid: 4, name: "Charles", title: "Prince of Wales", img: "https://cdn.balkan.app/shared/f8.png"},
            { id: 7, pid: 6, tags: ["partner"] , name: "Diana", title: "Princess of Wales", img: "https://cdn.balkan.app/shared/f9.png"},
            { id: 8, pid: 6, tags: ["partner"], name: "Camila", title: "Duchess of Cornwall", img: "https://cdn.balkan.app/shared/f7.png" },
            { id: 9, pid: 3, ppid: 4 , name: "Anne", title: "Princess Royal", img: "https://cdn.balkan.app/shared/f10.png"},
            { id: 10, pid: 3, ppid: 4 , name: "Prince Andrew", title: "Duke of York", img: "https://cdn.balkan.app/shared/f11.png"},
            { id: 11, pid: 3, ppid: 4, name: "Prince Edward", title: "Earl of Wessex", img: "https://cdn.balkan.app/shared/f12.png"},
            { id: 12, pid: 6, ppid: 7, tags: ["blue"], name: "Prince William", title: "Duch of Cambridge", img: "https://cdn.balkan.app/shared/f14.png"},
            { id: 13, pid: 6, ppid: 7, name: "Prince Harry", img: "https://cdn.balkan.app/shared/f15.png"},
            { id: 14, pid: 12, tags: ["partner"], name: "Catherine", title: "Duchess of Cambridge", img: "https://cdn.balkan.app/shared/f13.png"},
            { id: 15, pid: 13, tags: ["partner", "blue"], name: "Meghan Markle", img: "https://cdn.balkan.app/shared/f16.png"},
            { id: 16, pid: 12, ppid: 14, name: "Prince George of Cambridge", img: "https://cdn.balkan.app/shared/f17.png"},
    ]);
};