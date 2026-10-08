# Production deployment notes

## Admin panel

Build from `adminpanel/` with `npm run build`. Upload the **contents** of `adminpanel/dist/` to `public_html/admin/` so `index.html` and `assets/` are directly inside that folder. The production build uses `/admin/` as its Vite base and React Router basename. Nginx must serve `/admin/*` from this folder and fall back to `/admin/index.html`; the public site's `/index.html` must remain its own fallback. The matching location snippet is `deploy/nginx-orchidbuilders.locations.conf.example`.

The admin build reads `VITE_API_BASE_URL=https://orchidbuilders.in/api` from `.env.production`. The API host also supplies `/uploads/...` image URLs, so the backend's `/uploads` route must be reachable at `https://orchidbuilders.in/uploads/...`. For public site builds, `frontend/.env.production` points API calls at the same API. Its image URL helper now resolves uploaded images against the API host. The existing public site is not rebuilt or replaced by this task; a separate frontend build and upload is needed to apply this source fix there.

## Backend and cPanel

The repository does not include the live Nginx virtual host, so it cannot establish which site root or proxy directives are currently active. Preserve the existing TLS and public-site rules, set the document root to the directory containing the public `index.html` and `admin/`, and adapt the supplied location snippet into that existing HTTPS server block. Route `/api/*` and `/uploads/*` to the Express app on `127.0.0.1:5000` with the URI path intact. Test the Nginx configuration before reloading it. If DirectAdmin/cPanel manages Nginx, apply these locations through its supported custom include mechanism rather than editing generated configuration that the panel may overwrite.

The repository also cannot reveal whether **Setup Node.js App** / Passenger is enabled. If available, keep the app root and `.env` outside `public_html`, use `backend/server.js` as the startup file and `npm start`, and ensure it listens on port 5000 for Nginx. Do not put backend source or `node_modules` under `public_html`.

Set the variables in `backend/.env.production.example` through cPanel's environment settings or a private `.env` outside the document root. Use a separately provisioned production MySQL database and user, a unique random `JWT_SECRET` of at least 32 characters, and a persistent writable `UPLOAD_DIR` outside `public_html`. Set both CORS origins to `https://orchidbuilders.in`; the admin is on the same origin at `/admin/`. Keep the uploads directory persistent and writable by the Node process. Existing image paths are relative `/uploads/...`, served by Express.

`ADMIN_EMAIL` and `ADMIN_PASSWORD` only create an account when that email does not already exist; they do not reset an existing password. Keep the password private. Sequelize `sync()` creates missing tables but does not alter existing tables; the custom startup migration also changes existing columns and data values. Before production startup, take a database backup, review `backend/config/migrations.js` against the production schema and existing category/status values, and grant only the database permissions the app needs. No production database was accessed or changed during this workspace task.

If Node.js App / Passenger is unavailable, `public_html` cannot run this Express server. Host the backend on a Node-capable service or VPS, configure HTTPS routing for `/api` and `/uploads` on `orchidbuilders.in` to that service, and allow the domain through CORS. Keep production database credentials and JWT secrets only on that backend host.

## Deployment verification

After server configuration, check:

1. `https://orchidbuilders.in/` still serves the existing public site.
2. `https://orchidbuilders.in/admin/` and a refreshed nested admin URL load the admin app and its assets.
3. The login page loads; log in using the configured production account.
4. Dashboard, projects, ongoing projects, testimonials, gallery, and contact / consultation submissions load.
5. Create and edit a project; upload cover and gallery images; confirm previews resolve through `/uploads/`.
6. Confirm newly activated content and images appear on the public frontend.

These are post-deployment checks. No live-domain request, authenticated production operation, or server configuration change has been performed from this workspace.
