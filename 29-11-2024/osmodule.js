// const os = require('os'); // os is a built-in module   
// console.log(os.freemem()); // Logs the free memory in bytes
// console.log(os.homedir()); // Logs the free memory in bytes
// console.log(os.hostname()); // Logs the free memory in bytes

const os = require('os'); // os is a built-in module  

// console.log('Free memory:', os.freemem(), 'bytes');  
// console.log('Total memory:', os.totalmem(), 'bytes');  
// console.log('Uptime:', os.uptime(), 'seconds');  
// console.log('CPU Information:', os.cpus());  
// console.log('Load average:', os.loadavg());  
console.log('Network Interfaces:', os.networkInterfaces());  
// console.log('User Info:', os.userInfo());  
// console.log('OS Architecture:', os.arch());  
// console.log('OS Platform:', os.platform());  
// console.log('OS Type:', os.type());  
// console.log('OS Release:', os.release());  
// console.log('Hostname:', os.hostname());  
// console.log('Home Directory:', os.homedir());  
// console.log('Temp Directory:', os.tmpdir());  
// console.log('Endianness:', os.endianness());