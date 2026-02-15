# Changelog

All notable changes to the create-humanet CLI tool will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2026-02-16

### Added
- Added documentation links throughout the project pointing to https://humanet-docs.vercel.app/
- Documentation now hosted on Vercel and accessible to users

### Changed
- Updated README.md to include documentation link with emoji indicator
- Updated QUICKSTART.md to reference documentation
- Updated all template files (README.md, CONTRIBUTORS.md) with documentation links
- Updated CLI success message to display documentation link
- Updated BUILD_SUMMARY.md with documentation reference
- Removed "documentation coming soon" from Platform Status messages (docs now live)

## [1.0.1] - 2026-02-16

### Changed
- Updated all references to humanet.dev, docs.humanet.dev, and Discord to placeholder text
- Added "Coming Soon" notices for platform website and community channels
- Updated package description to clarify platform is under development
- Changed homepage URL from humanet.dev to GitHub repository
- Updated all repository URLs to TheFakeCreator/create-humanet and TheFakeCreator/.humanet

### Fixed
- Removed confusing domain references that don't exist yet
- Clarified that CLI is ready to use while platform is in development

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

[1.0.1]: https://github.com/TheFakeCreator/create-humanet/releases/tag/v1.0.1
[1.0.0]: https://github.com/TheFakeCreator/create-humanet/releases/tag/v1.0.0
