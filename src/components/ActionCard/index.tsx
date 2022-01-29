import styles from './ActionCard.module.css'
import Link from 'next/link'

interface Props {
    action:string
    link:string
}

export const ActionCard = ({action, link}:Props) =>{
 return <Link href={link} passHref>
     <div className={styles.container}>
         <h3>{action}</h3>
     </div>
 
 </Link>
}
