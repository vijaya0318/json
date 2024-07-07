emp=[
    {"name":"Shyam", "email":"shyamjaiswal@gmail.com"},  
    {"name":"Bob", "email":"bob32@gmail.com"},  
    {"name":"Jai", "email":"jai87@gmail.com"}  ];

writeFile('emp.json',JSON.stringify(emp),'utf-8',(err,data)=>{
    if(err) throw err;
});
readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err;
    let empjson=JSON.parse(data);
    console.log(empjson);
});