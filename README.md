# PairCode 🚀

> A production-grade, full-stack collaborative developer platform built with the MERN stack, featuring asynchronous background processing, event-driven database synchronization, and scalable cloud architecture.


link-https://paircode-frontend.onrender.com/


## Key Features & Highlights

- **Event-Driven User Lifecycle Management**: Uses **Inngest** serverless queue handlers to process Clerk authentication webhooks asynchronously, guaranteeing zero-latency database synchronization for user creation and removal.
- **Production-Grade Security**: Configured with Strict CORS origin control, token-based authentication, protected API routes, and isolated server environment configs.
- **Resilient Express Backend**: Custom error handling, MongoDB connection caching, explicit DNS resolution routing for cloud database resilience, and ESM module setup.
- **Responsive Modern UI**: Fast SPA built with React 18, Vite, and Tailwind CSS for optimized bundle delivery and crisp UI interactions.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS / Chakra UI
- **State & Data Fetching**: TanStack Query (React Query)
- **Authentication**: Clerk React SDK

### Backend
- **Runtime**: Node.js (ESM)
- **Framework**: Express.js
- **Database**: MongoDB Atlas via Mongoose ORM
- **Background Jobs**: Inngest Serverless SDK (v3+)
- **Communication**: Stream Chat API / Nodemailer

### Infrastructure & DevOps
- **Backend Deployment**: Render Web Service
- **Frontend Deployment**: Render Static Sites
- **Version Control**: Git / GitHub Monorepo Workflow

---

## ⚙️ Environment Configuration

To run PairCode locally, set up the following environment variables:

### Backend (`/backend/.env`)

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/paircode
CLIENT_URL=http://localhost:5173

# Authentication & Webhooks
CLERK_SECRET_KEY=sk_test_...
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=signkey_prod_...

/frontend/.env


VITE_API_URL=....
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...



