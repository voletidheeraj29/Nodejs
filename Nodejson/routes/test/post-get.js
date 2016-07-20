module.exports = function(server){

    server.get('/post', function(req,res){
        res.render('./views/test/post.ejs',{            
        });
    });
}