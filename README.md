# Resource Hub

A modern, production-ready directory app for managing and discovering development resources. Built with Next.js, featuring a sleek dark mode interface, instant search/filtering, and full CRUD operations.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS with Glassmorphism effects
- **Typography**: Geist Sans
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: React useState
- **Data Persistence**: Local JSON file storage via Next.js Route Handlers

## Features

- **Instant Search & Filtering**: Client-side search across titles and descriptions with category-based filtering
- **CRUD Operations**: Complete Create, Read, Delete functionality for resources
- **Modern UI/UX**: Dark mode default with glassmorphism effects and micro-interactions
- **Responsive Design**: Optimized for desktop and mobile devices
- **Loading States**: Skeleton loaders for better user experience
- **Toast Notifications**: Success/error feedback for user actions
- **Modal Interface**: Sleek modal for adding new resources

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd resource-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
resource-hub/
├── data/
│   └── db.json              # Local data storage
├── src/
│   └── app/
│       ├── api/
│       │   └── resources/
│       │       ├── route.ts         # GET all, POST new
│       │       └── [id]/
│       │           └── route.ts     # DELETE by ID
│       ├── globals.css      # Global styles with glassmorphism
│       ├── layout.tsx       # Root layout with Geist font
│       └── page.tsx         # Main Resource Hub interface
├── package.json
└── README.md
```

## API Endpoints

- `GET /api/resources` - Retrieve all resources
- `POST /api/resources` - Create a new resource
- `DELETE /api/resources/[id]` - Delete a resource by ID

## Data Schema

Each resource contains:
- `id`: Unique identifier (auto-generated)
- `title`: Resource title
- `description`: Brief description
- `category`: Categorization (e.g., Documentation, Framework)
- `url`: External link to the resource

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your own resource directories!
