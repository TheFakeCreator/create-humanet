# Getting Started with create-humanet

## Quick Setup & Test

Follow these steps to set up and test the create-humanet CLI tool.

### Step 1: Install Dependencies

```powershell
# Navigate to project directory
cd d:\Sanskar\programming\projects\create-humanet

# Install all dependencies
npm install
```

This will install:
- commander (CLI framework)
- inquirer (interactive prompts)
- chalk (colored output)
- ora (loading spinners)
- fs-extra (file operations)
- yaml (YAML parsing)
- ajv (JSON schema validation)
- ajv-formats (format validation)

### Step 2: Link for Local Testing

```powershell
# Create global link
npm link
```

This makes the `humanet` command available system-wide for testing.

### Step 3: Test the CLI

#### Test 1: Interactive Init

```powershell
# Create a test directory
mkdir test-project
cd test-project

# Run init command
humanet init
```

Answer the prompts and verify `.humanet` folder is created.

#### Test 2: Non-Interactive Init

```powershell
# Create another test directory
cd ..
mkdir test-project-2
cd test-project-2

# Run with flags
humanet init --name "Test Idea" --tagline "A test idea" --domains ai-ml dev-tools --username testuser --license MIT
```

#### Test 3: Validation

```powershell
# Validate the created structure
humanet validate

# Try verbose mode
humanet validate --verbose
```

#### Test 4: Help Commands

```powershell
# View help
humanet --help
humanet init --help
humanet validate --help
```

### Step 4: Verify Structure

Check that the `.humanet` folder contains:

```
.humanet/
├── config.yml
├── problem_statement.md
├── idea.md
├── scope.md
├── CHANGELOG.md
├── CONTRIBUTORS.md
├── README.md
├── config.schema.json
├── .gitignore
├── diagrams/
├── research/
├── discussions/
├── evaluations/
└── templates/
```

### Step 5: Test Validation Errors

```powershell
# Edit config.yml and introduce an error (e.g., remove required field)
# Then run validation to see errors
humanet validate --verbose
```

### Step 6: Clean Up Test

```powershell
# Go back to main directory
cd ..

# Remove test directories
rmdir -r test-project
rmdir -r test-project-2

# Unlink if needed (optional)
npm unlink -g create-humanet
```

---

## Common Issues & Solutions

### Issue: "humanet: command not found"

**Solution:**
```powershell
# Make sure you ran npm link
cd d:\Sanskar\programming\projects\create-humanet
npm link

# Or use npx
npx . init
```

### Issue: Import Errors

**Solution:**
```powershell
# Ensure you're using Node 18+
node --version

# Reinstall dependencies
npm clean-install
```

### Issue: Permission Errors on Windows

**Solution:**
- Run PowerShell as Administrator
- Or use `npx` instead of global install

---

## Development Workflow

### Making Changes

1. **Edit files** in `src/` directory
2. **Test changes** with `humanet` command (if linked)
3. **Run linter**: `npm run lint`
4. **Format code**: `npm run format`

### Before Committing

```powershell
# Run lint
npm run lint

# Run format
npm run format

# Test all commands
humanet init --help
humanet validate --help

# Create test folder and validate
mkdir temp-test
cd temp-test
humanet init
humanet validate
cd ..
rmdir -r temp-test
```

---

## Publishing Checklist

Before publishing to npm:

- [ ] All files created and tested
- [ ] `npm install` works without errors
- [ ] `npm link` creates working global command
- [ ] All three commands work (init, validate, migrate)
- [ ] Validation catches errors correctly
- [ ] Template files customize correctly
- [ ] README.md is accurate
- [ ] package.json version is correct
- [ ] CHANGELOG.md is updated
- [ ] LICENSE file present
- [ ] .npmignore configured correctly

### Publish to npm

```powershell
# Login to npm
npm login

# Publish
npm publish
```

After publishing, test the published package:

```powershell
# In a different directory
npx create-humanet
```

---

## Testing the Package

### Full Test Script

```powershell
# 1. Install dependencies
npm install

# 2. Link globally
npm link

# 3. Create test directory
mkdir ../test-cli && cd ../test-cli

# 4. Test interactive mode
humanet init
# Answer prompts...

# 5. Verify structure
dir .humanet

# 6. Test validation
humanet validate
humanet validate --verbose

# 7. Test with errors
# Edit .humanet/config.yml and remove a required field
humanet validate

# 8. Clean up
cd ..
rmdir -r test-cli

# 9. Unlink (optional)
npm unlink -g create-humanet
```

---

## Useful Commands

```powershell
# Check Node version
node --version

# Check npm version
npm --version

# View installed global packages
npm list -g --depth=0

# Check if package is linked
npm list -g create-humanet

# View package info
npm info create-humanet

# Clear npm cache (if issues)
npm cache clean --force
```

---

## Ready to Go! 🚀

Your CLI tool is complete and ready to use. Follow the steps above to test it locally, then publish to npm when ready.

For detailed publishing instructions, see [PUBLISHING.md](PUBLISHING.md).

For quick start guide for end users, see [QUICKSTART.md](QUICKSTART.md).

---

**Happy Coding!** ✨
