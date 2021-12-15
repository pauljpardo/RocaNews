import React from 'react'

import './Layout.css'

export default function Layout(props) {
  return (
    <>
      <div>
      <header>
          <h1>RocaNews</h1>
          <p><i>Unbiased. Informative. Trustworthy.</i></p>
      </header>
        <hr/>
      </div>
      <div className="layout-children">{props.children}</div>
    </>
  )
}