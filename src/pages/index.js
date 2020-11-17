import { Link, withPrefix } from 'gatsby'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Mast, SEO } from '../components'
import { IntroStyles } from '../styles'
import Article from '../templates/Article'

export default function Home(props) {
  const data = [
    {
      img: withPrefix('/dswmedia/GettyImages-1169500916-1200.jpg'),
      title: 'Image Editing',
      week: 2,
      description:
        'The image editing assignment focuses on working with bitmap and vector images. I recreated my own version of cover for my favorite novel, Lonesome Dove. I also created two new vector logos - one for a fitness company, and the other for an art company.',
      to: '/image-editing',
    },
    {
      img: withPrefix('/dswmedia/GettyImages-1202250586-1200.jpg'),
      title: 'Web Design',
      week: 3,
      description:
        'The first web design project focused on learning some fundamentals of HTML, CSS and JavaScript. I created a custom, multiple choice assessment quiz based on the concepts presented in a template. I chose to build this interface using React.',
      to: '/web-design',
    },
    {
      img: withPrefix('/dswmedia/eme6208-educational-video-thumb.jpg'),
      title: 'Video Production',
      week: 5,
      description:
        'This educational video about polar bears features basic examples of transitions, effects, narration and captions. It was produced using an array of applications from the Adobe Creative Suite.',
      to: '/video-production',
    },
    {
      img: withPrefix('/dswmedia/eme6208-digital-animation-thumb.jpg'),
      title: 'Digital Animation',
      week: 6,
      description:
        'This digital animation illustrating how a basic pulley system works includes basic examples of transitions, effects, narration and labels. It was produced using Adobe After Effects and Adobe Illustrator.',
      to: '/digital-animation',
    },
    {
      img: 'https://templated.co/items/demos/hielo/images/pic02.jpg',
      title: 'Screencasting',
      week: 8,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et erat orci. Etiam in dolor at arcu scelerisque aliquet. Quisque lorem diam, volutpat in elementum non, facilisis vel ipsum. Fusce ut posuere neque. ',
      // to: '',
    },
    {
      img: 'https://templated.co/items/demos/hielo/images/pic02.jpg',
      title: 'E-Portfolio',
      week: 8,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et erat orci. Etiam in dolor at arcu scelerisque aliquet. Quisque lorem diam, volutpat in elementum non, facilisis vel ipsum. Fusce ut posuere neque. ',
      // to: '',
    },
  ]
  return (
    <>
      <SEO title="Welcome" />
      <Article pathName={props.location.pathName}>
        <Mast />
        <IntroStyles id="intro">
          <div className="contain">
            <h2>Welcome</h2>
            <p className="lead">
              My name is Phil Sinatra. I am a web developer, instructor, husband
              and father. I love music, sports and craft beer. Have a look at
              all of the cool things I've built as part of my Designing
              Integrated Media Environments class at UF!
            </p>
            <div className="grid">
              {data.map(({ description, img, title, to, week }) => (
                <div className="card" key={uuidv4()}>
                  <div className="image">
                    <img src={img} alt={title} />
                  </div>
                  <div className="content">
                    <header>
                      <p>Week {week.toString()}</p>
                      <h3>{title}</h3>
                    </header>
                    <p>{description}</p>
                    <footer>
                      {to ? (
                        <Link className="button" to={to}>
                          Learn More
                        </Link>
                      ) : (
                        <a href="#" className="button" disabled={true}>
                          Learn More
                        </a>
                      )}
                    </footer>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </IntroStyles>
      </Article>
    </>
  )
}
