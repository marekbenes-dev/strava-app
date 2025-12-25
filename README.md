# Strava App

A modern Angular application with dark/light mode support, built with Tailwind CSS and running in zoneless mode.

## Features

- ⚡ **Angular 21** - Latest version with standalone components
- 🎨 **Tailwind CSS** - Utility-first CSS framework for styling
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent preference
- 🚀 **Zoneless** - Uses Angular's zoneless change detection for better performance
- 📱 **Responsive Design** - Works seamlessly on all device sizes

## Screenshots

### Light Mode
![Light Mode](https://github.com/user-attachments/assets/8ad91eed-6ebf-4cd9-b277-6d60220eb274)

### Dark Mode
![Dark Mode](https://github.com/user-attachments/assets/cdbe2920-15bc-40ec-a83d-2e4db236b5fe)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/marekbenes-dev/strava-app.git
cd strava-app
```

2. Install dependencies:
```bash
npm install
```

## Development server

To start a local development server, run:

```bash
npm start
```

Or using Angular CLI:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
npm run build
```

Or using Angular CLI:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Tech Stack

- **Framework**: Angular 21
- **Styling**: Tailwind CSS v3
- **Change Detection**: Zoneless (signals-based)
- **Language**: TypeScript
- **Build Tool**: Angular CLI with esbuild

## Project Structure

```
strava-app/
├── src/
│   ├── app/
│   │   ├── app.ts              # Main app component
│   │   ├── app.html            # App template
│   │   ├── app.css             # App styles
│   │   ├── app.config.ts       # App configuration (zoneless setup)
│   │   ├── app.routes.ts       # Routing configuration
│   │   └── theme.service.ts    # Theme management service
│   ├── index.html              # Main HTML file
│   ├── main.ts                 # Bootstrap file
│   └── styles.css              # Global styles (Tailwind)
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── angular.json                # Angular CLI configuration
```

## Theme System

The app includes a complete dark/light mode implementation:

- Theme preference is saved to `localStorage`
- Respects system preference on first visit
- Smooth transitions between themes
- No flash of unstyled content on page load

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
