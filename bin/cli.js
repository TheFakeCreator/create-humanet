#!/usr/bin/env node

import { Command } from 'commander';
import init from '../src/commands/init.js';
import validate from '../src/commands/validate.js';
import migrate from '../src/commands/migrate.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJson = JSON.parse(
  readFileSync(join(__dirname, '../package.json'), 'utf8')
);

const program = new Command();

program
  .name('humanet')
  .description('CLI tool for Humanet idea documentation')
  .version(packageJson.version);

program
  .command('init')
  .description('Initialize .humanet folder in current directory')
  .option('-i, --interactive', 'Interactive mode with prompts (default)', true)
  .option('-n, --name <name>', 'Idea name')
  .option('-t, --tagline <tagline>', 'One-line description')
  .option('-d, --domains <domains...>', 'Domains (space-separated)')
  .option('-u, --username <username>', 'GitHub username')
  .option('-r, --repo <url>', 'Repository URL')
  .option('-l, --license <license>', 'License (default: CC-BY-4.0)')
  .action(init);

program
  .command('validate')
  .description('Validate .humanet folder structure and content')
  .option('-v, --verbose', 'Show detailed validation results')
  .action(validate);

program
  .command('migrate')
  .description('Migrate from legacy format to .humanet structure')
  .action(migrate);

program.parse();
