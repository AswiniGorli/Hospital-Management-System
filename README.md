# Hospital Management System (Monorepo)

This repository contains both the **Angular Frontend** and **Spring Boot Backend** for the Hospital Management System combined into a single Git repository.

---

## 📁 Monorepo Project Structure

```
Hospital/
├── frontend/                     # Angular 16 Frontend Application
│   ├── src/                      # Source files
│   ├── Dockerfile                # Docker setup for Angular + Nginx
│   ├── nginx.conf                # Nginx configuration for Angular SPA
│   └── package.json
│
├── backend/                      # Spring Boot 3 Java Backend Application
│   ├── src/                      # Java source & application.properties
│   ├── Dockerfile                # Multi-stage Dockerfile for Spring Boot
│   ├── pom.xml
│   └── mvnw
│
├── docker-compose.yml            # Docker Compose configuration for MySQL + Backend + Frontend
├── .gitignore                    # Combined root Git ignore rules
└── README.md                     # Documentation
```

---

## 🚀 How to Push to GitHub (Single Repository)

Since both projects are now merged into one local Git repository, follow these steps to push to your GitHub:

1. **Create a new empty repository on GitHub** (e.g., named `Hospital-Management-System`).

2. **Commit all merged files locally**:
   ```bash
   git add .
   git commit -m "Merge frontend and backend into unified monorepo with deployment configurations"
   ```

3. **Link to your GitHub remote and push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Hospital-Management-System.git
   git branch -M main
   git push -u origin main
   ```

---

## 💻 Running Locally

### Option A: Using Docker Compose (Recommended)

Run the database, backend, and frontend together with a single command:

```bash
docker-compose up --build
```

- **Frontend**: `http://localhost:4200`
- **Backend API**: `http://localhost:8082`
- **MySQL Database**: `localhost:3306`

---

### Option B: Running Standalone

#### 1. Start MySQL Database
Ensure MySQL is running on `localhost:3306` with database `hospitalmanagementsystemspring` and user/password `root`/`root`.

#### 2. Start Backend (Spring Boot)
```bash
cd backend
./mvnw spring-boot:run
```

#### 3. Start Frontend (Angular)
```bash
cd frontend
npm install
npm start
```

---

## 🌐 Deployment Options

### Option 1: Render.com / Railway (Free / Cheap PaaS)

1. **Backend Deployment (Render / Railway)**:
   - Connect your GitHub repository.
   - Set **Root Directory** to `backend`.
   - Choose **Docker** or **Java 17 Maven**.
   - Create a MySQL Database instance on Render/Railway and pass `SPRING_DATASOURCE_URL`, `SPRING_DATASOURCE_USERNAME`, and `SPRING_DATASOURCE_PASSWORD` as Environment Variables.

2. **Frontend Deployment (Vercel / Netlify / Render)**:
   - Connect your GitHub repository.
   - Set **Root Directory** to `frontend`.
   - Build Command: `npm run build`
   - Output Directory: `dist/hms`

---

### Option 2: VPS / Cloud Server (Docker Compose)

Deploy to any Linux server (AWS EC2, DigitalOcean, Hetzner, GCP):

```bash
git clone https://github.com/YOUR_USERNAME/Hospital-Management-System.git
cd Hospital-Management-System
docker-compose up -d --build
```
