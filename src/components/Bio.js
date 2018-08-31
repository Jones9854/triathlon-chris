import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Christian Jones`}
          style={{
            marginRight: rhythm(1 / 2.5),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2.5),
          }}
        />
        <p>
          Written by <strong>Christian Jones</strong> who lives and works in
          Limerick, Ireland.{' '}
        </p>
      </div>
    )
  }
}

export default Bio