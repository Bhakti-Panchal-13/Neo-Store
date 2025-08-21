
# StoreIt – File Storage Application  

![Next.js](https://img.shields.io/badge/Next.js-13+-000000?style=flat&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3+-38B2AC?style=flat&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green.svg)  

> **StoreIt** is a modern, responsive file storage application for managing, previewing, and searching files with ease. Built using **Next.js, TypeScript, Tailwind CSS, and Appwrite**, it delivers speed, security, and a clean user experience.  

---

## ✨ Features  

- 🔒 **Secure File Uploads** – Upload and organize documents, images, audio, and videos  
- 🔍 **Smart Search** – Real-time debounced search with result previews  
- 📱 **Responsive UI** – Works beautifully on desktop and mobile  
- 🎨 **Clean Design** – Tailwind CSS + shadcn/ui for a modern look  
- 🖼 **File Previews** – Thumbnails and timestamps at a glance  
- 🧭 **Navigation Sidebar** – Quick access to files and profile info  

---

## 📸 Screenshots  

*(Replace these with real screenshots or GIFs)*  

### Dashboard
![Home Page](./screenshots/home.png)

### File Upload
![File Upload](./screenshots/upload.png)

## 🛠 Tech Stack  

- **Framework:** [Next.js 13+](https://nextjs.org/) + TypeScript  
- **UI:** [Tailwind CSS](https://tailwindcss.com/) + shadcn/ui components  
- **Backend / Storage:** [Appwrite](https://appwrite.io/)  
- **Routing & State:** Next.js App Router + React Hooks + useDebounce  

---

## 🚀 Getting Started  

### Prerequisites  
- **Node.js v18+**  
- **npm** or **yarn**  
- **Appwrite instance** (or backend API keys)  

### Installation  

```bash
git clone https://github.com/your-username/storeit.git
cd storeit
npm install
# or
yarn install
Configure Environment
Create a .env.local file:

env
Copy
Edit
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT=your_appwrite_project_id
NEXT_PUBLIC_APPWRITE_DATABASE=your_appwrite_database_id
NEXT_PUBLIC_APPWRITE_BUCKET=your_appwrite_bucket_id
Run Dev Server
bash
Copy
Edit
npm run dev
# or
yarn dev
Then visit http://localhost:3000.

📂 Project Structure
csharp
Copy
Edit
storeit/
│
├── app/                # Next.js app router pages
├── components/         # Sidebar, Search, Thumbnail, etc.
├── constants/          # App-wide constants (nav, config)
├── lib/                # Utilities, API calls (getFiles, etc.)
├── public/             # Static assets
├── styles/             # Global styles
└── ...
🧩 Key Components
Sidebar – Navigation + user info + mobile search

Search – Debounced query, live results dropdown

Thumbnail – File preview icons based on type

FormattedDateTime – Neat timestamps on file lists

📈 Roadmap
 Add user authentication (sign-in / sign-up)

 Add drag-and-drop file uploads

 Add file sharing via public link

 Add dark mode toggle

 Search filters (by type, date, tags)

🤝 Contributing
We welcome contributions!

Fork the repo

Create your feature branch (git checkout -b feature/awesome-feature)

Commit your changes (git commit -m 'Add awesome feature')

Push to the branch (git push origin feature/awesome-feature)

Open a Pull Request

📜 License
This project is licensed under the MIT License.
See the LICENSE file for details.

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
