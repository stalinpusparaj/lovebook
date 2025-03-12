# LoveBook - Custom Love Book Creator

Create and personalize custom love books with text and illustrations. This web application allows users to design beautiful love books that can be shared digitally or printed.

## Features

- User authentication
- Interactive book editor
- Drag-and-drop page management
- Customizable illustrations
- PDF export
- Digital sharing
- E-commerce integration

## Tech Stack

- Frontend: Next.js 13+ with App Router
- Styling: Tailwind CSS
- Authentication: Clerk
- Database: Firebase
- Storage: AWS S3
- Payment Processing: Stripe
- PDF Generation: Puppeteer

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/lovebook.git
cd lovebook
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment variables:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local` with your:
- Clerk API keys
- Firebase configuration
- AWS S3 credentials
- Stripe API keys

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # User dashboard
│   ├── (editor)/          # Book editor
│   └── api/               # API routes
├── components/            # Reusable components
├── lib/                   # Utility functions
├── hooks/                # Custom React hooks
├── types/                # TypeScript types
└── styles/               # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 