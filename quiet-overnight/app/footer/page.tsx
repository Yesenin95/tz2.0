import { Box, Flex, Heading, Link, ListItem, OrderedList, Text, Grid } from '@chakra-ui/react'
import Image from 'next/image'
export default function Footer() {
   return <>
      <Grid pl={'50px'} pr={'50px'} pt={'20px'} background={'black'} gridTemplateColumns={'1fr 1fr 1fr 1fr'} pb={'20px'}>
         <Box>
            <Image src='/logo_white.svg' height={320} width={200} alt={'logo'} />
         </Box>
         <Flex flexDirection={'column'} alignItems={'baseline'}>
            <Heading fontSize={'20px'} >
               Навигация
            </Heading>
            <OrderedList>
               <ListItem listStyleType="none">
                  <Link href="/about">
                     О нас
                  </Link>
               </ListItem>
               <ListItem listStyleType="none">
                  <Link href="/rooms">
                     Номера
                  </Link>
               </ListItem>
               <ListItem listStyleType="none">
                  <Link href="/price">
                     Цены
                  </Link>
               </ListItem>
               <ListItem listStyleType="none">
                  <Link href="/services">
                     Услуги
                  </Link>
               </ListItem>
               <ListItem listStyleType="none">
                  <Link href="/photoGallery">
                     Фотогалерея
                  </Link>
               </ListItem>
               <ListItem listStyleType="none">
                  <Link href="/news">
                     Новости
                  </Link>
               </ListItem>
               <ListItem listStyleType="none">
                  <Link href="/reviews">
                     Отзывы
                  </Link>
               </ListItem>
               <ListItem listStyleType="none">
                  <Link href="/contacts">
                     Контакты
                  </Link>
               </ListItem>
            </OrderedList >
         </Flex>
         <Flex flexDirection={'column'} alignItems={'baseline'} gap={'15px'}>
            <Box>
               <Heading fontSize={'20px'} >
                  Адрес офиса
               </Heading>
               <Text>
                  Проспект Ленина, дом 25, 6 этаж, офис 606 (Адрес для курьера)
               </Text>
            </Box>
            <Box>
               <Heading fontSize={'20px'} >
                  Почтовый адрес
               </Heading>
               <Text>
                  ООО «Цетера Лабс» Куда: 150040, г.Ярославль, п/о 40, а/я 62
               </Text>
            </Box>
         </Flex>
         <Flex flexDirection={'column'} alignItems={'flex-start'} pl={'20px'} gap={'15px'}>
            <Box>
               <Heading fontSize={'20px'}>
                  Телефон
               </Heading>
               <Link href="tel:+71234567890" color={'rgb(255,255,255, .5)'}
                  _hover={{
                     color: 'rgb(255, 255, 255,.2)',
                  }} >
                  <Text>+71234567890</Text>
               </Link>
            </Box>
            <Box>
               <Heading fontSize={'20px'}>
                  E-mail
               </Heading>
               <Link href="mailto:support@cetera.ru" color={'rgb(255,255,255, .5)'}
                  _hover={{
                     color: 'rgb(255, 255, 255,.2)',
                  }} >
                  <Text>support@cetera.ru</Text>
               </Link>
            </Box>
         </Flex>
      </ Grid>
   </>
}