'use client'
import Image from 'next/image'
import styles from './page.module.css'
export default function Card() {
   const cards = [
      {
         id: 1,
         image: '/icons/kyxnya.svg',
         title: 'C 2000 г на рынке',
         text: 'наши кухни выбрали 10 000+ семей',
       },
      {
         id: 2,
         image: '/icons/srok.svg',
         title: 'Сжатые сроки',
         text: 'изготовление кухни от 20 дней',
      },
      {
         id: 3,
         image: '/icons/disain.svg',
         title: 'Дизайн проект',
         text: 'бесплатно за 30 минут',
      },
   ]
   return <>
      <div className={styles.cards}>
         {cards.map((card) => (
            <div key={card.id} className={styles.card}>
               <Image src={card.image} alt={card.title} width={70} height={70} />
               <div className={styles.card__info}>
                  <h2 className={styles.card__title}>{card.title}</h2>
                  <p className={styles.card__text}>{card.text}</p>
               </div>
            </div>
         ))}
      </div>
   </>
}