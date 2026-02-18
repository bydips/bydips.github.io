const serviceItems = document.querySelectorAll('.service-item');

if (serviceItems.length) {
  const serviceMap = {
    clarity: {
      tag: 'Website',
      title: 'Pembuatan Website Baru',
      text: 'Membangun website profesional yang dirancang strategis, fokus pada kemudahan penggunaan, dan konversi agar bisnis Anda terlihat kredibel dan siap bersaing secara digital.',
      points: [
        'Website UMKM dengan fitur WhatsApp',
        'Website company profile',
        'Website katalog produk',
        'Website event atau seminar',
        'Website personal branding'
      ],
      ctaLabel: 'Cakupan Hasil Layanan',
      ctaText: 'Website siap online dengan desain profesional dan mudah digunakan.',
      ctaButton: 'Mulai Proyek Anda',
      image: 'assets/images/layanan/layanan-pembuatan-website.webp'
    },
    structure: {
      tag: 'Optimasi',
      title: 'Optimasi Website',
      text: 'Meningkatkan performa website dari sisi struktur, tampilan, kecepatan, hingga alur konversi agar lebih efektif menarik dan mengubah pengunjung menjadi pelanggan.',
      points: ['Audit struktur halaman', 'Perbaikan tampilan & navigasi', 'Optimasi SEO halaman', 'Revisi struktur homepage', 'Riset kata kunci potensial'],
      ctaLabel: 'Cakupan Hasil Layanan',
      ctaText: 'Rekomendasi perbaikan untuk meningkatkan performa website.',
      ctaButton: 'Optimalkan Sekarang',
      image: 'assets/images/layanan/layanan-optimasi-seo.webp'
    },
    conversion: {
      tag: 'Desain Visual',
      title: 'Desain Visual Media Sosial',
      text: 'Membuat desain visual yang konsisten dan profesional untuk memperkuat identitas brand serta meningkatkan daya tarik konten di berbagai platform digital.',
      points: ['Desain feed Instagram', 'Desain konten promosi', 'Banner campaign', 'Template konten siap pakai', 'Desain visual untuk katalog produk'],
      ctaLabel: 'Cakupan Hasil Layanan',
      ctaText: 'Template konten siap pakai untuk memperkuat brand Anda.',
      ctaButton: 'Tingkatkan Visual Brand',
      image: 'assets/images/layanan/layanan-desain-media-sosial.webp'
    },
    performance: {
      tag: 'Marketing',
      title: 'Materi Promosi dan Pemasaran',
      text: 'Merancang materi promosi yang komunikatif dan strategis untuk mendukung aktivitas pemasaran online maupun offline agar pesan bisnis tersampaikan dengan jelas dan menarik.',
      points: ['Brosur digital', 'Poster promosi', 'Materi iklan digital', 'Flyer promosi', 'Desain katalog produk'],
      ctaLabel: 'Cakupan Hasil Layanan',
      ctaText: 'Aset materi iklan digital siap pakai untuk kampanye promosi.',
      ctaButton: 'Buat Materi Promosi',
      image: 'assets/images/layanan/layanan-sosial-media-marketing.webp'
    },
    analytics: {
      tag: 'Konsultansi',
      title: 'Konsultasi Bisnis Digital',
      text: 'Sesi strategis untuk membantu Anda memahami arah pengembangan digital, mulai dari perencanaan website hingga strategi pertumbuhan yang ingin dicapai.',
      points: ['Audit jejak digital', 'Perencanaan blueprint website', 'Strategi roadmap digital', 'Perencanaan struktur konten', 'Rencana pengembangan fitur website'],
      ctaLabel: 'Cakupan Hasil Layanan',
      ctaText: 'Roadmap pengembangan digital yang jelas untuk bisnis Anda.',
      ctaButton: 'Jadwalkan Konsultasi',
      image: 'assets/images/layanan/layanan-konsultan-digital.webp'
    }
  };

  const tagNode = document.querySelector('#serviceTag');
  const titleNode = document.querySelector('#serviceTitle');
  const textNode = document.querySelector('#serviceText');
  const pointsNode = document.querySelector('#servicePoints');
  const ctaLabelNode = document.querySelector('#serviceCtaLabel');
  const ctaTextNode = document.querySelector('#serviceCtaText');
  const ctaButtonNode = document.querySelector('#serviceCtaButton');
  const imageNode = document.querySelector('#serviceImage');

  const updateService = (key) => {
    const data = serviceMap[key];
    if (!data) return;

    tagNode.textContent = data.tag;
    titleNode.textContent = data.title;
    textNode.textContent = data.text;

    pointsNode.innerHTML = '';
    data.points.forEach((point) => {
      const item = document.createElement('li');
      item.textContent = point;
      pointsNode.appendChild(item);
    });

    ctaLabelNode.textContent = data.ctaLabel;
    ctaTextNode.textContent = data.ctaText;
    ctaButtonNode.textContent = data.ctaButton;
    imageNode.src = data.image;
  };

  serviceItems.forEach((item) => {
    item.addEventListener('click', () => {
      serviceItems.forEach((node) => node.classList.remove('active'));
      item.classList.add('active');
      updateService(item.dataset.service);
    });
  });
}
