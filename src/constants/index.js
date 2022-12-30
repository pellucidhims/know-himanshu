export const LINKS = [
  {
    id: 'home',
    label: 'Home',
    to: 'home',
  },
  {
    id: 'about',
    label: 'About',
    to: 'about',
  },
  {
    id: 'skills',
    label: 'Skills',
    to: 'skills',
  },
  {
    id: 'education',
    label: 'Education',
    to: 'education',
  },
  {
    id: 'experience',
    label: 'Experience',
    to: 'experience',
  },
  {
    id: 'project',
    label: 'Project',
    to: 'project',
  },
  {
    id: 'referral',
    label: 'Referral',
    to: 'referral',
  },
  {
    id: 'blog',
    label: 'Blog',
    to: 'blog',
  },
  {
    id: 'contact',
    label: 'Contact',
    to: 'contact',
  },
];

export const someOtherVar = {
  item: '1',
};

export const apiLoadStatus = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
};

export const experiences = [
  {
    id: '2015',
    duration: 'June 2015 - July 2015',
    institute: 'Truly Madly Matchmakers Pvt. Ltd.',
    degree: 'Undergraduate Intern',
    stream: '',
    description: `Interaction with EC2 machines or Elastic Compute Cloud
        machines on which ‘Not only’ (No) SQL such as REDIS (Remote
        Dictionary Server) was to be installed along with setting up of
        master-slave configuration and monitoring the same with the help of another tool called Sentinel that is used to monitor the
        proper functioning of the master-slave configuration and send
        mails in case of failure. All this was done using Boto Fabric. Setting up of alarms (using Boto Fabric) to monitor a particular
        instance with respect to various metrics viz. CPU utilization,
        Memory utilization, Disk utilization, Network threshold etc. was
        done to send alert mails to specified mail id’s whenever the
        respective values crossed the set threshold values.`,
    icon: 'computer',
    iconColor: 'primary',
  },
  {
    id: '2016',
    duration: '2016-2019',
    institute: 'HSBC Software Development India Ltd.',
    degree: 'Software Engineer | Senior Software Engineer',
    stream: '',
    description: `Developed an online portal by the name 'Solution Hub'  where users can actively register and ask/answer questions along with many other functionalities like upvote, edit, delete answers and questions, maintain and update his/her profile.Technologies used include - ReactJS, NodeJS, ExpressJS, Multer, MongoDB etc.
        Developed a portal for HSBCNet users to download reports with an enhanced UI, built using ReactJS.
        Developed UI screens for on-boarding HSBC's commercial customers. The customer approaches the bank RM's who then guide bank's staff to onboard the customer by creating a case. Bank staff feeds in customer details and attaches relevant services to the customer. At the end PDF is generated which will be signed by the customer. The customer, once a case is created for them can also login via customer portal and edit details by a responsive Ui.`,
    icon: 'business',
    iconColor: 'secondary',
  },
  {
    id: '2019',
    duration: '2019-2020',
    institute: 'Ernst and Young GDS',
    degree: 'Senior Associate',
    stream: '',
    description: `Task involved design discussion and implementation of efficient and scalable solutions to business problems.
        Worked with frontend technologies like Javascript (ReactJS), CSS along with backend technologies like Nodejs, MongoDB to develop products for varied business requirements.
        Worked in an agile manner so as to effectively meet development and deployment timelines.`,
    icon: 'web',
    iconColor: 'primary',
  },
  {
    id: '2020',
    duration: '2020-Present',
    institute: 'Walmart Global Tech',
    degree: 'Software Engineer III',
    stream: '',
    description:
      "At Walmart responsibilities include designing and developing product which helps to provide insights into sourcing and procurement data to drive business results. Along with BAU tasks also involved with doing POC's, participating actively in various ih-house hackathons, mentoring young talent and contributing to hire the best talent for Walmart.",
    icon: 'web',
    iconColor: 'secondary',
  },
];
