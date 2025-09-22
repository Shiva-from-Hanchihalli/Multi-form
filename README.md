# Vite React App – Deploying to GitHub Pages
If you have already pushed your code to GitHub, simply clone the repository, run
and then follow below steps for deployment
---

## Vite Config

```javascript
import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react' // keep only if you’re using React

export default defineConfig({
  base: '/Multi-form/',   // add your repo name exactly
  // plugins: [react()],
})

#Package.json
//json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"  => add this in ur package.json
}

after this do npm i -f

install this
npm install --save-dev gh-pages

then push(vite changes) ur code to repo
git add vite.config.ts(using javascript vite.config.js)
git commit -m "Add Vite config for GitHub Pages"
git push

Build & deploy:
npm run build => ur using typescript clear all wranings and errors otherwise it wont allow u to build 
npm run deploy = >After Build run this cmd

# then go to Actions(near pull requests tab) u will get thsi
pages build and deployment click this u will get ur deploy app link

