const{fileURLTopath}=require('url');
const{readFile,writeFile}=require('fs');
const{path}=require('path');
const_filename=fileURLTopath(import.meta.url);
const_dirname=path.dirname(_filename);
console.log(__dirname);
readFile(path.join(_dirname),'utf-8',(err,data)=>{
    if(err)throw err;
    let customers=JSON.parse(data);
    writeFile(path.join(_dirname,'util','customers.json'),JSON.stringify(customers),'utf-8',(err,data)=>{
        if(err)throw err;
        console.log('data written successfully');
    })
});