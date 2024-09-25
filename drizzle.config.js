/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./src/utils/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://Ai%20Generator_owner:PU0J5YxSGqDH@ep-blue-rice-a1jrmghl.ap-southeast-1.aws.neon.tech/Ai%20Generator?sslmode=require",
  }
};