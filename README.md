Thanks! Based on the provided dependencies, here’s an updated and more accurate version of your `README.md` file, reflecting tools like **Cloudinary**, **bcryptjs**, **cookie-parser**, and **morgan**. Let me know if you’re using anything else (like file uploads, roles, etc.).

---

````markdown
# ⚡ Realtime Chat App – Node.js Backend

This is the backend for a **Realtime Chat Application** built using **Node.js**, **Express**, and **Socket.io**. It provides real-time communication capabilities along with user authentication, media support via Cloudinary, and MongoDB for data persistence.

## 🚀 Features

- 🔐 User registration & login (JWT-based)
- 🔄 Realtime messaging using Socket.io
- 🧾 RESTful APIs for user & chat management
- ☁️ Media uploads via Cloudinary
- 🔑 Secure password handling with bcryptjs
- 🍪 Cookie-based session management
- 🌐 CORS-enabled for frontend interaction
- 📦 Environment-based configuration using dotenv
- 📘 HTTP logging with Morgan

## 🛠️ Tech Stack

- **Node.js**
- **Express.js (v5)**
- **Socket.io**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **Cloudinary** for media hosting
- **Bcryptjs** for password hashing
- **Cookie-parser**, **Morgan**, **Dotenv**

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/realtime-chat-backend.git
   cd realtime-chat-backend
   ```
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file**

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   CLIENT_URL=http://localhost:3000
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   > The app will be available at `http://localhost:5000`

---

## 🧪 API Overview

| Method | Endpoint           | Description                   |
| ------ | ------------------ | ----------------------------- |
| POST   | `/api/auth/signup` | Register a new user           |
| POST   | `/api/auth/login`  | Authenticate user credentials |
| GET    | `/api/users`       | Fetch all users               |
| POST   | `/api/chats`       | Create a new chat             |
| GET    | `/api/chats/:id`   | Get messages in a chat        |
| POST   | `/api/upload`      | Upload media via Cloudinary   |

> Real-time communication is handled via WebSocket connections (`/socket.io`).

---

## 📁 Folder Structure

```
realtime-chat-backend/
├── controllers/       # API & socket logic
├── models/            # Mongoose schemas
├── routes/            # Route handlers
├── middleware/        # Auth & error middleware
├── sockets/           # Socket.io event logic
├── lib/               # Cloudinary config, helpers
├── .env               # Environment configuration
├── server.js          # Entry point
└── package.json
```

---

## 🔐 Security Notes

- Use **HTTPS** in production
- Keep JWT secrets and database credentials secure
- Validate all inputs (server-side)

---

## 🧰 Scripts

| Script        | Description                |
| ------------- | -------------------------- |
| `npm run dev` | Start dev server (nodemon) |
| `npm start`   | Start production server    |

---

## 🙌 Contributing

Pull requests, issues, and feedback are welcome. Please follow code style and submit PRs with clear messages.

---

Built with ❤️ by \Lucian_Codes

```


```
