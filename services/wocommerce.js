import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"

//Woo Api keys
//NO   V2 ck_017b4787d243489633c45153b29a045418a17c3a, cs_fdaedbaaeaf92e273946236cef7f011bf56335d7
//Si ck_8b07341536e46d6e9bf8d1043563c26033bdc0b2, cs_a7534de95463d32baf16280b4b4c666e160cf189

export const api = new WooCommerceRestApi({
    url: "https://db.rent-internet.com",
    consumerKey: "ck_017b4787d243489633c45153b29a045418a17c3a",
    consumerSecret: "cs_fdaedbaaeaf92e273946236cef7f011bf56335d7",
    version: "wc/v3",
    queryStringAuth: true,
    axiosConfig: {
            headers: {'Content-Type': 'application/json'},
    }
});

export const getProductDetails = () => {
    api.get("products")
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data)
      }
    })
    .catch(err => console.log(err))
}