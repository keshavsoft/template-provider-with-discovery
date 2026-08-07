# template-provider 🚀

> **Automatically generate, update, and organize Express.js routing files with safe, idempotent code generation.**

[![npm version](https://img.shields.io/npm/v/template-provider.svg?style=flat-square)](https://www.npmjs.com/package/template-provider)
[![License](https://img.shields.io/npm/l/template-provider.svg?style=flat-square)](LICENSE)

---

# 📖 Overview

`template-provider` is a lightweight developer utility that automatically generates and updates Express.js routing files.

It safely inserts router imports, endpoint methods, version routes, and table routes while preventing duplicate code generation.

The project serves as one of the core building blocks of the **KeshavSoft API Generation Suite**, enabling CLI tools and VS Code extensions to scaffold Express APIs with minimal effort.

---

# ✨ Features

- ✅ Automatic Express route generation
- ✅ Safe duplicate prevention (Idempotent)
- ✅ Generates router imports automatically
- ✅ Generates GET, POST, PUT and DELETE endpoints
- ✅ Creates version routing (`/v1`, `/v2`, ...)
- ✅ Creates table routing (`/customers`, `/doctors`, ...)
- ✅ Maintains clean route formatting
- ✅ Supports multiple generator versions

---

# 📂 Project Structure

```
test/
└── v10
    ├── fromAppJs
    ├── fromEndPointsJs
    ├── fromRoutesJs
    └── fromRoutesJsEnd
```

Each folder demonstrates a different stage of Express route generation.

---

# 🚀 Generation Flow

```
Run Generator
      │
      ▼
Generate App.js
      │
      ▼
Generate Version Routes
      │
      ▼
Generate Table Routes
      │
      ▼
Generate Endpoint Methods
      │
      ▼
Ready-to-Use Express APIs
```

---

# 📄 Module Overview

## 1. App.js Generator

**Folder**

```
test/v10/fromAppJs
```

### Purpose

Automatically updates **app.js**.

### Generates

- Router imports
- app.use() registrations
- API router configuration

Example

```javascript
import { router as routerFromApi } from "./api/routes.js";

app.use("/api", routerFromApi);
```

---

## 2. Endpoint Generator

**Folder**

```
test/v10/fromEndPointsJs
```

### Purpose

Creates endpoint methods for Express routers.

### Generates

- GET
- POST
- PUT
- DELETE

Example

```javascript
router.get("/showAll", handler);

router.post("/insert", handler);
```

---

## 3. Version Route Generator

**Folder**

```
test/v10/fromRoutesJs
```

### Purpose

Creates version-based routing.

Example

```javascript
router.use("/v1", routerFromV1);
```

Generated

```
/api
   └── /v1
```

---

## 4. Table Route Generator

**Folder**

```
test/v10/fromRoutesJsEnd
```

### Purpose

Creates routes based on schema table names.

Example

```
Doctors
```

Generated

```javascript
router.use("/doctors", routerFromDoctors);
```

Result

```
/api
   └── /v1
          ├── /doctors
          ├── /patients
          └── ...
```

---

# 📦 Installation

```bash
npm install template-provider
```

---

# 🌐 Documentation

Complete documentation is available here:

**Documentation Portal**

https://keshavsoft.github.io/template-provider/

The documentation includes:

- 📄 App.js Generation
- 📄 Endpoint Generation
- 📄 Version Route Generation
- 📄 Table Route Generation
- 📄 Developer Guides
- 📄 Architecture
- 📄 Examples

---

# ❤️ Maintainer

Developed and maintained by **KeshavSoft**

GitHub:
https://github.com/keshavsoft

---

# 📄 License

MIT License