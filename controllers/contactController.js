
const contactSchema = require('../model/contactSchema');

const getContact = (req,res)=>{
 
    res.status(200).json({
        "message":"get all contacts"
      });
    };


const postContact = async (req, res) => {   
  const { name,email,phone } = req.body;
  const contact = contactSchema.create({
            name : name,
            phone : phone,
            email:email
  });            
    res.status(200).json({
      "message": `created contact ${req.body.name}`
    });
}


const putContact = (req, res) => {
    res.status(200).json({
      "message": `updated for ${req.params.id}`
    }); 
}


const deleteContact = (req, res) => {
    res.status(200).json({
      "message": `deleted for ${req.params.id}`
    });
}
module.exports = {getContact,postContact, putContact,deleteContact};