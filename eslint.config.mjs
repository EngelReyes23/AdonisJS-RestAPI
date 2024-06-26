import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    languageOptions: {
      // Omite: "use" is not defined
      globals: {
        use: 'readonly',
        ...globals.node
      }
    }
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier
]
