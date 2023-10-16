const Chat = require('../../models/chatModel');


const removefromGroup = async(req,res) =>{
    const {groupID , userID } = req.body;

    const add = await Chat.findByIdAndUpdate(groupID,
        {
            $pull:{users : userID}
        },
        {new:true}
    ).populate('users','-AgencyPassword')
     .populate('GroupAdmin','-AgencyPassword');

     if(!add){
        res.status(400)
        console.log('Group Not Found');
     } else{
        res.json(add);
     }
};

module.exports = removefromGroup;