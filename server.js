const express = require('express')
const app = express();




app.put("/updateUser/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedUser= {
    id: id,
    isPublic: req.body.isPublic,
    name:req.body.name,
    companies: req.body.companies,
    books: req.body.books
    };
    for (let i = 0; i < userList.length; i++) {
    if (userList[i].id === id) {
    userList[i] = updatedUser;
    return res.status(201).send({
    success: true,
    message: "user added successfully",
    updatedUser
    });
    }
    }
    return res.status(404).send({
    success: true,
    message: "error in update"
    });
    })




app.delete("delete/:id",(req,res)=>{
    const id = parseInt(req.params.id, 10);
    const updatedUser= {
    id: id,
    isPublic: req.body.isPublic,
    name:req.body.name,
    companies: req.body.companies,
    books: req.body.books
    };
    for (let i = 0; i < userList.length; i++) {
    if (userList[i].id === id) {
    userList[i].splice(i,1);
    return res.status(201).send({
    success: true,
    message: "user added successfully",
    updatedUser
    });
    }
    }
    return res.status(404).send({
    success: true,
    message: "error in update"
    });
    });





app.get('/', (req, res) => {
res.send('Welcome to learn backend with express!')
});
app.listen(8000, () => {
console.log('Example app listening on port 8000!')
});