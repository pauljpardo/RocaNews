import React from 'react'

export default function Layout(props) {
  return (
    <>
      <div>
      <header>
          <h1><b>Roca</b>News</h1>
          <p><i>Unbiased. Informative. Trustworthy.</i></p>
        </header>
        <hr />
        <hr />
      </div>
      <div className="layout-children">{props.children}</div>
    </>
  )
}