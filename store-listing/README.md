# Play Store Yayın Rehberi

Bu klasör, Google Play Console'a uygulamayı eklerken kullanılacak hazır
metinleri ve dosyaları içerir.

## İçerik
- `description-tr.md` — Uygulama adı, kısa açıklama ve tam açıklama (TR + EN)
- `privacy-policy.html` — Gizlilik politikası (İngilizce)
- `privacy-policy-tr.html` — Gizlilik politikası (Türkçe)

## 1. Gizlilik Politikasını Yayınla (zorunlu)

Play Console, "App content" bölümünde herkese açık bir gizlilik politikası
**URL**'i ister. En kolay yol — GitHub Pages:

1. Bu projeyi GitHub'a `git push` et (zaten git deposu hazır).
2. Repo ayarlarından **Settings → Pages** açılıp `main` branch / `/` (root)
   veya `/store-listing` klasörü seçilir.
3. Yayınlanan URL şuna benzer olur:
   `https://<kullanici-adi>.github.io/<repo-adi>/store-listing/privacy-policy.html`
4. Bu URL'i Play Console → **App content → Privacy policy** alanına yapıştır.

> Alternatif: Hızlıca tek bir HTML dosyası barındırmak için
> [Netlify Drop](https://app.netlify.com/drop) gibi bir servise dosyayı
> sürükleyip bırakabilirsin (hesap gerektirmez, anında URL verir).

## 2. Play Console → App content (zorunlu form'lar)

- **Privacy policy**: Yukarıdaki URL
- **Data safety**: "Does your app collect or share user data?" → **Hayır**
  (uygulama hiçbir kişisel veri toplamıyor)
- **Content rating questionnaire**: Tüm sorulara "Hayır/Yok" — sonuç
  genellikle "Everyone / 3+" olur
- **Target audience**: 18+ veya genel (tercihe bağlı)
- **Ads**: "Contains ads?" → **Hayır**
- **News app**: Hayır
- **Government app**: Hayır

## 3. Store Listing (Main store listing)

`description-tr.md` dosyasındaki metinleri ilgili alanlara kopyala:
- App name (30 karakter sınırı)
- Short description (80 karakter)
- Full description (4000 karakter)

## 4. Görseller (zorunlu)

- **App icon**: 512×512 PNG (şu an `assets/icon.png` placeholder — gerçek
  marka ikonuyla değiştirilmeli)
- **Feature graphic**: 1024×500 PNG/JPG (Play Store sayfasının üst banner'ı)
- **Ekran görüntüleri**: En az 2 adet, telefon için min. 320px - max 3840px
  kenar. `npm run tunnel` ile uygulamayı açıp telefonunda ekran görüntüsü
  alabilirsin, ya da bana söylersen otomatik üretebilirim.

## 5. Build & Submit

Production AAB build'i EAS'ta hazırlanıyor:
```
npx eas build:view <build-id>
```

Build bittiğinde indirilen `.aab` dosyasını Play Console → **Production**
(veya önce **Internal testing**) → "Create new release" ile yükle.

Otomatik göndermek istersen (`eas submit`), Play Console'da bir
**service account JSON key** oluşturup projeye eklemen gerekir — bu adım
için ayrıca yardım isteyebilirsin.
