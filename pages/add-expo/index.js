import NewExpoForm from "../../components/forms/NewExpoForm"

const AddExpo = () => {

    const submitNewExpo = (newExpoData) => {
        console.log(newExpoData)
    }

    return(
        <NewExpoForm submitNewExpo={submitNewExpo} />
    )
}

export default AddExpo