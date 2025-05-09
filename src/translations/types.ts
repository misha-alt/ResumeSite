export type Language = 'en' | 'es' | 'ru';

export interface Translations {
  [key: string]: {
    nav: {
      home: string;
      about: string;
      portfolio: string;
      services: string;
      contact: string;
    };
    hero: {
      title: string;
      subtitle: string;
    };
    about: {
      title: string;
      greeting: string;
      description1: string;
      description2: string;
      description3: string;
    };
    portfolio: {
      title: string;
      viewProject: string;
      projects: {
        ecommerce: {
          title: string;
          description: string;
        };
        jira: {
          title: string;
          description: string;
        };
        saas: {
          title: string;
          description: string;
        };
      };
    };
    services: {
      title: string;
      webDev: {
        title: string;
        description: string;
      };
      animations: {
        title: string;
        description: string;
      };
      responsive: {
        title: string;
        description: string;
      };
      uiux: {
        title: string;
        description: string;
      };
      performance: {
        title: string;
        description: string;
      };
    };
    contact: {
      title: string;
      subtitle: string;
      description: string;
      form: {
        name: string;
        namePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        message: string;
        messagePlaceholder: string;
        submit: string;
      };
    };
    footer: {
      rights: string;
      madeWith: string;
      copyright: string;
    };
  };
}