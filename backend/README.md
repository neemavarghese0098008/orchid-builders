# Orchid Builders backend

Requirements: Node.js 20+ and MySQL 8. Create the database in MySQL Workbench:

```sql
CREATE DATABASE orchid_builders_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Copy `.env.example` to `.env`, set local MySQL details and a random JWT secret, then run `npm install` and `npm run dev`. Sequelize synchronizes tables at startup, seeds the five editable project categories, and creates the initial admin from `ADMIN_EMAIL` and `ADMIN_PASSWORD`. Uploaded images are served from `/uploads`.

The API listens on port 5000. Public content routes are under `/api`; admin writes require `Authorization: Bearer <token>`.
