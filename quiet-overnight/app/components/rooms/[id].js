import { Box, Image, Text, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
export default function Room() {
   const router = useRouter();
   const { id } = router.query;
   return (
      <Box display={'flex'} alignItems={'flex-start'} flexDirection={'column'} gap={'20px'} p={'20px'} m={'15px auto'}>
         <Image src={`/room${id}.jpg`} width={500} height={500} alt={`Комната ${id}`} />
         <Text color={'violet'}>Название комнаты</Text>
         <Text>Описание комнаты Lorem ipsum dolor sit amet.</Text>
         <Link href="/rooms">Назад</Link>
      </Box>
   );
}

export async function getServerSideProps({ params }) {
   // Получите `id` из параметров маршрута
   const { id } = params;

   // Здесь вы можете использовать `id` для получения данных о комнате
   // Например, запросить данные из API или использовать статические данные
   const roomData = {
      id,
      imageUrl: `/room${id}.jpg`,
      title: 'Название комнаты',
      description: 'Описание комнаты Lorem ipsum dolor sit amet.',
   };

   return {
      props: { roomData },
   };
}
