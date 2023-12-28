import React from 'react'
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import All  from './Components/All'
import Fsd from './Components/Fsd'
import DataScience from './components/DataScience'
import CyberSecurity from './Components/CyberSecurity'
import Career from './Components/Career'


function App() {
 let data=[{
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp',
    head:"Full Stack Development",
    about:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
    content:"A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
    date:"28",
    month:"January"
  },
  {
  image:'https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp',
  head:"Full Stack Development",
  about:"How Long Would It Take to Be a Full Stack Developer?  ",
  content:"A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
  date:"4",
  month:"August"
},
{
image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
head:"Full Stack Development",
about:"Roles & Responsibilities of Full Stack Developers in 2024",
content:"A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
date:"12",
month:"July"
},


  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
    head:"Data Science",
    about:"Top Product-Based Companies for Data Scientists in 2024",
    content:"The current technological era is full of competition and those who have profound skillset are",
    date:"5",
    month:"october"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
    head:"Career Development",
    about:" Top IT Jobs for Commerce Students: A Lucrative Career Path",
    content:"Scalable Vector Graphics (SVG) has revolutionized the world of graphics and web design. This vectorAs it turns out, full stack developers rate their career happiness 3.4 out of 5 stars which puts them in the top 37% of careers.",
    date:"16",
    month:"Feberary"
  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Different-Roles-in-a-Product-Based-Company.webp",
    head:"Career Development",
    about:"What Are the Different Roles in a Product-Based Company?",
    content:"Scalable Vector Graphics (SVG) has revolutionized the world of graphics and web design. This vectorAs it turns out, full stack developers rate their career happiness 3.4 out of 5 stars which puts them in the top 37% of careers.",
    date:"10",
    month:"November"
  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Software-Developer-vs-Software-Engineer.jpg",
    head:"Career Development",
    about:"Software Developer vs Software Engineer: Who is More Important in 2024?",
    content:"Scalable Vector Graphics (SVG) has revolutionized the world of graphics and web design. This vectorAs it turns out, full stack developers rate their career happiness 3.4 out of 5 stars which puts them in the top 37% of careers.",
    date:"10",
    month:"November"
  },

  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
    head:"Full Stack Development",
    about:"Top 10 Product-Based Companies for Full-Stack Developers [2024]",
    content:"Full stack developers rate their happiness above average. At CareerExplorer, we conduct an ongoing survey with millions of people and ask them how satisfied they are with their careers. As it turns out, full stack developers rate their career happiness 3.4 out of 5 stars which puts them in the top 37% of careers.",
    date:"18",
    month:"October"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
    head:"Full Stack Development",
    about:"7 Best Full-Stack Development Online Courses [2024]",
    content:"The most popular full stack frameworks include Laravel, Ruby on Rails, and Express. js. If you're just starting, you might want to choose a framework that is relatively easy to learn, such as Laravel or Ruby on Rails. Alternatively, if you're looking for something more versatile or powerful, you might consider Express.",
    date:"13",
    month:"Feberary"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers.webp",
    head:"Career Development",
    content:"The four stages consist of establishment, advancement, maintenance and withdrawal. Each of the stages represents the age of a worker and the responsibilities and challenges that need to be addressed. Some workers repeat this model if they have a second career or midlife career change",
    about:"Top 13 Product Based Companies for AI Freshers ",
    date:"28",
    month:"October"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Mechanical-Engineering-Resume-Important-Things-To-Look-Out-For.webp",
    head:"Career Development",
    content:"This being true, career management is an important life skill to develop and cultivate. According to Get Smart! About Modern Career Development, there are six stages of modern career development: Assessment, Investigation, Preparation, Commitment, Retention, and Transition.",
    about:"Mechanical Engineering Resume: 9 Important Things To Look Out For  ",
    date:"10",
    month:"March"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
    head:"Career Development",
    content:"The Big Five Model, also referred to as the Five-Factor Model, is a famous personality theory that describes personality as the play between five personality traits or factors. These factors or characteristics include openness to experience, conscientiousness, agreeableness, extraversion and neuroticism.",
    about:"Automation Test Engineer Resume: 10 Important Things To Consider",
    date:"16",
    month:"March"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    head:"Cyber Security",
    about:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
    content:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
    date:"4",
    month:"December"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    head:"Cyber Security",
    about:"What Is Hacking? - Types of Hacking More",
    content:"Have you ever wondered what hacking is all about? It’s a big deal in today’s",
    date:"25",
    month:"september"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-1536x804.png",
    head:"Cyber Security",
    about:"The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
    content:"There is something fascinating about a lone hacker in black hoodies using a single system",
    date:"15",
    month:"April"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png",
    head:"Cyber Security",
    about:"8 Different Types of Cybersecurity and Threats Involved",
    content:"Cybersecurity professionals are responsible for protecting their company's information and data from attacks by hackers, viruses, or other cyber threats. These professionals typically work in teams with other IT specialists, such as software developers or programmers.",
    date:"15",
    month:"April"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
    head:"Cyber Security",
    about:"The Ultimate Cybersecurity Roadmap for Beginners",
    content:"Cybersecurity professionals are responsible for protecting their company's information and data from attacks by hackers, viruses, or other cyber threats. These professionals typically work in teams with other IT specialists, such as software developers or programmers.",
    date:"15",
    month:"April"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
    head:"Cyber Security",
    about:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    content:"The 3 major types of cyber security are network security, cloud security, and physical security. Your operating systems and network architecture make up your network security. It can include network protocols, firewalls, wireless access points, hosts, and servers.",
    date:"08",
    month:"April"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
    head:"Data Science",
    about:"10 Best Data Science Online Courses for Beginners | 2024",
    content:"Data Science is more valuable than computer science. A Computer Scientist earns an annual salary of USD 100000 on average. A data scientist, on the other hand, earns more than USD 140000 per year. If you are a software developer or an experienced systems engineer, owning skillsets can instantly boost your salary.",
    date:"14",
    month:"August"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/career-opportunities-for-data-science-1536x804.webp",
    head:"Data Science",
    about:"Exploring Lucrative Data Science Career Opportunities",
    content:"The highest salary of data scientists can go beyond USD 200,000 if you have the required skills. On average, a data scientist can make $126,694 per year. Generally, the range is $99,000 to $164,000.",
    date:"14",
    month:"August"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
    head:"Data Science",
    about:"What is the Difference between Data Science and Data Engineering?",
    content:"Data science is a broad career path that is undergoing developments and thus promises abundant opportunities in the future. Data science job roles are likely to get more specific, which in turn will lead to specializations in the field.",
    date:"8",
    month:"November"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
    head:"Data Science",
    about:"Useful Python Libraries & Tools for Data Science Beginners",
    content:"Data Sciences uses AI (and its Machine Learning subset) to interpret historical data, recognize patterns, and make predictions. In this case, AI and Machine Learning help data scientists to gather data in the form of insights.",
    date:"29",
    month:"september"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2022/06/6.-Data-Science-skills-1536x804.png",
    head:"Data Science",
    about:"What Skills Are Needed To Be A Data Scientist?" ,
    content:"According to the recruitment firm Michael Page’s 2023 India Talent Trends report, data science professionals    ",
    date:"13",
    month:"june"

  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
    head:"Full Stack Development",
    about:"Best Books to Learn Full-Stack Development ",
    content:"The Frontend Syllabus starts with programming basics, transitions to Java, covers data structures, and then delves into HTML, CSS, CSS frameworks, animations, Figma, and JavaScript. Learners also explore DOM manipulation, asynchronous JavaScript, and frontend frameworks like React.",
    date:"19",
    month:"December"

  }
]
  return <>

  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/all' element={<All data={data}/>} />
    <Route path='/full-stack-developer' element={<Fsd data={data}/>} />
    <Route path='/data-science' element={<DataScience data={data}/>} />
    <Route path='/cyber-security' element={<CyberSecurity data={data}/>} />
    <Route path='/career' element={<Career data={data}/>} />
    <Route path='*' element={<Navigate to='/all' />} />

  </Routes>
  </BrowserRouter>
  </>

}
export default App