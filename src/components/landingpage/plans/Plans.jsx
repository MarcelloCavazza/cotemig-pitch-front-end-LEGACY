import React from "react";
import { useInView } from 'react-intersection-observer'
import Section from "./style";
import Title from '../Title'
import Cards from './Cards'
import { FaPaperPlane, FaPlane, FaRocket } from 'react-icons/fa'

const Plans = ({id}) => {
  
  const {ref: myRef, inView: isVisible} = useInView()

  const plans = [
    {
      type: 'Planos para Advogado',
      plans: [
        {
          color: '#4F4279',
          icon: <FaPaperPlane />,
          title: 'Padrão',
          price: 9.90,
          positive: [
            'Acesso ao app',
            'Sem anúncios',
          ],
          negative: [
            'Notificações controladas',
            'Regiões controladas',
            'Linkar redes sociais'
          ]
        },
        {
          color: '#20DD66',
          icon: <FaPlane />,
          title: 'Premium',
          price: 19.90,
          positive: [
            'Acesso ao app',
            'Sem anúncios',
            'Notificações controladas',
          ],
          negative: [
            'Regiões controladas',
            'Linkar redes sociais'
          ]
        },
        {
          color: '#00D2FF',
          icon: <FaRocket />,
          title: 'Premium +',
          price: 39.90,
          positive: [
            'Acesso ao app',
            'Sem anúncios',
            'Notificações controladas',
            'Regiões controladas',
            'Linkar redes sociais'
          ],
          negative: [
          ]
        }
      ]
    },
    {
      type: 'Taxa Opcional Para Clientes',
      plans: [
        {
          color: '#4F4279',
          icon: <FaPaperPlane />,
          title: 'Taxa',
          price: 2.90,
          positive: [
            'Sem anúncios',
          ],
          negative: [
          ]
        },
      ]
    }
    
  ]

  return (
    <Section ref={myRef} id={id}>
      {
        isVisible &&
        plans.map(plano => 
          <div className="cards-container" key={plano.type}>
            <Title size={2}>{plano.type}</Title>
            <Cards 
              key={plano.type}
              plans={plano.plans}
            />
          </div>
        )
      }
    </Section>
  );
};

export default Plans;
