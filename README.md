# WorkNow 💼

WorkNow is a international platform for job and employee search.
It allows users to create resumes and vacancies, hired employees, and get a job in markets of different countries.

## Getting started 💻

To get started with the project, follow these steps:

1. Clone the repository using git clone.
2. Install the dependencies using npm install
3. Start the development server using npm start
4. Open the application in your web browser at http://localhost:3000.

## Features

- User registration and authentication
- Resume creation and management
- Vacancy creation and management
- Job search, filtering, view job details, add to favorites and apply directly
- Employee search, view employee resumes, add to favorites and apply directly
- Multi-language support (English, German, Russian), localization application content in different markets
- Improve application performance, user experience with Optimistic Updates and Prefetch Paginated Queries
- User profile management, include settings
- Analytics charts includes salary, gender and age schedules

## Technologies Used

- React
- TypeScript
- React-Query
- Tailwind CSS
- Supabase
- i18next
- recharts
- zod
- react-hook-form
- etc.

## Project Structure

### Modular design pattern

Each module represents a distinct page of application.
And contains index.ts file for encapsulate module details.

- #### Auth

This module handles user authentication for the application.

- Handles user login functionality
- Handles user registration, including creation of new user accounts.
- Allows users to reset their passwords
- Allows users to recover their passwords, including sending password recovery emails and updating passwords.
- Enables users to update their account information
- Handles account verification, including sending verification emails and verifying user accounts.

- #### Home

This module handles the application's home page, include:

- Search bar allows users to search for jobs fast
- Info Section that displays information about the application.
- Charts display analytics charts, including salary, gender, and age schedules.

- #### Lk

This module handles user profile information.

- User Profile Management, allows to update their personal information, change password, delete account and etc.
- User Resume/ Vacancy list, displays a list of users resumes or vacancies
- User Favorites List, displays a list of favorite resumes or vacancies saved by the user.
- User Applies List, displays a list of resumes or vacancies that the user has applied to.

- #### Resume

This module handles resume, including:

- Resume creation
- Resume listing and filtering
- Resume details and description

- #### Vacancy

This module handles job vacancy, including:

- Vacancy creation
- Job listing and filtering
- Vacancy details and description

- #### Shared

This module is essential for containing common components, services, utilities and etc. that are reused across other modules, including:

- Navigation and routing configurations
- UI components (e.g., buttons, spinners, typography)
- Form controls and validation
- Language switching and internationalization
- API hooks and data fetching utilities
- Authentication and authorization services
- Responsive design and layout utilities
