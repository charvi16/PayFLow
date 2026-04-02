import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();

  // ✅ State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
  try {
    console.log("Sending:", { email, password });

    setLoading(true);

    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    console.log("Response:", data);

    if (!res.ok) {
      alert(data.message || "Login failed");
      return;
    }

    localStorage.setItem('token', data.token);
    navigate('/dashboard');

  } catch (err) {
    console.error("Fetch error:", err);
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-hero-radial text-white">

      {/* ================= HERO ================= */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">PayFlow</p>

            <h1 className="mt-4 text-5xl font-semibold leading-tight">
              The future of payments starts here.
            </h1>

            <p className="mt-5 text-slate-300 max-w-md">
              Fast, secure, AI-powered payment infrastructure with real-time insights and fraud protection.
            </p>

            {/* STATS */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="text-xl font-semibold">10K+</h3>
                <p className="text-xs text-slate-400">Users</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">₹50Cr+</h3>
                <p className="text-xs text-slate-400">Processed</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">99.99%</h3>
                <p className="text-xs text-slate-400">Uptime</p>
              </div>
            </div>
          </div>

          {/* ================= LOGIN ================= */}
          <div className="card max-w-md w-full p-6 mx-auto">
            <h2 className="text-2xl font-semibold text-center">Login</h2>

            <div className="mt-5 space-y-3">

              {/* EMAIL */}
              <input
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* PASSWORD */}
              <input
                className="input"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* LOGIN BUTTON */}
              <button
                onClick={handleLogin}
                disabled={loading}
                className="primary-button w-full"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              <button className="glass-button w-full">
                Login with OTP
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-slate-400">
              No account?{" "}
              <Link to="/register" className="text-accent">
                Sign up
              </Link>
            </p>
          </div>

        </div>
      </section>

      {/* ================= TRUSTED ================= */}
      <section className="px-6 py-16 border-t border-white/10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Trusted By</p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
          {["Stripe", "Razorpay", "Paytm", "Visa", "UPI", "Mastercard"].map((b) => (
            <div key={b} className="glass-button py-3 text-sm">
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-20 border-t border-white/10 text-center">
        <h2 className="text-3xl font-semibold">Start using PayFlow today</h2>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={handleLogin}
            className="primary-button px-6 py-2"
          >
            Get Started
          </button>

          <Link to="/register" className="glass-button px-6 py-2">
            Create Account
          </Link>
        </div>
      </section>

    </div>
  );
}