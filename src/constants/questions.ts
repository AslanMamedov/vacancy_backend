import { IQuestions } from 'src/types';

export const frontendQuestions: IQuestions = {
  '1': {
    question:
      'Frontend inkişafında hansı JavaScript çərçivəsini daha üstün tutursunuz?',
    options: [
      { label: 'React', value: '1' },
      { label: 'Vue', value: '2' },
      { label: 'Angular', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '2': {
    question: 'CSS preprocessorlardan hansını daha çox istifadə edirsiniz?',
    options: [
      { label: 'Sass', value: '1' },
      { label: 'LESS', value: '2' },
      { label: 'Stylus', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '3': {
    question:
      'Performansı optimallaşdırmaq üçün hansı üsulları tətbiq edirsiniz?',
    options: [
      { label: 'Kodun minifikasiyası və ağac silkələmə', value: '1' },
      { label: 'Async/await və tənbəl yükləmə', value: '2' },
      { label: 'Hər ikisini istifadə edirəm', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '4': {
    question:
      'Frontend inkişafında hansı versiyalaşdırma alətindən istifadə edirsiniz?',
    options: [
      { label: 'Git', value: '1' },
      { label: 'Mercurial', value: '2' },
      { label: 'SVN', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '5': {
    question: 'Testlər yazmaq üçün hansı alətdən istifadə edirsiniz?',
    options: [
      { label: 'Jest', value: '1' },
      { label: 'Mocha', value: '2' },
      { label: 'Karma', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '6': {
    question: 'Hansı UI kitabxanasını daha çox istifadə edirsiniz?',
    options: [
      { label: 'Material-UI', value: '1' },
      { label: 'Ant Design', value: '2' },
      { label: 'Tailwind CSS', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '7': {
    question:
      'Frontend inkişafında hansı brauzer uyğunluğu problemlərinə daha çox rast gəlirsiniz?',
    options: [
      { label: 'CSS xüsusiyyətlərinin uyğunluğu', value: '1' },
      { label: 'JavaScript API-lərin dəstəklənməsi', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '8': {
    question: 'Responsiv dizayn üçün hansı yanaşmanı üstün tutursunuz?',
    options: [
      { label: 'Media queries', value: '1' },
      { label: 'Flexbox və Grid', value: '2' },
      { label: 'Hər ikisini', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '9': {
    question:
      'Hansı dövlət idarəetmə kitabxanasını daha çox istifadə edirsiniz?',
    options: [
      { label: 'Redux', value: '1' },
      { label: 'MobX', value: '2' },
      { label: 'Context API', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '10': {
    question:
      'Dizayn sistemlərinin tətbiqində hansı çətinliklərlə qarşılaşmısınız?',
    options: [
      { label: 'Komponentlərin yenidən istifadəsi', value: '1' },
      { label: 'Rəng və tipoqrafiya uyğunluğu', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '11': {
    question:
      'Frontend layihələrində hansı performans alətlərini istifadə edirsiniz?',
    options: [
      { label: 'Lighthouse', value: '1' },
      { label: 'Webpack Bundle Analyzer', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '12': {
    question: 'Hansı JSON işləmə üsulunu daha çox istifadə edirsiniz?',
    options: [
      { label: 'JSON.stringify və JSON.parse', value: '1' },
      { label: 'Custom serializer və deserializer', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '13': {
    question: 'Hansı brauzer inkişaf etdirici alətindən istifadə edirsiniz?',
    options: [
      { label: 'Chrome DevTools', value: '1' },
      { label: 'Firefox Developer Tools', value: '2' },
      { label: 'Hər ikisini', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '14': {
    question:
      'Frontend inkişafında hansı animasiya kitabxanasını daha çox istifadə edirsiniz?',
    options: [
      { label: 'Framer Motion', value: '1' },
      { label: 'GSAP', value: '2' },
      { label: 'Anime.js', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '15': {
    question: 'Hansı frontend paket idarəetmə alətindən istifadə edirsiniz?',
    options: [
      { label: 'npm', value: '1' },
      { label: 'yarn', value: '2' },
      { label: 'pnpm', value: '3' },
    ],
    // rightAnswer: '1',
  },
};

export const backendQuestions: IQuestions = {
  '1': {
    question:
      'Hansı backend proqramlaşdırma dilini daha üstün tutursunuz və niyə?',
    options: [
      { label: 'Node.js', value: '1' },
      { label: 'Python', value: '2' },
      { label: 'PHP', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '2': {
    question: 'RESTful API-ləri hansı prinsiplərə əsaslanaraq qurursunuz?',
    options: [
      { label: 'CRUD prinsipləri', value: '1' },
      { label: 'HATEOAS', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '3': {
    question: 'Database üçün hansı idarəetmə sistemindən istifadə edirsiniz?',
    options: [
      { label: 'MySQL', value: '1' },
      { label: 'PostgreSQL', value: '2' },
      { label: 'MongoDB', value: '3' },
    ],
    // rightAnswer: '2',
  },
  '4': {
    question: 'CORS məsələlərini necə idarə edirsiniz?',
    options: [
      { label: 'HTTP başlıqları vasitəsilə', value: '1' },
      { label: 'Proxy serverlərdən istifadə edərək', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '5': {
    question:
      'Performansı artırmaq üçün hansı keşləmə texnologiyasından istifadə edirsiniz?',
    options: [
      { label: 'Redis', value: '1' },
      { label: 'Memcached', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '6': {
    question:
      'Server təhlükəsizliyini təmin etmək üçün hansı üsulları tətbiq edirsiniz?',
    options: [
      { label: 'JWT və OAuth', value: '1' },
      { label: 'SQL Injection qorunması', value: '2' },
      { label: 'Hər ikisini', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '7': {
    question: 'Microservices arxitekturasını hansı hallarda seçirsiniz?',
    options: [
      { label: 'Böyük layihələrdə', value: '1' },
      { label: 'Kiçik layihələrdə', value: '2' },
      { label: 'Hər ikisində', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '8': {
    question: 'Hansı test metodlarından istifadə edirsiniz?',
    options: [
      { label: 'Unit testlər', value: '1' },
      { label: 'Integration testlər', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '9': {
    question: 'Hansı API dokumentasiya alətini daha çox istifadə edirsiniz?',
    options: [
      { label: 'Swagger', value: '1' },
      { label: 'Postman', value: '2' },
      { label: 'Hər ikisini', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '10': {
    question: 'Load balanslama üsullarından hansını tətbiq edirsiniz?',
    options: [
      { label: 'Round-robin', value: '1' },
      { label: 'IP Hashing', value: '2' },
      { label: 'Hər ikisini', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '11': {
    question:
      'Event-driven arxitektura üçün hansı mesajlaşma alətlərindən istifadə edirsiniz?',
    options: [
      { label: 'RabbitMQ', value: '1' },
      { label: 'Kafka', value: '2' },
      { label: 'Hər ikisini', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '12': {
    question: 'CI/CD proseslərini hansı alətlərlə idarə edirsiniz?',
    options: [
      { label: 'Jenkins', value: '1' },
      { label: 'GitHub Actions', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '13': {
    question: 'Hansı bulud provayderindən istifadə edirsiniz?',
    options: [
      { label: 'AWS', value: '1' },
      { label: 'Google Cloud', value: '2' },
      { label: 'Microsoft Azure', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '14': {
    question: 'Hansı loglama alətini daha çox istifadə edirsiniz?',
    options: [
      { label: 'Winston', value: '1' },
      { label: 'Pino', value: '2' },
      { label: 'Logstash', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '15': {
    question:
      'Backend layihələrində hansı səhv idarəetmə üsulunu tətbiq edirsiniz?',
    options: [
      { label: 'Try/catch blokları', value: '1' },
      { label: 'Mərkəzi səhv idarəetmə', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
};

export const devOpsQuestions: IQuestions = {
  '1': {
    question:
      'Hansı əməliyyat sistemini serverlər üçün daha uyğun hesab edirsiniz?',
    options: [
      { label: 'Linux', value: '1' },
      { label: 'Windows Server', value: '2' },
      { label: 'MacOS', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '2': {
    question: 'Konteynerləşdirmə üçün hansı alətdən istifadə edirsiniz?',
    options: [
      { label: 'Docker', value: '1' },
      { label: 'Kubernetes', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '3': {
    question: 'CI/CD prosesləri üçün hansı vasitələrdən istifadə edirsiniz?',
    options: [
      { label: 'Jenkins', value: '1' },
      { label: 'GitLab CI/CD', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '4': {
    question: 'Hansı konfiqurasiya idarəetmə alətinə üstünlük verirsiniz?',
    options: [
      { label: 'Ansible', value: '1' },
      { label: 'Chef', value: '2' },
      { label: 'Puppet', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '5': {
    question: 'Monitorinq və loqlama üçün hansı alətlərdən istifadə edirsiniz?',
    options: [
      { label: 'Prometheus', value: '1' },
      { label: 'Grafana', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '6': {
    question: 'Load balanslama üçün hansı strategiyanı tətbiq edirsiniz?',
    options: [
      { label: 'Round-robin', value: '1' },
      { label: 'IP Hashing', value: '2' },
      { label: 'Hər ikisini', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '7': {
    question:
      'Infrastructure as Code (IaC) üçün hansı alətləri istifadə edirsiniz?',
    options: [
      { label: 'Terraform', value: '1' },
      { label: 'CloudFormation', value: '2' },
      { label: 'Hər ikisini', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '8': {
    question:
      'Server təhlükəsizliyini təmin etmək üçün hansı metodlardan istifadə edirsiniz?',
    options: [
      { label: 'Firewall', value: '1' },
      { label: 'SSH açarları', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '9': {
    question: 'Hansı bulud provayderini daha üstün tutursunuz?',
    options: [
      { label: 'AWS', value: '1' },
      { label: 'Azure', value: '2' },
      { label: 'Google Cloud', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '10': {
    question: 'Sıxlıqla qarşılaşılan sistem problemlərini necə həll edirsiniz?',
    options: [
      { label: 'Logların təhlili', value: '1' },
      { label: 'Root cause analysis (RCA)', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '11': {
    question: 'Backup strategiyasını necə qurursunuz?',
    options: [
      { label: 'Tam backup', value: '1' },
      { label: 'Diferensial backup', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '12': {
    question:
      'Networking problemlərini diaqnoz etmək üçün hansı alətlərdən istifadə edirsiniz?',
    options: [
      { label: 'Wireshark', value: '1' },
      { label: 'Netcat', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '13': {
    question:
      'Version idarəetmə sistemi olaraq hansı vasitədən istifadə edirsiniz?',
    options: [
      { label: 'Git', value: '1' },
      { label: 'SVN', value: '2' },
      { label: 'Mercurial', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '14': {
    question: 'Hansı təhlükəsizlik skaneri ilə sistemləri yoxlayırsınız?',
    options: [
      { label: 'Nessus', value: '1' },
      { label: 'OWASP ZAP', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '15': {
    question:
      'Logların mərkəzləşdirilməsi üçün hansı alətlərdən istifadə edirsiniz?',
    options: [
      { label: 'ELK Stack', value: '1' },
      { label: 'Graylog', value: '2' },
      { label: 'Hər ikisi', value: '3' },
    ],
    // rightAnswer: '3',
  },
};

export const uiUxDesignerQuestions: IQuestions = {
  '1': {
    question: 'UI və UX arasındakı fərqi necə izah edərsiniz?',
    options: [
      {
        label:
          'UI vizual və interaktiv dizayndır, UX isə istifadəçi təcrübəsidir',
        value: '1',
      },
      { label: 'Hər ikisi eyni şeydir', value: '2' },
      {
        label: 'UI yalnız vizualdır, UX isə yalnız funksionallıqdır',
        value: '3',
      },
    ],
    // rightAnswer: '1',
  },
  '2': {
    question: 'Bir istifadəçi testi necə təşkil edərsiniz?',
    options: [
      { label: 'Təqdimat yaradıb istifadəçilərə verərdim', value: '1' },
      {
        label: 'İstifadəçilərlə birbaşa qarşılıqlı əlaqədə olardım',
        value: '2',
      },
      { label: 'Hər ikisini istifadə edərdim', value: '3' },
    ],
    // rightAnswer: '3',
  },
  '3': {
    question: 'Wireframe və prototiplər arasındakı fərq nədir?',
    options: [
      {
        label:
          'Wireframe sadə eskizlərdir, prototiplər isə daha yüksək səviyyəli işlərdir',
        value: '1',
      },
      { label: 'Wireframe və prototiplər eynidir', value: '2' },
      { label: 'Wireframe interaktiv, prototiplər isə statikdir', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '4': {
    question: 'UI dizaynı prosesində hansı alətləri istifadə edirsiniz?',
    options: [
      { label: 'Figma, Adobe XD, Sketch', value: '1' },
      { label: 'Microsoft Word, Excel', value: '2' },
      { label: 'Corel Draw, Photoshop', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '5': {
    question: 'UX dizaynı üçün hansı metodları istifadə edirsiniz?',
    options: [
      { label: 'İstifadəçi tədqiqatı, müştəri rəyləri, testlər', value: '1' },
      { label: 'Sadece vizual dizayn', value: '2' },
      { label: 'Yalnız strukturlaşdırılmış yazılar', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '6': {
    question: 'Rəng palitrası seçərkən hansı amilləri nəzərə alırsınız?',
    options: [
      {
        label: 'Marka kimliyi, istifadəçi təcrübəsi, vizual harmoniya',
        value: '1',
      },
      { label: 'Sadəcə gözəl görünməsi', value: '2' },
      { label: 'Sadəcə kontrast olması', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '7': {
    question:
      'İstifadəçi dostu interfeys yaratmaq üçün hansı prinsipləri əsas alırsınız?',
    options: [
      { label: 'Sadəlik, aydınlıq, intuitivlik', value: '1' },
      { label: 'Sadəlik və zövq alma', value: '2' },
      { label: 'Yalnız zövq alma', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '8': {
    question:
      'İnterfeyslərdə yazı ölçüsü seçərkən hansı amilləri nəzərə alırsınız?',
    options: [
      { label: 'Oxunaqlılıq və cihazın ekran ölçüsü', value: '1' },
      { label: 'Sadəcə şriftin stilini', value: '2' },
      { label: 'İstifadəçi rəyi', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '9': {
    question: 'İstifadəçi araşdırmalarında hansı üsulları istifadə edirsiniz?',
    options: [
      { label: 'Anketlər, fokus qrupları, istifadəçi sınaqları', value: '1' },
      { label: 'Yalnız anketlər', value: '2' },
      { label: 'Sadəcə fokus qrupları', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '10': {
    question: 'İstifadəçi təcrübəsi dizaynı zamanı hansı əsas məqsədiniz var?',
    options: [
      { label: 'İstifadəçinin rahatlığı və məmnuniyyəti', value: '1' },
      { label: 'Yalnız görünüşü yaxşılaşdırmaq', value: '2' },
      { label: 'Texnoloji yeniliklər təqdim etmək', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '11': {
    question: 'Hansı dizayn prinsipini daha çox ön planda tutursunuz?',
    options: [
      { label: 'İstifadəçi mərkəzli dizayn', value: '1' },
      { label: 'Təkrar istifadə oluna bilən komponentlər', value: '2' },
      { label: 'Yalnız estetik cəhətdən gözəl görünmək', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '12': {
    question: 'Mətnin dizaynını hazırlayarkən nəyi diqqətə alırsınız?',
    options: [
      { label: 'Oxuma rahatlığı və uyğunluq', value: '1' },
      { label: 'Sadəcə şrift seçimi', value: '2' },
      { label: 'Yalnız rəng seçimi', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '13': {
    question:
      'İstifadəçi təcrübəsi dizaynı prosesində hansı alətlərdən istifadə edirsiniz?',
    options: [
      { label: 'Hotjar, Google Analytics, UsabilityHub', value: '1' },
      { label: 'Sadece Figma', value: '2' },
      { label: 'Sadece Photoshop', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '14': {
    question:
      'İnteraktiv prototipləri yaratmaq üçün hansı alətlərdən istifadə edirsiniz?',
    options: [
      { label: 'Figma, InVision, Adobe XD', value: '1' },
      { label: 'Photoshop', value: '2' },
      { label: 'WordPress', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '15': {
    question: 'Bir dizayn layihəsində nə zaman test etməyə başlayırsınız?',
    options: [
      { label: 'İlk eskizlərdən sonra', value: '1' },
      { label: 'Final dizaynı hazır olduqda', value: '2' },
      { label: 'Yalnız tamamlanmış məhsulda', value: '3' },
    ],
    // rightAnswer: '1',
  },
};

export const dataScientistQuestions: IQuestions = {
  '1': {
    question: 'Data Science nədir və nə məqsəd üçün istifadə olunur?',
    options: [
      {
        label:
          'Data Science, məlumatların təhlili və bu məlumatlardan qərar qəbul etmək üçün istifadə olunur',
        value: '1',
      },
      {
        label: 'Data Science yalnız statistik analizlə əlaqəlidir',
        value: '2',
      },
      {
        label: 'Data Science yalnız məlumat toplama ilə əlaqəlidir',
        value: '3',
      },
    ],
    // rightAnswer: '1',
  },
  '2': {
    question: 'Pandas kitabxanası ilə nə cür əməliyyatlar edə bilərsiniz?',
    options: [
      { label: 'Məlumatları yükləmək, təmizləmək və analiz etmək', value: '1' },
      { label: 'Veb saytlar yaratmaq', value: '2' },
      { label: 'Verilənlər bazasına qoşulmaq', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '3': {
    question: 'SQL-də JOIN əməliyyatı nədir və hansı məqsədlə istifadə olunur?',
    options: [
      {
        label: 'İki və ya daha çox cədvəli birləşdirmək üçün istifadə olunur',
        value: '1',
      },
      {
        label: 'Verilənləri təsadüfi qaydada seçmək üçün istifadə olunur',
        value: '2',
      },
      { label: 'Məlumatların sıralanması üçün istifadə olunur', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '4': {
    question: 'Regression analizi nədir?',
    options: [
      {
        label:
          'İki və ya daha çox dəyişən arasındakı əlaqəni tapmaq üçün istifadə olunur',
        value: '1',
      },
      { label: 'Məlumatları təsadüfi seçmək üçün istifadə olunur', value: '2' },
      {
        label: 'Yalnız bir dəyişənin təsirini ölçmək üçün istifadə olunur',
        value: '3',
      },
    ],
    // rightAnswer: '1',
  },
  '5': {
    question: 'Logistic Regression nə üçün istifadə olunur?',
    options: [
      {
        label: 'Təsnifat (classification) problemlərində istifadə olunur',
        value: '1',
      },
      {
        label:
          'Yalnız sayısal verilənləri proqnozlaşdırmaq üçün istifadə olunur',
        value: '2',
      },
      {
        label: 'Verilənlərdəki meylləri tapmaq üçün istifadə olunur',
        value: '3',
      },
    ],
    // rightAnswer: '1',
  },
  '6': {
    question: 'Neural Networks nədir və hansı sahələrdə istifadə olunur?',
    options: [
      {
        label:
          'Beyin kimi işləyən kompüter sistemləridir, süni intellekt və maşın öyrənməsi sahələrində istifadə olunur',
        value: '1',
      },
      { label: 'Sadəcə verilənləri saxlamaq üçün istifadə olunur', value: '2' },
      {
        label: 'Verilənlərin saxlanması və təhlili üçün istifadə olunur',
        value: '3',
      },
    ],
    // rightAnswer: '1',
  },
  '7': {
    question:
      'Çoxölçülü verilənlərdə əsas komponent analizi (PCA) nə üçün istifadə olunur?',
    options: [
      {
        label:
          'Çoxsaylı dəyişənlərdən daha az sayda komponentlərə endirilmək üçün istifadə olunur',
        value: '1',
      },
      {
        label: 'Sadə məlumatların toplanması üçün istifadə olunur',
        value: '2',
      },
      {
        label: 'Verilənlərə sıralama tətbiq etmək üçün istifadə olunur',
        value: '3',
      },
    ],
    // rightAnswer: '1',
  },
  '8': {
    question: 'K-Means alqoritması nədir?',
    options: [
      {
        label:
          'Məlumatları qruplaşdırmaq üçün istifadə olunan bir klasterləşdirmə alqoritmasıdır',
        value: '1',
      },
      {
        label: 'Məlumatların sıralanması üçün istifadə olunan bir alqoritmadır',
        value: '2',
      },
      {
        label: 'Verilənləri düzəltmək üçün istifadə olunan bir metodudur',
        value: '3',
      },
    ],
    // rightAnswer: '1',
  },
  '9': {
    question: 'Overfitting və Underfitting arasındakı fərqlər nədir?',
    options: [
      {
        label:
          'Overfitting, modelin verilənlərə çox uyğunlaşması, underfitting isə modelin verilənləri yaxşı qavramamasıdır',
        value: '1',
      },
      {
        label:
          'Overfitting, yalnız müəyyən verilənlərdə yaxşı performans göstərməkdir, underfitting isə performansın zəif olmasıdır',
        value: '2',
      },
      {
        label:
          'Overfitting, modelin çox sadə olmasıdır, underfitting isə modelin çox mürəkkəb olmasıdır',
        value: '3',
      },
    ],
    // rightAnswer: '1',
  },
  '10': {
    question:
      'Python-da hansı kitabxanalar data science üçün geniş istifadə olunur?',
    options: [
      { label: 'Pandas, NumPy, Scikit-learn', value: '1' },
      { label: 'Flask, Django', value: '2' },
      { label: 'React, Angular', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '11': {
    question: 'Verilənlər bazasında Normalization nədir?',
    options: [
      {
        label:
          'Verilənlər bazasında məlumatların təkrarlanmasının qarşısını almaq üçün istifadə olunur',
        value: '1',
      },
      {
        label: 'Verilənləri müəyyən ardıcıllığa qoymaq üçün istifadə olunur',
        value: '2',
      },
      { label: 'Məlumatların sıralanması üçün istifadə olunur', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '12': {
    question: 'Time series təhlilində hansı metodlardan istifadə edilir?',
    options: [
      { label: 'ARIMA, Exponential Smoothing', value: '1' },
      { label: 'Linear regression, Logistic regression', value: '2' },
      { label: 'Decision Trees, K-NN', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '13': {
    question: 'Bias və variance anlayışlarını necə izah edərsiniz?',
    options: [
      {
        label:
          'Bias, modelin sadələşməsi, variance isə modelin çox mürəkkəb olmasıdır',
        value: '1',
      },
      {
        label:
          'Bias, modelin doğruluğunun yüksək olmasıdır, variance isə nəticələrin müxtəlifliyidir',
        value: '2',
      },
      { label: 'Bias və variance eyni şeydir', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '14': {
    question: 'Data Science layihələrində hansı mərhələlər mövcuddur?',
    options: [
      {
        label:
          'Məlumat toplama, təmizləmə, analiz, model qurma və qiymətləndirmə',
        value: '1',
      },
      { label: 'Məlumat toplama, analiz və təqdimat', value: '2' },
      { label: 'Model qurma və test', value: '3' },
    ],
    // rightAnswer: '1',
  },
  '15': {
    question: 'Deep Learning modelləri hansı xüsusiyyətə malikdir?',
    options: [
      {
        label:
          'Çoxsaylı təbəqələrdən ibarət olan neyron şəbəkələrdir və daha mürəkkəb tapşırıqları yerinə yetirə bilirlər',
        value: '1',
      },
      {
        label:
          'Sadə neyron şəbəkələrdən ibarətdir və yalnız sadə məsələləri həll edə bilirlər',
        value: '2',
      },
      {
        label: 'Yalnız məlumatların sıralanması üçün istifadə edilir',
        value: '3',
      },
    ],
    // rightAnswer: '1',
  },
};
