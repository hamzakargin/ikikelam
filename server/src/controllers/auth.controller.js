import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { ENV } from "../lib/env.js";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "Tüm alanlar zorunludur" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Şifre en az 6 karakter olmalıdır" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Geçersiz e-posta formatı" });
    }

    const user = await User.findOne({ email });
    if (user)
      return res.status(400).json({ message: "Bu e-posta zaten kullanılıyor" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      const savedUser = await newUser.save();
      generateToken(savedUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
      try {
        await sendWelcomeEmail(
          savedUser.email,
          savedUser.fullName,
          ENV.CLIENT_URL,
        );
      } catch (error) {
        console.error("Welcome e-postası gönderilemedi:", error);
      }
    } else {
      res.status(400).json({ message: "Geçersiz kullanıcı verisi" });
    }
  } catch (error) {
    console.log("Signup controller hatası:", error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email ve şifre gerekli" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Geçersiz bilgiler" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Geçersiz bilgiler" });

    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error("Login controller hatası:", error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
};
export const logout = (_, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.status(200).json({ message: "Başarıyla çıkış yapıldı" });
};
