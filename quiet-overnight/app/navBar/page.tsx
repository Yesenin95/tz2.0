import { Box, Link, OrderedList, ListItem, Image } from '@chakra-ui/react'

export default function NavBar() {
   return <>
      <Box pl={'50px'} pr={'50px'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'flex-start'} h={'150px'} background={'white'}>
         <Link href={'/'} pr={'50px'}>
            <Image src='/logo.jpg' height={'100px'} width={'350px'} alt={'logo'} />
         </Link>
         <OrderedList display={'flex'} flexDirection={'row'} gap={'30px'} color={'black'} fontSize={'25px'} >
            <ListItem listStyleType="none">
               <Link href="/About" textDecoration={'none'} color={'#634f8e'} fontSize={'20px'}>
                  О нас
               </Link>
            </ListItem>
            <ListItem listStyleType="none">
               <Link href="/Rooms" textDecoration={'none'} color={'#634f8e'} fontSize={'20px'}>
                  Номера
               </Link>
            </ListItem>
            <ListItem listStyleType="none">
               <Link href="/Price" textDecoration={'none'} color={'#634f8e'} fontSize={'20px'}>
                  Цены
               </Link>
            </ListItem>
            <ListItem listStyleType="none">
               <Link href="/Services" textDecoration={'none'} color={'#634f8e'} fontSize={'20px'}>
                  Услуги
               </Link>
            </ListItem>
            <ListItem listStyleType="none">
               <Link href="/PhotoGallery" textDecoration={'none'} color={'#634f8e'} fontSize={'20px'}>
                  Фотогалерея
               </Link>
            </ListItem>
            <ListItem listStyleType="none">
               <Link href="/News" textDecoration={'none'} color={'#634f8e'} fontSize={'20px'}>
                  Новости
               </Link>
            </ListItem>
            <ListItem listStyleType="none">
               <Link href="/Reviews" textDecoration={'none'} color={'#634f8e'} fontSize={'20px'}>
                  Отзывы
               </Link>
            </ListItem>
            <ListItem listStyleType="none">
               <Link href="/Contacts" textDecoration={'none'} color={'#634f8e'} fontSize={'20px'}>
                  Контакты
               </Link>
            </ListItem>
         </OrderedList >
      </Box>
   </>
}