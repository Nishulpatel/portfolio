'use client';
import Container from './Container';

export default function Footer() {
  return (
    <Container  className="w-full border-t mt-10 px-4 py-6 text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-2 md:mb-0 text-center md:text-left">
        © {new Date().getFullYear()} Nishul Dhakar. All rights reserved.
      </div>
      </Container>
  );
}
