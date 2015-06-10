#!/usr/bin/env node
var projects = [
    {prefix: "w",       code: "wiki",           name: "Wikipedia"},
    {prefix: "wikt",    code: "wiktionary",     name: "Wiktionary"},
    {prefix: "b",       code: "wikibooks",      name: "Wikibooks"},
    {prefix: "n",       code: "wikinews",       name: "Wikinews"},
    {prefix: "q",       code: "wikiquote",      name: "Wikiquote"},
    {prefix: "s",       code: "wikisource",     name: "Wikisource"},
    {prefix: "v",       code: "wikiversity",    name: "Wikiversity"},
    {prefix: "voy",     code: "wikivoyage",     name: "Wikivoyage"},
];

var fs = require('fs');

var data = JSON.parse(fs.readFileSync("all.json", 'utf8'));

console.log("Writing full site matrix...");
var all = data.sitematrix;
fs.writeFileSync('all.json', JSON.stringify(all, null, 4));
fs.writeFileSync('all.min.json', JSON.stringify(all));

function writeProjectList(project) {
    console.log("Writing list of " + project.name + " language editions...");
    var wikis = [];
    for (var i = 0; (lang = all["" + i]); i++) {
        for (var j = 0; j < lang.site.length; j++) {
            var wiki = lang.site[j];
            if (wiki.code === project.code && !("closed" in wiki)) {
                wikis.push([lang.localname, lang.name, lang.code]);
                break;
            }
        }
    }
    fs.writeFileSync(project.name.toLowerCase() + ".json",
                     JSON.stringify(wikis, null, 4));
    fs.writeFileSync(project.name.toLowerCase() + ".min.json",
                     JSON.stringify(wikis));
}

for (var i = 0; i < projects.length; i++) writeProjectList(projects[i]);
