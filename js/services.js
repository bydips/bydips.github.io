const serviceItems = document.querySelectorAll('.service-item');

if (serviceItems.length) {
  const serviceMap = {
    clarity: {
      tag: 'Core Service',
      title: 'Brand Clarity Mapping',
      text: 'Menyusun pesan utama agar pengunjung paham brand kamu dalam hitungan detik, bukan setelah membaca seluruh halaman.',
      points: [
        'Audit hierarchy pesan bisnis',
        'Refine value proposition per segmen',
        'Direction copy untuk hero dan CTA'
      ],
      ctaLabel: 'Deliverable',
      ctaText: 'Blueprint narasi brand yang siap dipakai di landing page.',
      ctaButton: 'Lihat Scope Clarity',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80'
    },
    structure: {
      tag: 'System Build',
      title: 'Page Structure Design',
      text: 'Membuat arsitektur halaman yang disiplin supaya alur baca lebih fokus dan tidak kehilangan momentum conversion.',
      points: ['Information architecture halaman', 'Prioritas konten tiap fold', 'Skenario CTA primer dan sekunder'],
      ctaLabel: 'Deliverable',
      ctaText: 'Wireframe terstruktur dengan urutan konten berbasis intent.',
      ctaButton: 'Lihat Scope Structure',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'
    },
    conversion: {
      tag: 'Growth Layer',
      title: 'Conversion Flow Build',
      text: 'Setiap section diarahkan ke aksi yang masuk akal: booking, chat, atau brief submission tanpa friksi berlebihan.',
      points: ['CTA map per tahap intent', 'Desain trust signal dan proof', 'Optimasi microcopy tombol dan form'],
      ctaLabel: 'Deliverable',
      ctaText: 'Flow conversion yang lebih tajam dari klik sampai tindakan.',
      ctaButton: 'Lihat Scope Conversion',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80'
    },
    performance: {
      tag: 'Technical Layer',
      title: 'Performance Optimization',
      text: 'Menjaga halaman cepat dan stabil agar user experience tetap nyaman dan biaya traffic tidak terbuang.',
      points: ['Optimasi asset visual', 'Kontrol layout shift dan rendering', 'Perbaikan struktur semantik dasar'],
      ctaLabel: 'Deliverable',
      ctaText: 'Landing page ringan dan siap scale untuk traffic campaign.',
      ctaButton: 'Lihat Scope Performance',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80'
    },
    analytics: {
      tag: 'Measurement Layer',
      title: 'Analytics Baseline',
      text: 'Menyusun baseline tracking sederhana supaya keputusan iterasi kamu berbasis data, bukan asumsi.',
      points: ['Rancang event utama halaman', 'Setup funnel simple dan KPI awal', 'Template insight untuk review bulanan'],
      ctaLabel: 'Deliverable',
      ctaText: 'Dashboard awal untuk melihat arah pertumbuhan conversion.',
      ctaButton: 'Lihat Scope Analytics',
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
