# InstaContent

InstaContent is an AI-powered platform designed to help users generate various types of content instantly. Whether you need blog posts, Instagram captions, code snippets, or more, InstaContent leverages advanced AI models to provide high-quality content tailored to your needs.

## Features

- **Blog Content Generation**: Generate engaging blog posts, titles, and topic ideas.
- **YouTube Tools**: Create SEO-optimized titles, descriptions, and tags for your YouTube videos.
- **Instagram Tools**: Generate Instagram posts, hashtags, and trending post ideas.
- **Rewriting Tools**: Rewrite articles to make them plagiarism-free and improve text quality.
- **Coding Tools**: Generate code snippets, explain code, and detect bugs in code.
- **Marketing Tools**: Generate catchy taglines and product descriptions.
- **Translation Tools**: Translate paragraphs into specified languages.
- **User Management**: Sign up, sign in, and manage user profiles with Clerk integration.
- **Subscription Management**: Upgrade to premium plans for extended features and usage limits.
- **Usage Tracking**: Track your usage and credits for AI-generated content.

## Endpoints

### Authentication
- **Sign In**: `/sign-in`
- **Sign Up**: `/sign-up`

### Dashboard
- **Home**: `/dashboard`
- **Billing**: `/dashboard/billing`
- **Content Creation**: `/dashboard/content/[slug]`
- **History**: `/dashboard/history`
- **Manage Account**




## Installation

1. **Clone the repository**:
    ```sh
    https://github.com/Sujal-Kr/InstaContent.git
    cd instacontent
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env.local` file in the root directory and add the necessary environment variables:
    ```env
    NEXT_PUBLIC_RAZORPAY_ID=your_razorpay_id
    NEXT_PUBLIC_RAZORPAY_SECRET=your_razorpay_secret
    NEXT_PUBLIC_PLAN_ID=your_plan_id
    NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
    NEXT_PUBLIC_DRIZZLE_DB_URL=your_drizzle_db_url
    ```

4. **Run the development server**:
    ```sh
    npm run dev
    ```

5. **Build the project**:
    ```sh
    npm run build
    ```

6. **Start the production server**:
    ```sh
    npm start
    ```

## Usage

- **Sign In/Sign Up**: Navigate to `/sign-in` or `/sign-up` to create an account or log in.
- **Dashboard**: Access the dashboard at `/dashboard` to explore and use various content generation tools.
- **Billing**: Upgrade your plan at `/dashboard/billing` to access premium features.
- **Content Creation**: Generate content by selecting a template from the dashboard and filling out the required fields.
- **History**: View your previously generated content at `/dashboard/history`.
- **Manage Account**: Manage your profile settings by clicking on your profile picture and manage accounts `/dashboard/setting`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.


