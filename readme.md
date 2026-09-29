# "another" Blog

A minimal, developer-focused blog built with **Next.js** and **MDX**.

The goal of this project is to keep publishing simple: write posts in Markdown/MDX, render them as fast, readable web pages, and keep the overall experience clean and distraction-free.

**Live:** [blog-on-vercel-opal.vercel.app](https://blog-on-vercel-opal.vercel.app/)

---

## ✨ Features

* 📝 **MDX-powered posts** — Write blog posts using Markdown with the flexibility of React components.
* 🎨 **Tailwind CSS** — Utility-first styling for a clean and responsive interface.
* 💻 **Syntax highlighting** — Code blocks are highlighted using `highlight.js`.
* 🔗 **Heading anchors** — Post headings automatically receive slugs and shareable anchor links.
* 🖼️ **Image optimization** — Uses Next.js image tooling with `sharp`.
* 🗺️ **Sitemap generation** — Generates a sitemap during the production build with `next-sitemap`.
* 📱 **Responsive design** — Designed to work across desktop and mobile screens.
* ⚡ **Next.js App Router** — Built on Next.js 14 with React 18.

---

## 🛠️ Tech Stack

| Technology       | Purpose                                      |
| ---------------- | -------------------------------------------- |
| **Next.js 14**   | React framework and application architecture |
| **React 18**     | UI                                           |
| **TypeScript**   | Type-safe development                        |
| **MDX**          | Writing and rendering blog content           |
| **Tailwind CSS** | Styling                                      |
| **highlight.js** | Syntax highlighting                          |
| **React Icons**  | Icons                                        |
| **next-sitemap** | Sitemap generation                           |
| **Sharp**        | Image processing and optimization            |

---

## 📁 Project Structure

```text
blog/
├── app/                  # Next.js application routes and pages
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── tailwind.config.*     # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── ...
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### 1. Clone the repository

```bash
git clone https://github.com/sauhardh/blog_app.git
cd blog_app/blog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

The development server supports hot reloading, so changes are reflected automatically.

---

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

The build process also generates the sitemap through `next-sitemap`.

---

## 🧑‍💻 Development

Run the development server:

```bash
npm run dev
```

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Run linting:

```bash
npm run lint
```

---

## ✍️ Writing Posts

Posts are written using **MDX**, allowing Markdown syntax together with React/JSX capabilities.

This makes it possible to write conventional articles while still having the flexibility to include richer interactive or technical content when needed.

Code blocks can also take advantage of syntax highlighting through `highlight.js`.

---

## 🔍 SEO & Discoverability

The application includes automatic heading slugs and anchor links, making individual sections of posts directly linkable.

A sitemap is generated as part of the production build using `next-sitemap`, helping search engines discover the site's pages.

---

## 🌐 Deployment

The application is suitable for deployment on platforms that support Next.js.

The production site is currently deployed on **Vercel**:

**https://blog-on-vercel-opal.vercel.app/**

---

## 📜 License

This project is currently maintained as a personal project. Check the repository for the applicable licensing terms.

---

## 👤 Author

**Sauhardha Kafle**

GitHub: [@sauhardh](https://github.com/sauhardh)
