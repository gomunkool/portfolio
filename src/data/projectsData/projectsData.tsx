export type ProjectsDataType = {
  id: number
  title: string
  description: string
  technologyStack: string
  demoLink: string
  gitRepoLink: string
  img: string
}

export const projectsData: ProjectsDataType[] = [
  {
    id: 1,
    title: 'Project management',
    description: `A software tool for managing projects by both one person and a team. Completed by
    a team of 3 people in 4 weeks. The application allows you to create, edit, delete projects.
    Each individual project has task columns that can be added, edited, deleted,
    or dragged from one column to another.`,
    technologyStack:
      'React, Redux Toolkit, JSX, TypeScript, MATERIAL-UI, Git/GitHub',
    demoLink: 'https://project-management-app-team-63.netlify.app/',
    gitRepoLink: 'https://github.com/wayjewish/project-management-app/pull/16',
    img: './images/1.jpg',
  },
  {
    id: 2,
    title: 'RS Clone',
    description: `RS Clone is an final project in RS.SCHOOL. This is a team mission in the course of
    which you need to develop a clone of a game or application. Our team chose to create
    a clone of the application for managing posting to channels in a telegram.
    The front end part was made by 2 people, including me.`,
    technologyStack: 'React, JSX, TypeScript, HTML/SCSS, Git/GitHub',
    demoLink: 'https://send-to-telegram.netlify.app/',
    gitRepoLink: 'https://github.com/PoMaKoM-RSTeam/send-to-telegram-front',
    img: './images/2.jpg',
  },
  {
    id: 3,
    title: 'Educational project',
    description: `Educational, training solo project for 6 weeks.
    Drilling of React hooks, redux, react router dom, react Forms, API, Testing Library React.`,
    technologyStack:
      'React, Redux, JSX, TypeScript, Testing Library React, CSS, Git/GitHub',
    demoLink: 'https://dreamy-lamington-94d8ce.netlify.app',
    gitRepoLink: 'https://github.com/wayjewish/project-management-app/pull/16',
    img: './images/3.jpg',
  },
  {
    id: 4,
    title: 'Christmas Tree',
    description: `A learning project was written in JS in approximately 2 weeks. It's a single page application that uses classes, API, drag and drop  and filtering.`,
    technologyStack: 'Java Script, Type Script, HTML, CSS, Git/GitHub, API',
    demoLink:
      'https://643518e0669eec1f5a976d08--wondrous-chebakia-2b89c3.netlify.app/',
    gitRepoLink:
      'https://github.com/rolling-scopes-school/gomunkool-JSFE2021Q3/tree/christmas-task',
    img: './images/4.jpg',
  },
  {
    id: 5,
    title: 'Momentum',
    description: `Educational project. Working with slider, data, audio player, changing settings.`,
    technologyStack: 'JS, HTML, CSS, API',
    demoLink:
      'https://6435638a0284f206939dbab6--eclectic-stroopwafel-4a07e8.netlify.app/',
    gitRepoLink:
      'https://github.com/rolling-scopes-school/gomunkool-JSFE2021Q3/tree/gh-pages/museum-dom',
    img: './images/5.jpg',
  },
  {
    id: 6,
    title: 'Museum',
    description: `Educational project. Layout training. Working with sliders, various tools and modal windows, etc.`,
    technologyStack: 'JS, HTML, CSS',
    demoLink: 'https://profound-paprenjak-4bc140.netlify.app/',
    gitRepoLink:
      'https://github.com/rolling-scopes-school/gomunkool-JSFE2021Q3/tree/museum-dom',
    img: './images/6.jpg',
  },
]
