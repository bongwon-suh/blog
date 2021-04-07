/**
 * @file common value
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import path from 'path';

const projectDir = (()=>{
    return path.join(__dirname,"..","..","..")
})();

const staticDir = path.join(projectDir, "static")

export default {
    projectDir: projectDir,
    staticDir: staticDir
}