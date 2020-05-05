import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { TextContainer } from "./styles";




const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <TextContainer>
        <section>
          <p>
            No cenário que vivemos de constante mudanças e de desenvolvimento -
            principalmente e indubitavelmente - tecnológico, a busca pela
            informação rápida e acessível vem crescendo e se consolidando cada
            vez. Ao sermos lançados bruscamente para as circunstâncias
            proveniente ao covid-19, na qual tivemos que nos adaptar a tal
            contexto que, até o momento, estávamos a vir à passos leves.
          </p>

          <p>
            A inovação permite que a empresa não fique estagnada e siga
            atendendo às exigências do mercado, oferecendo produtos ou serviços
            novos e se antecipando à demanda. O Projeto Inovando PEGN tem como
            objetivo auxiliar pequenos empreendedores a participar de eventos
            online, com oportunidade de aprender e posteriormente criar o seu
            negócio.
          </p>
          <p>
            O projeto Inovando PEGN permite que suas ferramentas sejam de fácil
            acesso, fácil utilização para que seja possível compartilhar ideias
            entre empreendedores. Os quais se encontram entre as classes B e C.
            Costumam consumir informações em locais de acessibilidade fácil,
            clara, rápida e segura, pois detém de outros afazeres para realizar
            em todo o dia.
          </p>
          <p>
            Todos os dias, as pessoas com deficiência cruzam com diversas
            barreiras por causa a falta de acessibilidade. Sim, ainda hoje, isso
            é uma realidade! A falta de acessibilidade está acontecendo nesse
            exato momento. A maior dificuldade que os surdos encontram é a
            comunicacional. É exatamente por esse motivo que o Inovando PEGN
            busca dar mais acessibilidade a esse público de grandes
            empreendedores.
          </p>
          <p>
            Os surdos do nosso país têm sua língua materna, a LIBRAS, mas poucas
            pessoas sabem esta língua! Para entender melhor a dificuldade que os
            surdos enfrentam, imagine-se visitando um país onde você não conhece
            a língua e não consegue se comunicar. É assim que os surdos se
            sentem, mas com uma diferença: eles estão no seu próprio país!
          </p>
          <p>
            Em virtude deste cenário mundial, adaptamos a nossa forma de
            interagir, de conviver e de aprender. Entretanto, sabemos e
            entendemos que cada necessidade e adaptação a qualquer cenário é
            estreitamente diferente em algumas ocasiões, as principais dentre
            essas é a acessibilidade, a conexão, a obtenção de conhecimento e
            informação.
          </p>

        </section>
  
      </TextContainer>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
