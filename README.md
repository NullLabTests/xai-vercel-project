# XAI Vercel Project

This project integrates xAI's AI capabilities into a serverless application deployed on Vercel. It serves as an example of how to:

- Utilize xAI's API for AI-driven tasks.
- Deploy AI applications on Vercel for scalability and performance.
- Manage environment variables for API keys securely.

## Features

- **AI Text Generation**: Leverages xAI's text generation model for creating dynamic content.
- **Serverless Architecture**: Designed for Vercel deployment, ensuring low-latency and global distribution.

## Setup

1. **Clone the repository**:

   ```bash
   git clone git@github.com:NullLabTests/xai-vercel-project.git
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set Environment Variables**:

   - You'll need to set `XAI_API_KEY` in your Vercel project settings.

4. **Deploy to Vercel**:

   Use the Vercel CLI for deployment:

   ```bash
   vercel
   ```

## Usage

After deployment, the API can be used to generate text based on prompts:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"message":"Your prompt here"}' YOUR_DEPLOYED_URL
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
