# Quick Start Guide

Get started with create-humanet in under 2 minutes!

## Installation

### Option 1: Run Without Installing (Recommended)

```bash
npx create-humanet
```

This will run the latest version without installing globally.

### Option 2: Install Globally

```bash
npm install -g create-humanet
```

Then use the `humanet` command anywhere:

```bash
humanet init
humanet validate
```

## First Steps

### 1. Initialize Your Idea

Navigate to your project directory and run:

```bash
cd my-project
npx create-humanet
```

Or if installed globally:

```bash
humanet init
```

Answer the prompts:
- **Idea name:** e.g., "AI Code Review Assistant"
- **Tagline:** e.g., "Intelligent code review powered by GPT-4"
- **Domains:** Select 2-5 relevant categories
- **GitHub username:** Your GitHub handle
- **Repository URL:** (optional) Link to your repo
- **License:** Choose a license (CC-BY-4.0 recommended)

### 2. Fill Out Your Documentation

Edit the generated files:

```bash
.humanet/
├── problem_statement.md   ← Start here
├── idea.md                ← Then this
└── scope.md               ← And finally this
```

**Tips:**
- Be specific and concrete
- Use examples and data
- Remove placeholder text
- Add diagrams if helpful

### 3. Validate Your Work

Check if everything is correct:

```bash
humanet validate
```

Fix any errors or warnings that appear.

### 4. Commit and Share

```bash
git add .humanet/
git commit -m "Add idea documentation"
git push
```

### 5. Register on Humanet

Go to [humanet.dev](https://humanet.dev) and register your idea!

## Non-Interactive Mode

Skip the prompts by providing all options:

```bash
humanet init \
  --name "My Idea" \
  --tagline "One-line description" \
  --domains ai-ml dev-tools \
  --username myusername \
  --repo https://github.com/user/repo \
  --license CC-BY-4.0
```

## Common Issues

### ".humanet folder already exists"

Run `humanet init` in interactive mode and choose to overwrite, or manually delete the folder:

```bash
rm -rf .humanet
humanet init
```

### "Command not found: humanet"

If using global install and getting this error:

```bash
npm install -g create-humanet
# Or use npx instead:
npx create-humanet
```

### Validation Errors

Read the error messages carefully. Common issues:
- Placeholder text still present (look for `[Your`, `TODO`, etc.)
- Empty required files
- Invalid YAML in config.yml
- Missing required fields in config

## Next Steps

- **Read the docs:** [docs.humanet.dev](https://docs.humanet.dev)
- **Join Discord:** [discord.gg/humanet](https://discord.gg/humanet)
- **See examples:** [github.com/humanet/template](https://github.com/humanet/template)

## Need Help?

- Open an issue: [github.com/humanet/cli/issues](https://github.com/humanet/cli/issues)
- Ask on Discord: [discord.gg/humanet](https://discord.gg/humanet)

---

**Happy building!** 🚀
