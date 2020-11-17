// import { withPrefix } from 'gatsby'
import React from 'react'
import { PageMast, SEO, Video } from '../components'
import { ArticleSectionStyles } from '../styles'
import Article from '../templates/Article'

export default function DigitalAnimationPage(props) {
  return (
    <>
      <SEO title="Digital Animation" />
      <Article pathName={props.location.pathName}>
        <PageMast title="Digital Animation" />
        <ArticleSectionStyles>
          <Video
            poster="https://pjs-uf.netlify.app/dswmedia/eme6208-digital-animation-poster.jpg"
            shadow={true}
            src="https://pjs-uf.netlify.app/dswmedia/eme6208-digital-animation.mp4"
            title="Digital animation explaining a simple pulley system"
          />
          <div className="contain">
            <h2>Documentation</h2>
            <p>
              My digital animation explains how a simple pulley system works. I
              built this animation using Adobe After Effects instead of Adobe
              Animate because Adobe officially announce the{' '}
              <a
                href="https://www.adobe.com/products/flashplayer/end-of-life.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                end of Adobe Flash Player
              </a>{' '}
              on December 31, 2020. Here are the details of my animation based
              on the minimum requirements for the assignment.
            </p>
            <h3>Meaningful Colors</h3>
            <p>
              The elements used in the animation have basic colors. I used
              shades of red and green to help emphasize the force required to
              activate the pulley, and the subsequent reward for the user's
              effort. The red is used on a downward facing arrow that indicates
              force required on the user's part. Green is used on an upward
              facing arrow that indicates a successful life of the heavy load
              object.
            </p>
            <h3>Minimal Meaningful Text</h3>
            <p>
              I added simple labels to the load object and the force handle to
              help indicate the roles each item plays in the pulley system.
            </p>
            <h3>Vector Images</h3>
            <p>
              I created the images myself, most of which are basic shapes, or
              combinations of basic shapes. The weight graphic began as a circle
              which I then transformed by rounding some of the bottom points on
              the shape. The handle is a combination of a simple rectangles with
              rounded corners, and a white mask shape that gives the illusion of
              empty space where a person's hand would go.
            </p>
            <h3>Motion Tweening</h3>
            <p>
              As the pulley is engaged, the weight moves up as the handle moves
              down. The rope shapes are also tweened to adjust their length and
              position to give the appearance that the length is decreasing on
              one side, and increasing on the other.
            </p>
            <h3>Transitions</h3>
            <p>
              Several components used throughout fade in on cue with the
              narration.
            </p>
          </div>
        </ArticleSectionStyles>
      </Article>
    </>
  )
}
