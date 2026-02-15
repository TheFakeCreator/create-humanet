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

### 5. Share Your Idea

Commit your `.humanet` folder to your repository and share it with the community!

> **Note:** The Humanet platform website is coming soon. For now, your idea lives in your GitHub repository.

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

- **CLI Repository:** [github.com/TheFakeCreator/create-humanet](https://github.com/TheFakeCreator/create-humanet)
- **Template Guide:** [github.com/TheFakeCreator/.humanet](https://github.com/TheFakeCreator/.humanet)
- **Get Help:** [github.com/TheFakeCreator/create-humanet/issues](https://github.com/TheFakeCreator/create-humanet/issues)

> **Platform Status:** Documentation site and community channels coming soon!

## Need Help?

- Open an issue: [github.com/TheFakeCreator/create-humanet/issues](https://github.com/TheFakeCreator/create-humanet/issues)
- Start a discussion: [github.com/TheFakeCreator/create-humanet/discussions](https://github.com/TheFakeCreator/create-humanet/discussions)

---

**Happy building!** 🚀
