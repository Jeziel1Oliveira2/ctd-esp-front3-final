import { Button, CardMedia, Container, Typography } from "@mui/material";
import { getComic } from "dh-marvel/services/marvel/marvel.service"
import Head from "next/head";
import Link from "next/link";
import { Comic } from "../../Types/comic";


export const getStaticPaths = async () => {
    return {
        paths: [{ params: { id: "1886" } }],
        fallback: true
    };
}
export async function getStaticProps({ params }: any) {
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
            >Personagem:
            </Typography>
            <Typography>
                {comic?.characters.items.map((item) => (
                    <Link href={`/characters/${item.resourceURI.split("characters/").pop()}`}>
                        <Typography key={item.name}
                         sx={{ cursor: 'pointer' }}
                         gutterBottom
                         noWrap
                         variant="h4"
                         component="div" 
                         >
                         {item.name}   
                        </Typography>

                    </Link>
                ))}
            </Typography>

        </Container>
    )
}