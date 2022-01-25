#!/usr/local/bin/ts-node

const package_json = "./package.json"

import workspace from "./package.json";
import contracts_pkg from "./template/contracts/package.json"
import play_pkg from "./template/play/package.json"
import fs from "fs-extra";

const src = "./template"
const dest = process.argv[2]

fs.copy(src, dest)
    .then(async () => {
        const proj_contracts = `${dest}/contracts`;
        const proj_play = `${dest}/play`
        workspace.workspaces.push(proj_contracts);
        workspace.workspaces.push(proj_play);
        
        const contracts_pkg_path = `./${proj_contracts}/package.json`;
        const play_pkg_path = `./${proj_play}/package.json`;

        contracts_pkg.name = `${dest}_contracts`
        play_pkg.name = `${dest}_play`
        
        await fs.writeFile(package_json, JSON.stringify(workspace, null, 2));
        await fs.writeFile(contracts_pkg_path, JSON.stringify(contracts_pkg, null, 2));
        await fs.writeFile(play_pkg_path, JSON.stringify(play_pkg, null, 2));

        console.log(`Finished creating project ${dest}.`)
    })
    .catch(e => {
        console.log(`Error: ${e}`)
    })
