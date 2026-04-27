# 🛒 E-Commerce — Frontend

> **อัปเดตล่าสุด:** 27 เมษายน 2026  
> **เจ้าของ:** [anousai.dev@gmail.com](mailto:anousai.dev@gmail.com) | [github.com/anousai-dev](https://github.com/anousai-dev)  
> **ช่วงเวลาทำงาน:** 10:20 AM – 1:50 PM

---

## 📋 ภาพรวม (Overview)

โปรเจกต์นี้คือส่วน **Frontend** ของระบบ E-Commerce สร้างด้วย **React + Vite** และใช้ **Tailwind CSS v4** สำหรับ styling  
ในการอัปเดตครั้งนี้เป็นการวาง **โครงสร้างพื้นฐาน (Initial Setup)** ของ Frontend ทั้งหมด ได้แก่ การจัดโฟลเดอร์, ระบบ Routing, Layout สำหรับแต่ละ Role และ Page Component เบื้องต้น

---

## 🛠️ Tech Stack

| เครื่องมือ | เวอร์ชัน | หน้าที่ |
|---|---|---|
| [React](https://react.dev/) | ^19.2.5 | UI Library หลักของโปรเจกต์ |
| [Vite](https://vite.dev/) | ^8.0.10 | Build Tool & Dev Server ทำให้ Start/Build เร็วมาก |
| [React Router DOM](https://reactrouter.com/) | ^7.14.2 | จัดการ Client-side Routing (เปลี่ยนหน้าโดยไม่ Reload) |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.2.4 | Utility-first CSS Framework สำหรับ Styling |
| [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite) | ^4.2.4 | Plugin เชื่อม Tailwind v4 เข้ากับ Vite โดยตรง (ไม่ต้องใช้ PostCSS) |
| [ESLint](https://eslint.org/) | ^10.2.1 | ตรวจสอบคุณภาพและมาตรฐานของโค้ดในทีม |

---

## 📁 โครงสร้างโฟลเดอร์ (Folder Structure)

```
Frontend/
├── public/                  # Static assets (favicon, รูปภาพ public)
├── src/
│   ├── assets/              # รูปภาพ, ไอคอน, ไฟล์ static ที่ใช้ภายใน Component
│   ├── Components/
│   │   └── Layout/          # Layout Components สำหรับแต่ละ Role
│   │       ├── Layoutmain.jsx   → Layout สำหรับผู้ใช้ทั่วไป (/)
│   │       ├── LayoutAdmin.jsx  → Layout สำหรับ Admin (/admin)
│   │       └── LayoutUser.jsx   → Layout สำหรับ User ที่ Login แล้ว (/user)
│   ├── pages/               # Page Components แต่ละหน้าของเว็บ
│   │   ├── Home.jsx             → หน้าแรก (/)
│   │   ├── Shop.jsx             → หน้าร้านค้า (/shop)
│   │   ├── Cart.jsx             → หน้าตะกร้าสินค้า (/cart)
│   │   ├── Checkout.jsx         → หน้าชำระเงิน (/checkout)
│   │   ├── History.jsx          → หน้าประวัติคำสั่งซื้อ (/history)
│   │   ├── auth/
│   │   │   ├── Login.jsx        → หน้า Login (/login)
│   │   │   └── Register.jsx     → หน้าสมัครสมาชิก (/register)
│   │   ├── user/
│   │   │   └── HomeUser.jsx     → หน้าหลักของ User ที่ Login (/user)
│   │   └── admin/
│   │       ├── Dashboard.jsx    → หน้า Dashboard Admin (/admin)
│   │       ├── Category.jsx     → จัดการหมวดหมู่สินค้า (/admin/category)
│   │       ├── Product.jsx      → จัดการสินค้า (/admin/product)
│   │       └── Manage.jsx       → จัดการระบบ (/admin/manage)
│   ├── Routes/
│   │   └── AppRoutes.jsx    # ไฟล์รวม Route ทั้งหมดของระบบ
│   ├── App.jsx              # Root Component — เรียก AppRoutes
│   ├── main.jsx             # Entry Point — Mount React เข้า #root ใน index.html
│   └── index.css            # Global CSS (Import Tailwind หรือ Base Style)
├── index.html               # HTML Template หลักของ Vite
├── vite.config.js           # Config ของ Vite (Plugin React + Tailwind)
├── eslint.config.js         # Config ของ ESLint
├── package.json             # Dependencies และ Scripts
└── .gitignore               # ไฟล์/โฟลเดอร์ที่ไม่ต้อง Commit (node_modules, dist ฯลฯ)
``` 

---

## 🔄 Flow การทำงาน (How It Works)

```
index.html  →  main.jsx  →  App.jsx  →  AppRoutes.jsx
                                              │
                    ┌─────────────────────────┼──────────────────────┐
                    ▼                         ▼                      ▼
             Layoutmain (/)           LayoutAdmin (/admin)    LayoutUser (/user)
                    │                         │                      │
          ┌─────────┴──────┐       ┌──────────┴──────┐          HomeUser
          ▼                ▼       ▼                  ▼
        Home, Shop,      Login,  Dashboard,       Category,
        Cart, Checkout  Register  Product, Manage
        History
```

1. **`index.html`** — HTML shell ที่ Vite ใช้ มี `<div id="root">` เป็นจุดเริ่มต้น
2. **`main.jsx`** — สั่ง `createRoot` mount React App เข้า `#root`
3. **`App.jsx`** — Root Component ที่เรียก `<AppRoutes />` เพื่อเริ่ม Routing
4. **`AppRoutes.jsx`** — กำหนด Route ทั้งหมดของระบบด้วย `createBrowserRouter`
5. **Layout Components** — แต่ละ Route Group ใช้ Layout ของตัวเองเพื่อควบคุม Navbar/Sidebar/Footer
6. **Page Components** — เนื้อหาของแต่ละหน้า ถูก Render ใน `<Outlet />` ของ Layout

---

## 📦 สิ่งที่เพิ่มใน Update นี้ (What Was Added)

### 1. 🏗️ Project Setup (Vite + React + Tailwind CSS v4)

**ทำอะไร:** ตั้งค่าโปรเจกต์ใหม่ด้วย Vite และเพิ่ม Tailwind CSS v4

**ไฟล์ที่เกี่ยวข้อง:** `vite.config.js`, `package.json`

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**เหตุผล:**
- **Vite** เร็วกว่า Create React App มาก ทั้ง Cold Start และ HMR (Hot Module Replacement)
- **Tailwind CSS v4** ใช้ผ่าน Vite Plugin โดยตรง ไม่ต้องตั้งค่า PostCSS แยก ทำให้ Setup ง่ายขึ้น
- **`@vitejs/plugin-react`** ทำให้รองรับ JSX, Fast Refresh, และ React DevTools

---

### 2. 🗺️ Routing System — `AppRoutes.jsx`

**ทำอะไร:** สร้างระบบ Routing กลางไว้ใน `src/Routes/AppRoutes.jsx` โดยใช้ `createBrowserRouter` จาก React Router DOM v7

**เหตุผล:**  
- แยก Routing Logic ออกจาก `App.jsx` เพื่อให้โค้ดสะอาดและดูแลง่าย
- ใช้ **Nested Routes** (Route ซ้อนกัน) เพื่อให้แต่ละ Route Group (`/`, `/admin`, `/user`) มี Layout ของตัวเอง
- ถ้าต้องการเพิ่มหน้าใหม่ แค่เพิ่มใน `AppRoutes.jsx` ที่เดียว ไม่ต้องแก้ไฟล์อื่น

**Route ที่มีอยู่:**

| Path | Component | Layout |
|---|---|---|
| `/` | `Home` | `Layoutmain` |
| `/shop` | `Shop` | `Layoutmain` |
| `/cart` | `Cart` | `Layoutmain` |
| `/checkout` | `Checkout` | `Layoutmain` |
| `/history` | `History` | `Layoutmain` |
| `/login` | `Login` | `Layoutmain` |
| `/register` | `Register` | `Layoutmain` |
| `/admin` | `Dashboard` | `LayoutAdmin` |
| `/admin/category` | `Category` | `LayoutAdmin` |
| `/admin/product` | `Product` | `LayoutAdmin` |
| `/admin/manage` | `Manage` | `LayoutAdmin` |
| `/user` | `HomeUser` | `LayoutUser` |

---

### 3. 🎨 Layout Components — `src/Components/Layout/`

**ทำอะไร:** สร้าง Layout Component แยกตาม Role ของผู้ใช้ 3 ตัว

**เหตุผล:**  
แต่ละ Role มี UI ที่ต่างกัน เช่น:
- ผู้ใช้ทั่วไป (`/`) → มี **Navbar** + **Footer** แบบ Public
- Admin (`/admin`) → มี **Sidebar** สำหรับจัดการระบบ ไม่มี Footer ทั่วไป
- User ที่ Login แล้ว (`/user`) → อาจมี **Navbar** พิเศษที่แสดงข้อมูล Account

การใช้ Layout แยกกันทำให้:
- **ไม่ซ้ำโค้ด** — Navbar/Footer ของแต่ละ Layout เขียนครั้งเดียว ทุก Page ในกลุ่มนั้นได้ใช้
- **เปลี่ยนง่าย** — แก้ Layout Admin ที่เดียว ทุกหน้า Admin เปลี่ยนพร้อมกัน
- **`<Outlet />`** — ตำแหน่งที่ Child Route (Page Component) จะถูก Render เข้ามา

```
Layoutmain.jsx  →  ใช้กับ path "/"         (หน้าทั่วไป: Home, Shop, Cart ฯลฯ)
LayoutAdmin.jsx →  ใช้กับ path "/admin"     (หน้า Admin เท่านั้น)
LayoutUser.jsx  →  ใช้กับ path "/user"      (หน้า User ที่ Login แล้ว)
```

> ⚠️ **หมายเหตุสำหรับทีม:** ตอนนี้ Layout ทั้ง 3 ตัวยังเป็น Placeholder แสดงแค่ชื่อ Layout  
> ขั้นต่อไปต้องใส่ Navbar, Sidebar, Footer จริงเข้าไปในแต่ละ Layout

---

### 4. 📄 Page Components — `src/pages/`

**ทำอะไร:** สร้าง Page Component ทั้งหมด 12 หน้า แบ่งเป็น 3 กลุ่ม

**เหตุผล:**  
แยกแต่ละหน้าเป็นไฟล์ของตัวเองเพื่อให้:
- แต่ละคนในทีมสามารถทำงานบนหน้าที่ตัวเองรับผิดชอบโดยไม่ชนกัน (Git Conflict น้อยลง)
- ง่ายต่อการค้นหาและแก้ไขหน้าเฉพาะ

| กลุ่ม | ไฟล์ | สถานะ |
|---|---|---|
| **Public** | `Home.jsx`, `Shop.jsx`, `Cart.jsx`, `Checkout.jsx`, `History.jsx` | 🔧 Placeholder |
| **Auth** | `auth/Login.jsx`, `auth/Register.jsx` | 🔧 Placeholder |
| **User** | `user/HomeUser.jsx` | 🔧 Placeholder |
| **Admin** | `admin/Dashboard.jsx`, `admin/Category.jsx`, `admin/Product.jsx`, `admin/Manage.jsx` | 🔧 Placeholder |

> 🔧 **Placeholder** = Component ถูกสร้างแล้ว แต่ยังไม่มี UI จริง รอใส่ Content ในขั้นต่อไป

---

### 5. 🧹 ESLint Setup — `eslint.config.js`

**ทำอะไร:** ตั้งค่า ESLint ด้วย Flat Config format (ESLint v9+) พร้อม Plugin สำหรับ React

**Plugin ที่ใช้:**
- **`eslint-plugin-react-hooks`** — ตรวจสอบว่าใช้ React Hooks ถูกกฎ (Rules of Hooks)
- **`eslint-plugin-react-refresh`** — ตรวจสอบว่า Component Export ถูกต้องสำหรับ Fast Refresh ของ Vite

**เหตุผล:**  
ในการทำงานเป็นทีม ESLint ช่วยให้โค้ดทุกคนมีมาตรฐานเดียวกัน และช่วยจับ Bug ง่ายๆ ก่อน Runtime

---

## 🚀 คำสั่งสำหรับรันโปรเจกต์ (Getting Started)

```bash
# 1. เข้าโฟลเดอร์ Frontend
cd Frontend

# 2. ติดตั้ง Dependencies
npm install

# 3. รัน Development Server
npm run dev

# 4. Build สำหรับ Production
npm run build

# 5. ตรวจสอบโค้ดด้วย ESLint
npm run lint
```

Dev Server จะรันที่ **http://localhost:5173** โดย default

---

## 🔮 ขั้นต่อไป (Next Steps)

- [ ] เพิ่ม Navbar จริงใน `Layoutmain.jsx`
- [ ] เพิ่ม Sidebar จริงใน `LayoutAdmin.jsx`
- [ ] เพิ่ม Navbar (User Mode) ใน `LayoutUser.jsx`
- [ ] สร้าง UI สำหรับหน้า `Home`, `Shop`, `Cart`, `Checkout`
- [ ] สร้าง UI สำหรับหน้า `Login` และ `Register`
- [ ] สร้าง UI สำหรับหน้า Admin (Dashboard, Category, Product, Manage)
- [ ] เชื่อมต่อ API กับ Backend
- [ ] เพิ่ม Route Guard / Protected Routes สำหรับ Admin และ User



### ตัวอย่างสำหรับงานครั้งนี้
**Subject:** `feat: setup initial project structure and routing`
**Body:**
- วางโครงสร้างโฟลเดอร์ src (Components, Pages, Routes)
- ติดตั้งและตั้งค่า Tailwind CSS v4
- ติดตั้ง React Router DOM สำหรับจัดการเส้นทาง
- สร้างระบบ Routing และ Layout สำหรับ Main/Admin/User
- **เหตุผล:** เพื่อเป็นฐานสำหรับการพัฒนา Component อื่นๆ ในทีม