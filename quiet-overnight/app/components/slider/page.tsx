'use client'
import React, { useState } from 'react';
import { Box, Button, VStack, Text } from "@chakra-ui/react";
import Link from 'next/link';

export default function Slider() {
   const images = [
      {
         imageUrl: '/slide.png',
         title: 'Vel cu labore placerat partiendo',
         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis.',
      },
      {
         imageUrl: '/slide1.png',
         title: 'Заголовок 2',
         text: 'Текст 2',
      },
      {
         imageUrl: '/slide2.png',
         title: 'Заголовок 3',
         text: 'Текст 3',
      },
   ];

   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   const goToPreviousImage = () => {
      setCurrentImageIndex((prevIndex: number) => prevIndex > 0 ? prevIndex - 1 : images.length - 1);
   };

   const goToNextImage = () => {
      setCurrentImageIndex((prevIndex) => prevIndex < images.length - 1 ? prevIndex + 1 : 0);
   };

   const currentImage = images[currentImageIndex];

   return (
      <VStack spacing={4} align="center" display={'flex'} flexDirection={'row'} w={'100%'} justifyContent={'space-between'} position={'relative'}>
         <Button onClick={goToPreviousImage} position={'absolute'} top={'50%'} left={'20px'} zIndex={2}>
            Назад
         </Button>
         <Box
            bg={`url('${currentImage.imageUrl}') no-repeat center center`}
            bgSize="cover"
            w="100%"
            h="500px"
            position="relative"
            opacity="1"
         >
            <VStack p={4} background="rgba(0, 0, 0, 0.5)" w="100%" h="100%" position="absolute" top={0} left={0}>
               <Box color="white">
                  <Text fontSize={'20px'}>{currentImage.title}</Text>
                  <Text w={'70px'} h={'2px'} background={'orange'} ml={'20px'}></Text>
                  <Text fontSize={'15px'}>{currentImage.text}</Text>
               </Box>
               <Link href="./components/reservation">
                  <Button>
                     Забронировать номер
                  </Button>
               </Link>
            </VStack>
         </Box>
         <Button onClick={goToNextImage} position={'absolute'} top={'50%'} right={'20px'}>
            Вперед
         </Button>
      </VStack>
   );
}
