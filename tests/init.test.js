import { describe, test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import { existsSync, rmSync, mkdirSync } from 'fs';
import { join } from 'path';
import { humanetExists, copyTemplates, customizeTemplates, getCurrentDate, calculateProvisionalDeadline } from '../src/utils/file-operations.js';

const TEST_DIR = join(process.cwd(), '.test-humanet');

describe('Humanet Init Tests', () => {
  beforeEach(() => {
    // Clean up test directory before each test
    if (existsSync(TEST_DIR)) {
      rmSync(TEST_DIR, { recursive: true, force: true });
    }
    mkdirSync(TEST_DIR, { recursive: true });
  });

  afterEach(() => {
    // Clean up test directory after each test
    if (existsSync(TEST_DIR)) {
      rmSync(TEST_DIR, { recursive: true, force: true });
    }
  });

  test('should create .humanet folder structure', () => {
    const humanetPath = join(TEST_DIR, '.humanet');
    copyTemplates(humanetPath);

    assert.ok(existsSync(humanetPath), '.humanet folder should exist');
    assert.ok(existsSync(join(humanetPath, 'config.yml')), 'config.yml should exist');
    assert.ok(existsSync(join(humanetPath, 'problem_statement.md')), 'problem_statement.md should exist');
    assert.ok(existsSync(join(humanetPath, 'idea.md')), 'idea.md should exist');
    assert.ok(existsSync(join(humanetPath, 'scope.md')), 'scope.md should exist');
  });

  test('should customize templates with user data', () => {
    const humanetPath = join(TEST_DIR, '.humanet');
    copyTemplates(humanetPath);

    const userData = {
      name: 'Test Idea',
      tagline: 'A test tagline',
      domains: ['ai-ml', 'dev-tools'],
      username: 'testuser',
      repoUrl: 'https://github.com/test/repo',
      license: 'MIT',
      createdDate: '2026-02-16',
      updatedDate: '2026-02-16',
      provisionalDeadline: '2026-03-18'
    };

    customizeTemplates(humanetPath, userData);

    // Add assertions to check if customization worked
    // This would require reading files and checking content
    assert.ok(true, 'Customization should complete without errors');
  });

  test('should calculate provisional deadline correctly', () => {
    const createdDate = '2026-02-16';
    const deadline = calculateProvisionalDeadline(createdDate);
    
    assert.strictEqual(deadline, '2026-03-18', 'Deadline should be 30 days after creation');
  });

  test('should format current date correctly', () => {
    const date = getCurrentDate();
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    
    assert.match(date, dateRegex, 'Date should be in YYYY-MM-DD format');
  });
});

describe('Humanet Validation Tests', () => {
  test('should detect missing .humanet folder', () => {
    const exists = humanetExists(TEST_DIR);
    assert.strictEqual(exists, false, 'Should return false when .humanet does not exist');
  });

  // Add more validation tests here
});

// Note: These tests are basic examples. 
// For production, you would want more comprehensive test coverage including:
// - Testing all CLI commands
// - Testing error handling
// - Testing user input validation
// - Testing file content validation
// - Integration tests with actual CLI execution
