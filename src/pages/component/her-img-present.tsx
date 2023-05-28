import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 500}}>
      <ImageList sx={{maxHeight: 450}} variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: './Photos-001/she5.jpeg',
    title: 'รูปนี้พิเศษที่สุด เพราะเธอส่งให้เราในวันเกิด รักเธอนะ',
  },
  {
    img: './Photos-001/she4.jpeg',
    title: 'อยากเห็นเธอเวอร์ชั่นนี้อีกจัง',
  },
  {
    img: './Photos-001/she1.jpeg',
    title: 'รูปนี้เธอสวยที่สุดเลย',
  },
  { 
    img: './Photos-001/she3.jpeg',
    title: 'รูปนี้เธอก็สวยอีกแล้ว',
  },
  {
    img: './Photos-001/she2.jpg',
    title: 'รูปนี้เราแอบแคปมาจากสตอรี่เธอ',
  },
];