# 🏺 AfterLeaks

A full-stack web application designed for fragrance enthusiasts to manage their collections, track scent profiles, monitor maturation processes, and stay updated on local market pricing. 

## ✨ Features

*   **Collection Management:** Catalog your fragrances, including notes, batch codes, and personal ratings.
*   **Maturation Tracker:** Visual timelines to track when newly delivered fragrances have properly "rested" or macerated for optimal performance.
*   **Market Insights:** Track local market prices (PHP) and availability for popular niche and designer houses (e.g., Lattafa, Jo Malone).
*   **Scent Profiling:** Search and filter fragrances by their olfactory pyramids (top, heart, and base notes).

## 🛠️ Built With

### Frontend
*   [React.js](https://reactjs.org/) - UI Framework
*   [Vite](https://vitejs.dev/) - Build Tool
*   [Tailwind CSS](https://tailwindcss.com/) - Styling

### Backend
*   [Java Spring Boot](https://spring.io/projects/spring-boot) - REST API Framework
*   [Spring Data JPA](https://spring.io/projects/spring-data-jpa) - Database access
*   [PostgreSQL (via Supabase)](https://supabase.com/) - Relational Database

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v18 or higher)
*   [Java Development Kit (JDK)](https://adoptium.net/) (v17 or higher)
*   [Maven](https://maven.apache.org/) (or Gradle, depending on your Spring setup)
*   A [Supabase](https://supabase.com/) account and project set up.

## 🚀 Getting Started

### 1. Database Setup (Supabase)
1. Create a new project in Supabase.
2. Retrieve your database connection string (JDBC URL).
3. Execute the initial SQL schemas located in `backend/src/main/resources/data.sql` to set up your tables.

### 2. Backend Setup (Spring Boot)
1. Navigate to the backend directory:
   ```bash
   cd backend
