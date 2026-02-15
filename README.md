# create-humanet

Official CLI tool for initializing and managing Humanet idea documentation.

## What is Humanet?

Humanet is a platform for structured idea documentation with lifecycle management, AI validation, and knowledge graphs. Learn more at [humanet.dev](https://humanet.dev).

## Installation

```bash
# Run without installing
npx create-humanet

# Or install globally
npm install -g create-humanet
```

## Usage

### Initialize new .humanet folder

```bash
# Interactive mode (recommended)
humanet init

# Non-interactive mode
humanet init --name "My Idea" \
  --tagline "A brief description" \
  --domains ai-ml dev-tools \
  --username myuser \
  --repo https://github.com/username/repo \
  --license CC-BY-4.0
```

### Validate existing .humanet folder

```bash
# Basic validation
humanet validate

# Verbose output with detailed results
humanet validate --verbose
```

### Migrate from legacy format

```bash
humanet migrate
```

## Commands

### `humanet init`

Initialize a new `.humanet` folder in your current directory with the standard structure.

**Options:**
- `-i, --interactive` - Interactive mode with prompts (default)
- `-n, --name <name>` - Idea name
- `-t, --tagline <tagline>` - One-line description
- `-d, --domains <domains...>` - Domains (space-separated)
- `-u, --username <username>` - GitHub username
- `-r, --repo <url>` - Repository URL
- `-l, --license <license>` - License (default: CC-BY-4.0)

**Example:**
```bash
humanet init --name "AI Code Review Assistant" \
  --tagline "Intelligent code review powered by GPT-4" \
  --domains ai-ml dev-tools \
  --username johndoe
```

### `humanet validate`

Validate the structure and content of your `.humanet` folder.

**Options:**
- `-v, --verbose` - Show detailed validation results

**Checks performed:**
- Required files exist (config.yml, problem_statement.md, idea.md, scope.md)
- config.yml follows the JSON schema
- YAML syntax is valid
- No placeholder text remains
- Files have minimum content

### `humanet migrate`

Migrate from legacy format to the current `.humanet` structure (future feature).

## What Gets Created

When you run `humanet init`, the following structure is created:

```
.humanet/
├── config.yml                    # Core metadata & configuration
├── README.md                     # Documentation guide
├── problem_statement.md          # Required: Problem definition
├── idea.md                       # Required: Solution description
├── scope.md                      # Required: Boundaries & success metrics
├── CHANGELOG.md                  # Idea evolution tracking
├── CONTRIBUTORS.md               # Attribution & roles
├── config.schema.json            # JSON Schema for validation
├── .gitignore                    # Ignore patterns
│
├── diagrams/                     # Visual documentation
│   ├── README.md
│   └── PLACEHOLDER.txt
│
├── research/                     # Supporting materials
│   ├── README.md
│   └── literature-review.md
│
├── discussions/                  # Decision logs & ADRs
│   ├── README.md
│   └── 001-tech-stack-selection.md
│
├── evaluations/                  # AI validation reports
│   └── README.md
│
└── templates/                    # Reusable templates
    ├── README.md
    ├── decision-record.md
    ├── meeting-notes.md
    └── research-summary.md
```

## Next Steps After Initialization

1. Edit `.humanet/problem_statement.md` - Define the problem you're solving
2. Edit `.humanet/idea.md` - Describe your solution
3. Edit `.humanet/scope.md` - Define boundaries and success metrics
4. Run `humanet validate` to check everything is correct
5. Commit and push to GitHub
6. Register your idea at [humanet.dev](https://humanet.dev)

## Available Domains

When initializing, you can choose from these domains:
- AI & Machine Learning (`ai-ml`)
- Blockchain (`blockchain`)
- Climate Tech (`climate-tech`)
- Developer Tools (`dev-tools`)
- Education (`education`)
- Finance (`finance`)
- Healthcare (`healthcare`)
- Knowledge Management (`knowledge-management`)
- Productivity (`productivity`)
- Research Tools (`research-tools`)
- Social Impact (`social-impact`)
- Web3 (`web3`)
- Other (`other`)

## License Options

- **CC-BY-4.0** - Attribution required (default)
- **CC-BY-SA-4.0** - Attribution + Share-alike
- **MIT** - Permissive
- **Unlicense** - Public domain
- **Apache-2.0** - Apache License

## Requirements

- Node.js >= 18.0.0

## Links

- **Website:** [humanet.dev](https://humanet.dev)
- **Documentation:** [docs.humanet.dev](https://docs.humanet.dev)
- **Template Repository:** [github.com/humanet/template](https://github.com/humanet/template)
- **Discord:** [discord.gg/humanet](https://discord.gg/humanet)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Humanet Team
