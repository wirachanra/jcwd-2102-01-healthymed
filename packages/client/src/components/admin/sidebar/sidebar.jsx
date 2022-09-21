import {
 Box, Input,
 Flex,
 Avatar,
 HStack,
 Link,
 IconButton,
 Button,
 Menu,
 MenuButton,
 MenuList,
 MenuItem,
 MenuDivider,
 useDisclosure,
 useColorModeValue, Divider,
 Stack, Icon, Text, Accordion, VStack, AccordionIcon, AccordionPanel, AccordionItem, AccordionButton,
 Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, DrawerFooter, DrawerHeader, Center
} from '@chakra-ui/react';
import LinkNext from 'next/link';
import Image from 'next/image';
import logo from '../../../assets/img/healthymedLogo.png'
import { BsGraphUp } from 'react-icons/bs';
import { MdOutlineCategory, MdCategory, MdPersonAddAlt, MdPersonAdd } from 'react-icons/md';
import { FaPills, FaRegClipboard, FaClipboardList } from 'react-icons/fa';
import { AiFillBell, AiFillSetting, AiOutlineBell, AiOutlineHome, AiFillHome } from "react-icons/ai";
import { useRouter } from 'next/router';

export default function SideBar() {
 const router = useRouter();
 return (
  <Box boxShadow='xl' className='sideBar' borderRightWidth='1px' bg='white' w='240px' >
   <Box className='sideBar'>
    <Link href='/home' >
     <HStack h={16} w='240px' justifyContent={'center'} spacing={8} alignItems={'center'} _hover={{ cursor: "pointer" }}>
      <Center><Image src={logo} width='180px' height='40px' /></Center>
     </HStack>
    </Link>

    <Box display='flex' my='5px' _hover={{ background: '#E8F5FD', cursor: "pointer", color: '#00ACEE' }}
    >
     <Center ml='5px' justifyContent={'center'} alignContent='center' h='60px' w='50px'>
      <Icon boxSize='7' as={AiOutlineHome} />
     </Center>
     <Center ml='10px'>
      <Text fontWeight='bold'>Dashboard</Text>
     </Center>
    </Box>
    <Accordion my='5px' defaultIndex={[0]} borderColor='white' allowMultiple _hover={{ background: '#E8F5FD' }} >
     <AccordionItem >
      <h2>
       <AccordionButton justifyContent='space-between' >
        <HStack ml='-15px' color='#4c4c4d' w='full'>
         <Center ml='5px' display='flex' justifyContent='center' h='50px' w='50px'>
          <Icon boxSize='7' as={FaPills} />
         </Center>
         <Box display='flex' ml='10px' fontWeight='bold' >
          <Text fontWeight='bold'>Produk</Text>
         </Box>
        </HStack>
        <AccordionIcon />
       </AccordionButton>
      </h2>
      <AccordionPanel pb={2} p='0px'>
       <HStack _hover={{ background: '#ccdefc' }}>
        <Center ml='5px' display='flex' justifyContent='center' h='40px' w='70px'>
        </Center>
        <Box ml='5px' display='flex' w='full' fontWeight='semibold'>
         <Text fontWeight='semibold'>Daftar Produk</Text>
        </Box>
       </HStack>
       <HStack _hover={{ background: '#ccdefc' }}>
        <Center ml='5px' display='flex' justifyContent='center' h='40px' w='70px'>
        </Center>
        <Box ml='5px' display='flex' w='full' fontWeight='semibold'>
         <Text fontWeight='semibold'>Daftar Kategori</Text>
        </Box>
       </HStack>
       <HStack _hover={{ background: '#ccdefc' }}>
        <Center ml='5px' display='flex' justifyContent='center' h='40px' w='70px'>
        </Center>
        <Box ml='5px' display='flex' w='full' fontWeight='semibold'>
         <Text fontWeight='semibold'>Stok History</Text>
        </Box>
       </HStack>
      </AccordionPanel>
     </AccordionItem>
    </Accordion>

    <Accordion my='5px' defaultIndex={[0]} borderColor='white' allowMultiple _hover={{ background: '#E8F5FD' }} >
     <AccordionItem >
      <h2>
       <AccordionButton justifyContent='space-between' >
        <HStack ml='-15px' color='#4c4c4d' w='full' style={router.pathname == '/admin/transaction' ? { color: '#00ACEE' } : null} >
         <Center ml='5px' display='flex' justifyContent='center' h='50px' w='50px'>
          <Icon boxSize='7' as={FaRegClipboard} />
         </Center>
         <Box display='flex' ml='10px' fontWeight='bold' >
          <Text fontWeight='bold'>Transaksi</Text>
         </Box>
        </HStack>
        <AccordionIcon />
       </AccordionButton>
      </h2>
      <AccordionPanel pb={2} p='0px'>
       <LinkNext href='/admin/transaction'>
        <HStack _hover={{ background: '#ccdefc', cursor: 'pointer' }}>
         <Center ml='5px' display='flex' justifyContent='center' h='40px' w='70px'>
         </Center>
         <Box ml='5px' display='flex' w='full' fontWeight='semibold' style={router.query.status ? null : { color: '#00ACEE' }} >
          <Text fontWeight='semibold'>Semua Transaksi</Text>
         </Box>
        </HStack>
       </LinkNext>
       <LinkNext href='?status=Menunggu Pembayaran'>
        <HStack _hover={{ background: '#ccdefc', cursor: 'pointer' }}>
         <Center ml='5px' display='flex' justifyContent='center' h='40px' w='70px'>
         </Center>
         <Box ml='5px' display='flex' w='full' fontWeight='semibold' style={router.query.status == 'Menunggu Pembayaran' ? { color: '#00ACEE' } : null}>
          <Text fontWeight='semibold'>Pesanan Baru</Text>
         </Box>
        </HStack>
       </LinkNext>
       <LinkNext href='?status=Diproses'>
        <HStack _hover={{ background: '#ccdefc', cursor: 'pointer' }}>
         <Center ml='5px' display='flex' justifyContent='center' h='40px' w='70px'>
         </Center>
         <Box ml='5px' display='flex' w='full' fontWeight='semibold' style={router.query.status == 'Diproses' ? { color: '#00ACEE' } : null}>
          <Text fontWeight='semibold'>Siap Dikirim</Text>
         </Box>
        </HStack>
       </LinkNext>
       <LinkNext href='?status=Dikirim'>
        <HStack _hover={{ background: '#ccdefc', cursor: 'pointer' }}>
         <Center ml='5px' display='flex' justifyContent='center' h='40px' w='70px'>
         </Center>
         <Box ml='5px' display='flex' w='full' fontWeight='semibold' style={router.query.status == 'Dikirim' ? { color: '#00ACEE' } : null}>
          <Text fontWeight='semibold'>Dalam Pengiriman</Text>
         </Box>
        </HStack>
       </LinkNext>
       <LinkNext href='?status=Pesanan Dikonfirmasi'>
        <HStack _hover={{ background: '#ccdefc', cursor: 'pointer' }}>
         <Center ml='5px' display='flex' justifyContent='center' h='40px' w='70px'>
         </Center>
         <Box ml='5px' display='flex' w='full' fontWeight='semibold' style={router.query.status == 'Pesanan Dikonfirmasi' ? { color: '#00ACEE' } : null}>
          <Text fontWeight='semibold'>Selesai</Text>
         </Box>
        </HStack>
       </LinkNext>
       <LinkNext href='?status=Dibatalkan'>
        <HStack _hover={{ background: '#ccdefc', cursor: 'pointer' }}>
         <Center ml='5px' display='flex' justifyContent='center' h='40px' w='70px'>
         </Center>
         <Box ml='5px' display='flex' w='full' fontWeight='semibold' style={router.query.status == 'Dibatalkan' ? { color: '#00ACEE' } : null}>
          <Text fontWeight='semibold'>Dibatalkan</Text>
         </Box>
        </HStack>
       </LinkNext>
      </AccordionPanel>
     </AccordionItem>
    </Accordion>

    <Accordion my='5px' defaultIndex={[0]} borderColor='white' allowMultiple _hover={{ background: '#E8F5FD' }} >
     <AccordionItem >
      <h2>
       <AccordionButton justifyContent='space-between' >
        <HStack ml='-15px' color='#4c4c4d' w='full' >
         <Center ml='5px' display='flex' justifyContent='center' h='50px' w='50px'>
          <Icon boxSize='7' as={BsGraphUp} />
         </Center>
         <Box display='flex' ml='10px' fontWeight='bold' >
          <Text fontWeight='bold'>Sales & Revenue</Text>
         </Box>
        </HStack>

        <AccordionIcon />
       </AccordionButton>
      </h2>
      <AccordionPanel pb={2} p='0px'>
       <HStack _hover={{ background: '#ccdefc' }}>
        <Center ml='5px' display='flex' justifyContent='center' h='40px' w='70px'>
        </Center>
        <Box ml='5px' display='flex' w='full' fontWeight='semibold'>
         <Text fontWeight='semibold'>Ringkasan Statistik</Text>
        </Box>
       </HStack>
       <HStack _hover={{ background: '#ccdefc' }}>
        <Center ml='5px' display='flex' justifyContent='center' h='40px' w='70px'>
        </Center>
        <Box ml='5px' display='flex' w='full' fontWeight='semibold'>
         <Text fontWeight='semibold'>Report Penjualan</Text>
        </Box>
       </HStack>
      </AccordionPanel>
     </AccordionItem>
    </Accordion>
   </Box>

  </Box >
 )
}