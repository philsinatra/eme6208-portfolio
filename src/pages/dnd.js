import React from 'react'
import { PageMast, SEO } from '../components'
import { ArticleSectionStyles } from '../styles'
import Article from '../templates/Article'

export default function DNDPage(props) {
  return (
    <>
      <SEO title="Drag n Drop" />
      <Article pathName={props.location.pathName}>
        <PageMast title="Drag n Drop" />
        <ArticleSectionStyles>
          <div className="contain">
            <h2>An Assessment</h2>
            <p>
              Here is{' '}
              <a
                href="http://philsinatra.net/branches/uf/eme6208/dnd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                my drag n drop web app
              </a>
              .
            </p>
            <p>
              I changed the topics and options based on some simple assessments
              my youngest son has been doing in pre-school. The drag and drop
              now tracks a user's ability to sort colors, numbers and animals
              into their respective category columns.
            </p>

            <p>
              I modified all of the fonts, sizes, colors and positions
              throughout the layout. I also removed a lot of the hard coded
              positioning and size related code from the template so that it was
              easier to position and size the elements the way I wanted.
            </p>
            <p>
              I applied an SVG background image to the `body` element to add
              some fun color to the overall look.
            </p>
            <p>
              I also changed the overall typography of the page to use
              [Roboto](https://fonts.google.com/specimen/Roboto) as the primary
              typeface, with a fallback to standard system defaults.
            </p>
            <p>
              I added a [media
              query](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
              for the `body` element so that when screens have enough vertical
              space, I center the entire game.
            </p>
            <pre className="code">
              <code className="language-css">
                {`@media screen and (min-height: 64em) {
  body {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }
}`}
              </code>
            </pre>
            <p>
              I wrapped the game in a new `div` with a `class` of `contain` so
              that I could better control the size and position of the game and
              it's contents.
            </p>
            <pre className="code">
              <code className="language-css">
                {`.contain {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 56.25rem;
  padding: 3rem;
  width: 90%;
}`}
              </code>
            </pre>
            <p>
              Next I wrapped the introduction related text elements into a
              separate `div`, again for better control of positioning and
              styling.
            </p>
            <pre className="code">
              <code className="language-html">
                {`<div class="intro">
  <h1>Learning Theories</h1>
  <p>
    Drag-n-drop concepts from the column in the appropriate Learning
    Theory box.
  </p>
  <p>Each box can contain only <span>3 items</span>.</p>
</div>`}
              </code>
            </pre>
            <pre className="code">
              <code className="language-css">
                {`.intro {
  color: white;
  text-align: center;
}

.intro h1 {
  margin-top: 0;
  text-transform: uppercase;
}

.intro p span {
  text-decoration: underline;
}`}
              </code>
            </pre>
            <p>
              As I moved through each section of the stylesheet, I removed
              anything that was outdated or counter productive to the
              adjustments I planned on making to the layout. I converted the
              entire DND container to use a simple, two column grid system.
            </p>
            <pre className="code">
              <code className="language-css">
                {`#dhtmlgoodies_dragDropContainer {
  background-color: white;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 25% auto;
  min-height: 60vh;
  padding: 1.5rem;
  width: 100%;
}`}
              </code>
            </pre>
            <p>
              I changed all of the list item styles with the selection and
              destination containers. The default state is gray, but when a user
              hovers over an item, that item is highlighted in a cornflower
              blue.
            </p>
            <pre className="code">
              <code className="language-css">
                {`#dhtmlgoodies_dragDropContainer li,
#dragContent li,
li#indicateDestination {
  /* Movable items, i.e. <LI> */
  background-color: #efefef;
  border: 1px solid #ccc;
  cursor: pointer;
  font-weight: bold;
  list-style-type: none;
  padding: 0.5rem;
  transition: background-color 225ms ease-in-out;
}

#dhtmlgoodies_dragDropContainer li:hover,
#dragContent li:hover,
li#indicateDestination:hover {
  background-color: lightblue;
  border-color: cornflowerblue;
}`}
              </code>
            </pre>
            <p>
              I tweaked the correct and incorrect background colors, as well as
              the paragraph styles for the elements used as column headers.
            </p>
            <pre className="code">
              <code className="language-css">
                {`#dhtmlgoodies_dragDropContainer ul li.correctAnswer {
  /* Correctly moved item */
  background-color: forestgreen;
  color: #fff;
}
#dhtmlgoodies_dragDropContainer ul li.wrongAnswer {
  /* Item moved to wrong box */
  background-color: firebrick;
  color: #fff;
}

div#dhtmlgoodies_listOfItems > div > p {
  background-color: #250026;
  color: white;
  padding: 0.5rem;
  text-align: center;
  margin-bottom: 0;
  text-transform: uppercase;
  font-weight: bold;
}`}
              </code>
            </pre>
            <p>
              I took out all of the provided styles with hard coded margins,
              heights, widths, as well as all of the IE related hacks (I chose
              to do this because IE is no longer supported by Microsoft).
            </p>
            <p>
              I created another grid to handle the three drop columns, again
              removing the hard coded `float` and `width` declarations.
            </p>
            <pre className="code">
              <code className="language-css">
                {`div#dhtmlgoodies_mainContainer {
  /* Right column DIV */
  /* width: 590px;
  float: left; */

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}`}
              </code>
            </pre>
            <p>
              I stripped out more hard coded values in the main container `div`
              elements, and the list elements within those elements, as well as
              setup my own styles for the column headings.
            </p>
            <pre className="code">
              <code className="language-css">
                {`#dhtmlgoodies_mainContainer div {
  /* Parent <div> of small boxes */
  /* float: left;
  margin-right: 10px;
  margin-bottom: 10px; */
  margin-top: 0px;
  border: 1px solid #999;

  /* CSS HACK */
  /*width: 172px; /~ IE 5.x ~/
  width/~ ~/:/~~/ 170px; /~ Other browsers ~/
  width: /~~/ 170px;*/
}
#dhtmlgoodies_mainContainer div ul {
  /* margin-left: 10px; */
}

#dhtmlgoodies_mainContainer div p {
  /* Heading above small boxes */
  /* margin: 0px;
  padding: 0px; */
  /* padding-left: 12px; */
  /* font-weight: bold;
  background-color: #317082;
  color: #fff;
  margin-bottom: 5px; */
  background-color: #250026;
  color: white;
  font-weight: bold;
  margin: 0;
  padding: 0.5rem;
  text-align: center;
  text-transform: uppercase;
}

#dhtmlgoodies_mainContainer ul {
  /* Small box in right column ,i.e <ul> */
  /* width: 152px;
  height: 80px; */
  border: 0px;
  margin-bottom: 0px;
  overflow: hidden;
}`}
              </code>
            </pre>
            <p>
              I investigated the JavaScript code in detail, but I did not make
              any changes because it is functioning properly. While the
              instructions for the assignment mention changing the JavaScript
              code to "provide different content for your assessment", I found
              that changing the JavaScript code was not necessary.
            </p>
            <div>
              <img
                src="https://i.redd.it/8cbxw1liicp41.jpg"
                alt="Steve Jobs meme"
              />
            </div>
            <p>
              I did temporarily adjust a dynamic height value the script is
              using to make the drop areas larger, but ultimately I reversed the
              change back to the original script, and instead adjusted that
              value in the HTML using the example template's original code.
            </p>
            <pre className="code">
              <code className="language-html">
                {`<div id="dhtmlgoodies_mainContainer">
  <!-- ONE <UL> for each "room" -->
  <div class="">
    <p>Animals</p>
    <ul style="height: 300px" id="box1"></ul>
  </div>
  <div class="">
    <p>Colors</p>
    <ul style="height: 300px" id="box2"></ul>
  </div>
  <div>
    <p>Numbers</p>
    <ul style="height: 300px" id="box3"></ul>
  </div>
</div>`}
              </code>
            </pre>
            <p>
              The assessment functions as expected with updated content and is
              visually enhanced using modern CSS techniques.
            </p>
          </div>
        </ArticleSectionStyles>
      </Article>
    </>
  )
}
