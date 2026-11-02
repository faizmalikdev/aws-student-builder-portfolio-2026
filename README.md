# Faiz Malik — Developer Portfolio

Personal portfolio for the **AWS Student Builder Challenge 2026**. Plain HTML, CSS and JavaScript: no build step, no backend, no paid APIs.

**Live URL:** _add after Amplify deployment_
**Repository:** _add your GitHub repo link_

## Features
- Sections: Hero, About, Tech Superpowers, Experience, Projects, Education and Coursework, Contact, Footer
- **FAIZ.DEV — Developer Superpower Terminal**: `help`, `about`, `skills`, `projects`, `experience`, `education`, `contact`, `clear`, with Enter, ↑/↓ history, Tab autocomplete, clickable quick buttons and screen-reader friendly output
- Mobile-first responsive layout, keyboard accessible, reduced-motion support, SEO and Open Graph metadata, SVG favicon

## Project structure
```
index.html      page markup and SEO metadata
styles.css      design system and responsive layout
script.js       navigation, reveal animations, terminal
assets/         favicon.svg
amplify.yml     AWS Amplify build settings (static, no build)
docs/           challenge submission checklist and AWS notes
```

## Run locally
Open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8080   # then visit http://localhost:8080
```

## Export the source
Download the whole `faiz-portfolio` folder (zip it if needed). Everything needed is inside it.

## Upload to GitHub
```bash
cd faiz-portfolio
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/faizmalikdev/<your-repo>.git
git push -u origin main
```
Create the empty repository on github.com first (public, no README).

## Deploy with AWS Amplify Hosting
1. Sign in to the AWS Console and open **AWS Amplify**.
2. Choose **Create new app** → **GitHub** → authorize and select your repository and the `main` branch.
3. Amplify detects `amplify.yml`. Keep the defaults (no build command, output root `/`).
4. Choose **Save and deploy**. When it finishes, copy the `https://main.xxxx.amplifyapp.com` URL.
5. Paste that URL at the top of this README and into your challenge submission.

Every `git push` to `main` redeploys automatically.

## AWS services used
| Service | Purpose |
|---|---|
| AWS Amplify Hosting | Hosts the static site, HTTPS, CI/CD from GitHub |

(Update this table if you add more services. See `docs/SUBMISSION.md`.)

## Content note
All details come from Faiz Malik's resume. AWS and DevOps are listed as learning interests only.
