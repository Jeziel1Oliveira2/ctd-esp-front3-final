import { Button, CardMedia, Container, Typography } from "@mui/material";
import { getComic } from "dh-marvel/services/marvel/marvel.service"
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router"
import { Comic } from "../../Types/comic"


export const getStaticPaths = async () => {
    return {
        paths: [{ params: { id: "1886" } }],
        fallback: true
    };
}
export async function getStaticProps({ params }: any) {
    /* const { query } = useRouter() */
    const data = await getComic(Number(params.id))

    return {
        props: {
            data
        }
    }
}

type PropsDetails = {
    data: Comic

}





export default function ComicDetail(props: PropsDetails) {
    const data = props
    const comic = data?.data;



    console.log(data)
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column' }}>
            <Head>
                <title>Marvel - Comic</title>
            </Head>

            <Typography
                gutterBottom
                noWrap
                variant="h2"
                component="div"
            >
                {comic?.title}
            </Typography>
            <CardMedia
                component="img"
                height="355"
                image={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
                alt={comic?.title}
            />
            <Typography
                gutterBottom
                noWrap
                variant="h3"
                component="div"
            >Preço: $ {comic?.price}</Typography>
            {comic?.stock > 0 ?
                <Link href={`/checkout/${comic.id}`}>
                    <Button variant="contained">Comprar</Button>
                </Link>
                : <Typography
                    gutterBottom
                    noWrap
                    variant="h5"
                    component="div"
                > 
                <p>
                    Sem estoque no momento.
                    <a href="/">Veja nossos outros quadrinhos!</a>
                </p></Typography>
            }
            <Typography
                sx={{ margin: '10px 0', color: 'black' }}
                gutterBottom
                noWrap
                variant="h3"
                component="div"
            >PERSONAGEM: </Typography>
            {comic?.characters.iten.map((iten) => (
                <Link href={`/characters/${iten.URL.split("characters/").pop()}`}>
                    <Typography key={iten.name}
                        sx={{ cursor: 'pointer' }}
                        gutterBottom
                        noWrap
                        variant="h6"
                        component="div"
                    >{iten.name}</Typography>
                </Link>
            ))}
        </Container>
    )
}