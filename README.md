# 🚀 AI-Assisted Code Migration Tool

An AI-powered developer tool that converts **legacy JavaScript code** into **modern ES6+ JavaScript or TypeScript** with strict typing, side-by-side diff comparison, export support, and migration history.

This project demonstrates **full-stack system design**, **AI integration**, and **developer-centric UX**.

---

## ✨ Features

* 🧠 **AI-powered code migration**

  * Legacy JavaScript → ES6+ or TypeScript
  * Strict typing and modern syntax
* 🧑‍💻 **Monaco Editor**

  * VS Code–like editing experience
* 🔍 **Side-by-side diff viewer**

  * Compare original vs migrated code
* 💾 **Session history**

  * Stores past migrations using MongoDB
* 📤 **Export & copy**

  * Download migrated code as `.js` or `.ts`
* ⚠️ **Graceful error handling**

  * Clear UI feedback for failures

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Monaco Editor (`@monaco-editor/react`)
* react-diff-viewer
* Axios

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* Gemini API (Google Generative AI)

---

## 🧩 System Architecture

```
Frontend (React)
│
├── Monaco Editor (input)
├── Diff Viewer (comparison)
├── Export / History UI
│
Backend (Node + Express)
│
├── Prompt Builder
├── Gemini AI Integration
├── Migration API
│
Database (MongoDB)
│
└── Migration Sessions
```

---

## 📂 Project Structure

```
ai-code-migration-tool/
│
├── client/        # React frontend
│
├── server/        # Node + Express backend
│
├── samples/       # Example legacy & migrated code
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/ai-code-migration-tool.git
cd ai-code-migration-tool
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install --legacy-peer-deps
npm start
```

Frontend runs on:

```
http://localhost:3000
```

Backend runs on:

```
http://localhost:5000
```

---

## 🔁 How It Works

1. Paste legacy JavaScript code into the editor
2. Select target format (ES6+ / TypeScript)
3. Click **Migrate**
4. Review AI-generated changes in diff viewer
5. Download or copy migrated code
6. Revisit previous migrations via history panel

---

## 🧠 AI Prompt Strategy

The AI prompt is carefully designed to:

* Preserve business logic
* Avoid hallucinations
* Enforce modern syntax
* Generate strict, compilable TypeScript
* Output **code only** (no explanations)

Prompt logic is modular and reusable.

---

## 📸 Sample Migration

**Legacy JavaScript**

```js
var sum = function(a, b) {
  return a + b;
};
```

**Migrated TypeScript**

```ts
export const sum = (a: number, b: number): number => {
  return a + b;
};
```

---

## 🎥 Demo

A demo video showcasing:

* Code migration
* Diff comparison
* Export
* Session history

📎 *(Add demo recording link here)*

---

## 🚀 Future Enhancements

* AST-based validation
* Multi-file migration
* Zip export
* Authentication
* Prompt versioning

---

## 🧑‍💻 Author

**Yogesh Saini**

* Competitive Programmer (CF Specialist, LeetCode Knight)
* Full-Stack & Backend-focused Developer
* Interested in scalable systems and AI-powered developer tools
