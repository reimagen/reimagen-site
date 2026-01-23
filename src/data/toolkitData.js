export const builderCategories = [
  {
    kicker: 'IDE',
    items: [
      {
        name: 'Cursor',
        description: 'Composer and Agents is worth the subscription fee if you need to ship fast.',
        link: 'https://www.cursor.com/',
      },
      {
        name: 'Antigravity',
        description:
          "Google made Cursor Agents free, but, may the odds be with you on beating that server load.",
        link: 'https://antigravity.google/',
      },
      {
        name: 'Windsurf',
        description: 'Fine as an IDE, but recently bought by Codeium.',
        link: 'https://windsurf.ai/',
      },
    ],
  },
  {
    kicker: 'CLI',
    items: [
      {
        name: 'Claude Code',
        description: 'Claude continues to deliver the strongest performance across context management, reasoning quality, and task execution. Worth the $.',
        link: 'https://www.claude.com/product/claude-code',
        note: 'Paid subscription required',
      },
      {
        name: 'Codex',
        description:
          'Codes while you sleep. Combo CLI with web version inside ChatGPT to run everything from bug work to deep reasoning tasks. Returns up to four versions, well before you wake up.',
        link: 'https://platform.openai.com/',
        note: 'Paid subscription required',
      },
      {
        name: 'Gemini CLI',
        description: 'Google\'s free tool, performance depends highly on your technical vocabulary.',
        link: 'https://ai.google.dev/gemini-api/docs/gemini-cli',
      },
    ],
  },
  {
    kicker: 'Agent Orchestration',
    items: [
      {
        name: 'Google Agent Developer Kit (ADK)',
        description:
          'Gemini-native kit with grounding, policy guardrails, and turnkey tool pipelines that plug into Google Cloud infra.',
        link: 'https://google.github.io/adk-docs/',
      },
      {
        name: 'LangChain + LangGraph',
        description: 'Non-Google alternative chaining tools and models. Consider writing your own wrapper for simpler use cases.',
        link: 'https://langchain.com/',
      },
    ],
  },
];

export const builderRunnersUp = [
  {
    name: 'VS Code + extensions',
    note: 'Oldie and goodie, but this list is meant for native agentic IDEs instead of bolt-on copilots.',
  },
  {
    name: 'CrewAI',
    note: 'Showed promise on paper, but LangChain/LangGraph gave us measurably tighter orchestration during production runs.',
  },
  {
    name: 'OpenAI Agent Builder',
    note: 'Limited utility for experienced devs, but may be useful for non-devs. Watch and wait.',
  },
  {
    name: 'ElevenLabs',
    note: 'Beautiful output but astoundingly expensive, useful for high-mileage evergreen assets but not cost efficient for chat interaction.',
  },
  {
    name: 'Gemini Live API',
    note: 'Speech is not human-passable yet, but priced acceptably.',
  }
];

export const vibeStack = [
  {
    kicker: 'Low-code Development',
    items: [
      {
        name: 'Lovable',
        description: 'Newbie-friendliest. Vibe out UIs and ship MVPs without wrestling configs. Great if you have money to spend.',
        link: 'https://lovable.dev/',
      },
      {
        name: 'v0',
        description: 'Vercel created Next.js and powers websites for Apple, Nike, OpenAI, etc. Their solution, v0, is strongest on front-end vibe coding. Limited free tier.',
        link: 'https://v0.app',
      },
      {
        name: 'Firebase Studio',
        description: 'Google\'s free tool. Vibe all the way through backend, hosting, and infrastructure; good for turning prototypes into something closer to real.',
        link: 'https://idx.google.com/',
      },
    ],
  },
  {
    kicker: 'AI Playground',
    items: [
      {
        name: 'Google AI Studio',
        description: 'Demo zone for Google products: make content, create mini-apps, etc.',
        link: 'https://aistudio.google.com/',
      },
      {
        name: 'Lobe Chat',
        description: 'Level up and try out major models all in one place. Limited free tier.',
        link: 'https://lobechat.com',
      },
    ],
  },
  {
    kicker: 'Website Design',
    items: [
      {
        name: 'Figma Make',
        description: 'Create pages in seconds, experiment with flows, then polish inside Figma proper.',
        link: 'https://www.figma.com/make/',
      },
      {
        name: 'Framer',
        description: 'Made for experienced designers with industry vocabulary to want to become 100-X with AI.',
        link: 'https://www.framer.com/',
      },
    ],
  },
];

export const explorerTips = [
  {
    title: 'Learn the basics of communicating with AI.',
    detail: 'Prompt engineering is overkill at this stage. Ask AI for help refining your prompts and set clear system instructions. Create separate threads and project spaces so context stays clean.',
  },
  {
    title: "Context matters.",
    detail: 'AI can\'t read your mind. Context engineering sounds trendy, but what really matters is sharing your goals, KPIs, target audience, and constraints upfront. Provide docs, examples, feedback, and tell AI what\'s important.',
  },
  {
    title: 'Start a new chat thread to avoid performance degradation over time.',
    detail:
      "Chats are like threaded emails: the further back you have to go and the more you have to dig through, the longer it will take. If you notice a slowdown, start a new chat.",
  },
];

export const vibeTips = [
  {
    title: 'Have a plan before you vibe.',
    detail:
      'Coding agents feel magical, but wandering without a plan can get expensive fast. First chat with AI to create a Product Requirements Document, known as a PRD, then start building. Your wallet (and your project) will thank you.',
  },
  {
    title: 'Reality check: if you can ship in minutes, it\'s probably AI slop.',
    detail: 'Every day, another flashy tool drops peddling this quick promise. Quality comes from intention, not speed. Focus on building a great product and user experience.',
  },
  {
    title: 'Vibe coding ≠ vibe deploying.',
    detail:
      'The code is just the first step. You need battle-tested infrastructure, security, and storage for products to reliably hold up in the real world.',
  },
];

export const vibeQuestions = [
  {
    title: 'What is an API key?',
    detail:
      "This is your password, a private token that authenticates you with a service. Don't dox yourself. Keep it out of repos, and don't even paste it into chats with AI.",
  },
  {
    title: 'What is .gitignore?',
    detail:
      "A Git file that tells version control which files to ignore, like .env, so your API keys don't get compromised. Keeps your repo clean and safe.",
  },
];

export const vibeCTACopy =
  "If you're feeling overwhelmed with all these tools, you're not alone (Bolt, Bubble, Base44? Those are just the B's). New products and models drop every day, and this vibe-coder starter pack barely scratches the surface. If you're wondering which tool is right for you, chances are we've already stress-tested it and can give you the TLDR. Don't waste time chasing tools.";

export const explorerCTACopy =
  "Skills first, then tools. We'll teach you AI best practices, flag industry-specialized tools, and build your AI-transformation roadmap. There are whole universes for voice, creative, motion graphics, and niche workflows we didn't cover here.";

export const explorerUseCases = [
  {
    category: 'GENERALIST',
    items: [
      {
        name: 'ChatGPT',
        description:
          'Newbie-friendly handholding for brainstorms, planning, and drafting copy. Best for creativity, but watch out for the glazing. Daily limits on free accounts.',
        link: 'https://chat.openai.com/',
      },
      {
        name: 'Gemini',
        description: "Google's AI swiss army knife assistant. Most generous free tier, but paid upgrades are needed to get the best tools especially on visual asset creation.",
        link: 'https://gemini.google.com/',
      },
    ],
  },
  {
    category: 'Create',
    items: [
      {
        name: 'Claude',
        description:
          'Pro-level performance for strategy docs and nuance-heavy writing. Need a report? Use Claude.',
        link: 'https://claude.ai/',
      },
      {
        name: 'Pomelli (Google Labs)',
        description:
          'Stunningly simple. Drop in your URL and it will create your brand DNA. Spin up social media-ready assets in seconds.',
        link: 'https://labs.google.com/pomelli/about/',
      },
      {
        name: 'Meta AI',
        description:
          'Generous free access to powerful models for creating high quality video and images. Use this as your playground.',
        link: 'https://www.meta.ai/',
      },
    ],
  },
  {
    category: 'TLDR',
    items: [
      {
        name: 'NotebookLM (Google)',
        description:
          'Your AI Trapper Keeper. Drop in your sources (websites, docs, PDFs, videos) and get instant briefs, presentations, infographics, even a podcast overview.',
        link: 'https://notebooklm.google.com/',
      },
      {
        name: 'Perplexity',
        description:
          'Deep research heavy-lifting that verifies and cites its sources. Ask for market scans, competitor comparisons, or ideal customer profiles.',
        link: 'https://www.perplexity.ai/',
      },
      {
        name: 'Gemini Live',
        description:
          "Short on tech support? Instead of digging through help manuals, share your screen, turn on the mic, and ask Gemini for help.",
        link: 'https://aistudio.google.com/live',
      },
    ],
  },
];

export const explorerQa = [
  {
    title: 'Should I start with ChatGPT or Gemini?',
    detail:
      "Either works. Gemini ties into your existing Google account with generous limits, and ChatGPT requires its own account. Pick what's easiest for you.",
  },
  {
    title: 'Do I need to pay for any of these tools?',
    detail:
      "Not immediately. Start on the free tier, and switch among different providers' tools to spread the daily usage load. Upgrade when you have a favorite.",
  },
  {
    title: 'What is hallucination?',
    detail:
      'When AI confidently gives you the wrong answer. Always sanity-check for critical tasks, you can even run the response by another model. If you spot an error, course-correct the conversation.',
  },
];
