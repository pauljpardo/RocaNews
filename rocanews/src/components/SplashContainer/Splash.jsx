import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function SplashContainer() {
  return (
    <>
      <div className='main_div'>
        
        <div className='left_panel'>
          <p> We live in an unprecedented time, where finding trustworthy
            news can be as hard as climbing Mount Everest.
            RocaNews was established in order to provide our readers with
            Unbiased and Reliable articles in which one can learn recent
            significant stories, told in a way that news should be, Purely informative.</p>
        </div>

        <div className='right_panel'>
          <div>
            <p className='recent'> Recent Stories and News</p>
              <div className= 'story-list'>
              <ol>
                <li> <p>The Ghislaine Trial - a Roca wrap on Ghislaine Maxwell, whose high-profile trial began this morning. Part 1 of 2 </p> <img src='https://i.imgur.com/WmEzaFn.png'></img></li>
                <hr />
                <li><p>Virgil’s Fashion - a Roca wrap on Virgil Abloh, who died Sunday </p><img src='https://i.imgur.com/7S4B1SX.png'/></li>
                <hr />
                <li><p>The WTA pulls out of China, the MLB enters a lockout, & more - quick cards for December 3 </p><img src='https://i.imgur.com/pO6i1lT.png'/></li>
                <hr />
                <li><p>The Ghislaine Trial - a Roca wrap on Ghislaine Maxwell, whose high-profile trial began yesterday. Part 2 of 2 </p><img src='https://i.imgur.com/bdBPG6L.png'/> </li>
                <hr />
                <li><p>30,000 people trapped in Disneyland, abortion hearings, & more - quick cards for November 2 </p><img src='https://i.imgur.com/kQZKqoK.png'/></li>
                
                <p><b><Link className='allnews'>All News</Link></b></p>
              </ol>
              </div>
          </div>
        </div>

      </div>
    </>
  )
}
