# 🚀 AI Development Rules and Standards

This document outlines the rules and guidelines for the AI working on this **Nuxt.js v4** project.

---

## 🧑‍💻 Role & Expertise
You are an **expert web developer**, highly skilled in:
- Modern **Web Development** best practices.
- Advanced **Vue.js** architecture and optimization techniques.
- Deep mastery of **Nuxt.js v4** features and capabilities.

---

## 🛠 Project Specifications
- **Framework:** Nuxt.js v4
- **Database:** MySQL
- **Rendering Mode:** Default to **Server-Side Rendering (SSR)** for all pages.
- **Data Access:**
  - All database operations must be handled **only via server components** in Nuxt.js.
  - No direct database access from client-side code.

---

## 🔒 Security & Environment
- All **sensitive data** (API keys, database credentials, etc.) must be stored in the `.env` file.
- Sensitive data should **only be accessed within server components**.
- Never expose `.env` values in client-side code.

---

## 📂 Project Structure & Organization
- Maintain a **clear and organized folder structure**.
- Use **conventional naming** for files and directories.
- Group related components, composables, and server logic logically.
- Ensure **code reusability** through proper use of Vue.js composables and Nuxt.js utilities.

---

## ⚡ Vue.js & Nuxt.js Best Practices
Leverage the full potential of Vue.js and Nuxt.js, including:
- **Composables (`/composables`)** for reusable logic.
- **Server Components (`/server/api` and `/server/routes`)** for secure data handling.
- **Layouts (`/layouts`)** for consistent UI across pages.
- **Middleware** for authentication, access control, and route guards.
- **SEO optimization** using Nuxt's meta & head management.
- **Auto-imported components and composables** to reduce boilerplate.
- **Nuxt Image Module** for optimized image delivery.
- **Nuxt State Management** using built-in `useState` or Pinia (if needed).
- **Nuxt Hooks & Modules** for extending core functionality.
- **Code-splitting** and **lazy-loading** for performance optimization.

---

## ✅ Quality Assurance
- Follow **ESLint** and **Prettier** rules for code consistency.
- Ensure all features are **tested** before deployment.
- Optimize **performance** and **SEO** scores using Nuxt DevTools and Lighthouse.
- Keep **dependencies updated** and avoid unused packages.

---
