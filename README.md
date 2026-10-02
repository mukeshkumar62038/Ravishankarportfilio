# RaviShankar | JEE Advanced Aspirant & Future IIT Engineer Portfolio

A premium, modern portfolio web application crafted with **React 19**, **Vite**, and **Vanilla CSS**. Designed with a dark neumorphic/glassmorphic aesthetic, electric crimson glowing accents (`#ff014f`), real-time **HTML5 Canvas Physics Simulations**, interactive **JEE Formula Banks**, and full **Vercel Deployment readiness**.

---

## 🌟 Key Features

1. **Exact Reference Design & Dark Aesthetic**:
   - Signature red glowing **"R"** badge logo and **`RAVISHANKAR.`** brand styling.
   - Neumorphic dark cards with subtle borders and glowing red hover states.
   - Typewriter text effect cycling through JEE & Tech roles.
   - User portraits seamlessly integrated with radial crimson aura and soft bottom gradient fades.
   - Interactive photo switcher (Switch between Formal Suit and Casual portrait).

2. **Tailored for JEE Aspirant & IIT Engineering Role**:
   - **Academic Rigor**: Covers Advanced Mathematics (Calculus, Conics, 3D Vectors), Physics (Rotational Dynamics, Electromagnetism, Wave Optics), and Chemistry (Organic Mechanisms, Physical Kinetics).
   - **Computer Science & Technology**: C++ & STL, Python Scientific Computing, Data Structures & Algorithms, React, and Computational Physics.
   - **Interactive Physics Projectile Motion Simulator**: Real-time canvas simulation calculating $H_{max}$, Range ($R$), and Time of Flight ($T$) under variable gravity and launch angles.
   - **JEE Formula Quick-Bank**: Core exam formulas with one-click copy and exam trap notes.
   - **The Daily 14-Hour Discipline**: Structured timetable showing dedication, mock analysis, and coding hours.
   - **The IIT Roadmap**: Chronological timeline from Class 10th distinction to JEE Advanced D-Day (Target AIR < 500) and premier IIT B.Tech.

3. **Interactive Contact & Connect**:
   - Working contact form with validation, celebratory confetti animation, and direct WhatsApp pre-filled messaging.
   - "HIRE ME ↗" / Connect popup modal.

---

## 🚀 How to Run Locally

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deploy to Vercel (Step-by-Step)

This project is already pre-configured for Vercel with `vercel.json` and standard Vite build scripts!

### Method 1: Using Vercel CLI (Fastest)
1. Install Vercel CLI globally (if needed):
   ```bash
   npm install -g vercel
   ```
2. In the project folder, run:
   ```bash
   vercel
   ```
3. Follow the quick prompts in your terminal. For production, run:
   ```bash
   vercel --prod
   ```

### Method 2: Via GitHub & Vercel Dashboard (Recommended)
1. Push this folder to a new repository on your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of RaviShankar JEE Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and select your GitHub repository.
4. Vercel will automatically detect **Vite** as the framework:
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**! Your site will be live on a fast `.vercel.app` URL in less than 1 minute.
