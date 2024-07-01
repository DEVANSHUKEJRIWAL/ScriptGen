import { defineConfig } from 'drizzle-kit'
export default defineConfig({
 schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://ai-content_owner:ztdjFSnNP5B1@ep-hidden-shape-a513utzo.us-east-2.aws.neon.tech/ai-content?sslmode=require",
  },
})