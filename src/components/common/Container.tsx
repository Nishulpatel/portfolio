import React from 'react';

export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`container mx-auto max-w-4xl bg-neutral-100 dark:dark:bg-black px-4 animate-fade-in-blur ${className}`}
      {...props}>
      {children}
    </div>
  );
}
