// Dil çevirileri
const translations = {
  tr: {
      name: "Mehmet Berkay Yelkanat",
      title: "Yapay Zeka ve Siber Güvenlik Geliştiricisi",
      about: "Hakkımda",
      aboutText: "Yapay zeka ve siber güvenlik alanında tutkulu bir geliştiriciyim. OpenAI'nin ChatGPT, DeepSeek gibi dil modelleri üzerine araştırmalar yapıyor, otonom sistemler için yapay zeka çözümleri geliştiriyorum. Aynı zamanda siber güvenlik projeleri üzerinde çalışıyor ve açık kaynak güvenlik araçlarına katkı sağlıyorum.",
      education: "Eğitim",
      schoolLink: "Vefa Anadolu Lisesi",
      languages: "Diller",
      turkish: "Türkçe - Ana Dil",
      english: "İngilizce - B1",
      russian: "Rusça - A2",
      certificates: "Sertifikalarım",
      contact: "İletişim",
      yandexDisk: "Yandex Disk",
      github: "GitHub Profilim",
      motivationTitle: "Motivasyon",
      motivationText: "Yapay zeka tutkum, GPT modellerinin insan dilini anlama yeteneğini keşfetmemle başladı. Otonom araçlardaki bilgisayarlı görü sistemleri ve robotik kontrol algoritmaları üzerine çalışmalar yapıyorum. Büyük dil modellerinin optimizasyonu ve otonom sistemler için gerçek zamanlı karar alma mekanizmaları üzerine araştırmalarımla katkı sağlamak istiyorum.",
      whyUniversity: "Katkılarım",
      whyUniversityText: "Yapay zeka alanında geliştirdiğim open-source projeler ve optimizasyon algoritmalarıyla fark yaratabileceğime inanıyorum. Otonom sistemler için oluşturduğum simülasyon ortamları ve NLP alanındaki çalışmalarımı akademik çalışmalarla birleştirmek istiyorum. Siber güvenlik alanındaki deneyimimle de yapay zeka sistemlerinin güvenliği konusunda katkı sağlayabilirim.",
      skills: "Teknik Beceriler"
  },
  en: {
      name: "Mehmet Berkay Yelkanat",
      title: "AI and Cybersecurity Developer",
      about: "About Me",
      aboutText: "I am a passionate developer in AI and cybersecurity fields. I research on language models like ChatGPT and DeepSeek, and develop AI solutions for autonomous systems. I also work on cybersecurity projects and contribute to open-source security tools.",
      education: "Education",
      schoolLink: "Vefa Anatolian High School",
      languages: "Languages",
      turkish: "Turkish - Native",
      english: "English - B1",
      russian: "Russian - A2",
      certificates: "My Certificates",
      contact: "Contact",
      yandexDisk: "Yandex Disk",
      github: "My GitHub Profile",
      motivationTitle: "Motivation",
      motivationText: "My passion for AI began when I discovered GPT models' language understanding capabilities. I work on computer vision systems for autonomous vehicles and robotic control algorithms. I aim to contribute with my research on optimization of large language models and real-time decision mechanisms for autonomous systems.",
      whyUniversity: "My Contributions",
      whyUniversityText: "I believe I can make a difference with my open-source projects and optimization algorithms in AI field. I want to combine my simulation environments for autonomous systems and NLP studies with academic research. I can also contribute to AI system security with my cybersecurity background.",
      skills: "Technical Skills",
      security: "Cybersecurity Projects",
      project1: "Vulnerability Scanner: Python-based network scanning system",
      project2: "Encryption Protocol: Custom implementation for asymmetric encryption"
  },
  ru: {
      name: "Мехмет Беркай Елканат",
      title: "Разработчик ИИ и кибербезопасности",
      about: "Обо мне",
      aboutText: "Я увлеченный разработчик в области искусственного интеллекта и кибербезопасности. Исследую языковые модели, такие как ChatGPT и DeepSeek, разрабатываю решения ИИ для автономных систем. Также работаю над проектами по кибербезопасности и участвую в разработке инструментов с открытым исходным кодом.",
      education: "Образование",
      schoolLink: "Вефа Анатолийская средняя школа",
      languages: "Языки",
      turkish: "Турецкий - Родной",
      english: "Английский - B1",
      russian: "Русский - A2",
      certificates: "Мои сертификаты",
      contact: "Контакт",
      yandexDisk: "Яндекс Диск",
      github: "Мой GitHub профиль",
      motivationTitle: "Мотивация",
      motivationText: "Мое увлечение ИИ началось с изучения языковых моделей GPT. Я работаю над системами компьютерного зрения для автономных транспортных средств и алгоритмами управления роботами. Стремлюсь внести вклад своими исследованиями в области оптимизации больших языковых моделей и механизмов принятия решений в реальном времени для автономных систем.",
      whyUniversity: "Мой вклад",
      whyUniversityText: "Я верю, что могу внести вклад своими проектами с открытым исходным кодом и алгоритмами оптимизации в области ИИ. Хочу объединить свои симуляторы для автономных систем и исследования NLP с академической работой. Также могу способствовать безопасности ИИ-систем благодаря опыту в кибербезопасности.",
      skills: "Технические навыки",
      security: "Проекты по кибербезопасности",
      project1: "Сканер уязвимостей: Сетевая система сканирования на Python",
      project2: "Протокол шифрования: Кастомная реализация асимметричного шифрования"
  }
};

const certificates = {
  tr: [
      { name: "Sıfırdan İleri Seviye Python Programlama", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=0KohzxY0GK" },
      { name: "Python ile Siber Güvenlik Uygulamaları", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=9XrtqkMXr2" },
      { name: "Siber Güvenliğe Giriş", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=D2xh1Bdak2" },
      { name: "Siber Tehdit İstihbaratı ve Tehdit Avcılığı", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=EoPfbdxPM6" },
      { name: "Veri tabanı Saldırıları ve Veri tabanı Güvenliği", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=qKrhmkPbBJ" },
      { name: "Siber Güvenlikte Linux İşletim Sistemleri", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=nKqhobZG6p" },
      { name: "Sızma Testine Giriş", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=0KohzpVVlk" },
      { name: "DoS / DDos Saldırıları ve Koruma", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=pKmhK0bwXJ" },
      { name: "Kali Linux", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=VP1cJMnDLg" }
  ],
  en: [
      { name: "Python Programming from Beginner to Advanced", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=0KohzxY0GK" },
      { name: "Python for Cybersecurity Applications", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=9XrtqkMXr2" },
      { name: "Introduction to Cybersecurity", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=D2xh1Bdak2" },
      { name: "Cyber Threat Intelligence and Threat Hunting", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=EoPfbdxPM6" },
      { name: "Database Attacks and Database Security", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=qKrhmkPbBJ" },
      { name: "Linux Operating Systems in Cybersecurity", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=nKqhobZG6p" },
      { name: "Introduction to Penetration Testing", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=0KohzpVVlk" },
      { name: "DoS/DDoS Attacks and Protection", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=pKmhK0bwXJ" },
      { name: "Kali Linux", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=VP1cJMnDLg" }
  ],
  ru: [
      { name: "Программирование на Python от начального до продвинутого уровня", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=0KohzxY0GK" },
      { name: "Python для приложений кибербезопасности", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=9XrtqkMXr2" },
      { name: "Введение в кибербезопасность", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=D2xh1Bdak2" },
      { name: "Киберразведка и поиск угроз", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=EoPfbdxPM6" },
      { name: "Атаки на базы данных и безопасность баз данных", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=qKrhmkPbBJ" },
      { name: "Операционные системы Linux в кибербезопасности", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=nKqhobZG6p" },
      { name: "Введение в тестирование на проникновение", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=0KohzpVVlk" },
      { name: "Атаки DoS/DDoS и защита", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=pKmhK0bwXJ" },
      { name: "Kali Linux", link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=VP1cJMnDLg" }
  ]
};

const personalInfo = {
  name: "Mehmet Berkay Yelkanat",
  email: "berkayyelkanat00@gmail.com",
  phone: "+90 555 144 02 01",
  studentNumber: "10380",
  github: "https://github.com/xberkayio",
  yandex: "https://disk.yandex.com.tr/d/hf69J8rd2KKVJQ"
};

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.name').forEach(el => el.textContent = personalInfo.name);
  document.getElementById('email').textContent = personalInfo.email;
  document.getElementById('phone').textContent = personalInfo.phone;
  document.getElementById('studentNumber').textContent = "TUR-" + personalInfo.studentNumber;
  
  document.getElementById('github-link').href = personalInfo.github;
  document.getElementById('yandex-link').href = personalInfo.yandex;
  
  setLanguage('tr');
  
  document.getElementById('tr').addEventListener('click', () => setLanguage('tr'));
  document.getElementById('en').addEventListener('click', () => setLanguage('en'));
  document.getElementById('ru').addEventListener('click', () => setLanguage('ru'));
});

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
          el.textContent = translations[lang][key];
      }
  });
  
  const certificateList = document.getElementById('certificate-list');
  certificateList.innerHTML = '';
  
  certificates[lang].forEach(cert => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = cert.link;
      a.textContent = cert.name;
      li.appendChild(a);
      certificateList.appendChild(li);
  });
  
  document.querySelectorAll('.language-selector button').forEach(btn => {
      btn.style.backgroundColor = btn.id === lang ? '#fff' : 'transparent';
      btn.style.color = btn.id === lang ? '#2c3e50' : '#fff';
  });
}