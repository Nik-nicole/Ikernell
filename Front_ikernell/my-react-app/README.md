# Ikell Solutions Frontend

A modern, responsive React frontend for the Ikell Solutions project management system. This application provides a beautiful interface to manage projects, workers, and users with full CRUD operations.

## Features

### 🎨 Modern UI/UX
- Clean, professional design using Tailwind CSS
- Responsive layout that works on all devices
- Smooth animations and transitions
- Intuitive navigation with sidebar menu

### 📊 Dashboard
- Real-time statistics overview
- Recent projects display
- Quick action buttons
- Visual data representation

### 🚀 Core Functionality
- **Projects Management**: Create, read, update, and delete projects
- **Workers Management**: Manage team members with detailed profiles
- **Users Management**: Handle user accounts and authentication
- **Search & Filter**: Advanced search and filtering capabilities
- **Real-time Data**: Live updates from backend API

### 🔧 Technical Features
- React 18 with modern hooks
- Axios for API communication
- Heroicons for beautiful icons
- Tailwind CSS for styling
- React Router for navigation
- Form validation and error handling

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Backend API running on http://localhost:8080

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Front_ikernell/my-react-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## API Configuration

The frontend is configured to connect to the backend API at `http://localhost:8080/api`. To change this configuration, edit the `API_BASE_URL` in `src/services/api.js`.

## Project Structure

```
src/
├── components/
│   ├── Layout.jsx          # Main layout with navigation
│   ├── Dashboard.jsx       # Dashboard overview
│   ├── Projects.jsx        # Projects management
│   ├── Workers.jsx         # Workers management  
│   ├── Users.jsx           # Users management
│   └── SearchFilter.jsx    # Search and filter component
├── services/
│   └── api.js              # API service layer
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Backend Integration

This frontend is designed to work seamlessly with the Spring Boot backend. The API endpoints include:

- **Projects**: `/api/project/*`
- **Workers**: `/api/workers/*` 
- **Users**: `/api/User/*`
- **Type Workers**: `/api/type_worker/*`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is part of the Ikell Solutions ecosystem.
