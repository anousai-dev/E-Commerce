# 🛒 E-Commerce — Backend

> **อัปเดตล่าสุด:** 28 เมษายน 2026  
> **Author:** [ddshop97026564@gmail.com](mailto:ddshop97026564@gmail.com) | [Katdev55](https://github.com/KatDev55)  
> **ช่วงเวลาแก้ไขงาน:** 2:01 PM

---

<!-- > ⚠️ **หมายเหตุสำหรับทีม:** Right Now I have Rename from **Server to Backend**
--- -->

## Update Feature :

**What Was Added:** 
+ **feat(Controller):** SetUp Create Endpoint category: **List , Create , Remove**
+ **refactor(Router):** SetUp Elements at Router Method **(GET , POST , DELETE)**

---
**Related files:** 
+ `/Controllers/category.js`
+ `/Router/category.js`




### Feature(`/Controllers/category.js`):
```js
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
```

###  Refactor(`/Router/auth.js`):
```js
const { create, list, remove } = require('../Controllers/category');


router.post('/category', create)
router.get('/category', list)
router.delete('/category/:id', remove)
```
