# Contributing to create-humanet

Thank you for your interest in contributing to create-humanet!

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheFakeCreator/create-humanet.git
   cd create-humanet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Link for local testing**
   ```bash
   npm link
   ```

4. **Test your changes**
   ```bash
   humanet init
   humanet validate
   ```

## Project Structure

```
create-humanet/
├── bin/cli.js              # CLI entry point
├── src/
│   ├── commands/           # Command implementations
│   ├── utils/              # Utility functions
│   └── templates/          # Template files
└── tests/                  # Test files
```

## Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

3. **Test your changes**
   - Test `init` command with various options
   - Test `validate` command
   - Test error handling

4. **Lint and format**
   ```bash
   npm run lint
   npm run format
   ```

5. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: your feature description"
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**

## Coding Guidelines

- Use ES6+ features
- Use async/await for asynchronous operations
- Add error handling for all operations
- Use chalk for colored output
- Keep functions focused and small
- Add JSDoc comments for functions

## Commit Message Format

Follow conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## Testing

Currently, tests are minimal. We welcome contributions to improve test coverage!

## Questions?

Feel free to open an issue or start a discussion on GitHub:
- Issues: https://github.com/TheFakeCreator/create-humanet/issues
- Discussions: https://github.com/TheFakeCreator/create-humanet/discussions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
