export type Language = 'en' | 'ua';

type Stat = [string, string];

type Feature = {
  title: string;
  description: string;
  icon: string;
};

type CaseStudy = {
  brand: string;
  result: string;
  details: string;
};

type TranslationContent = {
  nav: {
    home: string;
    gallery: string;
    service: string;
    contacts: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  stats: Stat[];
  features: Feature[];
  caseStudies: CaseStudy[];
};

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: { home: 'Home', gallery: 'Gallery', service: 'Solutions', contacts: 'Contacts' },
    hero: {
      badge: 'Trusted by embedded-finance teams',
      title: 'Launch merchant lending products in weeks, not quarters.',
      subtitle:
        'NovaLend combines underwriting APIs, repayment automation, and portfolio analytics so your team can ship financing experiences with confidence.',
      primaryCta: 'Start your pilot',
      secondaryCta: 'Watch product tour'
    },
    stats: [
      ['Approval rate', '92%'],
      ['Avg. decision speed', '31 sec'],
      ['Monthly applications', '150k+'],
      ['Lower defaults', '-23%']
    ],
    features: [
      {
        title: 'AI risk decisioning',
        description: 'Score every merchant using transaction data, behavioral signals, and explainable risk models.',
        icon: '🤖'
      },
      {
        title: 'Flexible payment plans',
        description: 'Support fixed, revenue-share, and hybrid repayment structures with dynamic collections.',
        icon: '💳'
      },
      {
        title: 'Compliance by design',
        description: 'Automate KYC/KYB checks, policy controls, and audit-ready reporting in one place.',
        icon: '🛡️'
      }
    ],
    caseStudies: [
      {
        brand: 'Comet Marketplace',
        result: '3.2x financed GMV growth',
        details: 'Deployed NovaLend APIs in 24 days and expanded merchant credit access to 14 countries.'
      },
      {
        brand: 'Drift Commerce',
        result: '18% repeat borrowing lift',
        details: 'Used personalized offers and payment reminders to improve retention and repayment health.'
      }
    ]
  },
  ua: {
    nav: { home: 'Головна', gallery: 'Галерея', service: 'Рішення', contacts: 'Контакти' },
    hero: {
      badge: 'Нам довіряють команди embedded-finance',
      title: 'Запускайте кредитні продукти для мерчантів за тижні, а не квартали.',
      subtitle:
        'NovaLend поєднує API андеррайтингу, автоматизацію платежів і портфельну аналітику, щоб ваша команда впевнено запускала фінансування.',
      primaryCta: 'Запустити пілот',
      secondaryCta: 'Дивитися демо'
    },
    stats: [
      ['Рівень схвалення', '92%'],
      ['Середній час рішення', '31 сек'],
      ['Заявок щомісяця', '150k+'],
      ['Менше дефолтів', '-23%']
    ],
    features: [
      {
        title: 'AI-скоринг ризику',
        description: 'Оцінюйте мерчантів за транзакціями, поведінковими сигналами та прозорими моделями ризику.',
        icon: '🤖'
      },
      {
        title: 'Гнучкі плани оплати',
        description: 'Підтримуйте фіксовані, revenue-share та гібридні моделі погашення.',
        icon: '💳'
      },
      {
        title: 'Комплаєнс за замовчуванням',
        description: 'Автоматизуйте KYC/KYB перевірки, політики та звітність для аудиту в єдиній системі.',
        icon: '🛡️'
      }
    ],
    caseStudies: [
      {
        brand: 'Comet Marketplace',
        result: 'Зростання фінансованого GMV у 3.2x',
        details: 'Команда інтегрувала API NovaLend за 24 дні та масштабувала кредитування у 14 країнах.'
      },
      {
        brand: 'Drift Commerce',
        result: 'На 18% більше повторних позик',
        details: 'Персоналізовані офери та нагадування покращили утримання та платіжну дисципліну.'
      }
    ]
  }
};
