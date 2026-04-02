import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
  const navigate = useNavigate();

  // ✅ State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // ✅ Register handler
  const handleRegister = async () => {
    if (!firstName || !email || !password) {
      alert("Please fill required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          password: password.trim(),
        }),
      });

      const data = await res.json();

      console.log("Register response:", data);

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      // ✅ OPTIONAL: auto login after register
      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        // or go to OTP page
        // navigate('/otp-verification', {state : {email}});
        navigate('/dashboard')
      }


    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-hero-radial px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-xl items-center">
        <div className="card w-full p-8">

          <h1 className="text-3xl font-semibold text-white">
            Create your PayFlow account
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Set this page up now, then connect it to your backend registration and KYC onboarding flows.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            {/* First Name */}
            <input
              className="input"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            {/* Last Name */}
            <input
              className="input"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            {/* Email */}
            <input
              className="input md:col-span-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Phone */}
            <input
              className="input md:col-span-2"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            {/* Password */}
            <input
              className="input md:col-span-2"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>

          {/* Register Button */}
          <button
            onClick={handleRegister}
            disabled={loading}
            className="primary-button mt-6 w-full"
          >
            {loading ? "Creating Account..." : "Continue"}
          </button>

          <p className="mt-5 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link className="text-accent" to="/login">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}