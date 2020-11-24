import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

const Video = ({
  autoPlay,
  loop,
  mTop,
  playsInline,
  poster,
  script,
  src,
  title,
  track,
}) => {
  const [scriptActive, setScriptActive] = useState(false)
  return (
    <>
      <StyledVideo
        css={css`
          margin-top: ${mTop};
        `}
      >
        <video
          autoPlay={autoPlay}
          controls
          loop={loop}
          playsInline={playsInline}
          poster={poster}
          preload="none"
          title={title}
        >
          <source src={src} type="video/mp4" />
          {track && (
            <track
              label="English Captions"
              kind="captions"
              srcLang="en"
              src={track}
              default
            />
          )}
        </video>
        {script && (
          <>
            <div className="controls">
              <StyledOutlineButton
                onClick={() => setScriptActive(!scriptActive)}
              >
                {scriptActive ? 'Hide' : 'Show'} Transcript
              </StyledOutlineButton>
            </div>
            <div
              aria-hidden={!scriptActive}
              className="transcript"
              hidden={!scriptActive}
            >
              {script}
            </div>
          </>
        )}
      </StyledVideo>
    </>
  )
}

Video.defaultProps = {
  autoPlay: false,
  loop: false,
  mTop: 0,
  playsInline: false,
  poster: 'false',
}

Video.propTypes = {
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  mTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  playsInline: PropTypes.bool,
  poster: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  script: PropTypes.object,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  track: PropTypes.string,
}

const StyledVideo = styled.div`
  margin: 3rem auto;
  max-width: 68.75rem;

  video {
    width: 100%;
  }

  .controls {
    display: flex;
    justify-content: flex-end;
    padding: 0.75rem;

    @media screen and (min-width: 82.8125em) {
      padding: 0.75rem 0;
    }
  }

  .transcript {
    background-color: var(--color-white);
    margin: 0 auto;
    max-width: 75ch;
    padding: 1.5rem;

    > p:first-child {
      margin-top: 0;
    }

    > p:last-child {
      margin-bottom: 0;
    }
  }
`

const StyledOutlineButton = styled.button`
  --button-color: hsla(0, 0%, 13%, 1);
  --border-color: hsla(109, 0%, 77%, 1);
  --hover-color: hsla(109, 0%, 96%, 1);

  &.primary {
    --button-color: hsla(210, 77%, 47%, 1);
    --border-color: var(--button-color);
    --hover-color: hsla(205, 63%, 98%, 1);
  }
  &.secondary {
    --button-color: hsla(339, 100%, 43%, 1);
    --border-color: var(--button-color);
    --hover-color: hsla(340, 81%, 98%, 1);
  }

  background-color: var(--color-white);
  border-radius: 4px;
  border: 1px solid var(--border-color);
  color: var(--button-color);
  font-size: 0.75rem;
  letter-spacing: 0.02857rem;
  line-height: 1.75;
  min-width: 64px;
  padding: 0.3125rem 1rem;
  text-transform: uppercase;
  transition: background-color 225ms ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--hover-color);
  }

  &:hover {
    cursor: pointer;
  }
`

export default Video
