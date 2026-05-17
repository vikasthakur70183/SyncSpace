backend/
└── src/
    ├── config/
    │   ├── db.js
    │   ├── redis.js
    │   ├── session.js
    │   └── socket.js
    │
    ├── controllers/
    │   ├── auth.controller.js
    │   ├── chat.controller.js
    │   ├── task.controller.js
    │   └── workspace.controller.js
    │
    ├── middleware/
    │   ├── auth.middleware.js
    │   ├── error.middleware.js
    │   ├── logger.middleware.js
    │   ├── rateLimiter.middleware.js
    │   └── role.middleware.js
    │
    ├── models/
    │   ├── User.model.js
    │   ├── Workspace.model.js
    │   ├── Channel.model.js
    │   ├── Message.model.js
    │   └── Task.model.js
    │
    ├── routes/
    │   ├── auth.routes.js
    │   ├── chat.routes.js
    │   ├── task.routes.js
    │   └── workspace.routes.js
    │
    ├── services/
    │   ├── auth.service.js
    │   ├── socket.service.js
    │   ├── task.service.js
    │   └── notification.service.js
    │
    ├── sockets/
    │   ├── index.js
    │   ├── chat.socket.js
    │   ├── task.socket.js
    │   ├── notification.socket.js
    │   └── presence.socket.js
    │
    ├── utils/
    │   ├── ApiError.js
    │   ├── ApiResponse.js
    │   ├── asyncHandler.js
    │   └── constants.js
    │
    ├── app.js
    └── server.js

package.json