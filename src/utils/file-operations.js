import fs from 'fs-extra';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const { copySync, ensureDirSync, readFileSync, writeFileSync, existsSync } = fs;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Get the path to the templates directory
 */
export function getTemplatesPath() {
  return join(__dirname, '../templates');
}

/**
 * Copy all template files to destination
 */
export function copyTemplates(destPath) {
  const templatesPath = getTemplatesPath();
  
  // Ensure destination exists
  ensureDirSync(destPath);
  
  // Copy all template files
  copySync(templatesPath, destPath, {
    overwrite: true,
    filter: (src) => {
      // Don't copy node_modules or hidden files from templates
      return !src.includes('node_modules');
    }
  });
}

/**
 * Customize template files with user data
 */
export function customizeTemplates(destPath, userData) {
  const {
    name,
    tagline,
    domains,
    username,
    repoUrl,
    license,
    createdDate,
    updatedDate,
    provisionalDeadline
  } = userData;

  // Customize config.yml
  customizeConfigYml(destPath, {
    name,
    tagline,
    domains,
    username,
    repoUrl,
    license,
    createdDate,
    updatedDate,
    provisionalDeadline
  });

  // Customize README.md
  customizeFile(join(destPath, 'README.md'), {
    '{{NAME}}': name,
    '{{TAGLINE}}': tagline,
    '{{LICENSE}}': license
  });

  // Customize CHANGELOG.md
  customizeFile(join(destPath, 'CHANGELOG.md'), {
    '{{CREATED_DATE}}': createdDate
  });

  // Customize CONTRIBUTORS.md
  customizeFile(join(destPath, 'CONTRIBUTORS.md'), {
    '{{USERNAME}}': username,
    '{{CREATED_DATE}}': createdDate
  });

  // Customize problem_statement.md
  customizeFile(join(destPath, 'problem_statement.md'), {
    // No customization needed, just template markers
  });

  // Customize idea.md
  customizeFile(join(destPath, 'idea.md'), {
    '{{NAME}}': name
  });
}

/**
 * Customize config.yml with user data
 */
function customizeConfigYml(destPath, data) {
  const configPath = join(destPath, 'config.yml');
  let content = readFileSync(configPath, 'utf8');

  // Replace placeholders
  content = content.replace('{{NAME}}', data.name);
  content = content.replace('{{TAGLINE}}', data.tagline);
  content = content.replace('{{USERNAME}}', data.username);
  content = content.replace('{{LICENSE}}', data.license);
  content = content.replace('{{REPOSITORY_URL}}', data.repoUrl || '');
  
  // Replace all date placeholders
  content = content.replace(/\{\{CREATED_DATE\}\}/g, data.createdDate);
  content = content.replace(/\{\{UPDATED_DATE\}\}/g, data.updatedDate);
  content = content.replace('{{PROVISIONAL_DEADLINE}}', data.provisionalDeadline);

  // Format domains as YAML array
  const domainsYaml = data.domains.map(d => `    - ${d}`).join('\n');
  content = content.replace('{{DOMAINS}}', domainsYaml);

  writeFileSync(configPath, content, 'utf8');
}

/**
 * Customize a file by replacing placeholders
 */
function customizeFile(filePath, replacements) {
  if (!existsSync(filePath)) return;

  let content = readFileSync(filePath, 'utf8');

  for (const [placeholder, value] of Object.entries(replacements)) {
    content = content.replace(new RegExp(placeholder, 'g'), value);
  }

  writeFileSync(filePath, content, 'utf8');
}

/**
 * Calculate provisional deadline (created date + 30 days)
 */
export function calculateProvisionalDeadline(createdDate) {
  const date = new Date(createdDate);
  date.setDate(date.getDate() + 30);
  return formatDate(date);
}

/**
 * Format date as YYYY-MM-DD
 */
export function formatDate(date) {
  return date.toISOString().split('T')[0];
}

/**
 * Get current date formatted
 */
export function getCurrentDate() {
  return formatDate(new Date());
}

/**
 * Check if .humanet folder exists
 */
export function humanetExists(basePath = process.cwd()) {
  return existsSync(join(basePath, '.humanet'));
}

/**
 * Get .humanet folder path
 */
export function getHumanetPath(basePath = process.cwd()) {
  return join(basePath, '.humanet');
}
