import chalk from 'chalk';
import { humanetExists, getHumanetPath } from '../utils/file-operations.js';
import Validator from '../utils/validator.js';

/**
 * Validate .humanet folder
 */
export default async function validate(options) {
  try {
    console.log(chalk.bold.cyan('\n🔍 Humanet Validation\n'));

    // Check if .humanet exists
    if (!humanetExists()) {
      console.log(chalk.red('✗ .humanet folder not found in current directory.'));
      console.log(chalk.gray('\nRun ' + chalk.bold('humanet init') + ' to create one.\n'));
      process.exit(1);
    }

    const humanetPath = getHumanetPath();
    const verbose = options.verbose || false;

    // Run validation
    const validator = new Validator();
    const isValid = await validator.validate(humanetPath, verbose);

    // Exit with appropriate code
    process.exit(isValid ? 0 : 1);

  } catch (error) {
    console.error(chalk.red('\n❌ Validation error:'), error.message);
    if (options.verbose) {
      console.error(chalk.gray(error.stack));
    }
    process.exit(1);
  }
}
