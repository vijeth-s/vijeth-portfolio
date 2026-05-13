Vijeth Portfolio

Live Demo: Vijeth Portfolio Live Demo

📥 How to Use This Project
Prerequisites
Node.js (v14 or higher) - Download Node.js
Git (optional, for cloning) - Download Git
🚀 Getting Started
Step 1: Download the Project
Option A: Clone with Git
git clone https://github.com/vijeth-s/vijeth-portfolio.git
cd vijeth-portfolio
Option B: Download ZIP
Go to GitHub Repository
Click "Code" → "Download ZIP"
Extract the ZIP file
Open terminal in the extracted folder
Step 2: Install Dependencies
npm install

This installs all required packages (React, dependencies, etc.)

Step 3: Run Locally
npm start
Open http://localhost:3000 in your browser
The page auto-reloads when you make changes
Press Ctrl + C to stop the server
Step 4: Build for Production
npm run build

Creates an optimized build folder ready for deployment.

🛠️ Customization Guide
Change Personal Information
File Location	What to Edit
src/components/Hero/Hero.jsx	Name, title, description
src/components/About/About.jsx	Bio and background
src/components/Education/Education.jsx	Education details
src/components/Skills/Skills.jsx	Technical skills
src/components/Experience/Experience.jsx	Work experience
src/components/Projects/Projects.jsx	Projects (add/remove)
src/components/Certifications/Certifications.jsx	Certifications
src/components/Contact/Contact.jsx	Email and social links
Replace Images
File	Location	What to do
Profile photo	src/assets/Vijeth_Photograph.JPG	Replace with your photo
Resume PDF	public/Vijeth_Resume.pdf	Replace with your resume
Favicon	public/icon.svg	Replace with your icon
Change Theme Colors

Edit src/styles/global.css:

:root {
  --bg: #0a0a0f;        /* Background */
  --accent: #6c63ff;    /* Primary color */
  --accent2: #ff6584;   /* Secondary color */
  --text: #f0eeff;      /* Text color */
}
🌐 How to Deploy
Deploy to GitHub Pages
1. Update package.json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
2. Install gh-pages
npm install --save-dev gh-pages
3. Deploy
npm run deploy
4. Enable GitHub Pages
Go to repository Settings → Pages
Under "Branch", select gh-pages
Click Save
5. Your site is live at
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
