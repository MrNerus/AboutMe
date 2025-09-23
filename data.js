const portfolioData = {
  name: 'Ard Nerus',
  socials: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    twitter: 'https://twitter.com/your-username'
  },
  sections: [
    { type: 'hero', id: 'hero', title: "Hi, I'm Ard Nerus", subtitle: 'I design & build futuristic, interactive web experiences. Scroll down to begin the journey.' },
    { type: 'rocket', id: 'rocket' },
    { type: 'timeline', id: 'experience', title: 'Experience',
        cards: [
            { heading: 'Lead Developer', date: '2022 - Present', description: 'Leading a team to build next-gen web applications.', image: '20230516_143526-01.jpeg' },
            { heading: 'Frontend Specialist', description: 'Focused on creating intuitive and performant user interfaces for various clients.' },
        ]
    },
    { type: 'timeline', id: 'projects', title: 'Projects',
      cards: [
        { heading: 'Project Nova', description: 'An interactive data visualization tool.', image: '20210607_140533.jpg' },
        { heading: 'Personal Portfolio', date: '2023', description: 'This very portfolio, built with vanilla JS, HTML, and CSS.'},
        { heading: 'E-commerce Platform', image: '20201030_142012.jpg' }
      ]
    },
    { type: 'timeline', id: 'achievements', title: 'Achievements',
      cards: [
        { heading: 'Hackathon Winner', date: '2021-10-16', image: '20211016_163258-01.jpeg' },
        { heading: 'Top Performer Award' },
        { heading: 'Speaker at Local Meetup', description: 'Gave a talk on modern CSS techniques.' },
      ]
    },
    { type: 'hire', id: 'hire', title: 'Interested?', subtitle: "Let's build something amazing together." }
  ]
};