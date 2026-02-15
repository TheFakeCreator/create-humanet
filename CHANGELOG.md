# Changelog

All notable changes to the create-humanet CLI tool will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-16

### Added
- Initial release of create-humanet CLI
- `humanet init` command for initializing .humanet folders
  - Interactive mode with prompts
  - Non-interactive mode with CLI flags
  - Automatic date generation and calculation
  - Template customization
- `humanet validate` command for validating .humanet structure
  - Schema validation using AJV
  - Content checks
  - Placeholder detection
  - Verbose mode for detailed output
- `humanet migrate` command (placeholder for future implementation)
- Comprehensive template files for all .humanet documentation
- Complete folder structure generation
- Colored terminal output using chalk
- Loading indicators using ora
- Interactive prompts using inquirer

### Documentation
- Comprehensive README with usage examples
- MIT License
- Contributing guidelines
- All template documentation files

### Templates
- config.yml with full schema
- config.schema.json for validation
- problem_statement.md template
- idea.md template
- scope.md template
- CHANGELOG.md template
- CONTRIBUTORS.md template
- README.md template
- Subdirectory templates (diagrams, research, discussions, evaluations, templates)

## [Unreleased]

### Planned
- Full implementation of `humanet migrate` command
- Test suite
- CI/CD pipeline
- Auto-update checking
- Git integration features
- IDE extensions

---

[1.0.0]: https://github.com/humanet/cli/releases/tag/v1.0.0
