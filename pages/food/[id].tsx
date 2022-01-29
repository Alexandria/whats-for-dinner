import {useRouter} from 'next/router'

const Food = () =>{
    const router = useRouter()
    const {id} = router.query

    return <p>Food: {id}</p>
}

export default Food 