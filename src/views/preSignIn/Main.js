import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { TextContainer } from "./styles";
import Markdown from "./Markdown";
const post = "dsfsdfdsfds";

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
            A inovação permite que a empresa não fique estagnada e siga
            atendendo às exigências do mercado, oferecendo produtos ou serviços
            novos e se antecipando à demanda. O Projeto Inovando PEGN tem como
            objetivo auxiliar pequenos empreendedores a participar de eventos
            online, com oportunidade de aprender e/ou criar seu negócio.
          </p>
          <p>
            O projeto Inovando PEGN permite que suas ferramentas sejam de fácil
            acesso, fácil o uso de suas ferramentas e possibilidade de
            compartilhar ideias entre empreendedores. Estes estão entre as
            classes B e C. Costumam consumir informações em locais de
            acessibilidade fácil, clara, rápida e segura, pois detém de outros
            afazeres para realizar em todo o dia.
          </p>
          <p>
            A maior dificuldade que os surdos encontram é a comunicacional. É
            exatamente por esse motivo que o Inovando PEGN busca dar mais
            acessibilidade a esse publico de empresários. Os surdos do nosso
            país têm sua língua materna, a LIBRAS, mas poucas pessoas sabem esta
            língua! Para entender melhor a dificuldade que os surdos enfrentam,
            imagine-se visitando um país onde você não conhece a língua e não
            consegue se comunicar. É assim que os surdos se sentem, mas com uma
            diferença: eles estão no seu próprio país!
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
