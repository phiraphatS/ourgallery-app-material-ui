import React, { ReactElement } from 'react'
import QuestionFormCard from './question-form'
import styles from '@/styles/auth.module.scss'
import HideAppBar from '@/pages/component/app-bar';
import { Fade } from '@mui/material';


export default function StartQuestion() {
  return (
    <Fade in={true} timeout={3000}>
      <div className={styles.authContainer}>
        <QuestionFormCard />
          <div>
              <div className={styles.wave}></div>
              <div className={styles.wave}></div>
              <div className={styles.wave}></div>
          </div>
      </div>
    </Fade>
  )
}
