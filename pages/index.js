import { useState, useEffect } from 'react'
import { gql } from "@apollo/client";
import { client } from '../data/client';
import Head from 'next/head'
import ProductDetail from './product-detail'
import { GetProductsContext } from '../context/ProductsContext'
import { getProductDetails } from '../services/wocommerce'
import PrimaryButton from '../components/buttons/PrimaryLinkButton'
import Hero from '../components/home/Hero/Hero'

export default function Home(props) {
  
  console.log(props)
  const { products, setProducts } = GetProductsContext()
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    getProductDetails(setProducts, setLoading)
  }, [])

  return (
    <>
      <Head>
        <title>Rent Internet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      {
        loading ?
        '...loading' :
        <PrimaryButton to='product-detail'>Rent</PrimaryButton>
      }
    </>
  )
}

export async function getStaticProps() {
  try {
    const { data, errors } = await client.query({
      query: gql`
        query MyQuery {
          page(id: "cG9zdDo1OA==") {
            homepagehero {
              title
              subtitle
              heroimage {
                altText
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