import React, { ReactElement } from "react";
import HideAppBar from "../component/app-bar";
import SongList from "../component/youtube-box";
import { Container, Grid, Pagination, Stack, Typography } from "@mui/material";


interface Song {
  id: number;
  title: string;
  artist: string;
  videoId: string;
}

const songs1: Song[] = [
  { id: 1, title: 'CNPW.CAT - อยากให้เป็นแค่เธอ Feat.Jaoza', artist: 'CNPW.CAT', videoId: '6ofjxIJbvUk' },
  { id: 2, title: 'CNPW.CAT - ในคืนที่เธอนั้นนอนไม่หลับ [ Demo Acoustic Version ]', artist: 'CNPW.CAT', videoId: 'EdSubTtR8K4' },
  { id: 3, title: 'ขอจีบ - Poopa Hypnotix', artist: 'Poopa Hypnotix', videoId: 'S826swzo_mQ' },
  { id: 4, title: 'มองกี่ทีก็น่ารัก (Cute Cute) - นนน กรภัทร์', artist: 'นนน กรภัทร์', videoId: 'DUmCj6QuMaM' },
  { id: 5, title: 'Seventh of July - คิดถึงเธอได้ทุกนาทีเลยนะ | Every Sec (Official Audio)', artist: 'Seventh of July', videoId: 'zj-jWtSmBsc' },
  { id: 6, title: 'แค่อยากบอกเธอว่า', artist: 'Pondcpm', videoId: 'NhHoZKNRwT8' },
  { id: 7, title: 'TYLER - แยบยล [ Lyrics ]', artist: 'TYLER JR', videoId: 'W7PRXTuvvYM' },
  { id: 8, title: 'จะอยู่ข้างเธอเสมอ (Zutto anata no sobanīruyo)', artist: 'PadPrikGaengGai', videoId: '5bJgH64Fog8' },
  { id: 9, title: 'หวั่นไหวครับ', artist: 'Pondcpm', videoId: 'i0UUZOOIgT8' },
  { id: 10, title: 'ดาวดวงโปรด -​ FOURSIA', artist: 'Foursia', videoId: '7QBD5IbdkgM' },
];

const songs2: Song[] = [
  { id: 11, title: 'you so lovely (ฉันก็ยังมีเธออยู่ตรงนี้) - pondcpm', artist: 'Pondcpm', videoId: 'nAoB_HagddY' },
  { id: 1, title: 'YEW - พระจันทร์ | Moon', artist: 'YEW', videoId: 'twjvDN5p5bE' },
  { id: 13, title: 'เพราะเธอฉันถึงรู้สึกรัก', artist: 'Pondcpm', videoId: 'oXIR6nNTJ28' },
  { id: 14, title: 'Door Plant - เธอนั่นไง (OFFICIAL MV)', artist: 'DOOR PLANT', videoId: 'wQLkYE8ffzM' },
  { id: 15, title: 'กลัวว่าเธอจะไม่สบาย', artist: 'Pondcpm', videoId: '9eyz0wPZ9ig' },
  { id: 16, title: "กำลังใจให้คุณ ✌️ - T'PHARM | Lyrics Audio (Prod. DreamBeatZ)", artist: "-T'PHARM-", videoId: 'cAsegSOBY8c' },
  { id: 17, title: 'เป็นเพราะเธอคนนี้', artist: 'Pondcpm', videoId: 'TTz6L_Fmum8' },
  { id: 18, title: 'ส่งเพลงนี้ให้แฟนฟัง (Demo)', artist: 'MiDiBlue', videoId: '1OO8AhHPddo' },
  { id: 19, title: 'ถ้าเธอจะน่ารักขนาดนี้', artist: 'RATUFO', videoId: '1g19fvJ0ce4' },
  { id: 20, title: 'ใจฉันให้เธอ', artist: '3919', videoId: 'PvASHkk4X2M' },
];

const songs3: Song[] = [
  { id: 21, title: 'ชอบเธอมาตั้งนานแล้ว', artist: 'Pondcpm', videoId: 'zgg01Q7E-Fw' },
  { id: 22, title: 'แมวตัวนั้นที่เธอชอบ', artist: 'Pondcpm', videoId: 'olND81C0vYI' },
  { id: 23, title: 'ให้เธอ | Given', artist: 'alittlebirdtoldme', videoId: 'u5uFC_fxQm0' },
  { id: 24, title: 'ดอกไม้สำหรับคนเก่ง', artist: 'STUCKCRAZY', videoId: '8TRoGGtKkhQ' },
  { id: 25, title: 'รับหน่อยนะ', artist: 'UD_KP', videoId: 'kSwYBcIdpEQ' },
  { id: 26, title: 'Arert - รักที่ให้ไป Prod. Aik-H (Original NKOHM)', artist: 'Arert', videoId: 'tvrIFG5l2xw' },
  { id: 27, title: 'looping (feat. himshy)', artist: 'Arert', videoId: 'yvIS5xFWvDQ' },
  { id: 28, title: 'ก็เธอน่ารักอ่ะ', artist: 'Shineboys', videoId: 'dffCMPuq160' },
  { id: 29, title: 'Arert - บอกมาให้ชื่นใจ feat. Kanyanut Q & DAICHIIIII', artist: 'Arert', videoId: 'mFvHh2aGLvQ' },
  { id: 30, title: 'Romancerr - สูดละออง ละลอยล่องลงโลกคู่ขนาน', artist: 'Romancerr', videoId: 'lK43u69tzU0' },
];

const songs4: Song[] = [
  { id: 31, title: 'Romancerr - ดวงความรักประจำราศี.. (ᴢᴏᴅɪᴀᴄ)', artist: 'Romancerr', videoId: '_2dQyd040YI' },
  { id: 32, title: 'Mercury Goldfish x insKru - เมื่อวานเธอไปทำอะไรมา? (昨日、何かあったの？)', artist: 'Mercury Goldfish', videoId: 'HDvnMHus8Rc' },
  { id: 33, title: '9frvme - แม้โลกสลายก็ไม่กลัวเพราะมีเธอ', artist: '9frvme', videoId: '9vN6VHOOyk8' },
  { id: 34, title: 'สิ่งวิเศษที่สุดคือเธอ', artist: 'Arert', videoId: 'QNiAatPQP5I' },
  { id: 35, title: 'Purplecat - ดีกว่า (For Better) [OFFICIAL VISUALIZER]', artist: 'Purplecat', videoId: '9Ey26VDtC5k' },
  { id: 36, title: 'ไอ่เรื่องความน่ารักของเธอ - Jeanius feat. themoonwillalwaysbewithme', artist: 'Jeanius', videoId: 'X6riptEXWRw' },
  { id: 37, title: 'titus - ฉันสัญญาจะอยู่กับเธอวันนี้ในปีถัดไป', artist: 'titus', videoId: 'mijgkcK5tg8' },
  { id: 38, title: 'lost in you', artist: 'oftn', videoId: 'IpRdYtJwSaM' },
  { id: 39, title: 'Virginia To Vegas - better with you', artist: 'Virginia To Vegas', videoId: '2epKMM7jMN0' },
  { id: 40, title: 'STUCKCRAZY - อยากมองท้องฟ้านี้ไปพร้อมคุณ ft.IJIRO (Amore)⛅️', artist: 'STUCKCRAZY ', videoId: 'RCw7kxXlVw0' },
];

const songs5: Song[] = [
  { id: 41, title: 'MOONSTONE - แด่เธอคนนี้ (Only You)', artist: 'MOONSTONE ', videoId: '-J08BIiJP9o' },
  { id: 42, title: 'จะคอยเป็นร่มบังแดดให้เธอในวันที่ร๊อนร้อน - soulfear', artist: 'soulfear', videoId: 'QimBsplizEk' },
  { id: 43, title: 'MEYOU - ผ้าห่ม', artist: 'MEYOU', videoId: 'g3Igdau3c-I' },
  { id: 44, title: 'แค่มีเธอทุกคืนอย่างนี้(Good Night) | Snowman', artist: 'Snowman', videoId: 'BA0pV5zGnmY' },
  { id: 45, title: 'dayys - เธอคือความงดงามของโลกใบนี้ (Boo!)', artist: 'dayys', videoId: 'VmYGDqestHU' },
  { id: 46, title: '242 - รุ้ง (rainbow)', artist: 'thisis242', videoId: 'ckQwznHybV0' },
  { id: 47, title: 'น่ารักจัง(มีแฟนยัง?) | Snowman', artist: 'Snowman', videoId: 'vTzMIYRgdlM' },
  { id: 48, title: '9frvme - ช่วยมารัก feat. TANASA & GGUNX', artist: '9frvme', videoId: '5obZuM5bBYw' },
  { id: 49, title: 'ตั้งใจรัก (happy accident) l พัด Vorapat x First Anuwat', artist: 'marr', videoId: 'eKWSSHJ5d_I' },
  { id: 50, title: 'YEW - หมวกเมฆสีรุ้ง | Behind The Clouds', artist: 'YEW', videoId: 'SJNFhQ1gdLo' },
];

const songs6: Song[] = [
  { id: 51, title: 'Dept - เพราะเธอนั้นเป็นเหมือนดั่งโลกทั้งใบ | My Vanilla', artist: 'Dept ', videoId: '0jzr501QApk' },
  { id: 52, title: 'Gervs - Another Day', artist: 'GERVS', videoId: '1K4dXe_2mhY' },
  { id: 53, title: 'Flukie - เพลงสำหรับเธอ', artist: 'FLUKIE', videoId: '3BIQZkCyj6w' },
  { id: 54, title: 'MEYOU - เค้ารักเธอที่สุด (ily)', artist: 'MEYOU', videoId: 'WTDtlmP8u7M' },
  { id: 55, title: 'Arert - หมอ Prod. Aik-H', artist: 'Arert', videoId: 'AK63R2nJQLQ' },
  { id: 56, title: 'FLUKIE - รอรอรอ', artist: 'FLUKIE', videoId: 'RbEIQpNYyTg' },
  { id: 57, title: 'วาเลนติน่า | Shineboys Feat. @PONWP', artist: 'Shineboys ', videoId: '30HfM86ZY5g' },
  { id: 58, title: 'BUT HATE PANIC - LEAD TIME', artist: 'BUT HATE PANIC', videoId: 'jk43ZhkH4GQ' },
  { id: 59, title: 'Youth Brush - ยังไม่นอน', artist: 'Youth Brush', videoId: 'FJgnSWDimgU' },
  { id: 60, title: 'BUT HATE PANIC - เพราะว่าเธอ', artist: 'BUT HATE PANIC', videoId: 'dP3j_-w8b1E' },
];

const songs7: Song[] = [
  { id: 61, title: 'Jigsaw', artist: 'Television Off', videoId: 'Ul_UNHaMl0Y' },
  { id: 62, title: "valium - เธอคนนี้ ( it's you ) ft. Door Plant", artist: 'valiumboys', videoId: 'cgHCvPdnQM8' },
  { id: 63, title: 'Youth Brush - ไม่แปลก', artist: 'Youth Brush', videoId: 'gZBZFjwetBo' },
  { id: 64, title: 'Wave And So - วันนี้เรานัดกัน', artist: 'Parinam Music', videoId: 'OImGCrDM8o4' },
  { id: 65, title: 'Seal Pillow - กู้ดบาย (Goodbye)', artist: 'Parinam Music', videoId: 'pGHAwwLrkHI' },
  { id: 66, title: 'Wave And So - Meet & Greet', artist: 'Parinam Music', videoId: 'ROMsmRsn6bc' },
  { id: 67, title: 'Moonmap', artist: 'Meego', videoId: 'WNbgIzCVIvw' },
  { id: 68, title: 'complicated/overrated', artist: 'The Millennial Club', videoId: 'CKL5YY9-p_Y' },
  { id: 69, title: 'With you - Mokita', artist: 'Mokita', videoId: 'DTfMjjlJnWE' },
  { id: 70, title: 'Strawberries and Wine ㅡ Jaylon Ashaun', artist: 'Jaylon Ashaun', videoId: 'r-6kQycGvs4' },
];

const songs8: Song[] = [
  { id: 71, title: 'Brand New', artist: 'Public Library Commute', videoId: 'OsYJWLaq9UI' },
  { id: 72, title: 'Bentobox', artist: 'Me and My Sandcastle', videoId: '0Mc6cBVy77w' },
  { id: 73, title: "Oh It's You - babychair", artist: 'babychair', videoId: 'KkRTdKnBdpM' },
  { id: 74, title: 'Loving U', artist: 'Me and My Sandcastle', videoId: 'hEFihOtnHKo' },
  { id: 75, title: 'PILLOW - คนพิเศษ', artist: 'PILLOW', videoId: '_TfOnrzYYfM' },
  { id: 76, title: 'Youth Brush - Video call', artist: 'Youth Brush', videoId: 'Z6UYKfGHy5I' },
  { id: 77, title: 'SAMBLACK Ft. P1rock - สตรอว์เบอร์รี (Strawberry)', artist: 'Warmlight', videoId: 'wQ7WdINYju0' },
  { id: 78, title: '2000 - เธอว่าไง (Be My Boo)', artist: '2000.twothousand', videoId: 'ufCNb7GbU14' },
  { id: 79, title: 'AUTTA - ว่างยัง (Prod. by AUTTA) | YUPP!', artist: 'YUPP!', videoId: 'sJCihD6-9Fg' },
  { id: 80, title: 'Purplecat - ขณะ', artist: 'Purplecat', videoId: 'FfEtH3PyzBc' },
];

const songs9: Song[] = [
  { id: 81, title: 'ยันจุดสิ้นสุดเวลา', artist: 'Arert', videoId: 'TmbqhH9uJPI' },
  { id: 82, title: 'FLUKIE - ไม่รับคืน (Yours & yours only)', artist: 'FLUKIE', videoId: 'J4re5unNb1M' },
  { id: 83, title: '242 - อุ่นใจ (you&me) [Official lyrics Video]', artist: 'thisis242', videoId: 'zHac8ysYk68' },
  { id: 84, title: 'lostbeans - เริ่มต้นด้วยเพลงรัก [Official MV]', artist: 'lostbeans', videoId: 'afPnIMti1oo' },
  { id: 85, title: 'เกินต้าน | NINEW 「 Cover 」', artist: 'marr', videoId: '_lFxZE_Zmj0' },
  { id: 86, title: 'WWJ - ข้างกัน (SIDE BY SIDE)', artist: 'ackywwj', videoId: '2tc5nfmCwK4' },
  { id: 87, title: 'lostbeans - เป็นเธอใช่หรือเปล่า', artist: 'lostbeans', videoId: '1fKbgG0c3OI' },
  { id: 88, title: 'วานิลลาสกาย (Vanilla sky) - unmute', artist: 'unmute', videoId: 'gfIpC5GbUag' },
  { id: 89, title: 'Jaritz - เพียงเเค่มอง - 只看着你 (Just beholding)', artist: 'Jaritz Official', videoId: 'VHcgNDycSCY' },
  { id: 90, title: 'Jaritz - ลองดู (Try it)', artist: 'Jaritz Official', videoId: 'vy7FSFOcioI' },
];

const songs10: Song[] = [
  { id: 91, title: 'CNPW.CAT - พาเธอไป', artist: 'CNPW. CAT', videoId: 'HSvoUiVQi8o' },
  { id: 92, title: 'ตกเย็นแล้วคิดถึงได้(เปล่า?) - PHAKHAW', artist: 'PHAKHAW', videoId: 'S8ukeuVaYE4' },
  { id: 93, title: 'dayys - สิ่งมีชีวิตที่น่ารักที่สุดในโลก (acoustic version)', artist: 'dayys', videoId: 'SWSqisWEURo' },
  { id: 94, title: '2PUP! - 6.10 PM', artist: '2PUP!', videoId: 'lSDRZJItLAQ' },
  { id: 95, title: 't_047 - อนันตกาล', artist: 'T_047 Sound', videoId: 'drW1q3cnGVU' },
  { id: 96, title: 'Sky and Whale - รักคืออากาศดี', artist: 'Sky and Whale', videoId: 'syioIbxKhSQ' },
  { id: 97, title: 'dayys - อย่าเป็นเพียงความฝัน (dreams)', artist: 'dayys', videoId: 'EXVtpnrRKr0' },
  { id: 98, title: 'CNPW.CAT - เคียงข้าง', artist: 'CNPW. CAT', videoId: 'hE5Aa1OcyCM' },
  { id: 99, title: '242 - ดีไปหมด (flowers)', artist: 'thisis242', videoId: 'XlgxROHGrgE' },
  { id: 100, title: 'lostbeans - เธอจะมีรอยยิ้ม(ที่สวยงามไว้ทำไม)', artist: 'lostbeans', videoId: 'qXgB0DvgXDg' },
];

const songs11: Song[] = [
  { id: 1, title: 'Morvasu x Violette Wautier - ดูดฝุ่น (home.)', artist: 'Whattheduck', videoId: 'cAaPHNeLTM4' },
  { id: 1, title: 'โคมไฟ - Newery', artist: 'Newery', videoId: 'CEgWS652fus' },
  { id: 1, title: 'Pondering - Daydream (feat. Cloud Cadet)', artist: 'Ponderingbaby', videoId: 'n2cBzQvcfhw' },
  { id: 1, title: 'Romancerr - ให้เธอเป็นแกนซีกโลกใต้ที่เอียงเข้าหาดวงอาทิตย์', artist: 'Romancerr', videoId: '9Vsx1T47tDk' },
  { id: 1, title: 'แสงไฟ (Festival) - UNCLE BEN (GOOD HOPE Song)', artist: 'GOOD HOPE Music', videoId: '59PDNzfFEPs' },
  { id: 1, title: 'QLER - พอดีๆ (JUST ABOUT RIGHT )', artist: 'QLER', videoId: 'rcO1cB0-0EA' },
  { id: 1, title: 'WWJ - ตั้งแต่มีเธอ ', artist: 'ackywwj', videoId: '73eaVeQHSjI' },
  { id: 1, title: 'Youth Brush - เป็นคนเดียวที่เธอฟ้องให้ฟังตลอด', artist: 'Youth Brush', videoId: '5psuqH2H02Q' },
  { id: 1, title: 'flowflow. - พูดขนาดนี้ยังไม่รู้อีกหรอว่าชอบ feat.WWJ', artist: 'flowflow.', videoId: 'PFkr7ceDYcU' },
  { id: 1, title: 'loserpop - ดาวตก (fall)', artist: 'loserpop', videoId: 'uZilgncPk9s' },
];

const songs12: Song[] = [
  { id: 1, title: 'Newery - คราวนี้', artist: 'Newery', videoId: 'dZGL95Q90Ns' },
  { id: 1, title: 'QLER - 30 cm', artist: 'QLER', videoId: '3L1Wkvis9KQ' },
  { id: 1, title: 'Lost Jigsaw - guncharlie feat. Upim LANDOKMAI', artist: 'guncharlie', videoId: 'tnhBwIPRvXI' },
  { id: 1, title: 'Old School (2015) - themoonwillalwaysbewithme', artist: 'themoonwillalwaysbewithme', videoId: 'de8MHBSbpsA' },
  { id: 1, title: 't_047 - วันที่โลกแตก ( the end of the world )', artist: 'T_047 Sound', videoId: 'DNynDzmXRDc' },
  { id: 1, title: 'ซ้อมมีแฟน (trial) Kinkaworn x bamm', artist: 'marr', videoId: 'WeGwwmFRo-E' },
  { id: 1, title: 'ROOFTOP - Forever (เธอชนะแต่เราแพ้ EP. เธอชนะ)', artist: 'ROOFTOP', videoId: 'ENqhZpQ302c' },
  { id: 1, title: 'Uncle Ben - โตไปด้วยกัน (Dawn)', artist: 'Uncle Ben', videoId: 'TJtnc0KJizc' },
  { id: 1, title: 'Youth Brush - รักแมวคุณมากกว่า', artist: 'Youth Brush', videoId: 'Ag1RB68uKIU' },
  { id: 1, title: 'น่ารักเท่าอวกาศ (ROCKET) | DoubleBam', artist: 'marr', videoId: 'ymNRlqbWy7M' },
];

const songs13: Song[] = [
  { id: 1, title: 'QLER - พะจัน (Fool Moon)', artist: 'QLER', videoId: 'MAbcJqdTvyc' },
  { id: 1, title: 'SAMBLACK - Summer (Prod. By 1rock)', artist: 'SAMBLACK ', videoId: '5zEeRBh2yOY' },
  { id: 1, title: 'จันทร์อังคารพุธพฤหัสศุกร์เสาร์อาทิตย์ (Everyday) - Patrickananda | D.U.M.B. RECORDINGS', artist: 'DUMB Recordings', videoId: 'fk-ICHELKSc' },
  { id: 1, title: 'รสหวาน : FREEHAND', artist: 'freehand band', videoId: 'q3bWhsg9HH8' },
  { id: 1, title: 'ผีเสื้อบินอยู่ในท้องฉันเป็นร้อยตัว (butterflies) l พัด Vorapat x pluto boys', artist: 'marr', videoId: 'g0xIer-r7KE' },
  { id: 1, title: 'Eii Thanaphan - หน้าลอย', artist: 'TERO MUSIC', videoId: 'x7yR7HUP6X0' },
  { id: 1, title: 'ก่อนที่ (Moon) - CORNBOI', artist: 'CORNBOI', videoId: 'ilhRyRLShwk' },
  { id: 1, title: 'loserpop - Woo!', artist: 'loserpop', videoId: 'vbUj4eljjIc' },
  { id: 1, title: 'วัชราวลี - เขียนถึงเธอจากบนฝั่ง เธออ่านมันในทะเล', artist: 'WhatChaLaWaLee', videoId: 'qHpoKG7wpl4' },
  { id: 1, title: 'wish. - เส้นโค้งที่สวยที่สุด', artist: 'wish.', videoId: 'TfkLHC7kv1w' },
];

const songs14: Song[] = [
  { id: 1, title: 'No One Else - ปีนี้ไม่ต้องเหงาคนเดียวแล้วโว้ย', artist: 'No One Else', videoId: 'M8Ao4NeNhFE' },
  { id: 1, title: 'di age feat. TangBadVoice - หวานร้อย (Please)', artist: 'Wayfer Records', videoId: 'T89fWQCWTYM' },
  { id: 1, title: 'wish. - อยากอยู่ในสตอรี่แก (ig story :)', artist: 'wish.', videoId: 'UdbSCc8eZO8' },
  { id: 1, title: 'ก็คิดว่าจะ (Wish) - YOUNG MAN AND THE SEA', artist: 'YOUNG MAN AND THE SEA', videoId: 'Dz4uic7b1Ww' },
  { id: 1, title: 'ปีนี้พิเศษ (เพราะมีคนนี้) (made my year) l พัด Vorapat x NINEW', artist: 'marr', videoId: '3LGJ6oa00Pw' },
  { id: 1, title: 'บังเอิญพบทานตะวัน(.png) - PURPEECH', artist: 'PURPEECH Official', videoId: 'FMuIkvsIjL0' },
  { id: 1, title: 'Dept - หมดนี้ให้เธอ | All In', artist: 'SMALLROOM', videoId: '83qy6T_WDGE' },
  { id: 1, title: 'PONWP x MaryJane X SNOOPO - เรื่องสมมุติในงานแต่งงาน (Prod by Crappy)', artist: 'PONWP', videoId: 'lMv1Mxjbl0o' },
  { id: 1, title: 'PONWP - กลางทะเล Feat.TØEYKÍ 【OFFICIAL AUDIO】(ให้เธอเป็นชายหาด และฉันจะเป็นปู)', artist: 'PONWP', videoId: '6ZCqbbUjjzo' },
  { id: 1, title: 'ความสุข feat.วัชราวลี - Bearhouse (Prod. by BEMINOR)', artist: 'Beminor Official', videoId: 'kcSVsA2xv_8' },
];
const songs15: Song[] = [
  { id: 1, title: 'Sweet [หวาน] - CHETTHA feat. Jonin SCW', artist: 'CHETTHA KHANTHAHAT', videoId: 'tjKEo-DBuAI' },
  { id: 1, title: 'THE WHITE HAIR CUT - โลกเปลี่ยน', artist: 'THE WHITE HAIR CUT', videoId: 'cR2mX12WrfU' },
  { id: 1, title: "Topeople - You're Mine", artist: 'Topeopleband', videoId: 'QoUnQYaBPzY' },
  { id: 1, title: 'imnutt - เธอเก่งที่สุดในโลก ;) (Person of the Year)', artist: 'imnutt', videoId: '7KIQkaPgFhM' },
  { id: 1, title: 'Uncle Ben - อาทิตย์ (Sunset)', artist: 'Uncle Ben', videoId: 'hfgoSDK2vMA' },
  { id: 1, title: 'Dept - ประกาศให้โลกรู้ | Shoutout', artist: 'SMALLROOM', videoId: '9walXRMA9Tg' },
  { id: 1, title: 'Urworld - Home', artist: 'URWORLD', videoId: 'M1MbUOMXFBk' },
  { id: 1, title: 'GAVIN:D x HYE x MARC - แบบนี้เอง', artist: 'THEREALGAVIN:D', videoId: 'G_ViPth3d9U' },
  { id: 1, title: 'SLAPKISS - สู้ๆ นะเธอ', artist: 'SLAPKISS ', videoId: 'RYqLEBPZWRs' },
  { id: 1, title: 'YEW - แด่คุณ | River', artist: 'YEW', videoId: '8p3HZLTOonI' },
];

export default function YoutubeBox() {
  const [page, satPage] = React.useState(songs1)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    switch (value) {
      case 1: satPage(songs1);
        break;
      case 2: satPage(songs2);
        break;
      case 3: satPage(songs3);
        break;
      case 4: satPage(songs4);
        break;
      case 5: satPage(songs5);
        break;
      case 6: satPage(songs6);
        break;
      case 7: satPage(songs7);
        break;
      case 8: satPage(songs8);
        break;
      case 9: satPage(songs9);
        break;
      case 10: satPage(songs10);
        break;
      case 11: satPage(songs11);
        break;
      case 12: satPage(songs12);
        break;
      case 13: satPage(songs13);
        break;
      case 14: satPage(songs14);
        break;
      case 15: satPage(songs15);
        break;
    }
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1">
        Your Music
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SongList songs={page} />
        </Grid>
      </Grid>
      <Stack spacing={1} style={{ width: '100vw', alignItems: 'center' }}>
        <Pagination count={15} defaultPage={1} onChange={handleChange} size="large" />
      </Stack>
    </Container>
  );
};

YoutubeBox.getLayout = function getLayout(page: ReactElement) {
  return (
    <HideAppBar>
      {page}
    </HideAppBar>
  )
};