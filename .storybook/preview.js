import { BlogThemeProvider } from '../src/context/BlogThemeContext';
import { GlobalStyles } from '../src/styles/global-styles'
import { theme } from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.primary,
      },
    ]
  }
}

export const decorators = [
  (Story) => (
    <BlogThemeProvider>
      <Story />
      <GlobalStyles />
    </BlogThemeProvider>
  )
];
