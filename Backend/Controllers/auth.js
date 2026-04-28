

exports.register = async(req, res) => {
    
    try{
        res.send("Register endpoint Controller");

    }catch(err){
        console.log(err);
        res.status(500).json({message: "Server Error"});
    }


};


exports.login = async(req, res) => {
    try{
        res.send("Login endpoint Controller");

    }catch(err){
        console.log(err);
        res.status(500).json({message: "Server Error"});
    }
};


exports.currentUser = async(req, res) => {
    try{
        res.send("Current User endpoint Controller");
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Server Error"});
    }
};



   


