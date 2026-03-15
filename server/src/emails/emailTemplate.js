export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="tr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ikikelam'a Hoş Geldin</title>
  </head>
  <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #4a5568; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f6f9fc;">
    <div style="background: linear-gradient(to right, #00C6FF, #0072FF); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
      <img src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg?t=st=1741295028~exp=1741298628~hmac=0d076f885d7095f0b5bc8d34136cd6d64749455f8cb5f29a924281bafc11b96c&w=1480" alt="ikikelam Logo" style="width: 80px; height: 80px; margin-bottom: 20px; border-radius: 50%; background-color: white; padding: 10px;">
      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 500;">ikikelam'a Hoş Geldin!</h1>
    </div>
    <div style="background-color: #ffffff; padding: 35px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
      <p style="font-size: 18px; color: #0072FF;"><strong>Merhaba ${name},</strong></p>
      <p>Mesajlaşma platformumuza katıldığın için çok mutluyuz! ikikelam sayesinde arkadaşlarınla, ailenle ve iş arkadaşlarınla nerede olurlarsa olsunlar gerçek zamanlı olarak iletişim kurabilirsin.</p>

      <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #00C6FF;">
        <p style="font-size: 16px; margin: 0 0 15px 0;"><strong>Birkaç adımda hemen başlayabilirsin:</strong></p>
        <ul style="padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 10px;">Profil fotoğrafını ayarla</li>
          <li style="margin-bottom: 10px;">Kişilerini bul ve ekle</li>
          <li style="margin-bottom: 10px;">Bir sohbet başlat</li>
          <li style="margin-bottom: 0;">Fotoğraf, video ve daha fazlasını paylaş</li>
        </ul>
      </div>

      <div style="text-align: center; margin: 30px 0;">
        <a href=${clientURL} style="background: linear-gradient(to right, #00C6FF, #0072FF); color: white; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: 500; display: inline-block;">ikikelam'ı Aç</a>
      </div>

      <p style="margin-bottom: 5px;">Herhangi bir yardıma ihtiyacın olursa veya soruların olursa, sana yardımcı olmak için buradayız.</p>
      <p style="margin-top: 0;">Keyifli mesajlaşmalar!</p>

      <p style="margin-top: 25px; margin-bottom: 0;">Sevgiler,<br>ikikelam Ekibi</p>
    </div>

    <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
      <p>© 2025 ikikelam. Tüm hakları saklıdır.</p>
      <p>
        <a href="#" style="color: #0072FF; text-decoration: none; margin: 0 10px;">Gizlilik Politikası</a>
        <a href="#" style="color: #0072FF; text-decoration: none; margin: 0 10px;">Kullanım Şartları</a>
        <a href="#" style="color: #0072FF; text-decoration: none; margin: 0 10px;">Bize Ulaşın</a>
      </p>
    </div>
  </body>
  </html>
  `;
}
