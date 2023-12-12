'use client'
import { Box, Image, Text, Link } from "@chakra-ui/react";
import { GetServerSideProps } from 'next';

interface RoomData {
   imageSrc: string;
   title: string;
   description: string;
}

interface RoomProps {
   roomData: RoomData;
}



export default function Room({ roomData }: RoomProps) {
   return (
      <Box display={'flex'} alignItems={'flex-start'} flexDirection={'column'} gap={'20px'} p={'20px'} m={'15px auto'}>
         <Image src={roomData.imageSrc} width={500} height={500} alt={roomData.title} />
         <Text color={'violet'}>{roomData.title}</Text>
         <Text>{roomData.description}</Text>
         <Link href="/">Назад</Link>
      </Box>
   );
}

export async function getServerSideProps({ params }: any) {
   const { id } = params;

   const roomData: RoomData = {
      imageSrc: `/room${id}.jpg`,
      title: 'Room Title',
      description: 'Room description goes here.',
   };

   return {
      props: { roomData },
   };
}