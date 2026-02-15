import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { parse } from 'yaml';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import chalk from 'chalk';

export class Validator {
  constructor() {
    this.ajv = new Ajv({ allErrors: true });
    addFormats(this.ajv);
    this.errors = [];
    this.warnings = [];
  }

  /**
   * Validate the .humanet folder structure and content
   */
  async validate(humanetPath, verbose = false) {
    this.errors = [];
    this.warnings = [];

    console.log(chalk.bold('\n🔍 Validating .humanet folder...\n'));

    // Check required files exist
    this.checkRequiredFiles(humanetPath);

    // Validate config.yml
    if (existsSync(join(humanetPath, 'config.yml'))) {
      this.validateConfig(humanetPath, verbose);
    }

    // Check for placeholder text
    this.checkPlaceholders(humanetPath);

    // Display results
    this.displayResults(verbose);

    return this.errors.length === 0;
  }

  /**
   * Check if required files exist
   */
  checkRequiredFiles(humanetPath) {
    const requiredFiles = [
      'config.yml',
      'problem_statement.md',
      'idea.md',
      'scope.md'
    ];

    requiredFiles.forEach(file => {
      const filePath = join(humanetPath, file);
      if (existsSync(filePath)) {
        console.log(chalk.green('✓'), `${file} exists`);
        
        // Check if file is not empty
        const content = readFileSync(filePath, 'utf8').trim();
        if (content.length < 50) {
          this.warnings.push(`${file} seems too short (less than 50 characters)`);
        }
      } else {
        this.errors.push(`Required file missing: ${file}`);
        console.log(chalk.red('✗'), `${file} missing`);
      }
    });
  }

  /**
   * Validate config.yml against schema
   */
  validateConfig(humanetPath, verbose) {
    try {
      // Read and parse config.yml
      const configPath = join(humanetPath, 'config.yml');
      const configContent = readFileSync(configPath, 'utf8');
      const config = parse(configContent);

      console.log(chalk.green('✓'), 'config.yml is valid YAML');

      // Load schema
      const schemaPath = join(humanetPath, 'config.schema.json');
      if (!existsSync(schemaPath)) {
        this.warnings.push('config.schema.json not found, skipping schema validation');
        return;
      }

      const schema = JSON.parse(readFileSync(schemaPath, 'utf8'));
      const validate = this.ajv.compile(schema);
      const valid = validate(config);

      if (valid) {
        console.log(chalk.green('✓'), 'config.yml matches schema');
      } else {
        console.log(chalk.red('✗'), 'config.yml schema validation failed');
        validate.errors.forEach(error => {
          const errorMsg = `${error.instancePath} ${error.message}`;
          this.errors.push(errorMsg);
          if (verbose) {
            console.log(chalk.red('  →'), errorMsg);
          }
        });
      }

      // Additional semantic checks
      this.checkConfigContent(config);

    } catch (error) {
      this.errors.push(`Failed to parse config.yml: ${error.message}`);
      console.log(chalk.red('✗'), `config.yml parsing error: ${error.message}`);
    }
  }

  /**
   * Check config content for issues
   */
  checkConfigContent(config) {
    if (!config.humanet) {
      this.errors.push('config.yml missing "humanet" root key');
      return;
    }

    const h = config.humanet;

    // Check for empty required fields
    if (!h.name || h.name.trim() === '') {
      this.errors.push('config.yml: name is empty');
    }

    if (!h.maintainers || h.maintainers.length === 0) {
      this.errors.push('config.yml: no maintainers defined');
    }

    if (!h.domains || h.domains.length === 0) {
      this.errors.push('config.yml: no domains selected');
    }
  }

  /**
   * Check for placeholder text in markdown files
   */
  checkPlaceholders(humanetPath) {
    const filesToCheck = [
      'problem_statement.md',
      'idea.md',
      'scope.md',
      'README.md'
    ];

    const placeholderPatterns = [
      /\[Your/i,
      /\[Write/i,
      /\[Provide/i,
      /\[Describe/i,
      /\[Define/i,
      /\[Explain/i,
      /TODO/i,
      /FIXME/i,
      /\{\{[A-Z_]+\}\}/  // Template variables like {{NAME}}
    ];

    filesToCheck.forEach(file => {
      const filePath = join(humanetPath, file);
      if (existsSync(filePath)) {
        const content = readFileSync(filePath, 'utf8');
        
        placeholderPatterns.forEach(pattern => {
          if (pattern.test(content)) {
            this.warnings.push(`${file} contains placeholder text`);
          }
        });
      }
    });
  }

  /**
   * Display validation results
   */
  displayResults() {
    console.log();

    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log(chalk.green.bold('✅ Validation passed!'));
      console.log(chalk.gray('\nYour .humanet folder is ready to be committed.\n'));
      return;
    }

    if (this.errors.length > 0) {
      console.log(chalk.red.bold(`❌ ${this.errors.length} error(s) found:\n`));
      this.errors.forEach((error, i) => {
        console.log(chalk.red(`  ${i + 1}. ${error}`));
      });
      console.log();
    }

    if (this.warnings.length > 0) {
      console.log(chalk.yellow.bold(`⚠️  ${this.warnings.length} warning(s):\n`));
      this.warnings.forEach((warning, i) => {
        console.log(chalk.yellow(`  ${i + 1}. ${warning}`));
      });
      console.log();
    }

    if (this.errors.length > 0) {
      console.log(chalk.red('Please fix the errors above before proceeding.\n'));
    } else {
      console.log(chalk.yellow('Consider addressing the warnings for better quality.\n'));
    }
  }
}

export default Validator;
