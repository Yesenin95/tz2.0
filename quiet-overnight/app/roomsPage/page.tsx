import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";


export default function allRoms() {
   const rooms = [
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
      },
   ]
   const limitedRooms = rooms.slice(0, 4);
   return <>
      <Box pl={'50px'} pr={'50px'}>
         <Flex>
            {limitedRooms.map((room) => (
               <Box
                  display={'flex'}
                  pl={'50px'}
                  pr={'50px'}
                  alignItems={'flex-start'}
                  flexDirection={'column'}
                  gap={'20px'}
                  p={'20px'}
                  m={'15px auto'}
                  key={room.id}
               >
                  <Image src={room.imageUrl} width={500} height={500} alt={'Кровать'}></Image>
                  <Link href={`/rooms/${room.id}`}>
                     <Text color={'violet'} _hover={{ color: 'black' }}>
                        {room.title}
                     </Text>
                  </Link>
                  <Text>{room.description}</Text>
               </Box>
            ))}
         </Flex>
      </Box>
   </>
}