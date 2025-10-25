# Planet Task Management Client

A modern task management application built with React, TypeScript, and Vite.

## Technologies Used

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript ~5.9.3
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.16 with custom theme (light/dark modes)
- **State Management**: Redux Toolkit 2.9.2 with React-Redux 9.2.0
- **UI Components**: Ant Design 5.27.6 with Icons 5.6.1
- **HTTP Client**: Axios 1.12.2
- **Linting**: ESLint 9.36.0 with React hooks and refresh plugins
- **PostCSS**: 8.5.6 with Autoprefixer 10.4.21

## Packages Installed

### Dependencies
- `@ant-design/icons`: ^5.6.1
- `@reduxjs/toolkit`: ^2.9.2
- `antd`: ^5.27.6
- `axios`: ^1.12.2
- `react`: ^19.1.1
- `react-dom`: ^19.1.1
- `react-redux`: ^9.2.0

### DevDependencies
- `@eslint/js`: ^9.36.0
- `@tailwindcss/postcss`: ^4.1.16
- `@types/node`: ^24.6.0
- `@types/react`: ^19.1.16
- `@types/react-dom`: ^19.1.9
- `@vitejs/plugin-react`: ^5.0.4
- `autoprefixer`: ^10.4.21
- `dotenv`: ^16.4.5
- `eslint`: ^9.36.0
- `eslint-plugin-react-hooks`: ^5.2.0
- `eslint-plugin-react-refresh`: ^0.4.22
- `globals`: ^16.4.0
- `postcss`: ^8.5.6
- `tailwindcss`: ^4.1.16
- `typescript`: ~5.9.3
- `typescript-eslint`: ^8.45.0
- `vite`: ^7.1.7

## Setups

### Development Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://${HOST}:${PORT}` (configured in .env).

3. Build for production:
   ```bash
   npm run build
   ```

4. Lint the code:
   ```bash
   npm run lint
   ```

5. Preview the build:
   ```bash
   npm run preview
   ```

### Docker Setup
This project includes Docker configuration for containerized development.

1. Run the setup script to generate Docker files if needed:
   ```bash
   npm run setup
   ```
   Choose "dockerized" to generate `Dockerfile.dev` and `docker-compose.yml`.

2. Build and run with Docker:
   ```bash
   npm run docker:up
   ```
   The app will be accessible at `http://${HOST}:${PORT}` (configured in .env).

3. Stop the containers:
   ```bash
   npm run docker:down
   ```

### Initial Setup Script
Run the setup script to configure Vite and Docker based on your environment:
```bash
npm run setup
```
This will prompt for local or dockerized setup and generate the necessary configuration files. If files already exist, they will not be overwritten to avoid bugs.

## File Structure

```
planet-client/
├── public/                  # Static assets
├── src/                     # Source code
│   ├── assets/              # Images and styles
│   │   ├── images/
│   │   └── styles/          # CSS files (App.css, index.css)
│   ├── components/          # React components
│   │   ├── atoms/           # Basic components (e.g., ThemeToggle)
│   │   ├── molecules/       # Composite components (e.g., NavItem)
│   │   ├── organisms/       # Complex components (e.g., Navbar)
│   │   ├── pages/           # Page components (e.g., Dashboard, Profile)
│   │   └── templates/       # Template components (e.g., User.template)
│   ├── context/             # React contexts (e.g., ThemeContext)
│   ├── store/               # Redux store
│   │   ├── actions/         # Action creators (e.g., taskActions)
│   │   ├── constants/       # Enums and interfaces (e.g., task-priority, task.interface)
│   │   ├── hooks/           # Custom hooks (e.g., useTasks)
│   │   ├── services/        # API services (e.g., tasksApi)
│   │   └── slices/          # Redux slices (e.g., tasksSlice)
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── scripts/                 # Setup scripts (generated)
│   ├── generate-vite-config.js
│   ├── generate-docker-files.js
│   └── setup.js
├── .env                     # Environment variables
├── Dockerfile.dev           # Docker development file (generated)
├── docker-compose.yml       # Docker compose (generated)
├── vite.config.ts           # Vite configuration (generated)
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind configuration
└── README.md                # This file
```

## Additional Notes

- The app supports light and dark themes via Tailwind CSS.
- Redux is used for state management, with RTK Query for API interactions.
- Ant Design provides UI components for a polished interface.
- ESLint is configured for code quality with React-specific rules.
- For Docker, an external network `planet_network` is assumed; create it if necessary.
