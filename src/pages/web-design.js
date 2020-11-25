import React from 'react'
import { PageMast, SEO } from '../components'
import { ArticleSectionStyles } from '../styles'
import Article from '../templates/Article'

export default function ImageEditingPage(props) {
  return (
    <>
      <SEO title="Web Design" />
      <Article pathName={props.location.pathName}>
        <PageMast title="Web Design" />
        <ArticleSectionStyles>
          <div className="contain">
            <h2>A Quiz</h2>
            <p>
              Since I have extended knowledge of the topics covered in this
              assignment, I decided to challenge myself on this assignment and
              build my own quiz component based on the example we were provided
              in class. I borrowed the questions from a science experiment my
              son recently participated in for school which was focused on mud
              snails.
            </p>
            <p>
              The first task was to get the data together. The example code
              combined the functionality for the quiz with the quiz data. I
              separated the functionality from the data by putting all of my
              questions and answers in a unique file. I changed the format of
              the data also from a JavaScript array to a{' '}
              <a
                href="https://www.json.org/json-en.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                JSON
              </a>{' '}
              file.
            </p>
            <pre className="code">
              <code className="language-json">
                {`{
"trivia": [
  {
    "category": "Vocabulary",
    "question": "What type of water is brackish water?",
    "correct": "Water that is a mix of both salt and fresh water",
    "options": [
      "Water that is slightly muddy",
      "Water that is a mix of both salt and fresh water",
      "Water that is polluted"
    ]
  },`}
              </code>
            </pre>
            <p>
              Next, I need to load all of the questions, and then display only
              one at a time. Conceptually the goal is to load all of the
              questions into a variable, who's type is an <i>array</i>, which is
              similar to a list. Then I want to show only one item from the list
              at a time. JavaScript has many different options for looping
              through a list. I chose to use a{' '}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
                target="_blank"
                rel="noopener noreferrer"
              >
                map
              </a>{' '}
              method.
            </p>
            <pre className="code">
              <code className="language-javascript">
                {'{gameQuestions.map((q, i) => {'}
              </code>
            </pre>
            <p>
              Within the <i>map</i> method, I built the HTML structure for a
              single question. I built this as a template, so the structure can
              be reused for each question.
            </p>
            <pre className="code">
              <code className="language-javascript">
                {`<div key={uuidv4()}>
<p className="statement">{question}</p>
{options.map(item => (
  <Option
    correct={correct}
    item={item}
    key={uuidv4()}
    loading={loading}
  />`}
              </code>
            </pre>
            <p>
              I built a similar template system for the options. My goal was to
              build a single template for an option that is presented for each
              question, with a plan of reusing the template for every option on
              every question.
            </p>
            <pre className="code">
              <code className="language-javascript">
                {`<div>
<input
  checked={selectedOption === item}
  className="visually-hidden"
  id={item}
  name="kc-trivia-name"
  onChange={e => handleOptionChange(e, correct)}
  disabled={loading}
  type="radio"
/>
<label
  className={
    item === correct ? : 'error'
  }
  htmlFor={item}
  ref={item === correct ? myRef : null}
>
  {item}
</label>
</div>`}
              </code>
            </pre>
            <p>
              All of the attributes and values handle determining which options
              are correct and incorrect, what labels are displayed for each
              option, keeping track of whether or not an option has been
              selected by the user, and some class names for applying CSS
              styles.
            </p>
            <p>
              For color choices, I stuck to conventional expectations with a{' '}
              <span
                css={css`
                  background-color: var(--color-green-400);
                  color: var(--color-white);
                `}
              >
                successful green
              </span>{' '}
              that highlights the correct answer for each question, and an{' '}
              <span
                css={css`
                  background-color: var(--color-red-400);
                  color: var(--color-white);
                `}
              >
                error red
              </span>{' '}
              that outlines an incorrect selection option that's selected.
            </p>
            <p>
              I added a score keeping component that adds one point for each
              correct answer, and then a randomize function that pulls a random
              10 questions from the full question list each time the quiz loads.
            </p>
            <p>
              Instead of a next/previous button combination, I added a timer so
              that after a user makes a selection there is a slight pause while
              the feedback colors are displayed while the next question loads.
            </p>
            <p>
              Last, I added a <i>Cheat Mode</i> since not everyone is an expert
              in Mud Snails. Turning <i>Cheat Mode</i> on will add a blue
              pulsing glow around the correct answer.
            </p>
            <p>
              Overall I'm happy with how the final quiz turned out. I have
              variables setup so that I can create unique versions of the game
              with as many random questions as I want for each instance.
              Everything is build using components templates, so long term
              maintenance would be easier. I think the functionality is simple,
              the design looks clean, and the overall user experience should be
              enjoyable on any browsing device.
            </p>
            <p>
              <a
                href="https://pjs-uf.netlify.app/eme6208-quiz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Play the quiz and read the full documentation
              </a>
              .
            </p>
          </div>
        </ArticleSectionStyles>
      </Article>
    </>
  )
}
