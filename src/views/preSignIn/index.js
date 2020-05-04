import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

import Coop from '../../assets/coop.png'


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Tecnologia', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Cultura', url: '#' },
  { title: 'Startup', url: '#' },
  { title: 'Politica', url: '#' },
  { title: 'Opiniões', url: '#' },
  { title: 'Ciência', url: '#' },
  { title: 'Saude', url: '#' },
  { title: 'ideias', url: '#' },
  { title: 'Viagens', url: '#' },
];

const mainFeaturedPost = {
  title: 'Venha fazer parte do Inovando PEGN',
  description:"Experimente no ambiente online as mesmas experiências de um evento presencial! Inscreva-se e venha garantir a melhor prática de inovação e desafios da internet.",
  image: 'https://static9.depositphotos.com/1006708/1121/i/450/depositphotos_11217657-stock-photo-happy-owner-of-a-cafe.jpg',
  imgText: 'main image description',
  
};

const featuredPosts = [
  {
    title: 'Desafios de Empresas',
    date: 'Abril 2020',
    description:
      'Desafios para fazer sua empresa crescer com a gente! Aqui empresários tem a oportunidades de aprender mais para seu negócio. ',
    image: Coop,
    imageText: 'Image Text',
  },
  {
    title: 'Acessibilidade',
    date: 'Março 2020',
    description:' Vencer a barreira de comunicação entre as empresas e milhões de deficientes que querem consumir conteúdo online.',
    image: 'https://ufal.br/ufal/noticias/2013/02/tecnologia-da-ufal-e-usada-em-aplicativo-de-inclusao-para-surdos/hugo.jpg/@@images/image.jpeg',
    imageText: 'Image Text',
  },
];



const sidebar = {
  title: 'Sobre',
  description:
    'O projeto PEGN foi feito para empreendedores que buscam participar de eventos que permitam desenvolver o seu negócio através de acessibilidade, networking online e compartilhamento de conhecimentos.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function SignIn() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Inovando PEGN" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="O que faltava para sua empresa"/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="team 32" description="MegaHackathon 2020" />
    </React.Fragment>
  );
}
