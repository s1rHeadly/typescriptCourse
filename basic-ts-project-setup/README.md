# Basic TypeScript Project Setup

## 📁 Project Structure


basic-ts-project-setup/
├── css/
│ └── styles.css # CSS styles for the HTML interface
├── js/
│ └── main.js # Main JavaScript file
├── js-modules/
│ └── stringUtils.js # String utility functions
├── typescript/
│ └── main.ts # TypeScript source files
├── dist/
│ └── main.js # Compiled TypeScript output
├── index.html # Main HTML file
├── tsconfig.json # TypeScript configuration
└── README.md # This file



## 🎯 How It Works

1. **Write TypeScript** in the `typescript/` folder
2. **Compile with `tsc`** to generate JavaScript in `dist/`
3. **HTML imports** the compiled JavaScript from `dist/main.js`
4. **JavaScript utilities** stay in `js/` and `js-modules/` folders