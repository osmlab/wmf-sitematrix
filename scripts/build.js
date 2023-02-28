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

import * as fs from 'fs';
let dataPath = "data";
let data = JSON.parse(fs.readFileSync(`${dataPath}/all.json`, 'utf8'));

console.log("Writing full site matrix...");
let all = data.sitematrix;
fs.writeFileSync(`${dataPath}/all.min.json`, JSON.stringify(all));

function writeProjectList(project) {
    console.log(`Writing list of ${project.name} language editions...`);
    let wikis = [];
    let lang;
    for (let i = 0; (lang = all["" + i]); i++) {
        for (let wiki of lang.site) {
            if (wiki.code === project.code && !("closed" in wiki)) {
                wikis.push([lang.localname, lang.name, lang.code]);
                break;
            }
        }
    }
    fs.writeFileSync(`${dataPath}/${project.name.toLowerCase()}.json`,
                     JSON.stringify(wikis, null, 4));
    fs.writeFileSync(`${dataPath}/${project.name.toLowerCase()}.min.json`,
                     JSON.stringify(wikis));
}

for (let project of projects) writeProjectList(project);
