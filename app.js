const express=require('express');
const server=express();
server.use(express.json());
const movies=[
    {
        name:"avenjers",
        year:2000,
    },{
        name:"avenjers1",
        year:2001,
    }
];
server.get('/',function(req,res){
    
    res.json(movies);
})
server.post('/',function(req,res){
    console.log(req.body);
    movies.push(req.body);
    res.send('ok your movie is added');
})


server.listen(7000,function(){
    console.log("running");
});