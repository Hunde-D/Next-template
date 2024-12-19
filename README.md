# Next.js Starter Template

This is a customizable Next.js starter template that works seamlessly with both `npm` and `pnpm`. Choose your preferred package manager and start building your project with ease.

## Features

- ⚡️ Next.js 15 with App Router
- ⚛️ React 19
- 🧩 Shadcn/ui Components
- 🌙 Dark mode support with next-themes
- 🔧 TypeScript
- 🌈 Tailwind CSS
- 🎨 Lucide & React Icons
- 📦 Support for npm and pnpm
- 🧹 ESLint & Prettier

---

### 📝 Notes

- 📦 This template includes both `package-lock.json` and `pnpm-lock.yaml` to support flexibility in your package manager choice.
- ⚠️ **Choose only one lock file** based on your preferred package manager to avoid conflicts:
  - 🟢 If you prefer **npm**, keep `package-lock.json` and **remove** `pnpm-lock.yaml`.
  - 🔵 If you prefer **pnpm**, keep `pnpm-lock.yaml` and **remove** `package-lock.json`.
- 🚨 Keeping both lock files can lead to issues during dependency installation. Ensure only one is retained.

---

## Installation & Setup

### 1. Clone the Repository

Start by cloning this repository to your local machine:

```bash
git clone https://github.com/Hunde-D/Next-template  your-app
cd your-app
```

### 2. Install Dependencies

Choose your preferred package manager and follow the instructions below:

#### For npm Users:

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```

#### For pnpm Users:

1. **Install Dependencies**:

   ```bash
   pnpm install
   ```

2. **Run the Development Server**:
   ```bash
   pnpm dev
   ```

### 3. Start Development

Once the development server is running, open your browser and navigate to:

```
http://localhost:3000
```

This will display your Next.js app running locally.

---

## Available Scripts

The following scripts are available and work with both `npm` and `pnpm`:

- **`dev`**: Start the development server.

  ```bash
  npm run dev
  # or
  pnpm dev
  ```

- **`build`**: Build the project for production.

  ```bash
  npm run build
  # or
  pnpm build
  ```

- **`start`**: Start the production server.

  ```bash
  npm run start
  # or
  pnpm start
  ```

- **`lint`**: Run ESLint to analyze the code for issues.
  ```bash
  npm run lint
  # or
  pnpm lint
  ```

---

## Feedback & Contributions

Feel free to open an issue or submit a pull request if you find any issues or want to contribute to this template.

---

Happy coding! 🚀
