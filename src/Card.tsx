import styles from './Card.module.css'
 
 
interface CardProps {
  title: string;
  text: string;
  image?: string;
}
 
function Card({ title, text, image = "https://picsum.photos/200/300" }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <img src={image} alt={title} className={styles.cardImage} />   card.tsx
      <p>{text}</p>
    </div>
  )
}
 
export default Card
 