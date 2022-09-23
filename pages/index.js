import { useState, useEffect } from 'react'
import Head from 'next/head'
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"
import axios from 'axios'

//Woo Api keys
// public> ck_80a2664a198dce072225a7850dcf185e53bbd77a
// secret> cs_9abd63dc1ede4fda0e2ef4182a46e6a2023a91df

export default function Home(props) {

  // const [ expos, setExpos ] = useState([])
  // const url = 'https://dummyapi.io/data/v1/post?limit=10'


  // useEffect(() => {
  //   fetch(url)
  //   .then(res => console.log(res))
  // }, [])



  const [ products, setProducts ] = useState([])

  useEffect(() => {

    const api = new WooCommerceRestApi({
      url: "http://rent-internet.com",
      consumerKey: "ck_80a2664a198dce072225a7850dcf185e53bbd77a",
      consumerSecret: "cs_9abd63dc1ede4fda0e2ef4182a46e6a2023a91df",
      version: "wc/v3"
    });

    api
    .get("orders")
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      }
    })
    .catch((error) => {});

  }, [])
  
  return (
    <>
      <Head>
        <title>Rent Internet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}