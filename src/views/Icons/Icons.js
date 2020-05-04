import React from "react";

import mesa from './assets/mesa.png';

import { Nav, Li, Ul, Figcaption, H1, P, Button, Section, Section1, Figure } from './styles.js';


export default function Icons() {
  return (
    <Section>
      <Nav>
        <Ul>
          <Li>Subscribe</Li>
          <Button>login</Button>
        </Ul>
      </Nav>
      <section>
        <Figure>
          <img width="100%" max-width="400px" height="368px" src={mesa} />
          <Figcaption>
            <H1 className="evn">InovPEGN</H1>
            <P className="eventos">Eventos para pessoa empresas que querem <br />soluções</P>
          </Figcaption>
        </Figure>
      </section>
      
     
    </Section>
  );
}
