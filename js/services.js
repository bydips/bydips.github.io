const serviceItems = document.querySelectorAll('.service-item');

if (serviceItems.length) {
  const serviceMap = {
    clarity: {
      tag: 'Website',
      title: 'Pembuatan Website Baru',
      text: 'Membangun website profesional yang dirancang strategis, fokus pada kejelasan pesan, kemudahan penggunaan, dan konversi agar bisnis Anda terlihat kredibel dan siap bersaing secara digital.',
      points: [
        'Website company profile',
        'Website katalog produk',
        'Landing page promosi'
      ],
      ctaLabel: 'Cakupan Hasil Layanan',
      ctaText: 'Website Siap Online dengan desain profesional dan pesan yang jelas.',
      ctaButton: 'Mulai Proyek Anda',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80'
    },
    structure: {
      tag: 'Performa',
      title: 'Optimasi Website',
      text: 'Meningkatkan performa website dari sisi struktur, tampilan, kecepatan, hingga alur konversi agar lebih efektif menarik dan mengubah pengunjung menjadi pelanggan.',
      points: ['Audit struktur halaman', 'Perbaikan tampilan & navigasi', 'Optimasi call-to-action'],
      ctaLabel: 'Cakupan Hasil Layanan',
      ctaText: 'Rekomendasi perbaikan untuk meningkatkan performa website.',
      ctaButton: 'Optimalkan Sekarang',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'
    },
    conversion: {
      tag: 'Desain Visual',
      title: 'Desain Visual Media Sosial',
      text: 'Membuat desain visual yang konsisten dan profesional untuk memperkuat identitas brand serta meningkatkan daya tarik konten di berbagai platform digital.',
      points: ['Desain feed Instagram', 'Desain konten promosi', 'Banner campaign'],
      ctaLabel: 'Cakupan Hasil Layanan',
      ctaText: 'Template konten siap pakai untuk memperkuat brand Anda.',
      ctaButton: 'Tingkatkan Visual Brand',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80'
    },
    performance: {
      tag: 'Desain Visual',
      title: 'Materi Promosi dan Pemasaran',
      text: 'Merancang materi promosi yang komunikatif dan strategis untuk mendukung aktivitas pemasaran online maupun offline agar pesan bisnis tersampaikan dengan jelas dan menarik.',
      points: ['Brosur digital', 'Poster promosi', 'Materi iklan digital'],
      ctaLabel: 'Cakupan Hasil Layanan',
      ctaText: 'Materi iklan digital siap pakai untuk kampanye promosi.',
      ctaButton: 'Buat Materi Promosi',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80'
    },
    analytics: {
      tag: 'Konsultasi',
      title: 'Konsultasi Bisnis Digital',
      text: 'Sesi strategis untuk membantu bisnis memahami arah pengembangan digital, mulai dari perencanaan website hingga strategi pertumbuhan yang sesuai dengan kebutuhan dan kapasitas usaha.',
      points: ['Audit jejak digital', 'Perencanaan roadmap website', 'Strategi peningkatan konversi'],
      ctaLabel: 'Cakupan Hasil Layanan',
      ctaText: 'Roadmap pengembangan digital yang jelas untuk bisnis Anda.',
      ctaButton: 'Jadwalkan Konsultasi',
      image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80'
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
