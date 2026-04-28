# 🛒 E-Commerce — Backend

> **อัปเดตล่าสุด:** 28 เมษายน 2026  
> **Author:** [ddshop97026564@gmail.com](mailto:ddshop97026564@gmail.com) | [Katdev55](https://github.com/KatDev55)  
> **ช่วงเวลาแก้ไขงาน:** 11:19 AM

---

<!-- > ⚠️ **หมายเหตุสำหรับทีม:** Right Now I have Rename from **Server to Backend**
--- -->

## Update Feature :

**What Was Added:** Config Method Register **[GET] to [POST]** and add **feat(Login)** 

**Related files:** `/Controllers/auth.js` , `/Router/auth.js`
###  `/Controllers/auth.js`:
```js
// Login Controller
    exports.login = (req, res) => {
        res.send("Login endpoint Controller");
    };
```

###  `/Router/auth.js`:
```js
// Resgister
router.post('/register', register);

// Login
router.post('/login', login);

```


---
