import { NextPage } from 'next';
import HideAppBar from '../component/app-bar';
import { ReactElement } from 'react';
import PostCard from '../component/post-card';
import { Container, Grid, Typography } from '@mui/material';

const item = [
    {
        title: 'รอเธอตรงนี้ตลอด',
        subtitle: 'แทบจะนับวินาทีรออยู่ละนะ',
        imgsrc: './picpost/pic2.jpg',
    },
    {
        title: 'คือคนนี้น่ารักสุดอ่ะ',
        subtitle: 'เธอน่ารัก! ที่สุดในโลกเลย',
        imgsrc: './picpost/pic3.jpg',
    },
    {
        title: 'รอตรงนี้',
        subtitle: 'ขออยู่ข้างๆตลอดไปเลยได้มั้ย',
        imgsrc: './picpost/pic4.jpg',
    },
    {
        title: 'แอบเศร้าอยู่นะ',
        subtitle: 'รอวันที่จะได้กอดเธออย่างใจจดใจจ่อเลยนะ',
        imgsrc: './picpost/pic5.jpg',
    },
    {
        title: 'น่ารักตล๊อดด',
        subtitle: 'เราชมเธอเป็นล้านๆครั้งละมั้ง วันละ3000รอบได้',
        imgsrc: './picpost/pic7.jpg',
    },
    {
        title: 'มีความสุขมากกก',
        subtitle: 'ใจเต้นแรงเหมือนจะกลายเป็นเดอะฮัค',
        imgsrc: './picpost/pic9.jpg',
    },
    {
        title: 'ช่วยแบกมะ',
        subtitle: 'แต่ความน่ารักของเธอก็ต้องเป็นของเราคนเดียวนะ',
        imgsrc: './picpost/pic10.jpg',
    },
    {
        title: 'วันดีทุกวันเลยช่วงนี้',
        subtitle: 'แต่อย่าหายไปนะ ผู้บ่าวเธอตุยแน่',
        imgsrc: './picpost/pic11.jpg',
    },
    {
        title: 'ผูกโบว์รอล้าา',
        subtitle: 'กล่องใหญ่นะ ระวังหน่อย',
        imgsrc: './picpost/pic12.jpg',
    },
    {
        title: 'โชคดีที่สุดในโลกล้า',
        subtitle: 'แบบว่าแม่ของลูกแบบล็อกตัว',
        imgsrc: './picpost/pic13.jpg',
    },
    {
        title: 'ห้ามนะ',
        subtitle: 'ใครเอารอยยิ้มเธอไปจากเราเราต่อยปากแตกอ่ะ',
        imgsrc: './picpost/pic14.jpg',
    },
    {
        title: 'เกิดมาไกล้ๆกันเลยด้วยย',
        subtitle: 'คิดแล้วก็อยากกอด',
        imgsrc: './picpost/pic15.jpg',
    },
    {
        title: 'แม่ยอดนักส่งมีม',
        subtitle: 'ส่งมาให้แต่ละอันทำหวั่นไปหมด หวั่นไหวเหรอ ป่าวหวั่งว่าเธอจะบ๊อง(หยอกกก)',
        imgsrc: './picpost/pic16.jpg',
    },
    {
        title: 'กอดดดดด',
        subtitle: 'รู้มั้ยถ้าถามว่าตอนนี้ต้องการอะไร ต้องการกอดเธอ (ตี2ครึ่งแล้วว)',
        imgsrc: './picpost/pic18.jpg',
    },
    {
        title: 'ชมมม',
        subtitle: 'ชมแล้วชมอี๊กกก',
        imgsrc: './picpost/pic19.jpg',
    },
    {
        title: 'ห่วงนะ',
        subtitle: 'อันนี้แบบว่า เป็นห่วง กระวนกระวานตอนเธอไม่อยู่',
        imgsrc: './picpost/pic20.jpg',
    },
    {
        title: 'เธอของฉัน',
        subtitle: 'เธอของฉัน เธอของฉัน เธอของฉัน เธอของฉัน เธอของฉัน เธอของฉัน เธอของฉัน เธอของฉัน',
        imgsrc: './picpost/pic21.jpg',
    },
    {
        title: 'ไอต้าวโลกทั้งใบ',
        subtitle: 'เป็นโลกทั้งใบแล้ว ต้องทำตัวดีๆแล้วนะ',
        imgsrc: './picpost/pic22.jpg',
    },
    {
        title: 'อันนี้ก็ชมอีก',
        subtitle: 'ก็ เธอน่ารักอ้า แอร้ยยยย',
        imgsrc: './picpost/pic23.jpg',
    },
    {
        title: 'อันนี้ๆๆ',
        subtitle: 'รู้มั้ยถ้าเราได้อยู่ด้วยกัน นี่คงจะเป็นกิจกรรมที่เราอยากทำกับเธอทุกวันน',
        imgsrc: './picpost/pic24.jpg',
    },
    {
        title: 'โชคดีสุด',
        subtitle: 'โชคดีมากอ้า มาเป็นแฟนเดี๋ยวนี้เลยนะ',
        imgsrc: './picpost/pic25.jpg',
    },
    {
        title: 'อันนี้ก็คือ 5555',
        subtitle: 'อาจจะไม่ค่อยพูดเพราะเป็นเคส sensitive แต่ก็อยากจูบเธอเหมือนกันนะ (เป็นแฟนกัน)',
        imgsrc: './picpost/pic26.jpg',
    },
    {
        title: 'ภาพนี้พิเศษ',
        subtitle: 'อันนี้เป็นภาพที่เราอยากส่งให้เธอซ้ำๆทุกวันเลย',
        imgsrc: './picpost/pic27.jpg',
    },
    {
        title: 'โลกทั้งใบ',
        subtitle: 'ย้ำหลายรอบแล้วเก็บไว้หลายภาพด้วยนะ555 เธอเป็นโลกทั้งใบของเรานะ',
        imgsrc: './picpost/pic28.jpg',
    },
    {
        title: 'ขออ้อนหน่อย',
        subtitle: 'เป็นได้มะ เด็กน้อยของเธอ',
        imgsrc: './picpost/pic29.jpg',
    },
    {
        title: 'ไม่ต้องล้าวว',
        subtitle: 'ฟ้าดันส่งคนที่น่ารักที่สุดในโลกมาให้ล้า ไม่คืนละน้าค้าบ',
        imgsrc: './picpost/pic30.jpg',
    },
    {
        title: 'จีงงง',
        subtitle: 'แบบที่งอแงใส่ทุกๆคืนเลยย',
        imgsrc: './picpost/pic31.jpg',
    },
    {
        title: 'ที่สุด',
        subtitle: 'เธอน่ารัก! ที่สุดในโลกเลย',
        imgsrc: './picpost/pic32.jpg',
    },
    {
        title: 'เธอออ',
        subtitle: 'อยากมีวันครบรอบกับเธอแล้ว',
        imgsrc: './picpost/pic33.jpg',
    },
    {
        title: 'เป็นยังไงบ้าง',
        subtitle: 'เล่าเรื่องให้เราฟังเยอะๆเลยนะ สมมุติว่ามดกัดก็ต้องเล่าว่ากัดตรงไหน',
        imgsrc: './picpost/pic34.jpg',
    },
    {
        title: 'คิดถึงจะแย่',
        subtitle: 'ฝันกลางวันถึงเธอมันก็มีความสุขมากนะ แต่ก็อยากกอดจะแย่เหมือนกัน',
        imgsrc: './picpost/pic35.jpg',
    },
    {
        title: 'เฮ้อออ',
        subtitle: 'จาบ้าตุยยยยยยยย',
        imgsrc: './picpost/pic36.jpg',
    },
    {
        title: 'ฟ้องให้เราฟัง',
        subtitle: 'เราจะไปเอาคืนโลกให้',
        imgsrc: './picpost/pic37.jpg',
    },
    {
        title: 'หวงงงงง',
        subtitle: 'เคยบอกว่าไม่หวง แต่หวงแล้ววววว ใครจีบเธอเราต่อยหมดไม่สนลูกใคร',
        imgsrc: './picpost/pic38.jpg',
    },
    {
        title: 'อ่านหน่อย',
        subtitle: 'อันนี้ก็คือพร้อมเป็นแฟนเธอล้า เก็บภาพนี้ไว้ตั้งแต่เดือนเชแรก',
        imgsrc: './picpost/pic39.jpg',
    },
    {
        title: 'รักกก',
        subtitle: 'รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก รัก',
        imgsrc: './picpost/pic40.jpg',
    },
    {
        title: 'ใช่ๆ ใครเถียงเราต่อยหมด',
        subtitle: 'อย่ามาบังอาจนะ',
        imgsrc: './picpost/pic41.jpg',
    },
    {
        title: 'ตุยแน่',
        subtitle: 'เคยฝันนะ ในฝันกลายเป็นผู้ป่วยติดเตียงไปเลย',
        imgsrc: './picpost/pic42.jpg',
    },
    {
        title: 'ขอบอกอีกครัง',
        subtitle: 'เธอน่ารัก! ที่สุดในโลกเลยยยย',
        imgsrc: './picpost/pic43.jpg',
    },
    {
        title: 'ใช่ๆ ทำไมนะ',
        subtitle: 'เกิดเป็นคนพิเศษนี่ดีจัง ทำไงเราก็รัก ทำไงเราก็หลง',
        imgsrc: './picpost/pic44.jpg',
    },
    {
        title: 'ขอบคุณนะ',
        subtitle: 'แต่จริงๆแล้วคืออยากกอดมาก',
        imgsrc: './picpost/pic45.jpg',
    },
    {
        title: 'อ่ะ ทั้งหมดที่อยากบอก',
        subtitle: 'หวานมุ้ย',
        imgsrc: './picpost/pic46.jpg',
    },
    {
        title: 'กังวลหน่อยๆ',
        subtitle: 'ไม่หน่อยอ่ะ เราขี้กังวล',
        imgsrc: './picpost/pic47.jpg',
    },
    {
        title: 'ใช่ๆ เห็นด้วยเลย',
        subtitle: 'เราจะพยายามนะ',
        imgsrc: './picpost/pic48.jpg',
    },
    {
        title: 'อะอีกที',
        subtitle: 'กลัวไม่เชื่อว่าของจริง',
        imgsrc: './picpost/pic49.jpg',
    },
    {
        title: 'มาเลอ เดี๋ยวทำให้ดู',
        subtitle: 'เข้าม๊าา',
        imgsrc: './picpost/pic50.jpg',
    },
    {
        title: 'ไม่ต้องห่วง',
        subtitle: 'ถ้าเธอเผลองอแง ไม่เป็นไรนะ มันน่ารักดี',
        imgsrc: './picpost/pic51.jpg',
    },
    {
        title: 'กินอ่มนอนหลับ',
        subtitle: 'จนจะเป็นเด็กอ้วงของเธออยู่ละ อิอิ',
        imgsrc: './picpost/pic52.jpg',
    },
    {
        title: 'เด็กดี',
        subtitle: 'ถึงเธอจะเป็นเด็กดื้อ แต่ก็เป็นเด็กดีของเราได้นะ',
        imgsrc: './picpost/pic53.jpg',
    },
    {
        title: 'บอกมาเลยนะ',
        subtitle: 'ขอคุ้มๆเลยนะ อย่างเช่นได้กอดเธอทั้งวัน',
        imgsrc: './picpost/pic54.jpg',
    },
    {
        title: 'ได้โปรด',
        subtitle: 'ทุกครั้งที่ต้องขอพร เราขอให้เจอกับความรักมาตลอด วันนี้ได้เจอเธอแล้ว ช่วยเป็นพรของเราหน่อยนะ',
        imgsrc: './picpost/pic55.jpg',
    },
    {
        title: 'กอดเราไว้',
        subtitle: 'ถ้าไม่กอดเราจะกอดเธอเอง',
        imgsrc: './picpost/pic56.jpg',
    },
    {
        title: 'คิดถึงงงงงงงงง',
        subtitle: 'คิดถึงมากกกกกกกกกกกกก-',
        imgsrc: './picpost/pic57.jpg',
    },
    {
        title: 'กกกกกกกกกกกก',
        subtitle: 'กกกกกกกกกกกกกก เลยนะ ขอกอดหน่อย',
        imgsrc: './picpost/pic58.jpg',
    },
    {
        title: 'น่ารักสุด',
        subtitle: 'ห้ามไปไหนอีกแล้วนะ เราเคลมเธอเป็นแฟนเราแล้ว',
        imgsrc: './picpost/pic59.jpg',
    },
    {
        title: 'ดีใจที่สุด',
        subtitle: 'ที่จะได้เรียกเธอว่าแฟนนน',
        imgsrc: './picpost/pic60.jpg',
    },
    {
        title: 'ไม่ต้องห่วงนะ',
        subtitle: 'รักแล้วรักเลย ไม่ต้องการอะไรแล้วนอกจากเธอ',
        imgsrc: './picpost/pic61.jpg',
    },
    {
        title: 'ตลอดเลยนะ',
        subtitle: 'ห้ามเก็บไว้คนเดียวเด็ดขาดเลยนะ',
        imgsrc: './picpost/pic2.jpg',
    },
    {
        title: 'อยากกอด',
        subtitle: 'รอวันกอดเธออยู่ ขอกอดเธอทั้งวันเลยนะ',
        imgsrc: './picpost/pic63.jpg',
    },
    {
        title: 'เหมือนอันที่แล้วเลยอ่ะ 5555',
        subtitle: 'เราดูหมกมุ่นกับการกอดเธอนะ ขอทำเป็นงานอดิเรกเลยได้เป่า',
        imgsrc: './picpost/pic64.jpg',
    },
    {
        title: 'พูดแล้วจะหาว่าโม้',
        subtitle: 'เธอเป็นพรวิเศษของเรา ไม่เคยมีความสุขมาก่อนเลยนะในชีวิต เพราะเธอเลย',
        imgsrc: './picpost/pic65.jpg',
    },
    {
        title: 'อยากเจอแล้วอ่ะ',
        subtitle: 'ไปหาแล้วได้มะ',
        imgsrc: './picpost/pic66.jpg',
    },
    {
        title: 'ห้ามเบื่อเลยนะ',
        subtitle: 'เพราะเราจะอยู่กับเธอทั้งชีวิต',
        imgsrc: './picpost/pic67.jpg',
    },
    {
        title: 'ของเราคนเดียว',
        subtitle: 'ของเรา ของเรา ของเรา ของเรา ห้ามให้ใครเข้ามาไกล้เลยนะ',
        imgsrc: './picpost/pic68.jpg',
    },
    {
        title: 'ฮือออ',
        subtitle: 'จะร้องแล้วเนี่ย มากอดเลยนะ',
        imgsrc: './picpost/pic69.jpg',
    },
    {
        title: 'อีกนิดนึงนะ',
        subtitle: 'ใจขาดแล้วววว มาผายปอดเลยยยย',
        imgsrc: './picpost/pic70.jpg',
    },
    {
        title: 'จะดูแลให้ดีที่สุดในโลก',
        subtitle: 'จะไม่มีคนอื่นดูแลเธอได้ดีกว่านี้อีก',
        imgsrc: './picpost/pic71.jpg',
    },
    {
        title: 'ห้ามนะ',
        subtitle: 'เราร้องไห้ได้เลยนะ',
        imgsrc: './picpost/pic72.jpg',
    },
    {
        title: 'พาไปเดต',
        subtitle: 'อยากเดตกับเธอแล้ว',
        imgsrc: './picpost/pic73.jpg',
    },
    {
        title: 'ขอเป็นกำลังใจให้',
        subtitle: 'แต่อยากไปอยู่ด้วยมากกว่า',
        imgsrc: './picpost/pic74.jpg',
    },
    {
        title: 'ไม่อยากจะพูด',
        subtitle: 'ชีวิตนี้คงไม่เจออีก คนที่เราจะรักได้แบบนี้',
        imgsrc: './picpost/pic75.jpg',
    },
    {
        title: 'อยากใช้ชีวิตกับเธอ',
        subtitle: 'เธออยากได้ห้องแบบไหน ห้อมแบบที่มีรูปเธอติดอยู่ทุกที่เลยมะ ห้องเราเอง',
        imgsrc: './picpost/pic76.jpg',
    },
    {
        title: 'ไม่ต้องการก็ห้ามไปแล้ว เราเป็นของเธอแล้ว',
        subtitle: 'อันนี้ขอลบเขียนใหม่',
        imgsrc: './picpost/pic77.jpg',
    },
    {
        title: 'อยากมีพลังวิเศษ',
        subtitle: 'วาร์ปไปกอดเธอ จุ๊บสัก 199 ที แล้วค่อยกลับ',
        imgsrc: './picpost/pic78.jpg',
    },
    {
        title: 'กอดดด ๆ ๆ ๆ',
        subtitle: 'กว่าจะหายคิดถึงคงต้องกอดเธอไปเลยตลอดชีวิต',
        imgsrc: './picpost/pic79.jpg',
    },
    {
        title: 'เราเป็นแฟนที่ดีได้นะ',
        subtitle: 'ดีที่สุดในโลกเลยด้วย',
        imgsrc: './picpost/pic80.jpg',
    },
    {
        title: 'มีความสุข',
        subtitle: 'มีความสุขจนขาดความสุขนี้ไปไม่ได้แล้วอ่ะ',
        imgsrc: './picpost/pic81.jpg',
    },
    {
        title: 'ดีใจนะ',
        subtitle: 'ดีใจที่เจอเธอ ดีใจที่ได้เธอป็นแฟน ดีใจที่เราได้อยู่ด้วยกันตลอดไป',
        imgsrc: './picpost/pic82.jpg',
    },
    {
        title: 'หน้าเราดุนะ',
        subtitle: 'แต่ในใจอ้อนเธอเป็นน้องแมวน้อยเลย',
        imgsrc: './picpost/pic83.jpg',
    },
    {
        title: 'อันนี้ขีดเส้นไต้',
        subtitle: 'ไม่เคยพยายามกับใครมากขนาดนี้ และจะไม่พยายามขนาดนี้กับใครอีก',
        imgsrc: './picpost/pic84.jpg',
    },
    {
        title: 'ขอบคุณทินเดอร์',
        subtitle: 'ที่ยังไม่หล่อหลอมให้เธอเป็นคนใจร้าย',
        imgsrc: './picpost/pic85.jpg',
    },
    {
        title: 'เธอบอกเธอไม่ชอบยิ้ม',
        subtitle: 'จะว่าอะไรมั้ยถ้าเราจะทำให้เธอยิ้มไปทั้งวัน',
        imgsrc: './picpost/pic86.jpg',
    },
    {
        title: 'ดอกไม้',
        subtitle: 'ดอกไม้ดอกนี้จะให้เธอคนเดียวนะ',
        imgsrc: './picpost/pic87.jpg',
    },
    {
        title: 'ขอพร',
        subtitle: 'ให้วันนึงเราได้ทำสิ่งนี้กับเธอไปทุกวัน จนเราทั้งคู่แก่เฒ่า',
        imgsrc: './picpost/pic88.jpg',
    },
    {
        title: 'นานๆ',
        subtitle: 'นานๆ ที่แปลว่าตลอดไปอ่ะ',
        imgsrc: './picpost/pic89.jpg',
    },
    {
        title: 'ชอบเธอ',
        subtitle: 'ชอบทุกอย่างเลยที่เป็นเธอ',
        imgsrc: './picpost/pic90.jpg',
    },
    {
        title: 'คิดถึงนะค้าบ',
        subtitle: 'นะค้าบ นะค้าบ นะค้าบ',
        imgsrc: './picpost/pic91.jpg',
    },
    {
        title: 'I Luv U ',
        subtitle: 'ทำไงดีนะ',
        imgsrc: './picpost/pic92.jpg',
    },
    {
        title: 'I miss U',
        subtitle: 'คิดถึง',
        imgsrc: './picpost/pic93.jpg',
    },
    {
        title: 'จีงงงงง',
        subtitle: 'จริงๆเธอน่าจะมาเร็วกว่านี้ ตอน 9ขวบเราเหงามากนะ',
        imgsrc: './picpost/pic94.jpg',
    },
    {
        title: 'ต๊ะเอ๋',
        subtitle: 'รักเธอนะ',
        imgsrc: './picpost/pic95.jpg',
    },
    {
        title: 'ไม่เบื่อเลยอ่ะ',
        subtitle: 'ห้ามเบื่อเรานะ',
        imgsrc: './picpost/pic97.jpg',
    },
    {
        title: 'มาหอมนะ',
        subtitle: 'ถ้าเป็นเด็กดี้อจะหยิกจะหอมให้แก้มช้ำเลย',
        imgsrc: './picpost/pic98.jpg',
    },
    {
        title: 'ดอกไม้ให้เธอคนเก่ง',
        subtitle: 'ชอบดอกอะไรค้าบ จะไปซื้อมาแขวนให้หน้าบ้าน',
        imgsrc: './picpost/pic99.jpg',
    },
    {
        title: 'ขอบคุณนะ',
        subtitle: 'ชีวิตที่มืดมนเราสดใสขึ้นเยอะเลย',
        imgsrc: './picpost/pic100.jpg',
    },
    {
        title: 'เป็นไงบ้าง',
        subtitle: 'คนเก่งของเค้าาาาาาาาาา',
        imgsrc: './picpost/pic102.jpg',
    },
    {
        title: 'ซัพพอร์ตเสมอ',
        subtitle: 'ต่อไปนี้กอดเราเป็นของเธอ',
        imgsrc: './picpost/pic103.jpg',
    },
    {
        title: 'ให้ดอกไม้',
        subtitle: 'ถ้าไม่พอมาชาร์จแบตนะ',
        imgsrc: './picpost/pic104.jpg',
    },
    {
        title: 'คนเก่งค้าบ',
        subtitle: 'ถ้าไม่ดูแลตัวเองเราจะไปดูแลให้แล้วนะ',
        imgsrc: './picpost/pic105.jpg',
    },
    {
        title: 'อันนี้ของจริงมาก',
        subtitle: 'เปิดใจปุ๊บก็เจอเลย พรมเช็ดเท้าของเค้า',
        imgsrc: './picpost/pic106.jpg',
    },
    {
        title: 'เพราะเธอเป็นกำลังใจมาตลอด',
        subtitle: 'ตั้งแต่มีเธอ นอนน้อยไปสองวันก็ยังไม่เหนื่อย',
        imgsrc: './picpost/pic107.jpg',
    },
    {
        title: 'หงอยแล้วว',
        subtitle: 'คิดถึงอ้าาา มาหาเลยนะ',
        imgsrc: './picpost/pic108.jpg',
    },
    {
        title: 'ชอบทุกอย่างเลยย',
        subtitle: 'ชอบเธอรักเธอไปหมด',
        imgsrc: './picpost/pic109.jpg',
    },
    {
        title: 'แต่งงานกันนะ',
        subtitle: 'ขอตั้งแต่ตอนนี้เลยได้มั้ยอ้าาาา',
        imgsrc: './picpost/pic110.jpg',
    },
    {
        title: 'เธอน่ารักสิ',
        subtitle: 'น่ารักที่สุดในโลกของเราเลยนะ',
        imgsrc: './picpost/pic112.jpg',
    },
    {
        title: 'ขีดเส้นเลยนะว่า "เรารักเธอนะ"',
        subtitle: 'มองบ่อยๆทุกวันเลยนะ',
        imgsrc: './picpost/pic113.jpg',
    },
    {
        title: 'ขออ้อนนานๆเลยนะ',
        subtitle: 'แปลว่าตลอดไปเลยนะ',
        imgsrc: './picpost/pic114.jpg',
    },
    {
        title: 'ทั้งตัวและใจ',
        subtitle: 'มาเอาไปเล้ยย',
        imgsrc: './picpost/pic115.jpg',
    },
    {
        title: 'รักมากนะ',
        subtitle: 'โคตรรักเลยอ่ะ',
        imgsrc: './picpost/pic116.jpg',
    },
    {
        title: 'ตั้งใจรักเธอแล้ว',
        subtitle: 'รักเรากลับหน่อยนะ',
        imgsrc: './picpost/pic117.jpg',
    },
    {
        title: 'ไม่ได้',
        subtitle: 'ไม่เคยคิดเลยว่าตัวเองจะไหวถ้าไม่มีเธอ ไม่กล้าคิดด้วย',
        imgsrc: './picpost/pic118.jpg',
    },
    {
        title: 'แปลว่าน่ารักที่สุดละ',
        subtitle: 'หิวเลย ขอขบๆแก้มเธอนิดนึงได้มะ',
        imgsrc: './picpost/pic119.jpg',
    },
    {
        title: 'หวงมากกก',
        subtitle: 'เคยบอกว่าไม่ขี้หวง แต่ตอนนี้ขี้หวงแล้วว',
        imgsrc: './picpost/pic120.jpg',
    },
    {
        title: 'อยากกอดอ้าา',
        subtitle: 'เธ้ออออ เราไม่ไหววว',
        imgsrc: './picpost/pic121.jpg',
    },
    {
        title: 'อย่างอนเราเลยนะ',
        subtitle: 'บางทีเราแค่ซื่อบื้อเองง',
        imgsrc: './picpost/pic122.jpg',
    },
    {
        title: 'ใช่ๆ',
        subtitle: 'ไม่มีใครเหมาะกับเธอกว่านี้ละ',
        imgsrc: './picpost/pic123.jpg',
    },
    {
        title: 'ไม่ไหวอ่ะ',
        subtitle: 'อีกหน่อยเราจะตุยแล้วนะ',
        imgsrc: './picpost/pic124.jpg',
    },
    {
        title: 'ห้ามไปไหนเลยนะ',
        subtitle: 'อยู่ด้วยกันตลอดไปเลย',
        imgsrc: './picpost/pic125.jpg',
    },
    {
        title: 'แฟนน',
        subtitle: 'แฟนน่ารักขนาดนี้เลยเหรออ',
        imgsrc: './picpost/pic126.jpg',
    },
    {
        title: 'อยากได้ยินอ่ะ',
        subtitle: 'วันนึงมานั่งร้องเพลงกับเรานะ เดี๋ยวเราดีดกีต้าร์ให้',
        imgsrc: './picpost/pic127.jpg',
    },
    {
        title: 'นับวันรอจริงๆนะ',
        subtitle: 'แค่นี้ก็รอไม่ไหวละเนี่ย',
        imgsrc: './picpost/pic128.jpg',
    },
    {
        title: 'แพ้อ่ะ',
        subtitle: 'คนไข้มีประวัติแพ้อะไรมั้ยครับ ผมแพ้เธอคับหมอ',
        imgsrc: './picpost/pic129.jpg',
    },
    {
        title: 'ตกหลุกรักทุกวัน',
        subtitle: 'ถ้าอยู่ด้วยกัน เราคงตกหลุมรักทุกครั้งที่เห็นเธอ',
        imgsrc: './picpost/pic130.jpg',
    },
    {
        title: 'เราก็น่ารักนะ',
        subtitle: 'ไม่เชื่อลองมารักดูสิ',
        imgsrc: './picpost/pic131.jpg',
    },
    {
        title: 'ดีแบบนี้แหละ',
        subtitle: 'เหมือนเธอเป็นโลกของเรา',
        imgsrc: './picpost/pic132.jpg',
    },
    {
        title: 'มากอดกันนะ',
        subtitle: 'ถึงเธอจะไม่เหนื่อยก็ตาม',
        imgsrc: './picpost/pic133.jpg',
    },
    {
        title: 'คลั่งรักแฟนมาก',
        subtitle: 'เป็นแฟนกันแล้ววววว รักม๊ากกกกกกกก',
        imgsrc: './picpost/pic134.jpg',
    },
    {
        title: 'ใช่มะ',
        subtitle: 'ถ้ามีคนน่ารักใส่เธอเท่าเราต่อยมันเลยนะ เธอต้องเป็นของเรา',
        imgsrc: './picpost/pic135.jpg',
    },
    {
        title: 'ตลอดไป',
        subtitle: 'ตลอดไปเลยนะ ห้ามเปลี่ยนใจ',
        imgsrc: './picpost/pic136.jpg',
    },
    {
        title: 'จับตาดูอยู่นะ',
        subtitle: 'วันไหนไม่เห็น ห่วงจนร้องไห้อ่ะ',
        imgsrc: './picpost/pic137.jpg',
    },
    {
        title: 'จินตนาการไม่ออกเลยล่ะ',
        subtitle: 'เธออาจจะรู้แล้วว่าเรารักเธอมาก แต่จริงๆแล้วมันมากกว่านั้นเยอะ',
        imgsrc: './picpost/pic138.jpg',
    },
    {
        title: 'พาเรายิ้มตลอดเลย',
        subtitle: 'มันอมยิ้มไปเองอะ automatically',
        imgsrc: './picpost/pic139.jpg',
    },
    {
        title: 'จำเป็นไหม',
        subtitle: 'ใจเราจะออกมาเต้นข้างนอกแล้วนะ',
        imgsrc: './picpost/pic140.jpg',
    },
    {
        title: 'my happiness',
        subtitle: 'ต้องดีมากแน่ๆ ถ้ามันจะเป็นแบบนี้ไปตลอดชีวิตเลย',
        imgsrc: './picpost/pic141.jpg',
    },
    {
        title: 'ได้มะ',
        subtitle: 'อยากเป็นคนโปรดของเธอจัง',
        imgsrc: './picpost/pic142.jpg',
    },
    {
        title: 'yah, I am very happy since I met you.',
        subtitle: 'อยู่ด้วยกันต่อไปแบบนี้ก็คงจะดี',
        imgsrc: './picpost/pic143.jpg',
    },
    {
        title: 'เธอทำให้เราเปลี่ยนไป',
        subtitle: 'เปลี่ยนไปเป็นคนที่ดีขึ้นมาก แบบที่ไม่เคยคิดจะทำ เธอเก่งมากนะ',
        imgsrc: './picpost/pic144.jpg',
    },
    {
        title: 'โรแมนติกมากนะ แต่..',
        subtitle: 'แค่คิดตาม เราก็เกือบร้องไห้แล้วอ่ะ',
        imgsrc: './picpost/pic145.jpg',
    },
    {
        title: 'คิดถึงอีกแล้วว',
        subtitle: 'คิดถึงงงงงงง พิมพ์ไปคิดถึงไป',
        imgsrc: './picpost/pic146.jpg',
    },
    {
        title: 'ขอแค่มีเธอ',
        subtitle: 'อยากไปเที่ยวด้วยกันจัง',
        imgsrc: './picpost/pic147.jpg',
    },
    {
        title: 'พลังวิเศษหมายเลข 2',
        subtitle: 'ทะลุโทรศัพท์ไปกอดเลยยยย',
        imgsrc: './picpost/pic148.jpg',
    },
    {
        title: 'อยากนั่งมองแชทเธอเฉยๆ',
        subtitle: 'อีกหน่อยก็คงขอมองหน้าเธอเฉยๆ',
        imgsrc: './picpost/pic150.jpg',
    },
    {
        title: 'พูดไม่ออก',
        subtitle: 'น่ารักไปหมด ดีไปหมด เลือกไม่ได้เลย',
        imgsrc: './picpost/pic151.jpg',
    },
    {
        title: 'นาทีนี้ครบ 15ล้านครั้งพอดี',
        subtitle: 'เย้ รักที่สูดดดดดดด',
        imgsrc: './picpost/pic152.jpg',
    },
    {
        title: 'ไม่พูด',
        subtitle: 'หวงอ่ะ หวงนะ หวงจัง หวงงงงงงง',
        imgsrc: './picpost/pic153.jpg',
    },
    {
        title: 'รัก รัก รัก รัก รักกกก',
        subtitle: 'ถ้าคิดว่าไม่รักนะ ตีตายเลย',
        imgsrc: './picpost/pic154.jpg',
    },
    {
        title: 'ยิ้มแบบนี้',
        subtitle: 'ละลายไปหลายดวงมาก',
        imgsrc: './picpost/pic155.jpg',
    },
    {
        title: 'อ้าแขนรอละ',
        subtitle: 'มีไว้ให้เธอเลยนะ อ้อมกอดนี้',
        imgsrc: './picpost/pic156.jpg',
    },
    {
        title: 'หน้าตาดีเลยแหละ',
        subtitle: 'เป็นของเธอเลยนะ แบบพิเศษสุด',
        imgsrc: './picpost/pic157.jpg',
    },
    {
        title: 'แย่จัง',
        subtitle: 'ขนาดหัวใจยังเป็นของเธอเลยอ่ะ555',
        imgsrc: './picpost/pic158.jpg',
    },
    {
        title: 'คิดถึงจะแย่',
        subtitle: 'แต่ไม่อยากพักนะ',
        imgsrc: './picpost/pic159.jpg',
    },
    {
        title: 'อันนี้คงไม่ต้องพูดอะไรมาก555',
        subtitle: 'รักกกกกกกกกกกกกกกก',
        imgsrc: './picpost/pic160.jpg',
    },
    {
        title: 'ยกให้หมดแล้ว',
        subtitle: 'ถ้าเธอไปไหนเราไม่มีแล้วนะ',
        imgsrc: './picpost/pic161.jpg',
    },
    {
        title: 'ไม่มองๆๆ',
        subtitle: 'ผมตาบอดไปแล้วค้าบบบบบบ',
        imgsrc: './picpost/pic162.jpg',
    },
    {
        title: 'คำคมให้หวานใจ',
        subtitle: 'รักเธอม๊ากกกก เข้าใจมั้ยยยยยยย',
        imgsrc: './picpost/pic163.jpg',
    },
    {
        title: 'หวงมากแบบมาก',
        subtitle: 'ใครมองเธอเราจะเอาตัวไปบังเลย',
        imgsrc: './picpost/pic164.jpg',
    },
    {
        title: 'เพลงนิๆๆ',
        subtitle: 'จะอยู่ข้างเธอเสมอ (Zutto anata no sobanīruyo)',
        imgsrc: './picpost/pic165.jpg',
    },
    {
        title: 'เสียอาการไปหมด',
        subtitle: 'ยิ้มบ่อยๆ นะ ความสุขของเค้าา',
        imgsrc: './picpost/pic166.jpg',
    },
    {
        title: 'กอดแน่น',
        subtitle: 'แบบแน่นทั้งวันเลยอ่ะ',
        imgsrc: './picpost/pic167.jpg',
    },
    {
        title: 'งอแงแล้วนะ',
        subtitle: 'ไอต้าวน่ารัก',
        imgsrc: './picpost/pic168.jpg',
    },
    {
        title: 'อยากได้อะไรค้าบ',
        subtitle: 'จะพลิกแผ่นดิหามาให้เลยย',
        imgsrc: './picpost/pic169.jpg',
    },
    {
        title: 'ตามจริงๆนะ',
        subtitle: 'เดินตามต๊อกๆๆๆทั้งวันเลยยยยยย',
        imgsrc: './picpost/pic170.jpg',
    },
    {
        title: 'รอมาหลายล้านล้านล้าน millisecond ล้าน้า',
        subtitle: 'เธอให้รอนานจังเลยยย',
        imgsrc: './picpost/pic171.jpg',
    },
    {
        title: 'คนนั้นชื่อแบมคนเดียวเลย',
        subtitle: 'คิดถึงคนชื่อนี้ทั้งวันเลย',
        imgsrc: './picpost/pic172.jpg',
    },
    {
        title: 'ติดหนึบเป็นลูกหมาเลย',
        subtitle: 'สนใจเลี้ยงสักตัวมั้ยคับ',
        imgsrc: './picpost/pic173.jpg',
    },
    {
        title: 'หมอวินิจฉัยแบบนี้',
        subtitle: 'ว่าแล้วทำไมมีความสุขแปลกๆ',
        imgsrc: './picpost/pic174.jpg',
    },
    {
        title: 'รักไปแล้ว',
        subtitle: 'รักตั้งแต่เดือนแรกเลย แต่หมก',
        imgsrc: './picpost/pic175.jpg',
    },
    {
        title: 'เป็นทั้งแมวทั้งหมาเลยย',
        subtitle: 'เหมียวๆ โฮ่งๆๆ',
        imgsrc: './picpost/pic176.jpg',
    },
    {
        title: 'เยอะแบบเยอะะะะะ',
        subtitle: 'จนคนอื่นเป็นสูญญากาศไปเลย',
        imgsrc: './picpost/pic177.jpg',
    },
    {
        title: 'ติดเธอมากอ้าาา',
        subtitle: 'สิงเลยได้มั้ยย ได้รึป่าว',
        imgsrc: './picpost/pic178.jpg',
    },
    {
        title: 'มองเรา',
        subtitle: 'เรียกที่รักสิ',
        imgsrc: './picpost/pic179.jpg',
    },
    {
        title: 'อยากเห็นแล้วววว',
        subtitle: 'รอไม่ไหวแล้วน้าาา',
        imgsrc: './picpost/pic180.jpg',
    },
    {
        title: 'ใกล้นิดเดียว',
        subtitle: 'ใกล้เท่านี่เลยย',
        imgsrc: './picpost/pic181.jpg',
    },
    {
        title: 'หวงม๊ากกกกก',
        subtitle: 'น่ารักกับเราคนเดียวเลยนะ',
        imgsrc: './picpost/pic182.jpg',
    },
    {
        title: 'ห้ามเด็ดขาด',
        subtitle: 'ต้องอยู่กับเราตลอดไปเลย',
        imgsrc: './picpost/pic183.jpg',
    },
    {
        title: 'มาเอาเลยนะ',
        subtitle: 'เราแพ็คไว้ให้เป็น 1กอด 1หอม 1จุ๊บ',
        imgsrc: './picpost/pic185.jpg',
    },
    {
        title: 'พิเศษที่สุดในโลก',
        subtitle: 'ใครมาขิงแฟนเราขิงเธอกลับหมดไม่สนลูกใคร',
        imgsrc: './picpost/pic186.jpg',
    },
    {
        title: 'หันมาบ่อยๆ',
        subtitle: 'ยืนอยู่ตรงนี้ตลอด',
        imgsrc: './picpost/pic187.jpg',
    },
    {
        title: 'automatically smile',
        subtitle: 'มันยิ้มเองอ่ะ',
        imgsrc: './picpost/pic188.jpg',
    },
    {
        title: 'ร้ายมาก',
        subtitle: 'ทำซะเราติดหนึบแกะไม่ออกเลย',
        imgsrc: './picpost/pic189.jpg',
    },
    {
        title: 'คิดถึงงง',
        subtitle: 'รอบที่ร้อยล้าน',
        imgsrc: './picpost/pic190.jpg',
    },
    {
        title: 'คิดถึงอีกแล้วว',
        subtitle: 'รอบนี้พันล้านไปเลย',
        imgsrc: './picpost/pic191.jpg',
    },
    {
        title: 'ให้เธอ',
        subtitle: 'หัวใจที่น่ารักของเราเอง เอาไปกอดเลยย',
        imgsrc: './picpost/pic192.jpg',
    },
    {
        title: 'รักกก',
        subtitle: 'รักเธอที่สุดในโลกเล้ยย',
        imgsrc: './picpost/pic193.jpg',
    },
]

export default function MultiContentFade() {
    return (
        <>
            <Grid sx={{ flexGrow: 1, justifyContent: 'center', margin: 'auto', width: 'auto', gap: '2rem' }} container spacing={8}>
                {item.map((x, index) => (
                    <PostCard title={x.title} subtitle={x.subtitle} imgsrc={x.imgsrc} id={index.toString()} key={index.toString()} />
                ))}
                {/* Add more post cards as needed */}
            </Grid>
        </>
    );
};

MultiContentFade.getLayout = function getLayout(page: ReactElement) {
    return (
        <HideAppBar>
            {page}
        </HideAppBar>
    )
};

