export const initPrompts = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your idea called?',
    validate: input => {
      if (input.length < 3) {
        return 'Name must be at least 3 characters';
      }
      if (input.length > 100) {
        return 'Name must be less than 100 characters';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'tagline',
    message: 'One-line description (tagline):',
    validate: input => {
      if (input.length === 0) {
        return 'Tagline is required';
      }
      if (input.length > 200) {
        return 'Tagline must be less than 200 characters';
      }
      return true;
    }
  },
  {
    type: 'checkbox',
    name: 'domains',
    message: 'Select domains (use space to select, 2-5 required):',
    choices: [
      { name: 'AI & Machine Learning', value: 'ai-ml' },
      { name: 'Blockchain', value: 'blockchain' },
      { name: 'Climate Tech', value: 'climate-tech' },
      { name: 'Developer Tools', value: 'dev-tools' },
      { name: 'Education', value: 'education' },
      { name: 'Finance', value: 'finance' },
      { name: 'Healthcare', value: 'healthcare' },
      { name: 'Knowledge Management', value: 'knowledge-management' },
      { name: 'Productivity', value: 'productivity' },
      { name: 'Research Tools', value: 'research-tools' },
      { name: 'Social Impact', value: 'social-impact' },
      { name: 'Web3', value: 'web3' },
      { name: 'Other', value: 'other' }
    ],
    validate: input => {
      if (input.length < 2) {
        return 'Please select at least 2 domains';
      }
      if (input.length > 5) {
        return 'Please select no more than 5 domains';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'username',
    message: 'Your GitHub username:',
    validate: input => {
      if (input.length === 0) {
        return 'Username is required';
      }
      if (!/^[a-zA-Z0-9_-]+$/.test(input)) {
        return 'Invalid GitHub username format (letters, numbers, hyphens, underscores only)';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'repoUrl',
    message: 'Repository URL (optional, press Enter to skip):',
    default: '',
    validate: input => {
      if (input === '') return true;
      
      // Basic URL validation
      try {
        new URL(input);
        return true;
      } catch {
        return 'Please enter a valid URL or leave empty';
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your idea documentation:',
    choices: [
      { 
        name: 'CC-BY-4.0 (Attribution required) - Recommended', 
        value: 'CC-BY-4.0' 
      },
      { 
        name: 'CC-BY-SA-4.0 (Attribution + Share-alike)', 
        value: 'CC-BY-SA-4.0' 
      },
      { 
        name: 'MIT (Permissive)', 
        value: 'MIT' 
      },
      { 
        name: 'Unlicense (Public domain)', 
        value: 'Unlicense' 
      },
      { 
        name: 'Apache-2.0', 
        value: 'Apache-2.0' 
      }
    ],
    default: 'CC-BY-4.0'
  }
];

export const confirmOverwrite = {
  type: 'confirm',
  name: 'overwrite',
  message: '.humanet folder already exists. Overwrite?',
  default: false
};
