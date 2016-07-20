module.exports = function(server){
    server.post('post-put', function(req,res){
        console.log("In Submission POST")
        var TestType = "";
        if(req.body.HardwareTestType == true) 
            TestType = "Hardware";
        else
            TestType = "Software";

        res.render('./views/test/post-results.ejs',{
            Test: TestType
        });
    });
}