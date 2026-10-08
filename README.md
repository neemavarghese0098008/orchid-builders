# Orchid Builders

The workspace contains three apps: `frontend/` (public React/Vite site), `backend/` (Express, Sequelize and MySQL API), and `adminpanel/` (React admin dashboard).

## Requirements

Node.js 20+ and MySQL 8. In Workbench run `CREATE DATABASE orchid_builders_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`. Copy `backend/.env.example` to `backend/.env` and configure local credentials, a strong JWT secret, and admin login.

## Install and run

Run `npm install` from each of `frontend`, `backend`, and `adminpanel`. Start each app in its folder using `npm run dev`. The public frontend uses port 3000, the API port 5000, and admin port 3001. Build the frontend and admin with `npm run build` in their respective folders. Backend routes are under `/api`; uploads are served under `/uploads`.

The backend synchronizes Sequelize tables and seeds project categories at startup. All database content is initially empty except those categories and the environment configured admin account.
