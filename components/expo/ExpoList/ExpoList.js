import ExpoItem from '../ExpoItem/ExpoItem'
import {
    List,
} from './Styled'

const ExpoList = ({ data }) => {

    console.log(data)
    return (
        <List>
            {
                data?.map(item => {
                    return(<ExpoItem key={item.id} data={item}/>)
                })
            }
        </List>
    )
}

export default ExpoList