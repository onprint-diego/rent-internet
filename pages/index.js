import { useState, useEffect } from 'react'
import { gql } from "@apollo/client"
import { client } from '../data/client'
import { sliceString } from '../utils/utils'
import Head from 'next/head'
import Details from '../components/home/Details/Details'
import Features from '../components/home/Features/Features'
import Hero from '../components/home/Hero/Hero'

//TODO> loading, cleanup en useEffect
//TODO> pasar toda la logica representacional a un componente Home.js


export default function Home(props) {
  
  const [ heroContent, setHeroContent ] = useState({})
  const [ detailsContent, setDetailsContent ] = useState({})
  const [ featuresContent, setFeaturesContent ] = useState([])

  useEffect(() => {

    console.log(props.page.features)

    setDetailsContent({
      title: props.page.description.descriptiontitle,
      text: props.page.description.descriptiontext,
      backgroundimage: props.page.description.descriptionbackgroundimg.sourceUrl,
    })

    setHeroContent({
      title: props.page.homepagehero.title, 
      subtitle: props.page.homepagehero.subtitle,
      rentbutton: props.page.homepagehero.rentbutton,
      detailsbutton: props.page.homepagehero.detailsbutton,
      heroimage: {
        src: props.page.homepagehero.heroimage.sourceUrl,
        alt: props.page.homepagehero.heroimage.altText,
      },
      icons: [
        {
          description: sliceString(props.page.icons.conecta.description),
          src: props.page.icons.conecta.sourceUrl,
        },
        {
          description: sliceString(props.page.icons.economico.description),
          src: props.page.icons.economico.sourceUrl,
        },
        {
          description: sliceString(props.page.icons.simple.description),
          src: props.page.icons.simple.sourceUrl,
        },
        {
          description: sliceString(props.page.icons.travelers.description),
          src: props.page.icons.travelers.sourceUrl,
        },
      ],
    })

    setFeaturesContent([
        {
          title: props.page.features.uso.title,
          description: sliceString(props.page.features.uso.description),
          src: props.page.features.uso.sourceUrl,
        },
        {
          title: props.page.features.speed.title,
          description: sliceString(props.page.features.speed.description),
          src: props.page.features.speed.sourceUrl,
        },
        {
          title: props.page.features.segura.title,
          description: sliceString(props.page.features.segura.description),
          src: props.page.features.segura.sourceUrl,
        },
        {
          title: props.page.features.price.title,
          description: sliceString(props.page.features.price.description),
          src: props.page.features.price.sourceUrl,
        },
        {
          title: props.page.features.compartida.title,
          description: sliceString(props.page.features.compartida.description),
          src: props.page.features.compartida.sourceUrl,
        },
        {
          title: props.page.features.bateria.title,
          description: sliceString(props.page.features.bateria.description),
          src: props.page.features.bateria.sourceUrl,
        },
      ]
    )
  }, [])

  return (
    <>
      <Head>
        <title>Rent Internet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero content={heroContent}/>
      <Details content={detailsContent} />
      <Features content={featuresContent} />
    </>
  )
}

export async function getStaticProps() {
  try {
    const { data, errors } = await client.query({
      query: gql`
        query NewQuery {
          page(id: "cG9zdDo1OA==") {
            homepagehero {
              title
              subtitle
              rentbutton
              detailsbutton
              heroimage {
                altText
                sourceUrl
              }
            }
            icons {
              conecta {
                title
                description
                sourceUrl
              }
              economico {
                description
                title
                sourceUrl
              }
              simple {
                description
                sourceUrl
                title
              }
              travelers {
                description
                sourceUrl
                title
              }
            }
            description {
              descriptiontext
              descriptiontitle
              descriptionbackgroundimg {
                sourceUrl
              }
            }
            features {
              bateria {
                description
                title
                sourceUrl
              }
              compartida {
                description
                title
                sourceUrl
              }
              price {
                description
                title
                sourceUrl
              }
              segura {
                description
                title
                sourceUrl
              }
              speed {
                description
                title
                sourceUrl
              }
              uso {
                description
                title
                sourceUrl
              }
            }
          }
        }
      `,
    })
    return {
      props: {
        page: data.page,
      },
    }
  } catch (err) {
    console.log(err)
    return {
      props: {
        error: 'Error fetching WP data'
      },
    }
  }
}