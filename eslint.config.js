import js from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import fileProgress from 'eslint-plugin-file-progress';
import eslintPluginImport from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'node_modules',
      'dist',
      'src/shared/locales/i18nData.js'
    ]
  },
  {
    extends: [ js.configs.recommended, ...tseslint.configs.recommended ],
    files: [ '**/*.{js,ts,tsx}' ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      'import': eslintPluginImport,
      'unused-imports': unusedImports,
      'file-progress': fileProgress,
      '@stylistic/js': stylisticJs
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    }
  },
  {
    rules: {
      'no-useless-escape': 0,
      '@typescript-eslint/ban-types': 0,
      '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
      'no-prototype-builtins': 0,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-empty-object-type': 0,
      '@typescript-eslint/no-unsafe-function-type': 0,
      '@typescript-eslint/no-unused-expressions': 0,
      'file-progress/activate': [ 1 ],
      'no-empty': [
        2,
        {
          'allowEmptyCatch': true
        }
      ],
      'simple-import-sort/imports': [
        2,
        {
          'groups': [
            [
              '^react',
              '^@?\\w/?\\w',
              '^@?/shared/\\w',
              '^'
            ]
          ]
        }
      ],
      'simple-import-sort/exports': 2,
      'import/first': 2,
      'import/newline-after-import': 2,
      'no-duplicate-imports': 2,
      'unused-imports/no-unused-imports': 2,
      'prefer-const': [
        2,
        {
          'destructuring': 'all'
        }
      ],
      'unused-imports/no-unused-vars': [
        2,
        {
          'vars': 'all',
          'varsIgnorePattern': '^_',
          'args': 'after-used',
          'argsIgnorePattern': '^_',
          'ignoreRestSiblings': true
        }
      ],
      'object-curly-spacing': [ 2, 'always' ],
      'array-bracket-spacing': [ 2, 'always' ],
      'no-multi-spaces': 2,
      'max-len': [
        2,
        {
          'code': 904,
          'ignorePattern': 'd="([\\s\\S]*?)"'
        }
      ],
      'max-lines': [ 2, 1200 ],
      'max-nested-callbacks': [ 2, 3 ],
      'max-statements': [ 2, 120 ],
      'max-lines-per-function': [ 2, 1100 ],
      'max-depth': [ 2, 4 ],
      'max-params': [ 2, 5 ],
      'complexity': [ 2, 60 ],
      'quotes': [ 2, 'single' ],
      'dot-notation': 2,
      'no-nested-ternary': 2,
      'no-console': [
        2,
        {
          'allow': [ 'warn', 'error' ]
        }
      ],
      '@stylistic/js/max-statements-per-line': [
        2,
        { 'max': 1 }
      ],
      '@stylistic/js/comma-spacing': 2,
      '@stylistic/js/comma-dangle': 2,
      '@stylistic/js/indent': [ 2, 2 ],
      '@stylistic/js/semi': 2,
      '@stylistic/js/no-extra-semi': 2,
      '@stylistic/js/semi-style': [ 2, 'last' ],
      '@stylistic/js/semi-spacing': 2,
      '@stylistic/js/no-multiple-empty-lines': [
        2,
        { 'max': 1 }
      ],
      '@stylistic/js/lines-between-class-members': [ 2, 'always' ],
      '@stylistic/js/no-trailing-spaces': 2,
      '@stylistic/js/keyword-spacing': 2,
      '@stylistic/js/arrow-spacing': 2,
      '@stylistic/js/block-spacing': 2,
      '@stylistic/js/computed-property-spacing': 2,
      '@stylistic/js/generator-star-spacing': 2,
      '@stylistic/js/key-spacing': 2,
      '@stylistic/js/space-in-parens': 2,
      '@stylistic/js/space-infix-ops': 2,
      '@stylistic/js/func-call-spacing': 2,
      '@stylistic/js/space-before-blocks': 2,
      'prefer-destructuring': [
        2,
        {
          'VariableDeclarator': {
            'array': true,
            'object': true
          },
          'AssignmentExpression': {
            'array': true,
            'object': false
          }
        },
        {
          'enforceForRenamedProperties': false
        }
      ],
      '@typescript-eslint/ban-ts-comment': 0
    }
  }
);
