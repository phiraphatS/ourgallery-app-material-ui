import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import React, { ReactElement } from 'react'
import { Alert, AlertTitle, Button, Card, CardActions, CardContent, Divider, Fade, Grid, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import HideAppBar from '../component/app-bar'
import MasonryImageList from '../component/her-img-present'
import router from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    function toOldComponent() {
        router.push('/remake-from-old', '', { shallow: true });
    }

    return (
        <>
            <Grid sx={{ flexGrow: 1, justifyContent: 'center', margin: 'auto', width: 'auto', gap: '2rem' }} container spacing={8}>
                <Fade in={true} timeout={1000}>
                    <Card className={styles.box} sx={{ minWidth: 275, maxWidth: 'fit-content' }}>
                        <div className={styles.wave}></div>
                        <div className={styles.wave}></div>
                        <div className={styles.wave}></div>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                My seasons
                            </Typography>
                            <MasonryImageList />
                            <Typography variant="h5" component="div">
                                รวมรูปคนสวย
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                รูปน้อยเลยใช่มะ เค้ามีแค่นี้อ่ะ จริงๆอยากขอเธอมาสักอัลบั้ม เอามาให้เลยนะ
                            </Typography>
                            <Typography variant="body2">
                                เธออ เธอน่ารักที่สุดแล้วน้า เก็บความน่ารักนี้ไว้ให้เค้านะคับ เราจะรักษาต่ออย่างดีเลย
                                <br />
                                {'"เธอเป็นโลกทั้งใบของเค้าเลยนะ"'}
                            </Typography>
                        </CardContent>
                    </Card>
                </Fade>
                <Fade in={true} timeout={2000}>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert variant="outlined" severity="warning">
                            <AlertTitle>คำเตือนนน</AlertTitle>
                            เนื้อหาที่เธอจะได้เห็นต่อไปนี้มีผลต่อหัวใจ — <strong>เช็คใจด่วน!</strong>
                        </Alert>
                    </Stack>
                </Fade>
                <Fade in={true} timeout={3000}>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => toOldComponent()}
                    >ถ้าพร้อมแล้ว กด!
                    </Button>
                </Fade>
            </Grid>
        </>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <HideAppBar>
            {page}
        </HideAppBar>
    )
};