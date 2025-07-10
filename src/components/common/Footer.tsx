'use client';
import Container from './Container';

export default function Footer() {
  return (
    <Container  className="max-w-4xl mx-auto px-6 lg:px-12 py-4 w-full border-t mt-10 text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-2 md:mb-0 text-center md:text-left">
        © {new Date().getFullYear()} Developed with ❤️ by Nishul
      </div>
      </Container>
  );
}