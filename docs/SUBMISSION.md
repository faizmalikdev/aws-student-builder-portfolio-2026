# AWS Student Builder Challenge 2026 — Submission Checklist

## Requirements
- [x] About Me section (`#about`)
- [x] Tech Superpowers section (`#stack`)
- [x] Projects section (`#projects`)
- [x] Creative interactive feature: FAIZ.DEV terminal (`#terminal`)
- [x] Visible navigation and terminal hint ("Type help below")
- [ ] Push code to a public GitHub repository, then record the link: ______
- [ ] Deploy on AWS Amplify Hosting, then record the public URL: ______
- [ ] Screenshots (save in `docs/screenshots/`):
  - [ ] Desktop home page
  - [ ] Mobile view
  - [ ] Terminal running `help`
  - [ ] Amplify app overview with the "Deployed" status
  - [ ] Amplify build/deploy logs
  - [ ] Amplify hosting URL / domain settings

## AWS services documentation
- **AWS Amplify Hosting**: connected to the GitHub repo (branch `main`); serves static files over HTTPS via its CDN; auto-redeploys on each push. Build config: `amplify.yml` (no build step).
- No backend, database or paid APIs are used.

## Final test before submitting
1. Open the live URL on desktop and phone.
2. Run every terminal command plus an unknown one (e.g. `foo`).
3. Click all project, GitHub, LinkedIn and email links.
4. Open the browser console: no errors.
