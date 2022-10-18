import {
    Container,
} from './Elements'

const SuccessCancel = () => {

    //if success
    // //Set the order in WP WOO once payment was succesfull
    // const placeOrder = () => {
    //     setLoading(true)
    //     api.post("orders", order)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    //     .finally(() => setLoading(false))
    // }



    return (
        <Container>
            <Inner>
                La compra fue exitosa. 
                Mail en casilla.
            </Inner>
        </Container>
    )
}

export default SuccessCancel