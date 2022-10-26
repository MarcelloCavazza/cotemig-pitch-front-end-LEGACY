import React from "react";
import braga from "../../../assets/ctt-team/braga.jpeg";
import leh from "../../../assets/ctt-team/leh.jpeg";
import larissa from "../../../assets/ctt-team/larissa.jpg";
import marcello from "../../../assets/ctt-team/marcello.jpeg";
import avila from "../../../assets/ctt-team/avila.png";
import Section from "./style";
import Member from "./Member";

const Team = ({id}) => {
  const team = [
    {
      color: 'rgba(59, 187, 0, .3)',
      img: braga,
      name: "Arthur Braga",
      desc: "Desenvolvedor Back-End",
    },
    {
      color: 'rgba(156, 0, 156, .3)',
      img: leh,
      name: "Letícia Cavazza",
      desc: "Design",
    },
    {
      color: 'rgba(214, 0, 54, .3)',
      img: larissa,
      name: "Larissa Pedrosa",
      desc: "UI/UX Designer",
    },
    {
      color: 'rgba(59, 187, 0, .3)',
      img: marcello,
      name: "Marcello Cavaza",
      desc: "Desenvolvedor Back-End",
    },
    {
      color: 'rgba(0, 40, 73, .3)',
      img: avila,
      name: "Pedro Ávila",
      desc: "Desenvolvedor Front-End",
    },
  ];

  return (
    <Section id={id}>
      <div className="team-container">
        {
          team.map(member => <Member {...member} />)
        }
      </div>
    </Section>
  );
};

export default Team;
