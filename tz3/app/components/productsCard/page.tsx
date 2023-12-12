'use client'
import Image from 'next/image'
import styles from './page.module.css'
export default function ProductCards() {
   const products = [
      {
         id: 1,
         img: '/images/photoSlider.svg',
         img2: '/images/slider.svg',
         title: 'Кухня 097 минимализм',
         discript: 'Угловая белая кухня со столешницей под бетон.',
         price: [{
            name: 'Эконом',
            price: '168 000 р'
         },
         {
            name: 'Стандарт',
            price: '217 000р'
         },
         {
            name: 'Премиум',
            price: '270 000р'
         }],
         size: '4900 мм'
      },
      {
         id: 2,
         img: '/images/photoSlider.svg',
         img2: '/images/slider.svg',
         title: 'Кухня 097 минимализм',
         discript: 'Угловая белая кухня со столешницей под бетон.',
         price: [{
            name: 'Эконом',
            price: '168 000 р'
         },
         {
            name: 'Стандарт',
            price: '217 000р'
         },
         {
            name: 'Премиум',
            price: '270 000р'
         }],
         size: '4900 мм'
      },
      {
         id: 3,
         img: '/images/photoSlider.svg',
         img2: '/images/slider.svg',
         title: 'Кухня 097 минимализм',
         discript: 'Угловая белая кухня со столешницей под бетон.',
         price: [{
            name: 'Эконом',
            price: '168 000 р'
         },
         {
            name: 'Стандарт',
            price: '217 000р'
         },
         {
            name: 'Премиум',
            price: '270 000р'
         }],
         size: '4900 мм'
      },
      {
         id: 4,
         img: '/images/photoSlider.svg',
         img2: '/images/slider.svg',
         title: 'Кухня 097 минимализм',
         discript: 'Угловая белая кухня со столешницей под бетон.',
         price: [{
            name: 'Эконом',
            price: '168 000 р'
         },
         {
            name: 'Стандарт',
            price: '217 000р'
         },
         {
            name: 'Премиум',
            price: '270 000р'
         }],
         size: '4900 мм'
      },
      {
         id: 5,
         img: '/images/photoSlider.svg',
         img2: '/images/slider.svg',
         title: 'Кухня 097 минимализм',
         discript: 'Угловая белая кухня со столешницей под бетон.',
         price: [{
            name: 'Эконом',
            price: '168 000 р'
         },
         {
            name: 'Стандарт',
            price: '217 000р'
         },
         {
            name: 'Премиум',
            price: '270 000р'
         }],
         size: '4900 мм'
      },
      {
         id: 6,
         img: '/images/photoSlider.svg',
         img2: '/images/slider.svg',
         title: 'Кухня 097 минимализм',
         discript: 'Угловая белая кухня со столешницей под бетон.',
         price: [{
            name: 'Эконом',
            price: '168 000 р'
         },
         {
            name: 'Стандарт',
            price: '217 000 р'
         },
         {
            name: 'Премиум',
            price: '270 000 р'
         }],
         size: '4900 мм'
      }
   ]
   return <>
      <div className={styles.container}>
         {products.map((product, index) => (
            <div key={index} className={styles.productCard}>
               <div className={styles.productCard__info}>
                  <div key={index} className={styles.img}>
                     <Image src={product.img} alt='Кухня' height={300} width={250} />
                  </div>
                  <div className={styles.title}>
                     <h2>{product.title}</h2>
                     <p className={styles.discript}>{product.discript}</p>
                  </div>
                  <div className={styles.prices}>
                     {product.price.map((price, idx) => (
                        <div key={idx} className={styles.price}>
                           <p className={styles.priceName}>{price.name}</p>
                           <p className={styles.priceValue}>{price.price}</p>
                        </div>
                     ))}
                  </div>
                  <p className={styles.productCard_size}>Размер: {product.size}</p>
                  <div className={styles.btn}>
                     <button className={styles.button}>Подробнее</button>
                     <button className={styles.button}>Рассчет стоимости</button>
                  </div>
               </div>
            </div>
         ))}
      </div>
   </>
}