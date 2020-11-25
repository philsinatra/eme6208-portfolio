// import { withPrefix } from 'gatsby'
import React from 'react'
import { PageMast, SEO, Video } from '../components'
import { ArticleSectionStyles } from '../styles'
import Article from '../templates/Article'

export default function ScreencastPage(props) {
  return (
    <>
      <SEO title="Screencast" />
      <Article pathName={props.location.pathName}>
        <PageMast title="Screencast" />
        <ArticleSectionStyles>
          <Video
            poster="https://pjs-uf.netlify.app/dswmedia/eme6208-screencast-poster.png"
            shadow={true}
            src="https://pjs-uf.netlify.app/dswmedia/eme6208-screencast.mp4"
            title="Screencast explaining a simple pulley system"
          />
          <div className="contain">
            <h2>A Tutorial</h2>
            <p>
              The topic for my screencast is intended to be support for my
              students who use an application called{' '}
              <a
                href="https://www.figma.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Figma
              </a>{' '}
              for graphic and user interface design. It shows how to use a new
              feature recently introduced by the app developer called{' '}
              <i>variants</i>.
            </p>
            <h3>Effects</h3>
            <p>
              I zoom and pan as needed within the software to focus on the
              elements and components that I'm talking about and interacting
              with. Because the software has tools for zooming and panning built
              in, I included those movements in the screencast rather than by
              adding them during the video edit because it matches the real life
              experience of using the software.
            </p>
            <p>
              I also added a single overlay with a text callout as a signaling
              support for a keyboard shortcut I mention and use in the
              demonstration.
            </p>
          </div>
        </ArticleSectionStyles>
      </Article>
    </>
  )
}
