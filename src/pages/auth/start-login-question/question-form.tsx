import React, { useEffect, useState } from 'react';
import styles from '@/styles/auth.module.scss'
import { Card, CardContent, Typography, TextField, Button, FormControl, InputLabel, Input, FormHelperText, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import router from 'next/router';

const QuestionFormCard: React.FC = () => {
  const conversations = [
    'รูปภาพน่ารักๆ',
    'รูปภาพอื่นๆ',
    'เสียงประกอบ',
    'เอฟเฟคสวยๆ',
    'รูปมีมฮาๆ',
    'เมนู',
    'ประโยคส่งรัก',
    'ความน่ารักของเธอ',
    'ใกล้เสร็จแล้ว',
    'เริ่มเลยยย',
  ];

  const [currentConversationIndex, setCurrentConversationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentConversationIndex((prevIndex) => (prevIndex + 1) % conversations.length);
    }, getRandomInterval(700, 3000));

    return () => clearInterval(interval);
  }, [currentConversationIndex]);

  const getCurrentConversation = () => {
    return conversations[currentConversationIndex];
  };

  const getRandomInterval = (min: number, max: number) => {
    if(currentConversationIndex == 9)
      router.push('/home','',{shallow: true});

    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <Card style={{ background: 'unset', backdropFilter: 'blur(8px)', zIndex: '1', minWidth: '380px', marginLeft: '20px', marginRight: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {getCurrentConversation()}
        </Typography>
        <Typography variant="subtitle1" component="h2">
          Loading...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuestionFormCard;