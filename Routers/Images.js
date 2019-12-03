const express =require('express');
const router = express.Router();
const path =require('path');
var multer =require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './Assets')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+"jpg")
    }
});
var upload = multer({storage: storage});
router.post('/upload',upload.single('image'),(req,res)=>{
    if(req.file)
    {
      res.json({msg:"sucesss"});
    }
  })

  router.get('/show',(req,res)=>{
    var filePath = path.join(__dirname,"../Assets/shakti.jpg");
    res.sendFile(filePath);
  })
module.exports=router;