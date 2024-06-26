import { ECardType, TSection } from "./types/index.ts";

const year = new Date().getFullYear()
// const downloadCountsGrafana = {
//   shiftSelector: 'https://grafana.com/api/plugins/isaozler-shiftselector-panel/versions',
//   paretoChart: 'https://grafana.com/api/plugins/isaozler-paretochart-panel/versions',
// }

/** This is the data type */
export type TData = {
  sections: TSection[]
}

/** This function returns the ages of my daughters and son. */
const getAges = (): string => `(${year - 2009}, ${year - 2013}) and a son (${year - 2015})`;

/**
  * Get all data
  *
  * @param isAbsolute In case client needs the data with an absolute URL
  * @returns TData typed data within sections
  */
export const getAll = (isAbsolute = false): TData => {
  const baseURL = isAbsolute ? 'https://isaozler.com' : ''
  return {
    sections: [
      {
        id: 'profile',
        title: 'Profile',
        cards: [
          {
            id: 'profile.profile',
            type: ECardType.AVATAR,
            title: 'Profile',
            data: {
              image: {
                src: `${baseURL}/isa-ozler.jpg`,
                caption: 'Isa Ozler',
              },
              text: '"devoted to solving complex challenges with innovative solutions"',
              footNote: 'Amsterdam, The Netherlands',
            },
          },
          {
            id: 'profile.quickFacts',
            type: ECardType.LIST,
            title: 'Personalia',
            data: {
              hasLabels: false,
              list: [
                {
                  label: '',
                  value: 'Born and living in Amsterdam, The Netherlands.',
                },
                {
                  label: 'Marital status',
                  value: `Married and father of two daughters ${getAges()}.`,
                },
                {
                  label: 'Email',
                  value: 'You can contactme @ isaozler.com',
                  href: {
                    link: 'mailto: //contactme@isaozler.com',
                    isSameSite: false,
                  },
                },
              ],
            },
          },
          {
            id: 'profile.languages',
            type: ECardType.ICONLIST,
            title: 'Languages',
            data: {
              list: [
                {
                  icon: {
                    src: `${baseURL}/icons/en-flag.jpg`,
                    caption: 'English',
                  },
                  label: 'English',
                  value: 'C1',
                },
                {
                  icon: {
                    src: `${baseURL}/icons/nl-flag.jpg`,
                    caption: 'Dutch',
                  },
                  label: 'Dutch',
                  value: 'Native',
                },
                {
                  icon: {
                    src: `${baseURL}/icons/tr-flag.jpg`,
                    caption: 'Turkish',
                  },
                  label: 'Turkish',
                  value: 'Native',
                },
              ],
            },
          },
          {
            id: 'profile.links',
            type: ECardType.ICONLIST,
            title: 'Links',
            data: {
              list: [
                {
                  icon: {
                    src: `${baseURL}/icons/github.svg`,
                    caption: 'Github',
                  },
                  label: 'GitHub',
                  value: 'github.com/isaozler',
                  href: {
                    link: 'https://github.com/isaozler',
                    isSameSite: false,
                  },
                },
                {
                  icon: {
                    src: `${baseURL}/icons/x.svg`,
                    caption: 'X (Formerly Twitter)',
                  },
                  label: 'X',
                  value: 'x.com/isaozler',
                  href: {
                    link: 'https://x.com/isaozler',
                    isSameSite: false,
                  },
                },
                {
                  icon: {
                    src: `${baseURL}/icons/linkedIn.svg`,
                    caption: 'LinkedIn',
                  },
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/isaozler',
                  href: {
                    link: 'https://www.linkedin.com/in/isaozler',
                    isSameSite: false,
                  },
                },
                {
                  icon: {
                    src: `${baseURL}/icons/behance.svg`,
                    caption: 'Behance',
                  },
                  label: 'Behance',
                  value: 'behance.net/isaozler',
                  href: {
                    link: 'https://www.behance.net/isaozler',
                    isSameSite: false,
                  },
                },
                {
                  icon: {
                    src: `${baseURL}/icons/figma.svg`,
                    caption: 'Figma',
                  },
                  label: 'Figma',
                  value: 'figma.com/@isaozler',
                  href: {
                    link: 'https://figma.com/@isaozler',
                    isSameSite: false,
                  },
                },
              ],
            },
          },
        ],
      },
      {
        id: 'about',
        title: 'About',
        cards: [
          {
            id: 'about.intro',
            type: ECardType.CONTENT,
            title: 'Worked & Lived',
            description: 'Short bio',
            data: {
              text: [
                'Extensive international experience, in-country working and living experience in the Netherlands, Belgium, and Turkey.',
                'Worked on several remote projects for companies around the world. The United States, Saudi Arabia, France, and England.',
                'Have experienced wide set of domains ranging from eCommerce, energy, financial systems, textile, beverages, and telecom to call a few.',
                '<img src="/map.png" alt="Places I have worked, lived, or travelled" />',
              ],
            },
          },
        ],
      },
      {
        id: 'education',
        title: 'Education',
        cards: [
          {
            id: 'education.list',
            type: ECardType.EDUCATION,
            title: 'Education',
            description: 'Period 2002-2008',
            data: {
              items: [
                {
                  image: {
                    src: `${baseURL}/logos/uu.jpg`,
                    params: {},
                  },
                  title: 'Utrecht University',
                  subTitle: 'Pre-Master Edu. Science',
                  placeDate: '2006, The Netherlands',
                },
                {
                  image: {
                    src: `${baseURL}/logos/hu.jpg`,
                    params: {},
                  },
                  title: 'HU University of Applied Sciences Utrecht',
                  subTitle: '2nd Degree Physics',
                  placeDate: '2004 - 2008, The Netherlands',
                },
                {
                  image: {
                    src: `${baseURL}/logos/hh.jpg`,
                    params: {},
                  },
                  title: 'The Hague University of Applied Sciences',
                  subTitle: 'Industrial and Product Design',
                  placeDate: '2003 - 2004, The Netherlands',
                },
                {
                  image: {
                    src: `${baseURL}/logos/hku.jpg`,
                    params: {},
                  },
                  title: 'HKU (Hogeschool voor de Kunsten Utrecht)',
                  subTitle: 'User Interface & Interaction Design',
                  placeDate: '2002 - 2003, The Netherlands',
                },
              ],
            },
          },
          {
            id: 'education.certifications',
            type: ECardType.EDUCATION,
            title: 'Licenses & certifications',
            data: {
              items: [
                {
                  image: {
                    src: `${baseURL}/logos/aws.jpg`,
                    caption: 'Amazon Web Services',
                    params: {},
                  },
                  title: 'Solutions Architect Associate',
                  subTitle: 'Amazon Web Services',
                  placeDate: '2020 - 2022',
                  credential: {
                    id: 'mMdCpsKrvkuH6tveFZCVUA2',
                  },
                },
                {
                  image: {
                    src: `${baseURL}/logos/aws.jpg`,
                    caption: 'Amazon Web Services',
                    params: {},
                  },
                  title: 'Cloud Practitioner',
                  subTitle: 'Amazon Web Services',
                  placeDate: '2020, No Expiration Date',
                  credential: {
                    id: 'mV4O-kSqeE202bSkzgANrA2',
                  },
                },
                {
                  image: {
                    src: `${baseURL}/logos/solace.jpg`,
                    caption: 'Solace',
                    params: {},
                  },
                  title: 'Fundamentals of Solace Development',
                  subTitle: 'Solace',
                  placeDate: '2020, No Expiration Date',
                  credential: {
                    id: 'UC-E6K53XXH',
                  },
                },
                {
                  image: {
                    src: `${baseURL}/logos/udemy.jpg`,
                    caption: 'Udemy',
                    params: {},
                  },
                  title: 'The complete guide to becoming solution architect',
                  subTitle: 'Udemy',
                  placeDate: '2020, No Expiration Date',
                  credential: {
                    id: 'UC-ZIUHYJW2',
                  },
                },
              ],
            },
          },
        ],
      },
      {
        id: 'experience',
        title: 'Experience',
        cards: [
          {
            id: 'experience.list',
            type: ECardType.EXPERIENCE,
            title: 'Experience',
            description: `Period 2006-${year
              } (${year - 2006
              } years)`,
            data: {
              imagePlaceholder: {
                src: `${baseURL}/logos/icon-placeholder.png`,
              },
              items: [
                {
                  image: {
                    src: `${baseURL}/logos/kadena.png`,
                    params: {
                      priority: true,
                    },
                  },
                  title: 'Kadena LLC',
                  subTitle: 'Product Design (UI/UX)',
                  placeDate: 'Dec 2022, The Netherlands',
                  roles: [
                    'In charge of the design of all products, apps, and technical documentation, including building the components that can be used in these.',
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/abn-amro.jpg`,
                    params: {},
                  },
                  title: 'ABN Amro N.V.',
                  subTitle: 'Engineer + Lead UI/UX',
                  placeDate: 'Jan 2022 - Dec 2022, The Netherlands',
                  roles: ['Datamarket Place (Internal Data Governance App) development', 'Lead UI/UX Data Marketplace'
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/heineken.jpg`,
                    params: {},
                  },
                  title: 'Heineken Global',
                  subTitle: 'Mission Critical Engineer',
                  placeDate: '2020-2022, The Netherlands',
                  projects: [
                    {
                      label: 'Building a new IoT platform that enables Heineken breweries to be future-proof.'
                    },
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/vfz.jpg`,
                    params: {},
                  },
                  title: 'Vodafone Ziggo',
                  subTitle: 'Frontend Developer',
                  placeDate: '2018-2019, The Netherlands',
                  projects: [
                    {
                      label: 'Vodafone: B2B Account Management App'
                    },
                    {
                      label: 'Ziggo: Maintenance and migration to Adobe Experience Manager'
                    },
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/mnx.jpg`,
                    params: {},
                  },
                  title: 'Monitor X',
                  subTitle: 'Fullstack developer / DevOps / UI/UX + Brand developer',
                  placeDate: '2018-2022, The Netherlands',
                  roles: [
                    'Brand Developer',
                    'Frontend Developer (web apps)',
                    'Backend Developer (web apps)',
                    'DevOps (Vodafone - Monitor X VPC Cloud integration on AWS with Vodafone Infrastructure)',
                    'Product Designer',
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/fioritmo.jpg`,
                    params: {},
                  },
                  title: 'Fioritmo B.V.',
                  subTitle: 'Founder, Fullstack, DevOps, UI/UX, Mobile App Dev',
                  placeDate: '2018, The Netherlands',
                },
                {
                  image: {
                    src: `${baseURL}/logos/bosch.jpg`,
                    params: {},
                  },
                  title: 'BOSCH Turkey',
                  subTitle: 'Frontend Developer',
                  placeDate: '2018, Turkey, Istanbul',
                  projects: [
                    {
                      label: 'Internal HR Personal Improvement App Development'
                    }
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/pg.jpg`,
                    params: {},
                  },
                  title: 'P&G Turkey',
                  subTitle: 'Fullstack Developer',
                  placeDate: '2018, Turkey, Istanbul',
                  projects: [
                    {
                      label: 'Truck Tracker IoT Project (POC)',
                      children: [
                        {
                          label: 'UI/UX Designs + Prototyping'
                        }
                      ],
                    },
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/uludag.jpg`,
                    params: {},
                  },
                  title: 'Uludag Icecek',
                  subTitle: 'Fullstack + UI/UX developer',
                  placeDate: '2018, Turkey, Istanbul',
                  projects: [
                    {
                      label: 'B2B Resellers admin portal (POC e2e)',
                      children: [
                        {
                          label: 'SAP integration + development'
                        },
                        {
                          label: 'UI/UX Designs + Interactive wireframing',
                        },
                        {
                          label: 'API development'
                        },
                      ],
                    },
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/ido.jpg`,
                    params: {},
                  },
                  title: 'IDO - Istanbul Ferry',
                  subTitle: 'Fullstack + UI/UX developer',
                  placeDate: '2018, Turkey, Istanbul',
                  projects: [
                    {
                      label: 'Web Developer / Designer + Brand developer',
                      children: [
                        {
                          label: 'UI/UX B2C Mobile App'
                        },
                        {
                          label: 'SAP Hybris B2C eCommerce web development'
                        },
                        {
                          label: 'Branding Hepido Loyalty program'
                        },
                      ],
                    },
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/ayaydin.jpg`,
                    params: {},
                  },
                  title: 'Ayaydin-Mirogly Group',
                  subTitle: 'Mobile UI/UX Designer',
                  placeDate: '2018, Turkey, Istanbul',
                  projects: [
                    {
                      label: 'Mobile In-Store Customer Service Application Designs',
                    },
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/koctas.jpg`,
                    params: {},
                  },
                  title: 'Koctas',
                  subTitle: 'Technical Lead',
                  placeDate: '2018, Turkey, Istanbul',
                  projects: [
                    {
                      label: 'Mobile SAP Hybris B2C e-Commerce iOS and Android development'
                    }
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/lcwaikiki.jpg`,
                    params: {},
                  },
                  title: 'LC Waikiki Global',
                  subTitle: 'Frontend Developer',
                  placeDate: '2017-2018, Turkey, Istanbul',
                  projects: [
                    {
                      label: 'B2C SAP Hybris e-Commerce Storefront Development'
                    }
                  ],
                },
                {
                  title: 'Sooce Games',
                  subTitle: 'Fullstack Developer',
                  placeDate: '2016-2018, Turkey, Istanbul',
                  projects: [
                    {
                      label: 'Developed and maintained game and application APIs'
                    }
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/stc.jpg`,
                    params: {},
                  },
                  title: 'STC (Saudi Telecom Company)',
                  subTitle: 'Mobile Development Team Lead',
                  placeDate: '2017, Turkey, Istanbul',
                  projects: [
                    {
                      label: 'Mobile B2C Loyalty Application Project'
                    }
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/ziylan.jpg`,
                    params: {},
                  },
                  title: 'Ziylan Group',
                  subTitle: 'Frontend Developer',
                  placeDate: '2017, Turkey, Istanbul',
                  projects: [
                    {
                      label: 'Flo B2C SAP Hybris e-Commerce Web Development'
                    }
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/eh.jpg`,
                    params: {},
                  },
                  title: 'ENGLISH HOME',
                  subTitle: 'Mobile UI/UX Designer',
                  placeDate: '2016, Turkey, Istanbul',
                  projects: [
                    {
                      label: 'B2C eCommerce Mobile App'
                    }
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/borusan.jpg`,
                    params: {},
                  },
                  title: 'Borusan Holding',
                  subTitle: 'Project Lead UI/UX Developer',
                  placeDate: '2015, Turkey, Istanbul',
                  projects: [
                    {
                      label: 'B2C eCommerce Mobile App'
                    }
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/aydinli.jpg`,
                    params: {},
                  },
                  title: 'Aydinli Group A.S',
                  subTitle: 'Project Lead UI/UX Developer',
                  placeDate: '2014-2015, Turkey, Istanbul',
                  projects: [
                    {
                      label: 'Mobile UI/UX Designer'
                    },
                    {
                      label: 'Fullstack Developer'
                    },
                    {
                      label: 'CMS WebApp for Mobile Content + App Management'
                    },
                    {
                      label: 'API Design'
                    },
                  ],
                  achievements: [
                    'Increased total gross sell by 15% from 5% to 20% on the mobile platform (Gross turnover ~2B TRY)',
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/farabius.jpg`,
                    params: {},
                  },
                  title: 'Farabius',
                  subTitle: 'Co-Founder, Fullstack + UI/UX',
                  placeDate: '2014-2016, Turkey, Istanbul',
                  achievements: ['Managed to develop an application with a total transaction amount of ~ $1M'
                  ],
                },
                {
                  image: {
                    src: `${baseURL}/logos/featherlight-design.jpg`,
                    params: {},
                  },
                  title: 'Featherlight Design',
                  subTitle: 'Founder, Fullstack + UI/UX',
                  placeDate: '2006-2014, The Netherlands',
                  achievements: ['Branded / re-branded 2 brands which are today still in use for more then 10 years'
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        id: 'work',
        title: 'Work',
        cards: [
          {
            id: 'work.items',
            type: ECardType.WORK,
            title: 'Work',
            description: 'Detailed information about the projects will follow asap.',
            data: {
              items: [
                {
                  id: 'kode-mono-typography',
                  title: 'Kode Mono Typeface',
                  type: 'Typography Design & development',
                  deliverables: [
                    {
                      label: 'Monospace Font published at <strong>Google Fonts</strong>'
                    },
                    {
                      label: 'Open-source Variable Typeface'
                    },
                  ],
                  image: {
                    src: `${baseURL}/covers/kode-mono.png`,
                    caption: 'Kode Mono Typography',
                    params: {
                      priority: true,
                    },
                  },
                  description:
                    'A custom-designed typeface explicitly created for the developer community. Designed to enhance the user experience and reflect the principles of functionality and timelessness.',
                  links: [
                    {
                      href: 'https://fonts.google.com/specimen/Kode+Mono',
                      target: '_blank',
                      title: 'See @ Google Fonts',
                    },
                    { href: 'https://kodemono.com', target: '_blank', title: 'Official website @ kodemono.com' },
                  ],
                },
                {
                  title: 'Heineken Connected Brewery',
                  id: 'heineken-connected-brewery',
                  type: 'Mission Critical Engineer',
                  deliverables: [
                    {
                      label: 'Dashboard Development'
                    }
                  ],
                  image: {
                    src: `${baseURL}/covers/connected-brewery.jpg`,
                    caption: 'Heineken Connected Brewery',
                    params: {},
                  },
                  description:
                    'A data-driven, internt-of-things <code>(IoT)</code> platform that its operations teams use to help and enable employees on the shop floor. In 2020, Heineken connected <code>16 production lines</code> to the platform in two months. As a result, the brewer increased efficiency, realized return on investment, and improved employee morale.',
                  links: [
                    {
                      href: 'https://youtu.be/liMA7WabMlE?t=474',
                      target: '_blank',
                      title: 'AWS re:Event Talk Heineken Connected Brewery',
                    },
                    {
                      href: 'https://aws.amazon.com/partners/success/heineken-schuberg-philis/',
                      target: '_blank',
                      title: 'Success story @ aws.amazon.com/partners',
                    },
                  ],
                },
                {
                  title: 'Grafana Pareto Chart Plugin',
                  id: 'grafana-pareto-chart-plugin',
                  type: 'Grafana Panel Plugin',
                  deliverables: [
                    {
                      label: `<strong style="color: red;" title="2.064.095">2+ Million</strong> downloads (@ ${new Intl.DateTimeFormat(
                        undefined,
                        {
                          dateStyle: 'medium'
                        }
                      ).format(new Date('04 March 2024'))
                        })`,
                    },
                    {
                      label: 'Grafana Panel Plugin'
                    },
                  ],
                  image: {
                    src: `${baseURL}/covers/pareto-chart--grafana.jpg`,
                    caption: 'Grafana Pareto Plugin',
                    params: {},
                  },
                  description:
                    'This plugin provides you the ability to draw a Pareto chart with <code>RDB</code> and <code>TimeSeries databases</code>.',
                  links: [
                    {
                      href: 'https://grafana.com/grafana/plugins/isaozler-paretochart-panel/',
                      target: '_blank',
                      title: 'Grafana Pareto Plugin Page',
                    },
                  ],
                },
                {
                  title: 'Grafana Shift Selector Plugin',
                  id: 'grafana-shift-selector-plugin',
                  type: 'Grafana Panel Plugin',
                  deliverables: [
                    {
                      label: `<strong style="color: red;">${new Intl.NumberFormat().format(
                        303454
                      )
                        }</strong> downloads (@ ${new Intl.DateTimeFormat(undefined,
                          {
                            dateStyle: 'medium'
                          }).format(
                            new Date('04 March 2024')
                          )
                        })`,
                    },
                    {
                      label: 'Grafana Panel Plugin'
                    },
                  ],
                  image: {
                    src: `${baseURL}/covers/grafana-shift-selector.png`,
                    caption: 'Grafana Shift Selector Plugin',
                    params: {},
                  },
                  description:
                    'The shift selector plugin allows you to adjust the time range of your Grafana dashboard to one <code>specific shift</code> or a range of shifts. This page will show how it works and how to change the displayed shifts to a particular season or production line.',
                  links: [
                    {
                      href: 'https://grafana.com/grafana/plugins/isaozler-shiftselector-panel/',
                      target: '_blank',
                      title: 'Grafana Shift Selector Plugin Page',
                    },
                  ],
                },
                {
                  title: 'IUASR Re-Branding',
                  id: 'iuasr-rebranding',
                  type: 'Branding, Web Design',
                  deliverables: [
                    {
                      label: 'Corporate Identity'
                    },
                    {
                      label: 'Guides'
                    },
                    {
                      label: 'Assets'
                    },
                    {
                      label: 'Web Design'
                    },
                  ],
                  image: {
                    caption: 'IUASR Re-Branding',
                    src: `${baseURL}/covers/iuasr.jpg`,
                    params: {},
                  },
                },
                {
                  title: 'Vodafone Advice Tool',
                  id: 'vodafone-advice-tool',
                  subTitle: 'https://www.vodafone.nl/zakelijk/keuzehulp',
                  type: 'Web Application Development + UX',
                  deliverables: [
                    {
                      label: 'Vue Web Application'
                    }
                  ],
                  image: {
                    caption: 'Vodafone Advice Tool',
                    src: `${baseURL}/covers/vodafone-advice-tool.jpg`,
                    params: {},
                  },
                  description: 'Advice tool to get the best communication solutions package that fits your company.',
                },
                {
                  title: 'MonitorX',
                  id: 'monitor-x-home-management-system',
                  subTitle: 'https://monitorx.net',
                  type: 'Fullstack Development + DevOps, UI/UX & Tech Lead',
                  deliverables: [
                    {
                      label: 'AWS VPC Setup + integration with Vodafone infrastructure'
                    },
                    {
                      label: 'API Development'
                    },
                    {
                      label: 'Data Management'
                    },
                    {
                      label: 'Mobile Application UI/UX'
                    },
                  ],
                  image: {
                    caption: 'MonitorX',
                    src: `${baseURL}/covers/mnx.jpg`,
                    params: {},
                  },
                  description:
                    'MonitorX is a all-in-one <code>“Home Energy Management System”</code>, that provides insights of all in-house energy sources available.',
                },
                {
                  title: 'Hepido Loyalty Program Branding',
                  id: 'ido-loyalty-program-branding-hepido',
                  type: 'Branding',
                  deliverables: [
                    {
                      label: 'Loyalty Program Branding'
                    },
                    {
                      label: 'Campaign assets'
                    }
                  ],
                  image: {
                    src: `${baseURL}/covers/hepido.jpg`,
                    caption: 'Hepido Loyalty Program Branding',
                    params: {},
                  },
                  description: 'Hepido is a loyalty program of IDO. My role was the development of the new brand.',
                  links: [
                    {
                      href: 'https://www.behance.net/gallery/62437681/IDO-Hepido-Corporate-Identity-Mobile-App-Design',
                      target: '_blank',
                      title: 'Project details @behance.net',
                    },
                  ],
                },
                {
                  title: 'LC Waikiki',
                  id: 'lc-waikiki-global-ecommerce-storefront',
                  subTitle: 'Global eCommerce storefront',
                  type: 'Web Application + SAP Integration',
                  deliverables: [
                    {
                      label: 'Angular App'
                    }
                  ],
                  image: {
                    caption: 'LC Waikiki',
                    src: `${baseURL}/covers/lc-waikiki.jpg`,
                    params: {},
                  },
                  links: [
                    {
                      href: 'https://www.behance.net/gallery/68267819/B2C-SAP-Hybris-e-Commerce-Storefront',
                      target: '_blank',
                      title: 'Project details @behance.net',
                    },
                  ],
                },
                {
                  title: 'US Polo',
                  id: 'us-polo-mobile-application',
                  type: 'Mobile Application UI/UX, Development Lead',
                  deliverables: [
                    {
                      label: 'Native Mobile App (Swift + Kotlin)'
                    },
                    {
                      label: 'Sketch Designs'
                    },
                    {
                      label: 'Axure Prototyping'
                    },
                  ],
                  image: {
                    caption: 'US Polo',
                    src: `${baseURL}/covers/us-polo.jpg`,
                    params: {},
                  },
                  links: [
                    {
                      href: 'https://www.behance.net/gallery/68266567/AYDINLI-USPA-B2C-e-Commerce-Clients-(iOS-Android)',
                      target: '_blank',
                      title: 'Project details @behance.net',
                    },
                  ],
                },
                {
                  title: 'Dardanelles 100th Anniversary Campaign Branding',
                  id: 'dardanelles-100-th-anniversary-campaign-branding',
                  type: 'Branding',
                  deliverables: [
                    {
                      label: 'Corporate Identity'
                    }
                  ],
                  image: {
                    caption: 'Dardanelles 100th Anniversary Campaign Branding',
                    src: `${baseURL}/covers/canakkale-100-logo.jpg`,
                    params: {},
                  },
                  links: [
                    {
                      href: 'https://www.behance.net/gallery/20021697/Canakkale-Zaferi-100-Yasinda',
                      target: '_blank',
                      title: 'Project details @behance.net',
                    },
                  ],
                },
                {
                  title: 'eTA B2B Freight Management Mobile App',
                  id: 'eta-b2b-freight management-mobile-app',
                  type: 'Mobile App Design, Development Lead',
                  deliverables: [
                    {
                      label: 'Native Mobile App'
                    }
                  ],
                  image: {
                    caption: 'eTA B2B Freight Management Mobile App',
                    src: `${baseURL}/covers/eta-b2b.jpg`,
                    params: {},
                  },
                  links: [
                    {
                      href: 'https://www.behance.net/gallery/68878257/ETA-B2B-Freight-Management-Mobile-App',
                      target: '_blank',
                      title: 'Project details @behance.net',
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  }
}
