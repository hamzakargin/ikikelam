import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 dakika
  max: 100, // max 100 istek
  message: { message: "Çok fazla istek attınız, lütfen bekleyin." },
});
