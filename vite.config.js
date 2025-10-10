import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'repository-name' with the actual name of your GitHub repository.
const repoName = 'react-project'; // Assuming your repo is named 'project' based on package.json

// https://vite.dev/config/
export default defineConfig({
  base: `/${repoName}/`,
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
