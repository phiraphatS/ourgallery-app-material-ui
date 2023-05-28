import { useState, useEffect } from 'react';
import { Box, Card, CardContent, Fade, ImageList, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from '@/styles/oldcontent.module.scss'

interface PostCardProps {
    title: string;
    subtitle: string;
    imgsrc: string;
    id: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, subtitle, imgsrc, id }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const postCard = document.getElementById(id);
            if (postCard) {
                const rect = postCard.getBoundingClientRect();
                const isInViewport = rect.bottom <= window.innerHeight;
                setIsVisible(isInViewport);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);
        // Check if the post card is already in the viewport when the component mounts
        handleScroll();

        return () => {
            // Clean up the scroll event listener
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Fade in={isVisible} timeout={600}>
            <Card className={styles.box} sx={{ minWidth: 275, maxWidth: '470px'}} id={id}>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div> 
                <div className={styles.wave}></div>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        My seasons
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <img src={`${imgsrc}`} style={{width: '100%', maxWidth: '450px'}}/>
                    </Box>
                    <Typography variant="h5" component="div">
                        <FavoriteIcon /> {title} <FavoriteIcon />
                    </Typography>
                    <Typography variant="subtitle1" noWrap={false}>
                        {subtitle}
                    </Typography>
                </CardContent>
            </Card>
        </Fade>
    );
};

export default PostCard;
