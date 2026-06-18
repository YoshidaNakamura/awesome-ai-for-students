# 🚀 Launch Kit — how to publish this and actually get stars

> The repo quality is done. **Stars come from distribution.** This file is your playbook. Total time: ~30–40 minutes of active work, then a few days of light engagement.

---

## Part 1 — Put it on GitHub (no coding required)

You don't have a coder's setup, so here's the simplest reliable path.

### Option A — GitHub Desktop (you already have it installed) ✅ recommended
1. Open **GitHub Desktop** → sign in to your GitHub account (you do this part — I never log in for you).
2. `File → Add Local Repository…` → choose this folder: `awesome-ai-for-students`.
   - It'll say "this isn't a git repository — create one?" → click **Create a repository** → **Create Repository**.
3. Click **Publish repository** (top bar).
   - Name: `awesome-ai-for-students`
   - **Uncheck** "Keep this code private" (it must be **public** to get stars).
   - Publish.
4. Done — your repo is live at `https://github.com/<YoshidaNakamura>/awesome-ai-for-students`.

### Option B — let me publish it for you
If you authenticate the **GitHub connector** (you log in yourself, once), I can create the repo and push all files for you. Just say the word.

---

## Part 2 — Turn on the free live website (GitHub Pages)
This gives you the visual site — the "demo" that makes people click ⭐.
1. On your repo page → **Settings → Pages**.
2. Under "Build and deployment" → Source: **Deploy from a branch**.
3. Branch: **main**, folder: **/docs** → **Save**.
4. Wait ~1 minute. Your site is live at `https://<YoshidaNakamura>.github.io/awesome-ai-for-students/`.

### Then replace 3 placeholders (so links work)
Search the repo for `YoshidaNakamura` and replace with your real GitHub username in:
- `README.md` (the "Browse it visually" line — paste your Pages URL)
- `docs/index.html` (3 spots: the two GitHub buttons + the footer link)

_(Tell me your GitHub username and I'll fix all of these in one pass.)_

---

## Part 3 — The launch (this is where stars happen)

**Timing:** Post **Tuesday–Thursday, ~8–10am US Eastern**. That's when HN/Reddit traffic peaks.
**Golden rule:** Be a student sharing something useful, not a marketer. Authenticity converts; hype gets flagged.

### 🟠 Hacker News — "Show HN"
Post at https://news.ycombinator.com/submit

**Title:**
```
Show HN: Awesome AI for Students – a free, no-affiliate list of AI tools that help you learn
```
**URL:** your GitHub repo link
**First comment (post it yourself, immediately):**
```
I'm a university student. Every "best AI tools" list I found was an affiliate-link
dump written by people who never sat an exam. So I made the opposite: tools picked
for one question — does this help a student actually learn, not just do the homework
for them? It's organized by what you're trying to get done (research papers, flashcards,
slides, etc.), free-first, privacy-aware, and has zero affiliate links. There's also a
section on using AI without cheating yourself. Feedback and additions very welcome.
```

### 🔵 Reddit
Post to (one per day, don't blast all at once):
- r/coolgithubprojects · r/InternetIsBeautiful (for the live site) · r/GetStudying · r/college · r/students · r/learnprogramming (for the coding section) · r/ArtificialIntelligence

**Title idea:**
```
I made a free, no-affiliate directory of AI tools that actually help students learn (open source)
```
**Body:**
```
I got tired of "top 50 AI tools!!" listicles full of affiliate links. As a student, I
wanted a list judged by one thing: does it help me *learn*, not just hand in work?

So I built an open-source, CC0 list organized by what you're trying to do — research
papers, flashcards & memory, math, slides, languages, accessibility, free local AI, and
free courses to learn AI itself. Free-first, privacy flagged, zero affiliate links.

There's also a short "how to use AI without cheating yourself" guide up top.

Live site (searchable): <your Pages URL>
Repo: <your GitHub link>

Would love suggestions for tools I missed.
```
> Read each subreddit's self-promo rules first; some require you to be an active member. Reply to every comment — engagement boosts ranking.

### ⚫ X / Twitter / LinkedIn
```
I built a free, open-source directory of AI tools that actually help students LEARN —
not affiliate-bait, not "do my homework" bots.

Search by what you need: papers, flashcards, slides, free local AI, and more.
Zero affiliate links. CC0.

⭐ + share if it helps a student you know: <link>
```

---

## Part 4 — Keep the flywheel turning
- **Reply to every issue/PR fast.** Responsiveness is what makes contributors come back.
- **Ship small updates** (add 2–3 tools, tweak a category) and re-share monthly. Consistency > one viral spike.
- Add a topic list on the repo (Settings → top of page → ⚙️): `awesome`, `awesome-list`, `ai`, `students`, `education`, `study-tools`. Topics drive GitHub-internal discovery.
- Submit to the master list: once it's polished and has some traction, open a PR to add it to [sindresorhus/awesome](https://github.com/sindresorhus/awesome) (follow their inclusion rules) — a huge discovery channel.

**Honest expectation:** most launches get a spike then plateau. A great repo + a good launch can realistically reach hundreds of stars; thousands needs luck + sustained sharing. The quality here is built — the rest is showing up.
