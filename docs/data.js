/* =========================================================================
   Awesome AI for Students — data source for the visual site.
   Single source of truth for docs/index.html. To add a tool: copy a row,
   keep it honest. tags: "free" 🆓 | "student" 🎓 | "privacy" 🔒 | "top" ⭐
   (Please mirror additions in ../README.md too.)
   ========================================================================= */
window.CATEGORIES = [
  { id: "assistants", icon: "🧠", name: "General AI assistants" },
  { id: "writing",    icon: "✍️", name: "Writing & editing" },
  { id: "research",   icon: "🔬", name: "Research & papers" },
  { id: "notes",      icon: "📒", name: "Notes & knowledge" },
  { id: "study",      icon: "🎯", name: "Studying & memory" },
  { id: "math",       icon: "🧮", name: "Math, science & data" },
  { id: "coding",     icon: "💻", name: "Coding & CS" },
  { id: "productivity",icon: "⏰", name: "Productivity & focus" },
  { id: "design",     icon: "🖼️", name: "Slides & design" },
  { id: "languages",  icon: "🗣️", name: "Languages & speaking" },
  { id: "access",     icon: "♿", name: "Accessibility" },
  { id: "career",     icon: "💼", name: "Career" },
  { id: "local",      icon: "🔒", name: "Run AI free & private" },
  { id: "learn",      icon: "📚", name: "Learn AI itself" },
  { id: "perks",      icon: "🎁", name: "Student perks" }
];

window.TOOLS = [
  // General AI assistants
  { n:"ChatGPT", u:"https://chatgpt.com", c:"assistants", t:["free","top"], d:"The default all-rounder for explanations, summaries, and brainstorming." },
  { n:"Claude", u:"https://claude.ai", c:"assistants", t:["free","top"], d:"Strong at long documents, careful reasoning, and nuanced writing feedback." },
  { n:"Google Gemini", u:"https://gemini.google.com", c:"assistants", t:["free","student"], d:"Tightly integrated with Google Docs, Gmail, and search." },
  { n:"Microsoft Copilot", u:"https://copilot.microsoft.com", c:"assistants", t:["free"], d:"Free GPT-class chat plus Office integration; cites web sources." },
  { n:"Perplexity", u:"https://www.perplexity.ai", c:"assistants", t:["free","student","top"], d:"Answer engine that cites its sources — far safer for facts than a raw chatbot." },
  { n:"Le Chat (Mistral)", u:"https://chat.mistral.ai", c:"assistants", t:["free"], d:"Fast, capable assistant with a generous free tier." },

  // Writing & editing
  { n:"Grammarly", u:"https://www.grammarly.com", c:"writing", t:["free","student","top"], d:"Grammar, clarity, and tone feedback as you type." },
  { n:"QuillBot", u:"https://quillbot.com", c:"writing", t:["free","student"], d:"Paraphraser, grammar checker, and citation generator in one." },
  { n:"LanguageTool", u:"https://languagetool.org", c:"writing", t:["free","privacy"], d:"Open-source grammar/style checker in 30+ languages; self-hostable." },
  { n:"Hemingway Editor", u:"https://hemingwayapp.com", c:"writing", t:["free"], d:"Flags dense, passive, hard-to-read sentences so you write clearer." },
  { n:"Wordtune", u:"https://www.wordtune.com", c:"writing", t:["free"], d:"Rewrites and rephrases your sentences while keeping your meaning." },

  // Research & papers
  { n:"Google NotebookLM", u:"https://notebooklm.google.com", c:"research", t:["free","top"], d:"Answers grounded only in your uploaded sources, with citations + audio overviews." },
  { n:"Elicit", u:"https://elicit.com", c:"research", t:["free","top"], d:"Search 125M+ papers, extract data into tables, run systematic-review screening." },
  { n:"Consensus", u:"https://consensus.app", c:"research", t:["free"], d:"Ask a research question; see what peer-reviewed papers actually conclude." },
  { n:"SciSpace", u:"https://scispace.com", c:"research", t:["free"], d:"Literature search, 'explain this paper' reader, and reference library in one." },
  { n:"Semantic Scholar", u:"https://www.semanticscholar.org", c:"research", t:["free","privacy"], d:"Free academic search with AI TLDR summaries and citation graphs." },
  { n:"Connected Papers", u:"https://www.connectedpapers.com", c:"research", t:["free"], d:"Visual graph of how papers relate — perfect for mapping a new field." },
  { n:"Zotero", u:"https://www.zotero.org", c:"research", t:["free","privacy","top"], d:"The gold-standard free reference manager; AI plugins available." },

  // Notes & knowledge
  { n:"Obsidian", u:"https://obsidian.md", c:"notes", t:["free","privacy","top"], d:"Local-first Markdown notes with backlinks and an AI plugin ecosystem." },
  { n:"Notion", u:"https://www.notion.so", c:"notes", t:["free","student"], d:"All-in-one docs/databases with built-in AI for summaries and Q&A." },
  { n:"Otter.ai", u:"https://otter.ai", c:"notes", t:["free","student"], d:"Records and transcribes lectures in real time, then summarizes them." },

  // Studying & memory
  { n:"Anki", u:"https://apps.ankiweb.net", c:"study", t:["free","privacy","top"], d:"The legendary free, open-source spaced-repetition flashcard system." },
  { n:"Quizlet", u:"https://quizlet.com", c:"study", t:["free","student"], d:"Flashcards, practice tests, and an AI tutor (Q-Chat)." },
  { n:"RemNote", u:"https://www.remnote.com", c:"study", t:["free"], d:"Note-taking with spaced repetition built in — notes become flashcards." },
  { n:"Khanmigo", u:"https://www.khanmigo.ai", c:"study", t:["student","top"], d:"Khan Academy's AI tutor that guides you to the answer, not past it." },
  { n:"Khan Academy", u:"https://www.khanacademy.org", c:"study", t:["free"], d:"Free world-class courses across math, science, and the humanities." },

  // Math, science & data
  { n:"Wolfram Alpha", u:"https://www.wolframalpha.com", c:"math", t:["free","student","top"], d:"Computational engine for math/physics/chem with step-by-step solutions." },
  { n:"Photomath", u:"https://photomath.com", c:"math", t:["free"], d:"Snap a photo of a math problem; get worked, step-by-step solutions." },
  { n:"Symbolab", u:"https://www.symbolab.com", c:"math", t:["free"], d:"Step-by-step solver for algebra, calculus, and more." },
  { n:"Julius AI", u:"https://julius.ai", c:"math", t:["free"], d:"Chat with your data: upload CSV/Excel/SPSS, get analysis and charts, no code." },
  { n:"Desmos", u:"https://www.desmos.com", c:"math", t:["free","privacy"], d:"Free graphing/scientific calculators that make functions intuitive." },

  // Coding & CS
  { n:"GitHub Copilot", u:"https://github.com/features/copilot", c:"coding", t:["free","student","top"], d:"AI pair-programmer in your editor; free for verified students." },
  { n:"Cursor", u:"https://cursor.com", c:"coding", t:["free"], d:"AI-native code editor; great 'explain this codebase' learn-by-building flow." },
  { n:"Replit", u:"https://replit.com", c:"coding", t:["free","student"], d:"Code in the browser with an AI assistant — zero setup, great for beginners." },
  { n:"Phind", u:"https://www.phind.com", c:"coding", t:["free"], d:"Search engine for developers that answers with sources and code." },
  { n:"Exercism", u:"https://exercism.org", c:"coding", t:["free","privacy"], d:"Free coding practice in 70+ languages with human mentorship." },

  // Productivity & focus
  { n:"Goblin Tools", u:"https://goblin.tools", c:"productivity", t:["free","top"], d:"'Magic To-Do' breaks an overwhelming task into tiny steps; built for ADHD." },
  { n:"Reclaim", u:"https://reclaim.ai", c:"productivity", t:["free"], d:"Auto-schedules study blocks and habits around your calendar." },
  { n:"Motion", u:"https://www.usemotion.com", c:"productivity", t:["student"], d:"AI day-planner that rebuilds your schedule when life happens." },

  // Slides & design
  { n:"Gamma", u:"https://gamma.app", c:"design", t:["free","top"], d:"Type a topic; get an editable, good-looking deck or one-pager." },
  { n:"Canva", u:"https://www.canva.com", c:"design", t:["free","student","top"], d:"Posters, slides, infographics with Magic Design; free for students." },
  { n:"Beautiful.ai", u:"https://www.beautiful.ai", c:"design", t:["student"], d:"Slides that auto-format as you add content." },

  // Languages & speaking
  { n:"Duolingo", u:"https://www.duolingo.com", c:"languages", t:["free"], d:"Gamified language learning; AI roleplay and explanations in Max." },
  { n:"ELSA Speak", u:"https://elsaspeak.com", c:"languages", t:["free","student"], d:"AI pronunciation coach that scores your accent and corrects you." },

  // Accessibility
  { n:"Speechify", u:"https://speechify.com", c:"access", t:["free","student"], d:"Turns readings, PDFs, and notes into natural speech — great for dyslexia." },
  { n:"Microsoft Immersive Reader", u:"https://www.microsoft.com/en-us/education/products/immersive-reader", c:"access", t:["free","privacy"], d:"Read-aloud, spacing, and translation built into Edge and Office." },

  // Career
  { n:"Teal", u:"https://www.tealhq.com", c:"career", t:["free"], d:"Resume builder + job tracker with AI tailoring to each role." },
  { n:"Rezi", u:"https://www.rezi.ai", c:"career", t:["free"], d:"ATS-optimized AI resume builder." },
  { n:"Google Interview Warmup", u:"https://grow.google/certificates/interview-warmup/", c:"career", t:["free","privacy"], d:"Free, no-login interview practice with AI feedback." },

  // Local / private AI
  { n:"Ollama", u:"https://ollama.com", c:"local", t:["free","privacy","top"], d:"The simplest way to run open models (Llama, Mistral, Phi, Gemma) locally." },
  { n:"LM Studio", u:"https://lmstudio.ai", c:"local", t:["free","privacy"], d:"Friendly desktop app to download and chat with local models." },
  { n:"Jan", u:"https://jan.ai", c:"local", t:["free","privacy"], d:"Open-source, offline ChatGPT alternative." },
  { n:"GPT4All", u:"https://www.nomic.ai/gpt4all", c:"local", t:["free","privacy"], d:"Run private chatbots on everyday hardware." },
  { n:"Hugging Face", u:"https://huggingface.co", c:"local", t:["free"], d:"The home of open models, datasets, and free learning resources." },

  // Learn AI itself
  { n:"Elements of AI", u:"https://www.elementsofai.com", c:"learn", t:["free","top"], d:"Free, no-code intro to AI for absolute beginners (university-backed)." },
  { n:"DeepLearning.AI Short Courses", u:"https://www.deeplearning.ai/short-courses/", c:"learn", t:["free","top"], d:"Bite-sized, free, hands-on courses on LLMs, RAG, and agents." },
  { n:"Hugging Face Learn", u:"https://huggingface.co/learn", c:"learn", t:["free"], d:"Free courses on LLMs, NLP, and AI agents." },
  { n:"fast.ai", u:"https://www.fast.ai", c:"learn", t:["free"], d:"'Practical Deep Learning' — famously beginner-friendly and free." },
  { n:"Google AI Essentials", u:"https://grow.google/ai-essentials/", c:"learn", t:["free","student"], d:"Practical everyday-AI skills from Google." },

  // Student perks
  { n:"GitHub Student Developer Pack", u:"https://education.github.com/pack", c:"perks", t:["student","top"], d:"Free GitHub Copilot plus dozens of premium dev tools." },
  { n:"Notion for Education", u:"https://www.notion.so/product/notion-for-education", c:"perks", t:["student"], d:"Free Plus plan with AI for students and educators." },
  { n:"Canva for Education", u:"https://www.canva.com/education/", c:"perks", t:["student"], d:"Full Canva Pro features, free for students and teachers." },
  { n:"Microsoft 365 Education", u:"https://www.microsoft.com/en-us/education/products/office", c:"perks", t:["student"], d:"Free Office + Copilot features through many institutions." },
  { n:"Google for Education", u:"https://edu.google.com", c:"perks", t:["student"], d:"Workspace, Gemini, and NotebookLM access through your school." }
];
