'use client'
import { Box, Flex, IconButton, Link, Text, } from "@chakra-ui/react";



export default function Header() {
   return <>
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} h={'50px'} backgroundColor={'#27bab5'} pl={'50px'} pr={'50px'}>
         <Link
            href={"https://www.fastsite.ru/"}
            color={'white'}
            target="_blank"
            _hover={{
               color: 'grey',
            }} >
            Демонстрационный сайт, создайте свой БЕСПЛАТНО
         </Link>
         <Flex gap={'20px'}>
            <Flex >
               <Link
                  display={'flex'}
                  href="tel:+71234567890"
                  alignItems={'center'}
                  gap={'10px'}
                  _hover={{
                     color: 'grey',
                  }} >
                  <Box>
                     <svg height={20} width={20} aria-hidden="true" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
                  </Box>
                  <Text>+7(123)4567890</Text>
               </Link>
            </Flex>
            <Flex>
               <Link href="mailto:support@cetera.ru"
                  display={'flex'}
                  alignItems={'center'}
                  gap={'10px'}
                  _hover={{
                     color: 'grey',
                  }}
               >
                  <Box>
                     <svg height={20} width={20} aria-hidden="true" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                  </Box>
                  <Text>support@cetera.ru</Text>
               </Link>
            </Flex>
         </Flex>
      </Box>
   </>
}