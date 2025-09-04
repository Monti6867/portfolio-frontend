import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  // Base configs
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,

  // Next.js rules
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
    },
  },

  // Project-specific rules
  {
    rules: {
      'react/jsx-key': 'off', // Next.js handles keys well
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
