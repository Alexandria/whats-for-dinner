
import styles from './Card.module.css'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
    food:{name:string, id?:number, subtitle:string, time:string}

}

export const Card = ({food}:Props) =>{
    return <Link href={"/food"} passHref>
    <div onClick={() => console.log("You clicked me")} className={styles.container}>
        <div className='card-img'>
            <Image src="https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_auto,w_1900/hellofresh_s3/image/60eeee99c8c58d6a6813ab30-4d92c934.jpg" width={"300vw"} height={"200vh"} alt='Image of tacos'/>
        </div>
        <div className={styles.cardDescription}>
            <a>
            <h3>{food.name}</h3>
            <p>{food.time}</p>
            </a>
        </div>
    </div>
    </Link>
}