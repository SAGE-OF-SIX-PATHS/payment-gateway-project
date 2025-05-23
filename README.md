<h1 align="center"> Payment Gateway Project (MERN + Stripe) </h1>

A secure payment processing system built with:
- **Frontend**: React + Vite + TypeScript
- **Backend**: Express + ts-node + TypeScript
- **Database**: MongoDB
- **Payment**: Stripe API

---
```bash
frontend URL: https://payment-gateway-project-sigma.vercel.app/
```

```bash
backend URL: https://payment-gateway-project.onrender.com
```
---

## Development Process

### Backend Setup (TypeScript)

#### 1. Initialize Project
```bash
mkdir payment-backend
cd payment-backend
npm init -y
```

#### 2. Install Core Dependencies
```bash
npm install express mongoose cors stripe jsonwebtoken bcryptjs dotenv
```

#### 3. Install TypeScript Dependencies
```bash
npm install typescript ts-node @types/node @types/express @types/cors @types/mongoose @types/jsonwebtoken @types/bcryptjs --save-dev
```

#### 4. Initialize TypeScript
```bash
npx tsc --init
```

#### 5. Project Structure
```
/src
  /config      # DB connection, env vars
  /controllers # Business logic
  /models      # MongoDB schemas
  /routes      # API endpoints
  /middlewares # Auth middleware
  /types       # Custom TypeScript types
```

---

### Frontend Setup (React + Vite)

#### 1. Create React App
```bash
npm create vite@latest payment-frontend --template react-ts
cd payment-frontend
```

#### 2. Install Dependencies
```bash
npm install axios react-router-dom @stripe/stripe-js @stripe/react-stripe-js react-hot-toast
```

#### 3. Install Dev Dependencies
```bash
npm install @types/react @types/react-dom @types/react-router-dom --save-dev
```

#### 4. Project Structure
```
/src
  /components # Reusable UI components
  /pages      # Route pages
  /context    # Global state
  /hooks      # Custom hooks
  /services   # API calls
  /types      # TypeScript types
```

---

## Key Implementation Steps

### Backend Workflow
1. Configure ts-node for development
2. Set up Express with TypeScript
3. Create MongoDB models with TypeScript interfaces
4. Implement JWT authentication
5. Set up Stripe payment routes with TypeScript types
6. Create API endpoints for:
   - User authentication
   - Product management
   - Payment processing

### Frontend Workflow
1. Configure React with TypeScript
2. Set up React Router
3. Create authentication flows
4. Implement Stripe Elements
5. Build checkout form with validation
6. Connect to backend APIs
7. Handle payment processing
8. Create order history view

---

## Environment Variables

Required for both projects (create `.env` files):

**Backend:**
- `MONGO_URI`
- `JWT_SECRET`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

**Frontend:**
- `VITE_API_BASE_URL`
- `VITE_STRIPE_PUBLISHABLE_KEY`

---

## Available Scripts

**Backend:**
- `dev`: Run with ts-node
- `build`: Compile TypeScript
- `start`: Run compiled JS

**Frontend:**
- `dev`: Start Vite dev server
- `build`: Production build
- `preview`: Locally preview production build

---

This structure keeps your README clean while providing all necessary setup information without code implementation details. Would you like me to add any additional sections?