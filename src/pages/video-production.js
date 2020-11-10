// import { withPrefix } from 'gatsby'
import React from 'react'
import { PageMast, SEO, Video } from '../components'
import { ArticleSectionStyles } from '../styles'
import Article from '../templates/Article'

const Script = () => (
  <>
    <h2>Transcript</h2>
    <p>
      The largest bear in the world and the Arctic's top predator, polar bears
      are a powerful symbol of the strength and endurance of the Arctic. A
      common ancestor of the brown bear, it's believed that polar bears evolved
      between 350,000 and 6 million years ago.
    </p>
    <p>
      Today, polar bears live in the Arctic, and have become superbly adapted to
      a life hunting seals and surviving in the extreme cold.
    </p>
    <p>
      From top to bottom, their bodies are perfectly coordinated with the
      seasonal shifts in the Arctic. Their fur covers a thick layer of fat,
      their ears and tails are small to limit heat loss, and their paws allow
      them to tread on thin ice.
    </p>
    <p>
      Considered talented swimmers, polar bears can sustain a pace of six miles
      per hour by paddling with their front paws and holding their hind legs
      flat like a rudder. Their thick layer of body fat acts as a
      water-repellent coat that insulates them from the cold air and water.
    </p>
    <p>
      The mighty ice bear has a top speed of 40kph, and can pack quite a bite
      with their 42 razor sharp teeth, including jagged back teeth and canines
      larger than grizzly teeth. Their skin is black while their fur is
      transparent, and their tongues are actually blue!
    </p>
  </>
)

export default function VideoProductionPage(props) {
  return (
    <>
      <SEO title="Video Production" />
      <Article pathName={props.location.pathName}>
        <PageMast title="Video Production" />
        <ArticleSectionStyles>
          <Video
            poster="https://pjs-uf.netlify.app/dswmedia/eme6208-educational-video-poster.jpg"
            script={<Script />}
            shadow={true}
            src="https://pjs-uf.netlify.app/dswmedia/eme6208-educational-video.mp4"
            title="Educational video about polar bears"
            track="https://pjs-uf.netlify.app/dswmedia/eme6208-educational-video.vtt"
          />
          <div className="contain">
            <h2>Video Production</h2>
            <p>
              I used polar bears as the subject for my educational video. My
              kids are into a cartoon called{' '}
              <a
                href="https://www.imdb.com/title/tt4839610/"
                target="_blank"
                rel="noopener noreferrer"
              >
                We Bare Bears
              </a>{' '}
              that features group of brother bears comprised of a grizzly, panda
              and polar bear. The polar bear is referred to as "Ice Bear" on the
              show and he's a favorite in my house. I tried to tailor the video
              to a younger audience, hoping that my kids who are nine and five
              might learn some interesting facts about real life polar bears.
            </p>
            <h3>Media</h3>
            <p>
              I have access to a lot of stock footage, so I mixed a combination
              of high res still images with lots of live footage showing the
              bear in it's natural environment.
            </p>
            <h3>Effects</h3>
            <p>
              I kept my effects really simple. I prefer the Ken Burns effect
              over some of the more elaborate zoom effects. There are three
              instances throughout the video where I include a slow Ken Burns
              effect to satisfy this requirement.
            </p>
            <h3>Integrated Transition Effects</h3>
            <p>
              When transitioning between certain media, I chose a simple cross
              dissolve effect, which fades one piece of media out while fading
              the other in. The following image shows the bubbles from the
              introduction transitioning out of view, while the polar bear
              footage is fading in at the same time.{' '}
            </p>
            <figure>
              <img
                src="https://pjs-uf.netlify.app/dswmedia/cross-dissolve-example.jpg"
                alt="Cross dissolve example"
              />
              <figcaption>A cross dissolve between two videos</figcaption>
            </figure>
            <p>
              The other integrated effect I used is not as much a transition
              effect as a timing effect applied to transitions. In certain
              cases, I move items on/off the screen manually to transition from
              one media to another. Any time things are moving/animating, I pay
              attention to how they first start moving and how they finish
              moving. Typically, without extra attention, the start and stop of
              movement can appear very mechanical and in some cases abrupt and
              unnatural. Animation software includes the ability to adjust the
              timing functions of how things move, allowing a developer to
              create movement that is linear, or that eases into it's last
              frame, or eases out of it's first frame (among other options).
            </p>
            <p>
              Easing defines how an animation changes speed over the course of
              the action. In the real world, objects tend to accelerate and
              decelerate as they move. I used combinations of easing to adjust
              how my animations begin and end.
            </p>
            <h4>Ease-Out</h4>
            <p>
              Ease-Out animations work best for fading and animating objects
              into view.
            </p>
            <div
              css={css`
                margin: 3rem auto;
                max-width: 400px;
              `}
            >
              <figure>
                <img
                  src="https://spectrum.adobe.com/static/images1x/motion_easing_ease-out@2x_2XaRDY1w8pcn2evLGtyq0m_1569368909727.gif"
                  alt="ease-out animation example"
                />
                <figcaption>Ease-Out animations example</figcaption>
              </figure>
            </div>
            <h4>Ease-In</h4>
            <p>
              Ease-In animations are best suited for objects exiting the screen
              or fading out of view.
            </p>
            <div
              css={css`
                margin: 3rem auto;
                max-width: 400px;
              `}
            >
              <figure>
                <img
                  src="https://spectrum.adobe.com/static/images1x/motion_easing_ease-in@2x_16IFavGHsrdn4CmvjtdDiO_1569368902757.gif"
                  alt="ease-in animation example"
                />
                <figcaption>Ease-In animations example</figcaption>
              </figure>
            </div>
            <h4>Ease-In-Out</h4>
            <p>
              Ease-In-Out is best for depicting movement from place to place on
              screen. This type of easing draws attention and should be used for
              bigger movements.
            </p>
            <div
              css={css`
                margin: 3rem auto;
                max-width: 400px;
              `}
            >
              <figure>
                <img
                  src="https://spectrum.adobe.com/static/images1x/motion_easing_ease-in-out@2x_51foh5vrriLRwcXrvYIQhU_1569368896655.gif"
                  alt="ease-in-out animation example"
                />
                <figcaption>Ease-In-Out animations example</figcaption>
              </figure>
            </div>
            <h3>Other Video Effects</h3>
            <p>
              I built some manual animations into the video, and along with
              applying easing functions to those animations, I manually added a
              couple additional effects. The first is a motion blur, which gives
              the moving media a blurry appearance to simulate motion.
            </p>
            <figure>
              <img
                src="https://pjs-uf.netlify.app/dswmedia/motion-blur.jpg"
                alt="motion blur"
              />
              <figcaption>Motion blur effect</figcaption>
            </figure>
            <p>
              Notice in the image above how the polar bears in the snow have a
              horizontal blur applied, similar to what you experience while
              moving quickly in your car or on a train.
            </p>
            <p>
              I also added a bounce effect to my custom animations, to help
              simulate gravity and momentum more accurately. When the fun
              background image falls down from the top before the credits roll,
              I make sure that the image hits the bottom of the screen, and then
              bounces up slightly before finally landing flat along the bottom
              of the stage again. It's not easy to spot initially, but it's not
              meant to be obvious. The goal is for the drop to feel real and
              include a sense of natural physics we're used to experiencing in
              real life.
            </p>
            <h3>Integrated Screen Captions</h3>
            <p>
              I struggled a bit with this requirement, especially after reading
              the Mayer, Moreno article assigned this week. I have one caption
              that works well and that I was excited to include. Towards the end
              of the video, I explain a few physical features of polar bears,
              including the fact that their tongues are blue. I was able to find
              a video where a polar bears sticks out his tongue several times,
              and I included a freeze frame where I was able to caption and
              point out the blue tongue.
            </p>
            <figure>
              <img
                src="https://pjs-uf.netlify.app/dswmedia/polar-bear-tongue.jpg"
                alt="A polar bear sticking out its blue tongue"
              />
              <figcaption>Polar bears have blue tongues!</figcaption>
            </figure>
            <p>
              I froze the frame here, and made sure to incorporate the caption
              when the narration has a natural pause. This allows the viewer to
              focus totally on the still image and the caption, which according
              to research, should improve the viewer's ability to focus
              primarily on the image and the caption without distraction or the
              need to absorb audio at the same time. I think this pause and
              caption work well in the natural flow of the video. It feels
              playful, helpful and natural.
            </p>
            <p>
              I looked for another instance where I could add another caption. I
              tested implementing a similar caption with a still during a
              portion of the video focused on how polar bears swim, but it felt
              forced and unnatural to add the caption. The flow of the video
              felt disrupted and it seemed out of place, so I removed it.
            </p>
            <p>
              Instead, I added a text heading near the beginning of the video,
              introducing the polar bear.
            </p>
            <figure>
              <img
                src="https://pjs-uf.netlify.app/dswmedia/introducing-polar-bear.jpg"
                alt="introduction heading"
              />
              <figcaption>Introducing the mighty polar bear</figcaption>
            </figure>
            <p>
              I'm not sure if this technically counts as an integrated caption,
              but I didn't want to force another caption in somewhere if it
              wasn't going to enhance the overall experience.
            </p>
            <h3>Formal Title & Credits</h3>
            <p>Both are included.</p>
            <h3>Integrated Background Music & Narration</h3>
            <p>
              I used a fun tune for the background music, which I was sure to
              fade down throughout the majority of the video. The readings this
              week make mention of background music increasing incidental
              processing which could be a problem, and I considered removing the
              track completely. I kept in in because I think it adds a fun
              aspect that would help keep my target audience (my kids) engaged
              while not being distracting enough to contribute to any cognitive
              overload. I also kept in in to make sure I satisfied this
              requirement.
            </p>
            <p>
              I scripted and narrated everything myself, which was more
              challenging than expected. I completed about four full takes and
              then split the audio into small files based on my script. I
              normalized all of the audio and used some reduction filters to
              remove a small amount of echo I got while recording in my office.
            </p>
            <p>
              Overall I'm pleased with the final outcome. I had more data and
              information to include related to polar bear global populations
              and the effects of global warming on their environment and
              migration patterns, but the two minute time restriction required
              me to cut a lot of info out and I focused on the features and
              traits of the animal because I thought it would be more
              interesting to my target audience. I think the content is
              segmented well and paced appropriately.
            </p>
            <h3>Software</h3>
            <p>
              I am most comfortable with the Adobe suite for video/audio/image
              editing and animating. I used all of the following apps during the
              development process:
            </p>
            <ul>
              <li>
                <a
                  href="https://www.adobe.com/products/audition.html?sdid=KKQPG&mv=search&ef_id=Cj0KCQiA7qP9BRCLARIsABDaZzgCYupaCY924kJWCVwB8RtLZSsufaQKO_DaKjymStfRqcx0dqnM2cEaAu0VEALw_wcB:G:s&s_kwcid=AL!3085!3!379243313516!e!!g!!adobe%20audition&gclid=Cj0KCQiA7qP9BRCLARIsABDaZzgCYupaCY924kJWCVwB8RtLZSsufaQKO_DaKjymStfRqcx0dqnM2cEaAu0VEALw_wcB"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Adobe Audition
                </a>{' '}
                - audio editing
              </li>
              <li>
                <a
                  href="https://www.adobe.com/products/aftereffects.html?sdid=KKQOW&mv=search&kw=test&ef_id=Cj0KCQiA7qP9BRCLARIsABDaZzgt54qJNBnkG8fBWF8c2qU_xwgsg9dHV5jsL0xJAyB8_KmklJehjI8aAvy6EALw_wcB:G:s&s_kwcid=AL!3085!3!469900475185!e!!g!!adobe%20after%20effects&gclid=Cj0KCQiA7qP9BRCLARIsABDaZzgt54qJNBnkG8fBWF8c2qU_xwgsg9dHV5jsL0xJAyB8_KmklJehjI8aAvy6EALw_wcB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adobe After Effects
                </a>{' '}
                - animation
              </li>
              <li>
                <a
                  href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjd66Ldi_bsAhUBhsgKHSvtDJoYABAEGgJxdQ&ae=2&ohost=www.google.com&cid=CAESQOD2ieJwFbrrMHalrmSv63hDD5PB-7rVWwhx0kDZr5qnrYIMtvio_SCjEPXhF6ZGN0qlIEaMecTpJ7pRixTmSSc&sig=AOD64_2QfQfLChwzi0Ioopw8GgbgfTD02w&q&adurl&ved=2ahUKEwj8w5rdi_bsAhWylXIEHfVWC-4Q0Qx6BAgUEAE&dct=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adobe Premier
                </a>{' '}
                - video editing
              </li>
              <li>
                <a
                  href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjy3b_qi_bsAhWNtsgKHU-4D0MYABAJGgJxdQ&ae=2&ohost=www.google.com&cid=CAESQOD22vxgBBbra-XZAZp5j_TA1G61oIxgHfF4rpoxQDke4CiMs-f-0wKvLoPJBuZ9MdAw6PQZvPDNGQrRJOhnwpc&sig=AOD64_1DsyYndrxAx3Wq0ZlF0QWalo1MZg&q&adurl&ved=2ahUKEwi52Lbqi_bsAhUrknIEHRhYBPwQ0Qx6BAgWEAE&dct=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adobe Photoshop
                </a>{' '}
                - image editing and text template designs
              </li>
              <li>
                <a
                  href="https://code.visualstudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Visual Studio Code
                </a>{' '}
                - script writing and web development
              </li>
            </ul>
            <h2>References</h2>
            <ul
              css={css`
                font-size: 0.9rem;
              `}
            >
              <li>
                Source Media: <i>GettyImages</i>,{' '}
                <a
                  href="https://www.gettyimages.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.gettyimages.com
                </a>{' '}
                <ul>
                  <li>GettyImages-1138165241</li>
                  <li>GettyImages-117623963</li>
                  <li>GettyImages-1221341313</li>
                  <li>GettyImages-129737918</li>
                  <li>GettyImages-148950384</li>
                  <li>GettyImages-159160638</li>
                  <li>GettyImages-168261614</li>
                  <li>GettyImages-182205777</li>
                  <li>GettyImages-473174821</li>
                  <li>GettyImages-518715854</li>
                  <li>GettyImages-610733230</li>
                  <li>GettyImages-860440748</li>
                  <li>GettyImages-957153732</li>
                </ul>
              </li>
              <li>
                Music: Tissot, Benjamin, "Retro Soul",{' '}
                <a
                  href="https://www.bensound.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.bensound.com
                </a>{' '}
              </li>
              <li>
                “Polar Bear.” <i>WWF, World Wildlife Fund</i>,{' '}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="http://www.worldwildlife.org/species/polar-bear"
                >
                  www.worldwildlife.org/species/polar-bear
                </a>
                , Accessed 08 November 2020.
              </li>
              <li>
                "Polar Bears 101", <i>Polar Bears International</i>,{' '}
                <a
                  href="https://polarbearsinternational.org/polar-bears/name-evolution/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://polarbearsinternational.org/polar-bears/name-evolution/
                </a>
                , Accessed 08 November 2020.
              </li>
              <li>
                Nicholls, Henry "The truth about polar bears", <i>BBC Earth</i>,
                Published 2 September 2015,{' '}
                <a
                  href="http://www.bbc.com/earth/story/20150902-the-truth-about-polar-bears"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.bbc.com/earth/story/20150902-the-truth-about-polar-bears
                </a>
                , Accessed 07 November 2020.
              </li>
              <li>
                "Motion", <i>Adobe Spectrum</i>,{' '}
                <a
                  href="https://spectrum.adobe.com/page/motion/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://spectrum.adobe.com/page/motion/
                </a>
                , Accessed 09 November 2020.
              </li>
            </ul>
          </div>
        </ArticleSectionStyles>
      </Article>
    </>
  )
}
