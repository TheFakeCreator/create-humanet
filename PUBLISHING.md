# Publishing to NPM

This guide explains how to publish create-humanet to npm.

## Prerequisites

1. **npm Account**
   - Create an account at [npmjs.com](https://www.npmjs.com/)
   - Verify your email address

2. **Package Name**
   - Ensure `create-humanet` is available on npm
   - Check: https://www.npmjs.com/package/create-humanet

3. **npm Login**
   ```bash
   npm login
   ```

## Pre-Publication Checklist

- [ ] All tests pass
- [ ] Code is linted and formatted
- [ ] README.md is complete and accurate
- [ ] package.json version is correct
- [ ] CHANGELOG.md is updated
- [ ] All files are committed to git
- [ ] Git tag matches package version

## Publishing Steps

### 1. Update Version

Update version in `package.json`:

```bash
# For patches (1.0.0 → 1.0.1)
npm version patch

# For minor releases (1.0.0 → 1.1.0)
npm version minor

# For major releases (1.0.0 → 2.0.0)
npm version major
```

This automatically:
- Updates package.json
- Creates a git commit
- Creates a git tag

### 2. Push to GitHub

```bash
git push origin main
git push origin --tags
```

### 3. Publish to npm

```bash
npm publish
```

For first-time publication with scoped package:

```bash
npm publish --access public
```

### 4. Verify Publication

Check that the package is live:

```bash
npm info create-humanet
```

Try installing it:

```bash
npx create-humanet@latest
```

## Post-Publication

1. **GitHub Release**
   - Go to: https://github.com/TheFakeCreator/create-humanet/releases
   - Create a new release for the tag
   - Copy CHANGELOG.md content

2. **Announce**
   - Post on Discord
   - Tweet about it
   - Update documentation

3. **Monitor**
   - Watch for issues
   - Check npm download stats
   - Respond to feedback

## Automated Publishing (CI/CD)

The project includes a GitHub Actions workflow that can automatically publish to npm when you push a version tag.

### Setup

1. **Create npm Access Token**
   - Go to: https://www.npmjs.com/settings/[username]/tokens
   - Create a new "Automation" token
   - Copy the token

2. **Add Token to GitHub Secrets**
   - Go to: https://github.com/TheFakeCreator/create-humanet/settings/secrets/actions
   - Create new secret: `NPM_TOKEN`
   - Paste your npm token

3. **Push a Version Tag**
   ```bash
   npm version patch
   git push origin main --tags
   ```

The workflow will automatically:
- Run tests
- Publish to npm if tests pass

## Troubleshooting

### "Package already exists"

Make sure you've incremented the version number.

### "You do not have permission to publish"

Ensure you're logged in with the correct npm account:

```bash
npm whoami
npm logout
npm login
```

### "Package name too similar"

npm may block names similar to popular packages. Choose a different name.

## Version Strategy

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features (backward compatible)
- **PATCH** (0.0.1): Bug fixes

## Pre-release Versions

For testing:

```bash
npm version prerelease --preid=beta
npm publish --tag beta
```

Install with:

```bash
npx create-humanet@beta
```

## Unpublishing

**Warning:** Only unpublish within 72 hours of publication.

```bash
npm unpublish create-humanet@1.0.0
```

## Resources

- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)
- [npm CLI Documentation](https://docs.npmjs.com/cli)

---

**Ready to publish?** Good luck! 🚀
