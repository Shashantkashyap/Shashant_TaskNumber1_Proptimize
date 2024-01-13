const User = require("../models/User.model");

exports.showAllData = async(req,res)=>{
    try{
        
        const UserData = await User.find();
       
         if(!UserData){
           return res.status(404).json({
                success:false,
                message:"no data found"
            })
         }

         
         return res.status(200).json({
            success:true,
            message:"data get successfully",
            data: UserData
            
         })
    }catch(error){
        return res.status(502).json({
            success:false,
            message:"Error in getting all data",
            error:error
        })
    }
}

exports.evenData = async(req,res)=>{
    try{
        const UserData = await User.find();
       
         if(!UserData){
           return res.status(404).json({
                success:false,
                message:"no data found"
            })
         }

         const multData = UserData.filter((ele)=> ele.id % 2 === 0)
        // console.log("MultDataaaaa", multData)
         return res.status(200).json({
            success:true,
            message:"data get successfully",
            data: multData
            
         })
    }catch(error){
        return res.status(502).json({
            success:false,
            message:"Error in getting all data multiple of 2",
            error:error
        })
    }
}

exports.oddData = async(req,res)=>{
    try{
        const UserData = await User.find();
       
         if(!UserData){
           return res.status(404).json({
                success:false,
                message:"no data found"
            })
         }

         const multData = UserData.filter((ele)=> ele.id % 2 === 0)
        // console.log("MultDataaaaa", multData)
         return res.status(200).json({
            success:true,
            message:"data get successfully",
            data: multData
            
         })
    }catch(error){
        return res.status(502).json({
            success:false,
            message:"Error in getting all data multiple of 2",
            error:error
        })
    }
}

exports.findDataById = async(req,res)=>{
    try{
        const id = req.body;
    const data = await User.findOne(id);

   // console.log(data);

    if(!data){
        return res.status(404).json({
             success:false,
             message:"no data found"
         })
      }

      
      return res.status(200).json({
         success:true,
         message:"data get successfully",
         data: data
         
      })
    }catch(error){
        return res.status(502).json({
            success:false,
            message:"Error in getting data by given id",
            error:error
        })
    }
 }
