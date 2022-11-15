import React from "react";
import braga from "../../../assets/ctt-team/braga.jpeg";
import leh from "../../../assets/ctt-team/leh.jpeg";
import larissa from "../../../assets/ctt-team/larissa.jpg";
import marcello from "../../../assets/ctt-team/marcello.jpeg";
import avila from "../../../assets/ctt-team/avila.png";
import Section from "./style";
import Member from "./Member";
import Title from "../../texts/Title";

const Team = ({id}) => {

  const team = [
    {
      color: '#00a560',
      img: braga,
      name: "Arthur Braga",
      desc: "Desenvolvedor Back-End",
    },
    {
      color: '#9c009c',
      img: leh,
      name: "Letícia Cavazza",
      desc: "Design",
    },
    {
      color: '#002849',
      img: larissa,
      name: "Larissa Pedrosa",
      desc: "Desenvolvedora Front End",
    },
    {
      color: '#00a560',
      img: marcello,
      name: "Marcello Cavaza",
      desc: "Desenvolvedor Back-End",
    },
    {
      color: '#002849',
      img: avila,
      name: "Pedro Ávila",
      desc: "Desenvolvedor Front-End",
    },
  ];

  return (
    <Section id={id}>
      <Title size={3}>Conheça o time</Title>
      <div className="team-container">
        {
          team.map(member => <Member {...member} />)
        }
      </div>
    </Section>
  );
};

export default Team;
