# {{NAME}}

> {{TAGLINE}}

## Overview

This `.humanet/` folder contains structured documentation for this idea, following the Humanet platform standards for idea lifecycle management, validation, and community collaboration.

## Structure

- **config.yml** - Core metadata and configuration
- **problem_statement.md** - Problem definition and context
- **idea.md** - Solution description and approach
- **scope.md** - Boundaries, success metrics, and constraints
- **CHANGELOG.md** - Idea evolution tracking
- **CONTRIBUTORS.md** - Attribution and roles

### Directories

- **diagrams/** - Visual documentation (architecture, flows, mockups)
- **research/** - Supporting materials and literature
- **discussions/** - Decision logs and ADRs
- **evaluations/** - AI validation reports (auto-generated)
- **templates/** - Reusable document templates

## Getting Started

1. **Define the Problem** - Edit `problem_statement.md`
   - What problem are you solving?
   - Who experiences this problem?
   - Why is it important?

2. **Describe Your Idea** - Edit `idea.md`
   - What is your solution?
   - How does it work?
   - What makes it unique?

3. **Set Boundaries** - Edit `scope.md`
   - What's included in this idea?
   - What's explicitly out of scope?
   - How will you measure success?

4. **Validate** - Run validation
   ```bash
   humanet validate
   ```

5. **Share** - Commit and register
   - Push to GitHub
   - Register at https://humanet.dev

## Lifecycle Status

**Current Status:** Provisional

Ideas start in "provisional" status for 30 days. During this time:
- Complete all required documentation
- Pass AI validation
- Gather initial community feedback

After validation, your idea can progress to "validated" or "active" status.

## Contributing

This idea is open to contributions! See `CONTRIBUTORS.md` for guidelines.

## License

This documentation is licensed under {{LICENSE}}.

## Resources

- **Platform:** https://humanet.dev
- **Documentation:** https://docs.humanet.dev
- **Discord:** https://discord.gg/humanet

---

*Generated with [create-humanet](https://www.npmjs.com/package/create-humanet)*
