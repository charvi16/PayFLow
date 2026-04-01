import { useNavigate } from 'react-router-dom';

export default function OtpVerification() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-hero-radial px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center">
        <div className="card w-full p-8 text-center">
          <h1 className="text-3xl font-semibold text-white">Verify OTP</h1>
          <p className="mt-2 text-sm text-slate-400">Enter the 6-digit verification code sent to your device.</p>
          <div className="mt-8 grid grid-cols-6 gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <input key={index} className="input px-0 text-center text-xl font-semibold" maxLength={1} />
            ))}
          </div>
          <button onClick={() => navigate('/dashboard')} className="primary-button mt-8 w-full">Verify & Continue</button>
          <button className="glass-button mt-3 w-full">Resend code</button>
        </div>
      </div>
    </div>
  );
}
