var Rsync = require('rsync');
const result = dotenv.config()

// Build the command
var rsync = new Rsync()
  .shell('ssh')
  .flags('az')
  .source('./dist')
  .destination(process.env.SERVER + ':/var/www/vr');
 
// Execute the command
rsync.execute(function(error, code, cmd) {
    // we're done
    if (error === null){
        console.log("success")
    }else{
        console.log("error", error,code, cmd )
    }
});