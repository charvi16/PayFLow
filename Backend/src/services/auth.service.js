const userRepository = require("../repositories/user.repository");
const walletRepository = require("../repositories/wallet.repository");
const { hashPassword, comparePassword } = require("../utils/bcrypt");
const { generateToken } = require("../utils/jwt");
const { generateOTP } = require("../utils/otp");
const otpRepository = require("../repositories/otpRepository");

// async function registerUser(data) {
//   const { name, email, password } = data;

//   const existingUser = await userRepository.findUserByEmail(email);
//   if (existingUser) {
//     throw new Error("User already exists with this email");
//   }

//   const passwordHash = await hashPassword(password);
//   const user = await userRepository.createUser(name, email, passwordHash);
//   await walletRepository.createWallet(user.id);

//   return user;
// }

async function registerUser(data) {
  console.log("STEP 1: Data received", data);

  const { name, email, password } = data;

  console.log("STEP 2: Checking existing user");
  const existingUser = await userRepository.findUserByEmail(email);
  console.log("Returned result from repo");

  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  console.log("STEP 3: Hashing password");
  const passwordHash = await hashPassword(password);

  console.log("STEP 4: Creating user");
  const user = await userRepository.createUser(name, email, passwordHash);
  // console.log("Return Value : ", resolveDefaultProps.rows[0]);

  console.log("STEP 5: Creating wallet");
  await walletRepository.createWallet(user.id);

  console.log("STEP 6: Done");

  return user;
}

async function sendOTP(email) {
  const otp = generateOTP();

  await otpRepository.createOTP(email, otp);

  console.log("OTP:", otp); // temporary

  return { message: "OTP sent successfully" };
}

async function verifyOTP(email, otp) {
  const record = await otpRepository.findLatestOTP(email, otp);

  if (!record) {
    throw new Error("Invalid OTP");
  }

  if (new Date(record.expires_at) < new Date()) {
    throw new Error("OTP expired");
  }

  // ✅ generate token
  const token = generateToken({ email });

  return {
    message: "OTP verified",
    token,
  };
}


async function loginUser(data) {
  const { email, password } = data;

  const user = await userRepository.findUserByEmail(email);
  if (!user) {
    throw new Error("User not found");
  }

  const isValid = await comparePassword(password, user.password_hash);
  if (!isValid) {
    throw new Error("Invalid password");
  }

  const token = generateToken(user);

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
}

module.exports = {
  registerUser,
  sendOTP,
  verifyOTP,
  loginUser,
};