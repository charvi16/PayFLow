import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-hero-radial px-4 py-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-6 lg:grid-cols-2">
        <div className="hidden lg:block">
          <p className="text-sm uppercase tracking-[0.35em] text-accent">PayFlow</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight text-white">Payments that feel premium, fast, and trustworthy.</h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">Use this auth screen now with local state, then swap in your real API for login, OTP, refresh tokens, and session management later.</p>
        </div>

        <div className="card mx-auto w-full max-w-lg p-8">
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[24px] bg-gradient-to-br from-accent to-accentDark text-2xl font-bold text-white shadow-glow">P</div>
            <h2 className="mt-5 text-3xl font-semibold text-white">Welcome back</h2>
            <p className="mt-2 text-sm text-slate-400">Log in to continue to your PayFlow dashboard.</p>
          </div>

          <div className="space-y-4">
            <input className="input" placeholder="Email or phone number" />
            <input className="input" placeholder="Password" type="password" />
            <button onClick={() => navigate('/dashboard')} className="primary-button w-full">Login</button>
            <button className="glass-button w-full">Login with OTP</button>
          </div>

          <p className="mt-6 text-center text-sm text-slate-400">
            Don&apos;t have an account? <Link className="text-accent" to="/register">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
