# 🛒 E-Commerce — Backend

> **อัปเดตล่าสุด:** 28 เมษายน 2026  
> **Author:** [ddshop97026564@gmail.com](mailto:ddshop97026564@gmail.com) | [Katdev55](https://github.com/KatDev55)  
> **ช่วงเวลาแก้ไขงาน:** 1:14 PM

---

<!-- > ⚠️ **หมายเหตุสำหรับทีม:** Right Now I have Rename from **Server to Backend**
--- -->

## Update Feature :

**What Was Added:** 
+ **Refactor(auth):** add async for catch error
+ **Refactor(category):** manage formet category new Structure
+ **feat(auth):** add CurrentUser for check User Login
+ **feat(Router):** New file category and add new path current-user and current-admin but both used same element
+ **feat(Contorller):** add new flie category for element related

---
**Related files:** 
+ `/Controllers/auth.js`
+ `/Router/auth.js`
+ `/Router/auth.js`



### Refactor: (`/Controllers/auth.js`):
```js
// Register
exports.register = async(req, res) => {
    
    try{
        res.send("Register endpoint Controller");

    }catch(err){
        console.log(err);
        res.status(500).json({message: "Server Error"});
    }


};

// Login
exports.login = async(req, res) => {
    try{
        res.send("Login endpoint Controller");
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Server Error"});
    }
};

//current User
exports.currentUser = async(req, res) => {
    try{
        res.send("Current User endpoint Controller");
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Server Error"});
    }
};

```

###  Refactor: (`/Router/auth.js`):
```js
const { register , login , currentUser} = require('../Controllers/auth');

// Check-User
router.post('/current-user',currentUser);
router.post('/current-admin',currentUser);


```

### Style: (`/Router/category.js`):
```js
// @ENDPOINT http://localhost:8080/api/category
router.get('/category', )
router.post('/category', )
router.delete('/category/:id', )
```

---
