# ABC Company Website – Full Stack Project

This project is a full-stack web application built using **React (frontend)** and **Spring Boot (backend)**. It allows users to view a dynamic heading on the homepage and update it through a CMS page. The heading is stored in a **MySQL database**.

---

## 📁 Project Structure

```
abc-company-website/
├── client/                    # React Front-End
│   ├── public/
│   └── src/
│       ├── components/        # Header.js, CMSForm.js
│       ├── pages/             # HomePage.js, CMSPage.js
│       ├── App.js
│       ├── index.js
│       └── api.js
├── server/                    # Spring Boot Back-End
│   ├── src/main/java/com/abc/
│   │   ├── controller/        # HeadingController.java
│   │   ├── model/             # Heading.java
│   │   ├── repository/        # HeadingRepository.java
│   │   └── Application.java
│   ├── src/main/resources/    
│   │   └── application.properties
│   └── pom.xml
```

---

## 🛠 Tech Stack

- **Frontend:** React, Axios, Tailwind CSS, React Router
- **Backend:** Spring Boot, Spring Data JPA
- **Database:** MySQL

---

##  Running the Project

###  Step 1: MySQL Setup

- Create a database:
  ```sql
  CREATE DATABASE abcdb;
  ```

- Update your credentials in:
  ```
  server/src/main/resources/application.properties
  ```

### 🖥️ Step 2: Start Spring Boot Backend

```bash
cd server
./mvnw spring-boot:run
```

- API base URL: `http://localhost:8080/api/headings`

###  Step 3: Start React Frontend

```bash
cd client
npm install
npm start
```

- App runs at: `http://localhost:3000/`

---

##  API Endpoints

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| GET    | `/api/headings/`     | Fetch latest heading     |
| POST   | `/api/headings/`     | Save new heading         |

---

##  Pages

- `/` → Displays the latest heading
- `/cms` → Allows user to update the heading via form

---

##  Features

- Fetch and display latest heading from backend
- Simple CMS page to submit new heading
- Data stored and retrieved from MySQL
- Full stack integration with REST API
- Responsive and minimal UI using Tailwind CSS

---

## 🙋 Author

**Likhitha Rani**  
For **Brynk Labs Full Stack Assignment**
