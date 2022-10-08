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
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {

    setDetailsContent({
      title: props.page.description.descriptiontitle,
      text: props.page.description.descriptiontext,
      backgroundimage: props.page.description.descriptionbackgroundimg.sourceUrl,
    }, [])
    // react-hooks/exhaustive-deps

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
      ]
    })
  }, [])
  // react-hooks/exhaustive-deps

  return (
    <>
      <Head>
        <title>Rent Internet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero content={heroContent}/>
      <Details content={detailsContent} />
      <Features />
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