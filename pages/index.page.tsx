import type { NextPage } from "next";
import Head from "next/head";
import { Comic } from "../Types/comic";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, CardMedia, Container, Link, Typography } from "@mui/material";
import { useComics } from "../services/marvel/useComics";




 export default function Home() {

  const { data, loadingMoreComics, loadingLessComics, page } = useComics(); 


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <Container sx={{ padding: '20px', textAlign: 'center' }}>
      <Head>
        <title>Marvel - Home</title>
      </Head>

      <Typography
        gutterBottom
        align="center"
        noWrap
        variant="h3"
        component="div"
      >
        Bem vindo ao DH bug
      </Typography>
      <Typography        
        gutterBottom
        align="center"
        noWrap
        variant="h4"
        component="div"
      >
        Onde a compra e o bug se misturam
      </Typography>


      <Box sx={{ flexGrow: 1, margin: '20px' }}>
        <Grid sx={{ justifyContent: 'center' }} container spacing={2}>
          {data?.data?.results.map((comic: Comic) => (
            <Grid key={comic.id} width={350} item >
              <Typography
                gutterBottom
                noWrap
                variant="h5"
                component="div"
              >
                {comic.title}
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 10 }}>
                <Link href={`/checkout/${comic.id}`}>
                  <Button variant="contained">Comprar</Button>
                </Link>
                <Link href={`/comic/${comic.id}`}>
                  <Button variant="outlined">
                    Detalhes
                  </Button>
                </Link>

              </div>

            </Grid>
          ))}


        </Grid>
      </Box>

      <Button onClick={loadingLessComics} variant="outlined" disabled={page === 1}>
      Página anterior
      </Button>
      <Typography        
        gutterBottom
        align="center"
        component="div"
      >
       Você está na Página de numero {page}
      </Typography>
      <Button  sx={{ marginLeft: "12px" }} onClick={loadingMoreComics} variant="outlined">
        Próxima Página
      </Button>
      
    </Container>
  );
};