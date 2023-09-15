# Geaux Enroll - CSC 4243 Project

**Team Wireframe Wizards**

## Team Members

- Aaron Cheng
- Adam Schulte
- Christian Peytavin
- Peter Franz

## Getting Started

### Prerequisites

Ensure you have `npm` installed.

### Installation and Running

1. Navigate to the repository directory:

   ```
   cd path/to/repository
   ```

2. Install the required dependencies:

   ```
   npm install
   ```

3. Start the project:
   ```
   npm start
   ```

## Code Quality

ESLint rules and prettier configurations are set up for this project.

To lint the code, run:

````
 npm run lint
 ```
````

## Project Structuring Rules

### Styling

- This project utilizes CSS modules.
- When importing SCSS files, use the following format:
  ```typescript
  import styles from "./[filename].module.scss";
  ```
  This ensures modularity of classNames.

### Components

- All components (pages and sub-components) are in `src/components`.
- Component files should follow this naming convention:
  ```
  [component-name].component.tsx
  ```

### Redux

- This project leverages the Redux Toolkit.
- Global states should be separated into slices by category, if needed in the future. Refer to the codebase for usage examples.

---

Good luck with your project, Wireframe Wizards!
