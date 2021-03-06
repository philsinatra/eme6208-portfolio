import React from 'react'

const Spritesheet = () => (
  <svg style={{ display: 'none' }}>
    <symbol id="menu-icon" viewBox="0 0 24 24" fill="none">
      <path
        d="M13 18H20M4 6H20H4ZM4 12H20H4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </symbol>
    <symbol id="close-icon" viewBox="0 0 24 24" fill="none">
      <path
        d="M13.41 12L17.71 7.71C17.8983 7.5217 18.0041 7.2663 18.0041 7C18.0041 6.7337 17.8983 6.47831 17.71 6.29C17.5217 6.1017 17.2663 5.99591 17 5.99591C16.7337 5.99591 16.4783 6.1017 16.29 6.29L12 10.59L7.71 6.29C7.5217 6.1017 7.2663 5.99591 7 5.99591C6.7337 5.99591 6.4783 6.1017 6.29 6.29C6.1017 6.47831 5.99591 6.7337 5.99591 7C5.99591 7.2663 6.1017 7.5217 6.29 7.71L10.59 12L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L12 13.41L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29L13.41 12Z"
        fill="currentColor"
      />
    </symbol>
    <symbol id="icon-success" viewBox="0 0 20 20">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-2.000000, -2.000000)">
          <polygon points="0 0 24 0 24 24 0 24"></polygon>
          <path
            d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M10,17 L5,12 L6.41,10.59 L10,14.17 L17.59,6.58 L19,8 L10,17 Z"
            id="Shape"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
        </g>
      </g>
    </symbol>
    <symbol id="icon-error" viewBox="0 0 20 20">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-2.000000, -2.000000)">
          <polygon points="0 0 24 0 24 24 0 24"></polygon>
          <path
            d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M13,17 L11,17 L11,15 L13,15 L13,17 Z M13,13 L11,13 L11,7 L13,7 L13,13 Z"
            id="Shape"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
        </g>
      </g>
    </symbol>
    <symbol id="icon-info" viewBox="0 0 20 20">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-2.000000, -2.000000)">
          <polygon points="0 0 24 0 24 24 0 24"></polygon>
          <path
            d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M13,17 L11,17 L11,11 L13,11 L13,17 Z M13,9 L11,9 L11,7 L13,7 L13,9 Z"
            id="Shape"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
        </g>
      </g>
    </symbol>
    <symbol id="icon-warning" viewBox="0 0 22 19">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-1.000000, -2.000000)">
          <polygon points="0 0 24 0 24 24 0 24"></polygon>
          <path
            d="M1,21 L23,21 L12,2 L1,21 Z M13,18 L11,18 L11,16 L13,16 L13,18 Z M13,14 L11,14 L11,10 L13,10 L13,14 Z"
            id="Shape"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
        </g>
      </g>
    </symbol>
    <symbol id="icon-check-circle" viewBox="0 0 16 16" fill="none">
      <path
        d="M10.9219 5.51562H10.1891C10.0297 5.51562 9.87812 5.59219 9.78437 5.72344L7.32812 9.12969L6.21562 7.58594C6.12187 7.45625 5.97187 7.37813 5.81094 7.37813H5.07812C4.97656 7.37813 4.91719 7.49375 4.97656 7.57656L6.92344 10.2766C6.96943 10.3408 7.03006 10.3931 7.1003 10.4291C7.17054 10.4652 7.24838 10.4841 7.32734 10.4841C7.40631 10.4841 7.48414 10.4652 7.55439 10.4291C7.62463 10.3931 7.68526 10.3408 7.73125 10.2766L11.0219 5.71406C11.0828 5.63125 11.0234 5.51562 10.9219 5.51562V5.51562Z"
        fill="currentColor"
      />
      <path
        d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125Z"
        fill="currentColor"
      />
    </symbol>
    <symbol id="icon-check" viewBox="0 0 16 16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.97 4.97C11.11 4.83127 11.2989 4.75319 11.4959 4.75265C11.693 4.75211 11.8823 4.82914 12.0231 4.96709C12.1638 5.10505 12.2445 5.29284 12.2479 5.48987C12.2513 5.68689 12.1769 5.87733 12.041 6.02L8.04901 11.01C7.9804 11.0839 7.89759 11.1432 7.80554 11.1844C7.71348 11.2255 7.61408 11.2477 7.51326 11.2496C7.41244 11.2514 7.31228 11.233 7.21876 11.1952C7.12525 11.1575 7.0403 11.1013 6.96901 11.03L4.32401 8.384C4.25032 8.31534 4.19122 8.23254 4.15022 8.14054C4.10923 8.04854 4.08719 7.94922 4.08541 7.84852C4.08364 7.74782 4.10216 7.64779 4.13988 7.5544C4.1776 7.46101 4.23375 7.37618 4.30497 7.30496C4.37619 7.23374 4.46102 7.1776 4.55441 7.13988C4.6478 7.10215 4.74782 7.08363 4.84853 7.08541C4.94923 7.08718 5.04854 7.10923 5.14054 7.15022C5.23254 7.19121 5.31534 7.25031 5.384 7.324L7.47801 9.417L10.951 4.992C10.9572 4.98425 10.9639 4.9769 10.971 4.97H10.97Z"
        fill="currentColor"
      />
    </symbol>
    <symbol
      id="clarity-caret-line"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.23998 6.74001L8.99998 12.7L14.76 6.74001C14.9165 6.57757 15.002 6.35962 14.9978 6.1341C14.9936 5.90859 14.8999 5.69399 14.7375 5.53751C14.575 5.38103 14.3571 5.2955 14.1316 5.29972C13.9061 5.30394 13.6915 5.39757 13.535 5.56001L8.99998 10.255L4.45998 5.56001C4.3035 5.39757 4.0889 5.30394 3.86339 5.29972C3.63788 5.2955 3.41992 5.38103 3.25748 5.53751C3.09503 5.69399 3.0014 5.90859 2.99718 6.1341C2.99296 6.35962 3.0785 6.57757 3.23498 6.74001H3.23998Z"
        fill="white"
      />
    </symbol>
    <symbol id="icon-lock-closed" viewBox="0 0 18 18">
      <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
      <path
        fill="currentcolor"
        d="M14.5,8H14V7A5,5,0,0,0,4,7V8H3.5a.5.5,0,0,0-.5.5v8a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-8A.5.5,0,0,0,14.5,8ZM6,7a3,3,0,0,1,6,0V8H6Zm4,6.111V14.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V13.111a1.5,1.5,0,1,1,2,0Z"
      />
    </symbol>
    <symbol
      id="icon-add-circle"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
    >
      <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
      <path
        fill="currentcolor"
        d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm5,8.5a.5.5,0,0,1-.5.5H10v3.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V10H4.5A.5.5,0,0,1,4,9.5v-1A.5.5,0,0,1,4.5,8H8V4.5A.5.5,0,0,1,8.5,4h1a.5.5,0,0,1,.5.5V8h3.5a.5.5,0,0,1,.5.5Z"
      />
    </symbol>
    <symbol
      id="icon-power"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
    >
      <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
      <rect fill="currentcolor" height="9" rx="0.5" width="2" x="8" />
      <path
        fill="currentcolor"
        d="M12.6075,2.5315l-.57.9115a.505.505,0,0,0,.1685.692,5.869,5.869,0,1,1-6.41,0,.5.5,0,0,0,.16917-.68657L5.964,3.4465,5.392,2.531a.5.5,0,0,0-.68667-.16877L4.7,2.3655a7.95,7.95,0,1,0,8.5955,0,.5.5,0,0,0-.68753.16523Z"
      />
    </symbol>
    <symbol
      id="icon-show-menu"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
    >
      <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
      <rect fill="currentcolor" height="2" rx="0.5" width="14" x="2" y="8" />
      <rect fill="currentcolor" height="2" rx="0.5" width="14" x="2" y="3" />
      <rect fill="currentcolor" height="2" rx="0.5" width="14" x="2" y="13" />
    </symbol>
    <symbol
      id="icon-edit"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
    >
      <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
      <path
        fill="currentcolor"
        d="M16.7835,4.1,13.9,1.216a.60751.60751,0,0,0-.433-.1765H13.45a.6855.6855,0,0,0-.4635.203L2.542,11.686a.49494.49494,0,0,0-.1255.211L1.0275,16.55c-.057.1885.2295.4255.3915.4255a.12544.12544,0,0,0,.031-.0035c.138-.0315,3.933-1.172,4.6555-1.389a.486.486,0,0,0,.207-.1245L16.7565,5.014a.686.686,0,0,0,.2-.4415A.61049.61049,0,0,0,16.7835,4.1ZM5.7,14.658c-1.0805.3245-2.431.7325-3.3645,1.011L3.34,12.304Z"
      />
    </symbol>
  </svg>
)

export default Spritesheet
