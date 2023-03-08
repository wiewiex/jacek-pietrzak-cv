import { IData } from './types';

const data: IData = {
  mainSection: {
    header: {
      fullName: 'Jacek Pietrzak',
      role: 'Full-Stack Developer (React/Node)',
    },
    profileSection: {
      photoUrl: '/profilowe.png',
      contactLinks: [
        {
          icon: '/contact-details/mail.png',
          text: 'wiewiex@gmail.com',
          link: 'mailto:wiewiex@gmail.com',
        },
        {
          icon: '/contact-details/phone.png',
          text: '788433833',
          link: 'tel:+48788433833',
        },
        {
          icon: '/contact-details/address.png',
          text: 'Kraków',
          link: 'https://goo.gl/maps/VsDf61k5KqwDZfsb9',
        },
        {
          icon: '/contact-details/linkedin.png',
          text: 'linkedin.com/in/wiewiex',
          link: 'https://linkedin.com/in/wiewiex',
        },
        {
          icon: '/contact-details/github.png',
          text: 'github.com/wiewiex',
          link: 'https://github.com/wiewiex',
        },
      ],
      aboutMe: {
        title: 'ABOUT ME',
        description:
          "Since my early childhood I've been interested in computer technologies. I spent many long nights exploring operating systems, creating websites and modifying various software according to my own needs. I am a very determined fast learner, experienced in development and creating commercial web apps.",
      },
    },
    technologies: {
      title: 'TECHNOLOGIES AND TOOLS',
      technologies: [
        { name: 'React', icon: '/technologies/react.png', level: 3 },
        {
          name: 'React Native',
          icon: '/technologies/react-native.svg',
          level: 3,
        },
        { name: 'Node.js', icon: '/technologies/node.png', level: 3 },
        { name: 'JavaScript', icon: '/technologies/js.png', level: 3 },
        { name: 'TypeScript', icon: '/technologies/ts.png', level: 3 },
        { name: 'Next.js', icon: '/technologies/next.png', level: 3 },
        { name: 'GIT', icon: '/technologies/git.png', level: 3 },
        { name: 'HTML', icon: '/technologies/html5.png', level: 3 },
        { name: 'CSS', icon: '/technologies/css3.png', level: 3 },
        { name: 'RWD', icon: '/technologies/rwd.png', level: 3 },
        { name: 'Redux Toolkit', icon: '/technologies/redux.png', level: 3 },
        { name: 'Mongoose', icon: '/technologies/mongoose.png', level: 2 },
        { name: 'Flutter', icon: '/technologies/flutter.png', level: 2 },
        { name: 'Three.js', icon: '/technologies/threejs.png', level: 2 },
        { name: 'Jest', icon: '/technologies/jest.png', level: 1 },
      ],
      tools: [
        {
          name: 'Express',
          icon: '/technologies/express.png',
        },
        {
          name: 'Mongo db',
          icon: '/technologies/mongodb.png',
        },
        {
          name: 'React query',
          icon: '/technologies/react-query.svg',
        },
        {
          name: 'Mantine',
          icon: '/technologies/mantine.svg',
        },
        {
          name: 'Docker',
          icon: '/technologies/docker.webp',
        },
        {
          name: 'Rest',
          icon: '/technologies/rest.webp',
        },
        {
          name: 'Graph ql',
          icon: '/technologies/graphql.png',
        },
        {
          name: 'Firebase',
          icon: '/technologies/firebase.png',
        },
        {
          name: 'SASS',
          icon: '/technologies/sass.png',
        },
        {
          name: 'Scrum',
          icon: '/technologies/scrum.png',
        },
      ],
    },
  },
  consent: `I hereby give consent for my personal data to be processed for the purpose
    of conducting recruitment for the position for which I am applying. I also
    consent to processing of my personal data for the purposes of any future
    recruitment processes.`,
  experience: {
    title: 'Experience',
    entries: [
      {
        position: `
            React/React Native Developer
            at apps.clinic sp. z o.o , Kraków`,
        logo: '/experience/appscliniclogo.svg',
        endTime: null,
        startTime: new Date('2022-04-20'),
        description: `<b>Geek Vertical - mobile app/desktop app.</b> Internal app for software houses. Firebase connected app. Advanced calendar support with the ability to add multiple companies. Written in React Native - Redux. The application also has a CRM base - written in NextJS/Redux. Netizens - Outsourcing work for an external client. Development of 3d furniture configurator and app that collects measurements from electrical devices installed in marinas. Both written in React.`,
      },
      {
        position: `React Developer at uaworld.pl`,
        logo: '/experience/uaworld.png',
        endTime: new Date('2022-11-20'),
        startTime: new Date('2022-04-20'),
        description: `On request of the charity foundation helping the Ukrainian artists during the war, I created a fully functional auction website based on React. I got very involved in this project and developed a lot being able to incorporate possibilities that Next.js offers, together with Wordpress as Headless CMS.`,
      },
      {
        position: `Founder, Web Developer at naukamuzykionline.pl
          (not active)`,
        logo: '/experience/nmo.png',
        endTime: new Date('2021-06-20'),
        startTime: new Date('2020-06-20'),
        description: `At the beginning of pandemic I founded a company offering online music classes. Marketing agency and a graphic designer were engaged in this project. I created a website using Wordpress and WooCommerce, took responsibility for customer service, employed music teachers and took care of organizational matters.`,
      },
      {
        position: `Professional musician`,
        endTime: null,
        startTime: new Date('2012-06-20'),
        description: `I have 12 years of experience as a professional jazz musician. The skills and intuition I have acquired over the years of composing and arranging music are very helpful in the context of programming.`,
      },
      {
        position: `Saxophone teacher`,
        endTime: new Date('2021-06-20'),
        startTime: new Date('2017-06-20'),
        description: `State Music School of the 1st degree in Mikluszowice</br>State Music School of the 1st degree in Czasław`,
      },
      {
        position: `Sound engineer at Armada Sound Studio`,
        endTime: new Date('2019-06-20'),
        startTime: new Date('2018-06-20'),
        description: '',
      },
    ],
  },
  education: {
    title: 'Education',
    entries: [
      {
        institution: 'Coders Lab',
        startYear: '2021',
        endYear: '2022',
        description: 'JavaScript Developer',
      },
      {
        institution: 'Academy of Music in Krakow',
        startYear: '2013',
        endYear: '2018',
        description:
          'University degree: Master of Arts Specialization: Jazz saxophone',
      },
      {
        institution: 'International Jazz Platform',
        startYear: '2013',
        endYear: '2019',
        description: `Participant of five international master workshops, led by outstanding jazz musicians from the whole world`,
      },
    ],
  },
};

export default data;
