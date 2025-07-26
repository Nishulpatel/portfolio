'use client';

import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="bg-background dark:bg-background w-full overflow-hidden">
      <Container className="max-w-4xl mx-auto px-6 lg:px-12 py-12 w-full relative z-10">
        <div className="text-center space-y-6">

          {/* Decorative Line */}
          <div className="flex justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent" />
          </div>

          {/* Copyright */}
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} Developed with{' '}
              <span className="text-red-500 animate-pulse">❤️</span> by Nishul
            </p>
          </div>

        </div>
      </Container>
    </footer>
  );
}
