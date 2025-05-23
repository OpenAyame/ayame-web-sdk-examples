import process from 'node:process'
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  workers: 1,
  testDir: 'tests',
  // fullyParallel: true,
  reporter: 'html',
  use: {
    launchOptions: {
      args: [
        // CORS 無効
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process',

        '--use-fake-ui-for-media-stream',
        '--use-fake-device-for-media-stream',
        // "--use-file-for-fake-video-capture=/app/sample.mjpeg",
      ],
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
  webServer: {
    command: 'pnpm run dev --port 9000',
    url: 'http://localhost:9000/',
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    stderr: 'pipe',
  },
})