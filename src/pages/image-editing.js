import { withPrefix } from 'gatsby'
import React from 'react'
import getty from '../assets/images/GettyImages-1195187065.jpg'
import bookCoverPartial from '../assets/images/book-cover-partial-001.jpg'
import bookCoverComplete from '../assets/images/eme6208-book-cover.jpg'
import { PageMast, SEO } from '../components'
import { ArticleSectionStyles } from '../styles'
import Article from '../templates/Article'

export default function ImageEditingPage(props) {
  return (
    <>
      <SEO title="Image Editing" />
      <Article pathName={props.location.pathName}>
        <PageMast title="Image Editing" />
        <ArticleSectionStyles>
          <div className="contain">
            <h2>A Book Cover</h2>
            <p>
              For my book cover I chose to redesign my favorite novel, the
              Pulitzer Prize winning{' '}
              <a
                href="https://www.goodreads.com/book/show/256008.Lonesome_Dove?from_search=true&from_srp=true&qid=nUDYQ72vAd&rank=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lonesome Dove
              </a>{' '}
              by Larry McMurtry. This is the third book in the{' '}
              <i>Lonesome Dove</i> tetralogy, and is an epic adventure and love
              story from the days of cowboys and indians. It follows two Texas
              Rangers and a group of cowboys as they travel from Texas to
              Montana.
            </p>
            <p>
              I wanted to keep the concept simple. I used a sketch style drawing
              of two cowboys on horse back moving along a path towards a sunset
              as the primary visual.
            </p>
            <figure>
              <img src={getty} alt="cowboys on horses sketch" />
              <figcaption>Cowboys on horses sketch</figcaption>
            </figure>
            <p>
              A gradient overlay provides the appearance of the sun setting to
              the entire cover, letting the early evening sky and the dust of
              the trail provide the overall color scheme. I changed the
              gradient's layer style to <i>multiply</i> which allowed the
              primary image background color and my gradient's colors to blend
              together for a harmonious scheme.
            </p>
            <div
              css={css`
                align-items: center;
                display: flex;
                justify-content: center;
              `}
            >
              <figure>
                <img src={bookCoverPartial} alt="cover with gradient overlay" />
                <figcaption>
                  Initial color scheme applied to the cover
                </figcaption>
              </figure>
            </div>
            <p>
              Next, I added a sprinkle of stars and adjusted the layer style and
              opacity to give the appearance that the stars are more visible at
              high points in the sky and less visible closer to the setting sun.
            </p>
            <p>
              I used a classic, serif typeface for the title and author
              information, with a slight touch of the dusty brown layered on top
              of the title which helps to tone down the white text the slightest
              bit. Here is the final image.
            </p>
            <figure>
              <img src={bookCoverComplete} alt="finished book cover" />
              <figcaption>Completed book cover</figcaption>
            </figure>
            <h2>A Logo</h2>
            <p>
              I developed two different logo concepts for this assignment. The
              first is for a fictitious fitness program called Mean Green
              Fitness. The original inspiration for the concept came from my
              son, who was stomping around the house pretending to be the
              Incredible Hulk. He told me he likes Hulk because he's strong and
              green.
            </p>
            <p>
              I did some image searching online and found a few versions of the
              Hulk's angry eyes that I thought looked awesome, so I decided to
              base the logo concept off of the intense Hulk eyes.
            </p>
            <figure>
              <img
                src="https://c4.wallpaperflare.com/wallpaper/400/200/1018/hulk-hd-1080p-windows-wallpaper-preview.jpg"
                alt="Incredible Hulk eye"
              />
              <figcaption>
                Image curtesy of{' '}
                <a
                  href="https://www.wallpaperflare.com/hulk-hd-1080p-windows-green-color-eye-human-body-part-human-eye-wallpaper-qtzax"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wallpaper Flare
                </a>
              </figcaption>
            </figure>
            <h3>Mean Green Fitness</h3>
            <p>
              For the logo to be successful, it had to feel angry like the Hulk.
              Since the Hulk is green, I went with <i>mean</i> as an adjective
              for the obvious bonus of the rhyme with mean. I added in the some
              circles for eyes with angry eye brows to try and pull the angry
              Hulk eye concept into the logo.
            </p>
            <figure>
              <img
                src={withPrefix('/dswmedia/meangreen-logo-full-rgb.svg')}
                alt="Mean Green Fitness logo"
              />
              <figcaption className="visually-hidden">
                Mean Green Fitness logo
              </figcaption>
            </figure>
            <p>
              The bold letters and angry eyes create a feeling of power, which I
              hope would make the fitness program feel like it was going to be
              intense and force you to be strong. I shaded the word green to be
              bright and bold, again strong with a goal of standing out while
              being linked to the Hulk's angry green color, which was the
              original inspiration.
            </p>
            <p>
              Once I was happy with the primary version, I worked out a smaller
              version that could be used for social media.
            </p>
            <figure>
              <img
                src={withPrefix('/dswmedia/meangreen-logo-small-rgb.svg')}
                alt="Mean Green Fitness small logo"
                css={css`
                  max-width: 300px;
                `}
              />
              <figcaption className="visually-hidden">
                Mean Green Fitness small logo
              </figcaption>
            </figure>
            <p>
              Finally, I reversed the colors for a version that works on a dark
              background.
            </p>
            <figure
              css={css`
                background-color: black;
                margin-bottom: 1.5rem !important;
              `}
            >
              <img
                src={withPrefix(
                  '/dswmedia/meangreen-logo-full-reverse-rgb.svg'
                )}
                alt="Mean Green Fitness logo"
              />
              <figcaption className="visually-hidden">
                Mean Green Fitness reversed logo
              </figcaption>
            </figure>
            <figure
              css={css`
                background-color: black;
              `}
            >
              <img
                src={withPrefix(
                  '/dswmedia/meangreen-logo-small-reverse-rgb.svg'
                )}
                alt="Mean Green Fitness small, reversed logo"
                css={css`
                  max-width: 300px;
                `}
              />
              <figcaption className="visually-hidden">
                Mean Green Fitness small, reversed logo
              </figcaption>
            </figure>
            <p>
              Overall I was very happy how this concept turned out. I think it
              looks and sounds mean, the green color pops well on both light and
              dark backgrounds, and the angry eyes convey the power from the
              original inspiration point.
            </p>
            <h3
              css={css`
                margin-top: 3rem;
              `}
            >
              River Bend Art Company
            </h3>
            <p>
              My wife saw the logo, and reminded me that she needed logo help
              for a business she started a little over a year ago called the{' '}
              <a
                href="https://riverbendartcompany.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                River Bend Art Company
              </a>
              . She does custom wood working and all types of art projects, and
              she wanted a logo that felt classic but that did not include an
              icon or image. The name is linked to the fact that we live in a
              river town, a few miles away from the Delaware River.
            </p>
            <p>
              This time I started with the smaller logo, because her initial
              concern was that her current logo didn't stand out on social media
              threads and that it looked weak and difficult to read. My goal was
              to use the letters R and B as the primary visuals, and to somehow
              use negative space between the letters to create the effect of the
              bend in a river or stream.
            </p>
            <figure>
              <img
                src={withPrefix('/dswmedia/riverbend-logo-small.svg')}
                alt="River Bend Art Company small logo "
                css={css`
                  max-width: 300px;
                `}
              />
              <figcaption className="visually-hidden">
                River Bend Art Company small logo
              </figcaption>
            </figure>
            <p>
              I did a follow up version that uses only the R and B, ideal for
              icons in a social media stream where the smaller words would be
              illegible.
            </p>
            <figure>
              <img
                src={withPrefix('/dswmedia/riverbend-logo-notag-small.svg')}
                alt="River Bend Art Company small logo with no tagline"
                css={css`
                  max-width: 300px;
                `}
              />
              <figcaption className="visually-hidden">
                River Bend Art Company small logo with no tagline
              </figcaption>
            </figure>
            <p>
              I'm not sure if I totally pulled off the negative space creating
              the shape of a river bend, I think it's subtle enough that it will
              be recognized, but the R and B alone stand out strong enough on
              their own to be a success. After I was happy with the small
              versions, I worked out the full size logo that included all of the
              brand.
            </p>
            <figure>
              <img
                src={withPrefix('/dswmedia/riverbend-logo-full.svg')}
                alt="River Bend Art Company full size logo"
              />
              <figcaption className="visually-hidden">
                River Bend Art Company full size logo
              </figcaption>
            </figure>
            <p>
              For colors, I consulted various articles online related to design
              trends for 2021. Repeatedly I found notes that 2021 will feature a
              draw back from bright colors and the focus will shift to dimmed
              colors, where instead of adjustments to brightness and contrast,
              black and white will be added to the primary color to build
              popular pallets.
            </p>
            <p>
              Early design awards mentioned the following combinations as stand
              outs:
            </p>
            <ul>
              <li>sea blue and mint</li>
              <li>mustard and beige</li>
              <li>black and lime</li>
              <li>pink and secret moss</li>
              <li>black and red scarlet</li>
              <li>soft green and white</li>
            </ul>
            <p>
              I tried all of these combinations, and variations of each, but
              ultimately my wife chose the color scheme she preferred (a prefect
              blend of "the client is always right", mixed with "happy wife,
              happy life").
            </p>
            <figure
              css={css`
                margin-bottom: 1.5rem !important;
              `}
            >
              <img
                src={withPrefix('/dswmedia/riverbend-logo-small-rgb.svg')}
                alt="River Bend Art Company small color logo"
                css={css`
                  max-width: 300px;
                `}
              />
              <figcaption className="visually-hidden">
                River Bend Art Company small color logo
              </figcaption>
            </figure>
            <p>
              Once color was settled, I integrated the color scheme into all of
              the other versions of the logo.
            </p>
            <figure
              css={css`
                margin-bottom: 1.5rem !important;
              `}
            >
              <img
                src={withPrefix('/dswmedia/riverbend-logo-full-rgb.svg')}
                alt="River Bend Art Company full size color logo"
                css={css`
                  width: 100%;
                `}
              />
              <figcaption className="visually-hidden">
                River Bend Art Company full size color logo
              </figcaption>
            </figure>
            <figure
              css={css`
                background-color: black;
                margin-bottom: 1.5rem !important;
              `}
            >
              <img
                src={withPrefix(
                  '/dswmedia/riverbend-logo-full-reverse-rgb.svg'
                )}
                alt="River Bend Art Company full size color logo on dark background"
              />
              <figcaption className="visually-hidden">
                River Bend Art Company full size color logo on dark background
              </figcaption>
            </figure>
            <figure
              css={css`
                margin-bottom: 1.5rem !important;
                background-color: black;
              `}
            >
              <img
                src={withPrefix(
                  '/dswmedia/riverbend-logo-small-reverse-rgb.svg'
                )}
                alt="River Bend Art Company small color logo on a dark background"
                css={css`
                  max-width: 300px;
                `}
              />
              <figcaption className="visually-hidden">
                River Bend Art Company small color logo on a dark background
              </figcaption>
            </figure>
            <p>
              Overall I am happy with the outcome. I think both versions are
              much stronger than the{' '}
              <a
                href="https://riverbendartcompany.com/dswmedia/brand-full.svg"
                target="_blank"
                rel="noopener noreferrer"
              >
                current company logo
              </a>
              , and the issue of not standing out properly in a social media
              feed has been addressed.
            </p>
          </div>
        </ArticleSectionStyles>
      </Article>
    </>
  )
}
