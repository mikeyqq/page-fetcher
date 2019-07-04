const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

request(args[0], (err, response, body) => {
  //if error = true, then print out; 
if(err) {
  console.log('Error occured: 404, cannot read.')
  //if error = false, then follow to next option;
} else {
  //tries to access a file.
  fs.access(args[1], err => {
    //theres no existing file, causing an error
     if(!err) {
       //asks the quest to override the file using readline.
         rl.question('File already exists, do you want to overwrite the file? y = Yes, any = Exit\n', answer1 =>{
            if(answer1 = 'y') {
              fs.writeFile(args[1], body, err => {
                 if(err) {
                   console.log('Error occured, file path given is invalid');
                 } else {
                   console.log(`Downloaded and saved ${fs.statSync(args[1]).size} bytes to ${args[1]}`);
                 rl.close();
                  }
                  rl.close();
              })
            }
    
      })
     }
     else {
      fs.writeFile(args[1], body, err => {
        if(err) {
          console.log('Error occured, file path given is invalid');
        } else {
          console.log(`Downloaded and saved ${fs.statSync(args[1]).size} bytes to ${args[1]}`);
  }
}) 
}
})
}

})
