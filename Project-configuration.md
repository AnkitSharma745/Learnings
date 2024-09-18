### Creating a React App with Vite

---

#### Prerequisites

Before setting up the project, ensure the following tools are installed:

- **Node.js**: Download and install from [here](https://nodejs.org/).
- **npm**: Comes with Node.js installation.
- **Vite**: Make sure Vite is installed globally or install it within the project.

---

Follow these steps to set up a new React project using Vite:

1. **Create a Project Directory/Folder**

   - Create a new directory where you want your project to reside.

2. **Open the Folder in an Editor**

   - Open the newly created folder in your preferred code editor (e.g., VSCode).

3. **Open Terminal/Command Prompt**

   - Open a terminal or command prompt in the directory/folder. If using VSCode, you can use the integrated terminal.

4. **Run Vite Command**

   - Execute the following command to initialize a new Vite project:
     ```bash
     npm create vite@latest
     ```

5. **Select React**

   - Use the arrow keys to navigate and select `react` when prompted.

6. **Choose TypeScript/JavaScript**

   - Select `TypeScript` or `JavaScript` based on your preference.

7. **Install Dependencies**

   - Navigate to the project directory (if not already there) and install the necessary packages with:
     ```bash
     npm install
     ```

8. **Start the Development Server**

   - Run the development server using:
     ```bash
     npm run dev
     ```

9. **Open the Address Displayed**
   - Open your web browser and navigate to the address shown in the terminal (usually `http://localhost:3000` or a similar port).

---

#### Eslint Configuration -----------

1. **Initialize the Project:**

create the react app with the above instructions

2. **Install Dependencies:**

Install the necessary dependencies for ESLint, Prettier, and other plugins:

```bash
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react-hooks vite-plugin-eslint2
```

3. **Set up ESLint Configuration**
   Create an ESLint configuration file `.eslintrc.cjs` or modify the existing one as follows:

   ```javascript
   module.exports = {
     root: true,
     env: { browser: true, es2020: true },
     extends: [
       "airbnb",
       "airbnb-typescript",
       "plugin:@typescript-eslint/recommended",
       "plugin:react/recommended",
       "plugin:jsx-a11y/recommended",
       "plugin:import/errors",
       "plugin:import/warnings",
       "plugin:import/typescript",
       "airbnb/hooks",
       "plugin:prettier/recommended",
     ],
     ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
     parser: "@typescript-eslint/parser",
     parserOptions: {
       ecmaFeatures: {
         jsx: true,
       },
       ecmaVersion: "latest",
       sourceType: "module",
       project: "./tsconfig.json",
     },
     overrides: [
       {
         files: ["vite.config.ts"],
         rules: {},
       },
     ],
     plugins: [
       "react-refresh",
       "react",
       "@typescript-eslint",
       "jsx-a11y",
       "import",
       "prettier",
     ],
     rules: {
       "no-console": "off",
       "no-unused-vars": "off",
       "react-refresh/only-export-components": [
         "warn",
         { allowConstantExport: true },
       ],
       "react/react-in-jsx-scope": "off",
       "import/prefer-default-export": "off",
       "prettier/prettier": [
         "error",
         { singleQuote: true, endOfLine: "auto", parser: "flow" },
       ],
     },
     settings: {
       "import/resolver": {
         alias: {
           map: [["@", "./src"]],
           extensions: [".js", ".jsx", ".ts", ".tsx"],
         },
       },
     },
   };
   ```

   ### Explanation of Key Configurations

   - **Airbnb Style Guide**: Ensures best practices using Airbnb's rules for JavaScript/TypeScript.
   - **React & TypeScript Plugins**: Adds specific linting rules for React and TypeScript development.
   - **Prettier Integration**: Ensures code formatting rules are enforced alongside ESLint.
   - **Custom Rules**:
     - `"no-console": "off"`: Allows the use of `console.log` for debugging.
     - `"react/react-in-jsx-scope": "off"`: Disables the rule requiring React to be in scope, as it's unnecessary with newer React versions.
   - **Alias Configuration**: The alias `'@'` is mapped to `./src` to simplify import paths.

4. **Prettier Configuration**

   Create a `.prettierrc.cjs` file to define code formatting rules:

   ```javascript
   module.exports = {
     trailingComma: "es5",
     tabWidth: 2,
     semi: true,
     singleQuote: true,
   };
   ```

   ### Explanation of Key Configurations:

   - **Trailing Commas**: Adds commas wherever valid in ES5 (e.g., object and array literals).
   - **Single Quotes**: Enforces the use of single quotes for consistency.
   - **Tab Width**: Sets indentation width to 2 spaces.

5. **Vite Configuration**

   Set up Vite in `vite.config.ts` to include ESLint as a plugin:

   ```typescript
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import { resolve } from "path";
   import eslint from "vite-plugin-eslint2";

   const root = resolve(__dirname, "src");

   export default defineConfig({
     plugins: [react(), eslint({ fix: true })],
     resolve: {
       alias: {
         "@": resolve(root),
       },
     },
   });
   ```

   ### Explanation of Key Configurations:

   - **Vite Plugin React**: Integrates React with Vite for fast builds.
   - **ESLint Plugin**: Lints the code during the development process, fixing errors automatically when possible.
   - **Path Aliasing**: The alias `'@'` allows importing from `src` using `@/component` instead of relative paths.

---

## Running the Project

1. **Development Server**
   Start the development server:

   ```bash
   npm run dev
   ```

   This will launch the server, and your code will automatically be linted based on the ESLint rules defined above.

2. **Linting**
   To manually run ESLint:
   ```bash
   npm run lint
   ```

---

### Project Dependencies-------

Here is the list of packages installed:

- **@emotion/react**
- **@emotion/styled**
- **@fontsource/roboto**
- **@mui/base**
- **@mui/icons-material**
- **@mui/lab**
- **@mui/material**
- **@mui/styled-engine-sc**
- **@mui/system**
- **axios**
- **formik**
- **jason-server**
- **react**
- **react-dom**
- **react-router-dom**
- **styled-components**
- **yup**
