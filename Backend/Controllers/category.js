

exports.create = async (req, res) => {
    try{
        res.send('Create category')

    }catch(err){
        console.log(err)
        res.status(500).json({message: "Server Error"})
    }
}


exports.list = async (req, res) => {
    try{
        res.send('List categories')

    }catch(err){
        console.log(err)
        res.status(500).json({message: "Server Error"})
    }
}


exports.remove = async (req, res) => {
    try{
        res.send('Remove category')
        console.log(req.params.id)

    }catch(err){
        console.log(err)
        res.status(500).json({message: "Server Error"})
    }
}