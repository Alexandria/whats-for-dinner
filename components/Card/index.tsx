
import styles from './Card.module.css'
import Link from 'next/link'

interface Props {
    food:{name:string, id:number}

}

export const Card = ({food}:Props) =>{
    return <Link href={"/food/"+food.id} passHref>
    <div onClick={() => console.log("You clicked me")} className={styles.container}>
        <a>
        <h2>{food.name}</h2>
        </a>
        </div>
    </Link>
}