export interface NavItem {
  id: string;
  label: string;
}

export interface BiodataItem {
  label: string;
  value: string;
  accent?: boolean;
  isScore?: boolean;
}

export interface InnovationPillar {
  title: string;
  description: string;
}

export interface ProjectSpec {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface DutyItem {
  id: string;
  title: string;
  description: string;
  icon: 'inventory' | 'permit' | 'maintenance' | 'event';
}

export interface TechnicalSkill {
  name: string;
  levelLabel: string;
  percentage: number;
  active?: boolean;
}

export interface CognitiveSkill {
  title: string;
  description: string;
  icon: 'thinking' | 'engineering' | 'adaptability' | 'collaboration';
}

export interface HonorItem {
  id: string;
  year: string;
  scope: 'International' | 'Regional';
  scopeLabel: string;
  medal: string;
  title: string;
  description: string;
  location: string;
  badgeText: string;
  highlight?: boolean;
  details: string[];
}

export const HERO_CAR_LOCAL = '/assets/aistudio/screen_36f6ba75.png';
export const HERO_CAR_HOTLINK =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDvR8hAh8_bz9d0HdXHimdOvG380rZvnTjjVb3gya5pD1P6gorZ_atSDL7zdZZSqyXDxzVd934V-ggKpdDaiKir-rnSpXtuMFOfVopb1FaIOyBB57WC1HUAjk91We9yRtAEJSM-FTyKXDX2zsXs3NH9R1qtQHuuPA4TqfzDMK996KHgjCkLs5ZCvoo21dXK-U0xFJNhU0lMYulNMMXz53OmM_xDBVxkGxeWgwFP2nc';

export const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'innovation', label: 'Innovation' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
];

export const PERSONAL_INFO = {
  fullName: 'Muhammad Guntur Gamsar Sudrajat',
  firstNameSplit: 'Muhammad Guntur',
  lastNameSplit: 'Gamsar Sudrajat',
  preferredName: 'Guntur',
  dob: '4 January 2008',
  pob: 'Muara Enim, South Sumatra',
  locationBadge: 'Palembang, Sumatera Selatan',
  currentBase: 'Palembang, South Sumatra',
  email: 'guntursudrajat245@gmail.com',
  phoneDisplay: '+62 812-8776-7862',
  whatsappUrl: 'https://wa.me/6281287767862',
  tagline:
    'Driven by precision, built for impact. Science & engineering thinker turning bold ideas into real-world solutions.',
  bio: 'Saya seorang lulusan SMA jurusan Saintek dengan pengalaman di bidang Bilingual (bahasa), keterlibatan aktif dalam organisasi sekolah, terampil dalam bekerja dengan tim dan mudah beradaptasi di lingkungan yang dinamis, serta memiliki kemampuan berpikir kritis dalam menghadapi segala masalah.',
};

export const BIODATA_ITEMS: BiodataItem[] = [
  {
    label: 'ORIGIN & DOB',
    value: 'Muara Enim, 4 Jan 2008',
    accent: true,
  },
  {
    label: 'CURRENT BASE',
    value: 'Palembang, South Sumatra',
    accent: false,
  },
  {
    label: 'ACADEMIC SCORE',
    value: '91',
    accent: true,
    isScore: true,
  },
];

export const EDUCATION_RECORD = {
  period: '2022 — 2025',
  institution: "SMA Sains Al-Qur'an Wahid Hasyim Yogyakarta",
  track: 'Jurusan Kesehatan (Saintek) • Rata-rata Nilai: 91/100',
  highlightTitle: 'INTERNATIONAL RESEARCH HIGHLIGHT',
  highlightText:
    'Juara 2 World Invention Competition and Exhibition (WICE) 2024 — Applied Physics & Engineering Category, Selangor, Malaysia.',
  curriculumFocus: 'Science & Applied Tech',
  languageTrack: 'Active Bilingual Track',
};

export const INNOVATION_PROJECT = {
  code: 'SCT-WICE-24',
  title: '(SCT) Soil Cavity Tool',
  subtitle: 'Smart Solution for Sustainable Agriculture Using High Pressure Winds',
  laurel: 'WICE 2024 SILVER LAUREL',
  awardPill: '2nd Place (Silver Medal) — WICE 2024 • Selangor, Malaysia',
  domainTitle: 'Applied Physics & Mechanical Engineering Category',
  summary:
    'Sebuah inovasi teknologi aerasi tanah pneumatik bertenaga angin bertekanan tinggi yang dirancang untuk meningkatkan porositas tanah secara presisi tanpa merusak struktur ekologis mikroorganisme tanah.',
  pillars: [
    {
      title: 'High-Pressure Pneumatic Mechanism',
      description:
        'Channels pressurized airflow to create structured soil cavities efficiently without motorized tilling blades.',
    },
    {
      title: 'Sustainable Agriculture Focus',
      description:
        'Minimizes mechanical soil compaction while drastically enhancing root water absorption and nutrient dissipation.',
    },
    {
      title: 'International Engineering Validation',
      description:
        'Rigorously evaluated and recognized on the global stage at WICE 2024 in Selangor, Malaysia among hundreds of international youth innovations.',
    },
  ] as InnovationPillar[],
  specs: [
    { label: 'PROJECT CODE', value: 'SCT-WICE-24' },
    { label: 'DOMAIN', value: 'Applied Physics & Eng.' },
    { label: 'CORE TECH', value: 'High-Pressure Wind Aeration' },
    { label: 'VENUE', value: 'Selangor, Malaysia' },
    { label: 'OFFICIAL RESULT', value: '2nd Place / Silver Medal', highlight: true },
  ] as ProjectSpec[],
};

export const ORGANIZATION_EXPERIENCE = {
  title: 'Equipment Division — Bilingual Organization Student (BIOS)',
  subtitle: 'Divisi Peralatan Organisasi Santri Berbahasa',
  tenure: 'TENURE: 2024 — 2025',
  duties: [
    {
      id: 'inventory',
      title: 'Inventory & Asset Control',
      description:
        'Mendata dan mengarsipkan seluruh barang inventaris milik organisasi secara sistematis demi akurasi pelaporan dan pencegahan defisit operasional.',
      icon: 'inventory',
    },
    {
      id: 'permit',
      title: 'Logistics & Permit Management',
      description:
        'Mengurus izin birokrasi peminjaman ruangan dan perlengkapan sarana prasarana serta memastikan alur pengembalian kembali secara aman dan utuh.',
      icon: 'permit',
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Technical Care',
      description:
        'Memantau, membersihkan, dan melakukan reparasi berkala pada alat-alat yang mengalami malafungsi teknis agar selalu dalam kondisi prima siap pakai.',
      icon: 'maintenance',
    },
    {
      id: 'event',
      title: 'Event Infrastructure Execution',
      description:
        'Mengeksekusi kesiapan seluruh infrastruktur fisik panggung, tata suara (sound system), kelistrikan, serta logistik pendukung kegiatan acara sekolah.',
      icon: 'event',
    },
  ] as DutyItem[],
};

export const TECHNICAL_SKILLS: TechnicalSkill[] = [
  { name: 'Microsoft Word', levelLabel: 'BASIC // 65%', percentage: 65 },
  { name: 'Microsoft PowerPoint', levelLabel: 'BASIC // 70%', percentage: 70 },
  { name: 'Video Editing', levelLabel: 'BASIC // 60%', percentage: 60 },
  {
    name: 'Bahasa Inggris (English Communication)',
    levelLabel: 'ACTIVE // 68%',
    percentage: 68,
    active: true,
  },
];

export const COGNITIVE_SKILLS: CognitiveSkill[] = [
  {
    title: 'Critical Thinking',
    description:
      'Menganalisis anomali dan data teknis secara objektif demi keputusan tepat sasaran.',
    icon: 'thinking',
  },
  {
    title: 'Problem Solving',
    description:
      'Fokus pada dekonstruksi kendala rumit menjadi tahapan aksi realistis dan efisien.',
    icon: 'engineering',
  },
  {
    title: 'Adaptability',
    description:
      'Cepat menyesuaikan diri dalam tim kolaboratif di lingkungan dinamis yang serba baru.',
    icon: 'adaptability',
  },
  {
    title: 'Team Collaboration',
    description:
      'Komunikasi terarah dalam grup, menyatukan tujuan dengan sinergi kerja optimal.',
    icon: 'collaboration',
  },
];

export const HONORS_LIST: HonorItem[] = [
  {
    id: 'wice-2024',
    year: '2024',
    scope: 'International',
    scopeLabel: 'INTERNATIONAL LEVEL',
    medal: '🥈',
    title: 'World Invention Competition & Exhibition (WICE)',
    description:
      'Juara 2 (Silver Medal) pada kategori Applied Physics & Engineering lewat riset inovasi “Soil Cavity Tool” (SCT) di Selangor, Malaysia.',
    location: 'SELANGOR, MALAYSIA',
    badgeText: 'SILVER MEDALIST',
    highlight: true,
    details: [
      'Category: Applied Physics & Engineering',
      'Project: (SCT) Soil Cavity Tool — Pneumatic Soil Aeration',
      'Host Country: Malaysia (MAHSA University, Selangor)',
      'Award: Silver Medal (2nd Place International)',
    ],
  },
  {
    id: 'karate-kata-2016',
    year: '2016',
    scope: 'Regional',
    scopeLabel: 'REGIONAL LEVEL',
    medal: '🥈',
    title: 'Juara 2 Karate Kategori Kata',
    description:
      'Meraih medali perak dalam kejuaraan seni beladiri karate kategori jurus (Kata) tingkat kabupaten, membuktikan disiplin fisik dan fokus mental tinggi sejak usia dini.',
    location: 'REJANG LEBONG, BENGKULU',
    badgeText: 'KABUPATEN',
    details: [
      'Discipline: Martial Arts — Karate (Kata / Form)',
      'Competition Tier: Tingkat Kabupaten',
      'Placement: 2nd Place (Silver Medal)',
      'Core Traits: Precision sequencing, focus, and physical discipline',
    ],
  },
  {
    id: 'karate-kumite-2016',
    year: '2016',
    scope: 'Regional',
    scopeLabel: 'REGIONAL LEVEL',
    medal: '🥉',
    title: 'Juara 3 Karate Kategori Kumite',
    description:
      'Meraih medali perunggu dalam kategori pertarungan langsung (Kumite) tingkat kabupaten, mengasah kecepatan kalkulasi taktis dan ketahanan kompetisi.',
    location: 'REJANG LEBONG, BENGKULU',
    badgeText: 'KABUPATEN',
    details: [
      'Discipline: Martial Arts — Karate (Kumite / Sparring)',
      'Competition Tier: Tingkat Kabupaten',
      'Placement: 3rd Place (Bronze Medal)',
      'Core Traits: Tactical reaction speed, composure under pressure',
    ],
  },
];
