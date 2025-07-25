🔐 React Password Manager
A stylish and secure Password Manager built with React, allowing users to store, view, edit, delete, and copy passwords locally using localStorage. Featuring 3D effects, animated gradients, and toast notifications for better UX.

🚀 Features
🔒 Add & manage passwords (Site, Username, Password)

👁️ Toggle password visibility

📋 Copy any field (site, username, password)

🗑️ Edit/Delete saved entries

💾 Persistent data via localStorage

🎨 Beautiful glassmorphism & 3D UI using TailwindCSS

🔔 Feedback with react-toastify

📦 Technologies Used
React.js

Tailwind CSS

UUID (for unique ID generation)

React Toastify

📸 Preview
![image](https://github.com/bhautik2005/Password/blob/ac3fefb67c9def8f66364982059c0ffd8595ee00/Screenshot%202025-07-25%20130611.png)


![image](https://github.com/bhautik2005/Password/blob/9cf921765aa7a1eed6336f049f9201f90a1f7293/Screenshot%202025-07-25%20130355.png)
🛠️ Installation
bash
Copy
Edit
git clone https://github.com/your-username/react-password-manager.git
cd react-password-manager
npm install
npm start
🧠 How It Works
State is managed using React's useState and useEffect

Passwords are stored in localStorage for persistence

UI interactions are animated using Tailwind transitions and gradients

📁 Folder Structure
 
Copy
Edit
src/
├── assets/            # Icons and image files (copy, hide, view, etc.)
├── App.js             # Main wrapper (if present)
├── main.jsx           # Core logic for UI and password management
├── index.js           # App entry point
 

