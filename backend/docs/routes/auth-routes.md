# Auth Routes

Source file: `backend/src/routes/auth.routes.js`

## Endpoints

Base path: `/api/auth`

| Method | API Route | Controller | Purpose |
| --- | --- | --- | --- |
| POST | `/api/auth/register` | `authController.register` | Register a new user. |
| POST | `/api/auth/login` | `authController.login` | Log in an existing user. |

## Register User

### API Route

```http
POST /api/auth/register
Content-Type: application/json
```

### Test Request Body

```json
{
  "username": "vikas",
  "email": "vikas@example.com",
  "password": "Password123"
}
```

### Required Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `username` | string | Yes | User display name. |
| `email` | string | Yes | User email address. |
| `password` | string | Yes | User password. |

### Success Response

```json
{
  "success": true,
  "message": "User registered successfully"
}
```

### Error Responses

```json
"All fields are required {username, email, password}"
```

```json
"User already exists"
```

## Login User

### API Route

```http
POST /api/auth/login
Content-Type: application/json
```

### Test Request Body

```json
{
  "email": "vikas@example.com",
  "password": "Password123"
}
```

### Required Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | string | Yes | Registered user email address. |
| `password` | string | Yes | Registered user password. |

### Success Response

```text
User logged in successfully
```

### Error Responses

```json
"All fields are required {email, password}"
```

```json
"Invalid email or password"
```

## Notes

- These routes are mounted from the auth router.
- Current mount path is defined in `backend/app.js` as `app.use("/api/auth", authRoutes)`.
- Current controller expects `username`, `email`, and `password` for registration.
- Current `User.model.js` uses `Username` and also requires `phoneNumber`, so the model and controller should be aligned before final API testing.
