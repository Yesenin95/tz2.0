'use client'
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Card from './components/card/page';
import ProductCards from './components/productsCard/page';
import CustomSelect from './components/select/page';
import styles from './page.module.css';

interface Option {
   label: string;
   number: string;
}

export default function Home() {
   const kitchenOptions: Option[] = [
      { label: 'Прямые', number: '100' },
      { label: 'Угловые', number: '134' },
      { label: 'С островом', number: '250' },
      { label: 'Трёхъярусные', number: '120' },
      { label: 'П-образные', number: '170' },
   ];
   const stylesOptions: Option[] = [
      { label: 'Прямые', number: '100' },
      { label: 'Угловые', number: '134' },
      { label: 'С островом', number: '250' },
      { label: 'Трёхъярусные', number: '120' },
      { label: 'П-образные', number: '170' },
   ];
   const colors: Option[] = [
      { label: 'Черный', number: '400' },
      { label: 'Белый', number: '144' },
      { label: 'Красный', number: '150' },
      { label: 'Зеленый', number: '130' },
      { label: 'Синий', number: '140' },
   ];

   return (
      <main className={styles.main}>
         <Head>
            <title>Проверочная работа</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
               href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Martian+Mono:wght@300;500&family=Oswald&display=swap"
               rel="stylesheet"
            />
         </Head>
         <section className={styles.section}>
            <header className={styles.header}>
               <div className={styles.logo}>
                  <Link href={'/'}>
                     <Image src="../images/logo.svg" alt="Логотип" width={100} height={100} />
                  </Link>
                  <div className={styles.header__yandex}>
                     <Image src="../icons/local.svg" alt="Местонахождение" width={56.9} height={56.9} />
                     <div className={styles.header__yandex_local}>
                        <Link
                           href={'https://yandex.ru/maps/geo/anapa/53165966/?ll=37.342036%2C44.919470&z=12.36'}
                           target={'_blank'}
                        >
                           Яндекс карты
                        </Link>
                        <div className={styles.header__yandex_img}>
                           <div className={styles.rating}>
                              <Image src="../icons/stars.svg" alt="оценка" width={86.44} height={18.83} />
                              <p>5,0</p>
                           </div>
                           <p>81 отзыв • 100 оценок</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.header__info}>
                  <div className={styles.header__adress}>
                     <p>Производство кухонь на заказ</p>
                     <span>Анапа, ул. Крылова, д. 27</span>
                  </div>
                  <div className={styles.header__info_social}>
                     <Image src="../icons/whatsapp.svg" alt="Вотсап" width={36} height={36} />
                     <Image src="../icons/telegram.svg" alt="Телеграмм" width={36} height={36} />
                     <Link href="tel:+79883117788">+7(988)-311-77-88</Link>
                     <button className={styles.button}> Заказать звонок</button>
                  </div>
               </div>
            </header>
            <div className={styles.info}>
               <p>Огромный выбор <br />бытовой техники</p>
               <p>Изысканный гарнитур <br />любого размера</p>
               <p>Выдающиеся <br />сорта древесины</p>
               <div className={styles.info__content}>
                  <h1 className={styles.fontFamily__loraTitle}>Изготовим роскошную <br /> дизайнерскую кухню</h1>
                  <div className={styles.benefit}>
                     <Image src="../icons/many.svg" alt="Выгода" width={70} height={70} />
                     <p>
                        <span style={{ fontWeight: 'bold' }}>Цена на 12-24% ниже,</span>
                        <br />чем у посредников
                     </p>
                  </div>
                  <div className={styles.order}>
                     <div className={styles.order__btn}>
                        <p>Рассчитаем стоимость кухни-мечты</p>
                        <button> Заказать расчёт</button>
                     </div>
                     <div>
                        <Image src="../icons/strelka.svg" alt="Указатель" width={34} height={64} />
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className={styles.card}>
            <div className={styles.card__img}>
               <Image src="../images/imgKyhnya.svg" alt="Картинка кухни" width={500} height={532} />
            </div>
            <div>
               <h2 className={styles.h2}>Наши преимущества</h2>
               <Card />
            </div>
         </section>
         <section className={styles.productCard}>
            <h2 className={styles.productCard__title}>Посмотрите наши работы</h2>
            <div className={styles.productCard__items}>
               <div className={styles.productCard__select}>
                  <CustomSelect label="Кухни" optionsData={kitchenOptions} onSelectChange={() => { }} />
                  <CustomSelect label="Стили Кухни" optionsData={stylesOptions} onSelectChange={() => { }} />
                  <CustomSelect label="Цвет" optionsData={colors} onSelectChange={() => { }} />
               </div>
               <div className={styles.secelt__buttons}>
                  <button className={styles.secelt__button_ok}>применить</button>
                  <button className={styles.secelt__buttons_no}>сбросить</button>
               </div>
            </div>
            <ProductCards />
         </section>
         <footer className={styles.footer}>
            <div className={styles.header__info_mobile}>
               <div className={styles.header__adress_mobile}>
                  <p>Производство кухонь на заказ</p>
                  <span>Анапа, ул. Крылова, д. 27</span>
               </div>
               <div className={styles.header__info_social_mobile}>
                  <Image src="../icons/whatsapp.svg" alt="Вотсап" width={36} height={36} />
                  <Image src="../icons/telegram.svg" alt="Телеграмм" width={36} height={36} />
                  <Link href="tel:+79883117788">+7(988)-311-77-88</Link>
                  <button className={styles.button}> Заказать звонок</button>
               </div>
            </div>
         </footer>
      </main >
   );
}
