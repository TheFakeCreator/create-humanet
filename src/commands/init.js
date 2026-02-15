import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { initPrompts, confirmOverwrite } from '../utils/prompts.js';
import {
  humanetExists,
  getHumanetPath,
  copyTemplates,
  customizeTemplates,
  getCurrentDate,
  calculateProvisionalDeadline
} from '../utils/file-operations.js';

/**
 * Initialize .humanet folder
 */
export default async function init(options) {
  try {
    console.log(chalk.bold.cyan('\n🚀 Humanet Idea Initialization\n'));

    // Check if .humanet already exists
    if (humanetExists()) {
      if (!options.interactive) {
        console.log(chalk.red('✗ .humanet folder already exists. Use --interactive to confirm overwrite.'));
        process.exit(1);
      }

      const { overwrite } = await inquirer.prompt([confirmOverwrite]);
      if (!overwrite) {
        console.log(chalk.yellow('\nInitialization cancelled.'));
        process.exit(0);
      }
    }

    let userData;

    // Interactive mode
    if (options.interactive && !hasAllRequiredOptions(options)) {
      console.log(chalk.gray('Please answer a few questions to set up your idea:\n'));
      userData = await inquirer.prompt(initPrompts);
    } else {
      // Non-interactive mode: use CLI options
      userData = extractUserDataFromOptions(options);
      
      // Validate required fields
      const validation = validateUserData(userData);
      if (!validation.valid) {
        console.log(chalk.red('\n✗ Missing required fields:'));
        validation.errors.forEach(err => console.log(chalk.red(`  - ${err}`)));
        console.log(chalk.gray('\nUse interactive mode or provide all required options.'));
        process.exit(1);
      }
    }

    // Add dates
    const createdDate = getCurrentDate();
    userData.createdDate = createdDate;
    userData.updatedDate = createdDate;
    userData.provisionalDeadline = calculateProvisionalDeadline(createdDate);

    // Create .humanet folder
    const spinner = ora('Creating .humanet folder...').start();
    
    try {
      const humanetPath = getHumanetPath();
      
      // Copy templates
      copyTemplates(humanetPath);
      spinner.text = 'Customizing templates...';
      
      // Customize with user data
      customizeTemplates(humanetPath, userData);
      
      spinner.succeed(chalk.green('✅ .humanet folder created successfully!'));
    } catch (error) {
      spinner.fail(chalk.red('Failed to create .humanet folder'));
      throw error;
    }

    // Display success message
    displaySuccessMessage(userData);

  } catch (error) {
    console.error(chalk.red('\n❌ Error:'), error.message);
    process.exit(1);
  }
}

/**
 * Check if all required options are provided
 */
function hasAllRequiredOptions(options) {
  return options.name && 
         options.tagline && 
         options.domains && 
         options.username;
}

/**
 * Extract user data from CLI options
 */
function extractUserDataFromOptions(options) {
  return {
    name: options.name || '',
    tagline: options.tagline || '',
    domains: options.domains || [],
    username: options.username || '',
    repoUrl: options.repo || '',
    license: options.license || 'CC-BY-4.0'
  };
}

/**
 * Validate user data
 */
function validateUserData(userData) {
  const errors = [];

  if (!userData.name || userData.name.length < 3) {
    errors.push('name (min 3 characters)');
  }

  if (!userData.tagline) {
    errors.push('tagline');
  }

  if (!userData.domains || userData.domains.length < 2) {
    errors.push('domains (min 2 required)');
  }

  if (!userData.username) {
    errors.push('username');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Display success message with next steps
 */
function displaySuccessMessage(userData) {
  console.log(chalk.bold.green('\n✅ .humanet folder created successfully!\n'));
  
  console.log(chalk.bold('📁 Structure created:'));
  console.log(chalk.gray('   .humanet/'));
  console.log(chalk.gray('   ├── config.yml'));
  console.log(chalk.gray('   ├── problem_statement.md'));
  console.log(chalk.gray('   ├── idea.md'));
  console.log(chalk.gray('   ├── scope.md'));
  console.log(chalk.gray('   ├── diagrams/'));
  console.log(chalk.gray('   ├── research/'));
  console.log(chalk.gray('   ├── discussions/'));
  console.log(chalk.gray('   └── ... (and more)\n'));

  console.log(chalk.bold('📝 Next steps:\n'));
  console.log(chalk.cyan('  1.') + ' Edit ' + chalk.bold('.humanet/problem_statement.md'));
  console.log(chalk.cyan('  2.') + ' Edit ' + chalk.bold('.humanet/idea.md'));
  console.log(chalk.cyan('  3.') + ' Edit ' + chalk.bold('.humanet/scope.md'));
  console.log(chalk.cyan('  4.') + ' Run: ' + chalk.bold('humanet validate'));
  console.log(chalk.cyan('  5.') + ' Commit and push to GitHub');
  console.log(chalk.cyan('  6.') + ' Register at ' + chalk.bold('https://humanet.dev\n'));

  console.log(chalk.bold('⏰ Important:'));
  console.log(chalk.yellow(`   Your idea has a provisional deadline: ${userData.provisionalDeadline}`));
  console.log(chalk.gray('   Complete documentation and validation within 30 days.\n'));

  console.log(chalk.bold('📖 Resources:'));
  console.log(chalk.gray('   • Documentation: ') + chalk.blue('https://docs.humanet.dev'));
  console.log(chalk.gray('   • Discord: ') + chalk.blue('https://discord.gg/humanet'));
  console.log(chalk.gray('   • Template Guide: ') + chalk.blue('https://github.com/humanet/template\n'));

  console.log(chalk.gray('✨ Happy building!\n'));
}
