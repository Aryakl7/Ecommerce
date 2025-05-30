const userModel = require("../../models/userModel");

async function userDetailsController(req,res) {
    try{
        console.log("userId",req.userId)
        const user = await userModel.findById(req.userId)

        req.status(200).json({
            data: user,
            error: false,
            succcess: true,
            message: "User Details"
        })
    }   
    catch(err){
        res.status(400).json({
        message: err.message||err,
        error: true,
        success: false     
    })
    } 
}
module.exports = userDetailsController;