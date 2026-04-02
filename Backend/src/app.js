const express = require("express");
const swaggerUi = require("swagger-ui-express");
const cors = require('cors');

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const walletRoutes = require("./routes/wallet.routes");
const paymentRoutes = require("./routes/payment.routes");
const transactionRoutes = require("./routes/transaction.routes");
const analyticsRoutes = require("./routes/analytics.routes");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json());

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "PayFlow API",
    version: "1.0.0",
    description: "Simple wallet backend for PayFlow",
  },
  servers: [
    {
      url: "http://localhost:5000",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  paths: {
    "/api/auth/register": {
      post: {
        summary: "Register a new user",
        tags: ["Auth"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string", example: "Charvi" },
                  email: { type: "string", example: "charvi@gmail.com" },
                  password: { type: "string", example: "123456" },
                },
              },
            },
          },
        },
        responses: {
          201: { description: "User registered" },
          400: { description: "Bad request" },
        },
      },
    },
    "/api/auth/login": {
      post: {
        summary: "Login user",
        tags: ["Auth"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: { type: "string", example: "charvi@gmail.com" },
                  password: { type: "string", example: "123456" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Login success" },
          400: { description: "Bad request" },
        },
      },
    },
    "/api/users/me": {
      get: {
        summary: "Get current user",
        tags: ["User"],
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: "Profile fetched" },
          401: { description: "Unauthorized" },
        },
      },
    },
    "/api/wallet/balance": {
      get: {
        summary: "Get wallet balance",
        tags: ["Wallet"],
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: "Balance fetched" },
        },
      },
    },
    "/api/wallet/topup": {
      post: {
        summary: "Top up wallet",
        tags: ["Wallet"],
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  amount: { type: "number", example: 500 },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Wallet topped up" },
        },
      },
    },
    "/api/payments/transfer": {
      post: {
        summary: "Transfer money to another user",
        tags: ["Payments"],
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  receiverEmail: { type: "string", example: "friend@gmail.com" },
                  amount: { type: "number", example: 100 },
                  note: { type: "string", example: "Lunch split" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Transfer success" },
          400: { description: "Transfer failed" },
        },
      },
    },
    "/api/transactions": {
      get: {
        summary: "Get my transaction history",
        tags: ["Transactions"],
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: "Transactions fetched" },
        },
      },
    },
    "/api/analytics/summary": {
      get: {
        summary: "Get basic analytics summary",
        tags: ["Analytics"],
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: "Summary fetched" },
        },
      },
    },
  },
};

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "PayFlow API is running",
  });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/analytics", analyticsRoutes);

app.use(errorMiddleware);

module.exports = app;