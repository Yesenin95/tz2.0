import { Box, Image, Text, Link } from "@chakra-ui/react";

export default function Room({ roomData }) {
   return (
      <Box display={'flex'} alignItems={'flex-start'} flexDirection={'column'} gap={'20px'} p={'20px'} m={'15px auto'}>
         <Image src={roomData.imageSrc} width={500} height={500} alt={roomData.title} />
         <Text color={'violet'}>{roomData.title}</Text>
         <Text>{roomData.description}</Text>
         <Link href="/">Назад</Link>
      </Box>
   );
}

export async function getServerSideProps({ params }) {

   const { id } = params;

   const roomData = {
      imageSrc: `/room${id}.jpg`,
      title: 'Room Title',
      description: 'Room description goes here.',
   };

   return {
      props: { roomData },
   };
}