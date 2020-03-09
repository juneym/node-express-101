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


//promise based
const main = async () => {
    const stdout = await exec('ls /tmp/x'); 
    //not going to work since exec is not supporting promise
    console.log(stdout); 

}

main();