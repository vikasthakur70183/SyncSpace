# Project Name
SyncSpace

# Project Overview
A cross-platform realtime collaboration platform for web and mobile.

The app combines:
- realtime team chat
- collaborative kanban task management
- workspace/team system
- realtime notifications
- online presence system

The project is intended to showcase:
- sessions
- cookies
- middleware
- websocket architecture
- realtime systems
- scalable backend structure

# Frontend Stack
- React Native
- Expo
- Expo Router
- Zustand
- Socket.IO client

The frontend must support:
- Web
- Android
- iOS

# Backend Stack
- Node.js
- Express.js
- MongoDB
- Socket.IO
- Express Session
- Connect Mongo
- Cookie Parser

Later additions:
- Redis
- Socket.IO Redis adapter

# Authentication Requirements
Use session-based authentication.

Requirements:
- express-session
- HTTP-only cookies
- secure cookies in production
- sameSite configuration
- persistent login session
- logout destroys session

Do NOT use JWT for primary auth.

# Middleware Requirements
Implement:
- auth middleware
- role middleware
- error middleware
- logger middleware
- rate limiter middleware

All errors must use centralized error handling.

# WebSocket Requirements
Use Socket.IO.

Features:
- realtime chat
- typing indicators
- online/offline users
- realtime task updates
- notifications
- workspace rooms
- channel rooms

Socket connections must authenticate using session cookies.

# Backend Folder Structure

backend/
└── src/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── services/
    ├── sockets/
    ├── utils/
    ├── app.js
    └── server.js

# Architecture Rules
- Keep controllers thin
- Business logic belongs in services
- Use asyncHandler utility
- Use modular socket handlers
- Keep reusable utilities inside utils
- Use proper separation of concerns
- Avoid large files

# Code Style Rules
- Use ES modules
- Use async/await
- Avoid callback nesting
- Use clean naming conventions
- Prefer modular reusable functions
- Write production-style code

# Initial Features (MVP)
1. Authentication
2. Workspace creation
3. Channel chat
4. Realtime messaging
5. Online presence
6. Task management
7. Notifications

# Database Models
- User
- Workspace
- Channel
- Message
- Task
- Notification

# Important Goal
This project should look like a production-grade scalable backend architecture and not a tutorial-level CRUD app.