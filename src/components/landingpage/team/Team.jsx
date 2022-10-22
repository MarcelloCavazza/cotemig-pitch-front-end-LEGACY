import React from 'react'
import braga from '../../../assets/ctt-team/braga.jpeg'
import leh from '../../../assets/ctt-team/leh.jpeg'
import larissa from '../../../assets/ctt-team/larissa.jpeg'
import marcello from '../../../assets/ctt-team/marcello.jpeg'
import avila from '../../../assets/ctt-team/avila.png'
import Style from './style'

const Team = () => {

  const team = [
    {
      img: braga,
      name: 'Arthur Braga',
      desc: 'Desenvolvedor Back-End'
    },
    {
      img: leh,
      name: 'Letícia Cavazza',
      desc: 'Design'
    },
    {
      img: larissa,
      name: 'Larissa',
      desc: 'Desenvolvedora Front-End'
    },
    {
      img: marcello,
      name: 'Marcello Cavaza',
      desc: 'Desenvolvedor Back-End'
    },
    {
      img: avila,
      name: 'Pedro Ávila',
      desc: 'Desenvolvedor Front-End'
    },
  ]

  return (
    <>
      <Style />
      <article id="equipe">
        <div className="container">
          {team.map((member, index) => 
          <div className="card" key={index}>
            <div className="contente">
              <div className="img"><img src={member.img} alt="" /></div>
              <div className="contentBx">
                <h3>{member.name}<br /><span>{member.desc}</span></h3>
              </div>
            </div>         
          </div> 
          )}
        </div>
      </article>
    </>
  )
}



export default Team