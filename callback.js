import utils from 'util';
import {exec} from 'child_process';



//error first callback pattern
//async function
// exec('ls /', (err, stdout, stderr) => {

//     if (err) {
//         console.log("\nerr: ");
//         console.log(err);
//         process.exit(1);
//         //throw err;
//     } else {
//         console.log("\nstderr: ");
//         console.log(stderr);
    
//         console.log("\nstdout: "); 
//         console.log(stdout);
//     }
// });


const execP = utils.promisify(exec);

//promise based
const main = async () => {
    try  {
        const {stdout} = await execP('ls /tmp/');         
        console.log(stdout); 
    } catch(error) {
        process.exit(1);
    }
}

main();