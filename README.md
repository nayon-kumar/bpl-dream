# 🏏Cricket Team Builder

To show the live demo <a href="https://bpl-dream-three.vercel.app/">Click Here</a>

The **Cricket Team Builder** is an interactive React application that allows users to **build their own cricket team** by selecting players within a limited budget.  
It simulates a real fantasy sports experience with **player selection, budget management, and dynamic UI updates**.

## 🛠 Technologies Used

- **React.js** – Frontend framework
- **JavaScript (ES6+)** – Logic & state handling
- **Tailwind CSS** – Styling
- **DaisyUI** – UI components
- **React Toastify** – Notifications
- **React Icons** – Icons
- **React Router DOM** – Navigation

## 🚀 Features

- View all available cricket players
- Select players to build your team
- Budget system (credits) for player selection
- Prevent selecting players when balance is low
- Prevent duplicate player selection
- Remove selected players and refund credits
- Toggle between **Available Players** and **Selected Players**
- Claim free credit (one-time only)
- Toast notifications for actions (success/error)
- Fully responsive design (mobile + desktop)
- Sticky header for better UX

## 🧠 How It Works

### 💰 Credit System

- User starts with **100 credits**
- Each player has a price
- Selecting a player deducts credits
- Removing a player refunds credits

---

### 🎁 Free Credit Feature

- User can claim **+20 credits**
- Works **only once**
- Shows toast message if already claimed

---

### 👥 Player Selection

- Click **"Choose Player"** to add player
- Button becomes **disabled after selection**
- Prevents duplicate selection

---

### ❌ Remove Player

- Click delete icon in selected list
- Player is removed
- Credits are refunded

---

### 🔄 Toggle View

- Switch between:
  - **Available Players**
  - **Selected Players**

---

### 🔔 Notifications

- Uses **React Toastify**
- Shows:
  - Success (player added/removed)
  - Error (low balance / duplicate action)
