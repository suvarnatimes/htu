import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="mb-6 text-center">
        <Link href="/" className="inline-block mb-3">
          <img src="/images/logo.png" alt="HTU Official Logo" className="h-20 w-auto mx-auto object-contain drop-shadow" />
        </Link>
        <h1 className="text-xl md:text-2xl font-serif font-bold text-amber-400">
          HOPE THEOLOGICAL UNIVERSITY
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Cathedral Episcopal Synod • Admin Portal Authentication
        </p>
        <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 bg-amber-950/60 border border-amber-600/40 text-amber-300 text-[11px] rounded-full font-mono">
          Restricted to: hopetheologicaluniversity@gmail.com
        </div>
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden p-2">
        <SignIn
          routing="path"
          path="/admin/login"
          afterSignInUrl="/admin"
          signUpUrl="/admin/login"
        />
      </div>

      <div className="mt-6 text-center text-xs text-slate-500">
        <p>Restricted to authorized administrator: hopetheologicaluniversity@gmail.com</p>
        <Link href="/certificate-verification" className="text-amber-400/80 hover:text-amber-300 mt-2 inline-block">
          ← Return to Public Certificate Verification
        </Link>
      </div>
    </div>
  );
}
