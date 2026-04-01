import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-hero-radial px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-xl items-center">
        <div className="card w-full p-8">
          <h1 className="text-3xl font-semibold text-white">Create your PayFlow account</h1>
          <p className="mt-2 text-sm text-slate-400">Set this page up now, then connect it to your backend registration and KYC onboarding flows.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="input" placeholder="First name" />
            <input className="input" placeholder="Last name" />
            <input className="input md:col-span-2" placeholder="Email" />
            <input className="input md:col-span-2" placeholder="Phone number" />
            <input className="input md:col-span-2" placeholder="Password" type="password" />
          </div>
          <button onClick={() => navigate('/otp-verification')} className="primary-button mt-6 w-full">Continue</button>
          <p className="mt-5 text-center text-sm text-slate-400">
            Already have an account? <Link className="text-accent" to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
