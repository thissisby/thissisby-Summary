# 📱 Bhanu Yadav — Tech-Functional Portfolio

A premium, interactive React portfolio site designed with a modern, iOS-inspired dark aesthetic. Features custom 3D card tilt & grab physics and a real-time smart chatbot widget.

Live Preview: [https://thissisby.github.io/thissisby-Summary](https://thissisby.github.io/thissisby-Summary)

---

## ✨ Features

- **Interactive 3D Profile Card**: Features custom hover tilt effects and grab/drag physics.
- **Smart Chatbot Assistant**: An interactive widget designed to assist visitors with quick navigation and direct contact pathways.
- **Dynamic Role Carousel**: Swaps profile titles automatically with custom CSS keyframe transitions.
- **Clean Typography**: Uses Outfit, Inter, and SF Pro Display font sets for a sleek, system-native look.
- **Automated Deployment**: Integrated GitHub Actions CI/CD workflow to compile and deploy updates to GitHub Pages on every push.

---

## 🛠️ Built With

- **Core Framework**: React 18
- **Styling**: Vanilla CSS3 (featuring HSL variables, glassmorphism, and responsive layouts)
- **Deployment**: GitHub Actions & GitHub Pages
- **Development Tooling**: React Scripts & Webpack

---

## 📂 Project Structure

```text
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── bhanu.png           # Profile photo asset
│   └── index.html          # Main HTML entry point
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Navigation component
│   │   └── Navbar.css      # Navigation styling
│   ├── pages/
│   │   ├── Home.js         # Landing / about page
│   │   ├── Home.css        # Landing / layout styles
│   │   ├── Experience.js   # Career timeline
│   │   └── ...             # Other layout pages (Projects, Skills, etc.)
│   ├── App.js              # Application router & chatbot widget
│   ├── data.js             # Portfolio data file (edit info here!)
│   ├── index.js            # React entry mounting point
│   └── index.css           # Global colors, fonts, and animation utility classes
└── package.json            # npm configurations and scripts
```

---

## ⚙️ Local Development

Follow these steps to run the application locally:

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone https://github.com/thissisby/thissisby-Summary.git
cd thissisby-Summary

# Install npm packages
npm install
```

### 2. Run Locally
```bash
# Start the local development server
npm start
```
*Your browser will automatically open [http://localhost:3000](http://localhost:3000)*

### 3. Build for Production
```bash
# Compile optimized build files
npm run build
```
*Outputs static build folder to `/build`*

---

## 📝 Customization Guide

You can easily adapt this portfolio with your own info:
- **Profile Photo**: Replace `public/bhanu.png` with your image.
- **Content & Text**: All sections, work history, projects, and social links are managed inside [src/data.js](file:///c:/Users/Bhanu%20Yadav/OneDrive/Desktop/bhanu-portfolio/src/data.js). Simply update the fields in this file to modify the website contents.
- **Global Theme Colors**: Edit the CSS variables (`--bg-dark`, `--accent-green`, `--card-glass`, etc.) at the top of [src/index.css](file:///c:/Users/Bhanu%20Yadav/OneDrive/Desktop/bhanu-portfolio/src/index.css) to customize the color scheme.
