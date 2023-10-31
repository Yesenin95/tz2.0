import { Box, Text, Grid, Button, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import Rooms from './components/rooms/page'
import Slider from './components/slider/page'
import styles from './page.module.css'

export default function Home() {
   const news = [
      {
         id: 1,
         title: 'Lorem ipsum',
         description: 'Lorem ipsum dolor sit amet.',
         imageUrl: '/room.jpg',
      },
      {
         id: 2,
         title: 'Dolor sit',
         description: 'Movet evertitur ut cum, paulo iracundia has ei.',
         imageUrl: '/room1.jpg',
      },
      {
         id: 3,
         title: 'Amet movet',
         description: 'Case corpora ex quo. Per et soleat suscipit',
         imageUrl: '/room2.jpg',
      },
      {
         id: 4,
         title: 'Am22et movet',
         description: 'Case corpora ex quo. Per et soleat suscipit',
         imageUrl: '/room2.jpg',
      },]
   return <>
      <Slider />
      <Grid gridTemplateColumns={'1fr 1fr 1fr'} gap={'20px'} pl={'50px'} pr={'50px'} >
         <Box maxW={'400px'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={'20px'} p={'20px'} background={'#d0d0d069'} m={'15px auto'}>
            <Image src={'/bed.png'} width={200} height={200} alt={'Кровать'}></Image>
            <Text>Комфортабельные номера</Text>
            <Text>В каждом номере кондиционер, телевизор, холодильник, санузел с душем и балкон</Text>
         </Box>
         <Box maxW={'400px'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={'20px'} p={'20px'} background={'#d0d0d069'} m={'15px auto'}>
            <Image src={'/bank.png'} width={200} height={200} alt={'Кровать'}></Image>
            <Text>Доступные цены</Text>
            <Text>Современная комфортабельная гостиница с доступными ценами, высоким уровнем обслуживания и хорошо развитой инфраструктурой</Text>
         </Box>
         <Box maxW={'400px'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={'20px'} p={'20px'} background={'#d0d0d069'} m={'15px auto'}>
            <Image src={'/todo.png'} width={200} height={200} alt={'Кровать'}></Image>
            <Text>Широкий спектр услуг</Text>
            <Text>Центр красоты и здоровья, организация встреч и семинаров, экскурсионные услуги</Text>
         </Box>
      </Grid>
      <Box>
         <Box>
            <Text>Номера</Text>
            <Link href={"/roomsPage"}>
               <Button color='black'>Все номера</Button>
            </Link>
         </Box>
         <Rooms />
      </Box>
      <Box pl={'50px'} pr={'50px'}>
         Новости
         <Link href={'/news'}>
            <Button>
               Все новости
            </Button>
         </Link>
         <Flex >
            {news.map((news) => (
               <Box
                  display={'flex'}
                  pl={'50px'}
                  pr={'50px'}
                  alignItems={'flex-start'}
                  flexDirection={'column'}
                  gap={'20px'}
                  p={'20px'}
                  m={'15px auto'}
                  key={news.id}
               >
                  <Image src={news.imageUrl} width={500} height={500} alt={'Кровать'}></Image>
                  <Link href={`/components/rooms/${news.id}`}>
                     <Text color={'violet'} _hover={{ color: 'black' }}>
                        {news.title}
                     </Text>
                  </Link>
                  <Text>{news.description}</Text>
               </Box>
            ))}
         </Flex>
      </Box>
   </>
}
