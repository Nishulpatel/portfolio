import Script from "next/script";

export default function Home() {

  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center text-gray-800">

       <Script
        strategy="beforeInteractive"
        defer
        data-domain="nishul.dev"
        src="https://plausible.io/js/script.js"
      />

      <div className="max-w-xl px-6 text-sm leading-relaxed font-light">
        <h1 className="font-serif text-2xl mb-4">
          N—D<sup className="text-xs align-super">©</sup>
        </h1>
        <p className="font-sans mb-3 border-b border-gray-300 pb-3">
          Nishul Dhakar is a full-stack developer passionate about building clean interfaces & smart systems. Currently exploring AI-powered tools and digital productivity.
        </p>
        <span className=""></span>
        <p className="font-sans text-gray-500">
          My 2025 portfolio is under construction — while that’s happening, you can find me on <a href="https://x.com/NishulDhakar" className="underline">twitter </a>, or say hello at <a href="https://t.me/nishuldhakar" className="underline">telegram</a>.
        </p>
      </div>
    </div>
  );
}