```markdown
# 🚀 افزونه دستیار ویرایش شده (Dastyar) برای گوگل کروم

![آیکون افزونه](https://raw.githubusercontent.com/m4tinbeigi-official/dastyar/main/icons/icon128.png)

این افزونه یک دستیار سفارشی برای بهبود تجربه وبگردی شما در گوگل کروم است.

## 📥 دانلود و نصب دستی
### مرحله ۱: دریافت سورس کد
- **روش مستقیم (برای کاربران معمولی)**:
  1. وارد ریپازیتوری شوید: [m4tinbeigi-official/dastyar](https://github.com/m4tinbeigi-official/dastyar)
  2. روی دکمه سبز `Code` کلیک و `Download ZIP` را انتخاب کنید.
  3. فایل ZIP را در پوشه‌ای مثل `dastyar-extension` Extract کنید.

- **روش Git (برای توسعه‌دهندگان)**:
  ```bash
  git clone https://github.com/m4tinbeigi-official/dastyar.git
  cd dastyar
  ```

### مرحله ۲: نصب در کروم
1. مرورگر **گوگل کروم** را باز کنید.
2. آدرس زیر را در نوار آدرس وارد کنید:
   ```
   chrome://extensions/
   ```
3. **حالت توسعه‌دهنده (Developer mode)** را در بالا-رست فعال کنید.
4. روی دکمه `Load unpacked` کلیک کنید.
5. پوشه‌ای که فایل‌ها را Extract کردید (حاوی `manifest.json`) انتخاب کنید.

✅ افزونه با موفقیت نصب شد!

## 🛠️ عیب‌یابی
### خطای رایج: "Invalid manifest"
```json
// مطمئن شوید manifest.json شبیه این است:
{
  "manifest_version": 3,
  "name": "Dastyar",
  "version": "1.0",
  "icons": {
    "128": "icons/icon128.png"
  },
  // ...
}
```

### افزونه کار نمی‌کند؟
- کنسول کروم را باز کنید (`Ctrl+Shift+J`) و خطاها را چک کنید.
- از وجود فایل `manifest.json` در پوشه اصلی مطمئن شوید.

## 🤝 مشارکت در توسعه
اگر میخواهید به بهبود افزونه کمک کنید:
1. ریپازیتوری را **Fork** کنید.
2. تغییرات خود را اعمال و **Commit** کنید:
   ```bash
   git commit -m "feat: افزودن قابلیت جدید"
   ```
3. یک **Pull Request** به شاخه `main` ارسال کنید.

## 📜 مجوز
این پروژه تحت [مجوز MIT](https://github.com/m4tinbeigi-official/dastyar/blob/main/LICENSE) منتشر شده است.

## 📞 تماس با توسعه‌دهنده
- ایمیل: [m4tinbeigi.official@gmail.com](mailto:m4tinbeigi.official@gmail.com)
- گیتهاب: [m4tinbeigi-official](https://github.com/m4tinbeigi-official)

---

> ⚠️ توجه: پس از هر تغییر در کد، برای اعمال آپدیت‌ها دوباره `Load unpacked` را بزنید.
```
