#!/usr/bin/env node
import * as fs from 'fs';
import * as process from 'process';

let dataPath = 'data';
fs.mkdirSync(dataPath, {recursive: true});

console.log("Fetching site matrix from the Wikimedia Meta-Wiki's MediaWiki API...");
let api = process.env.npm_package_config_api;
let response = await fetch(api);
if (!response.ok) {
    console.error(`HTTP error: ${response.status}`);
    process.exitCode = 1;
} else {
    let json = await response.json();
    fs.writeFileSync(`${dataPath}/all.json`, JSON.stringify(json, null, 4));
}
