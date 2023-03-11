import { useState, useEffect, useContext } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import Navbar from '../HomePage/Navbar';
import Comments from './Comments';

const Container = styled(Box)(({ theme }) => ({
  margin : '10px 10%',
  [theme.breakpoints.down('md')]: {
        margin: '10px 0'
    },
}));

const Image = styled('img')({
    width: '60%',
    height : '250px',
    marginTop : '30px',
});

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
    word-break : break-word,
`;

const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));

const DetailsView = () => {
    const [post, setPost] = useState({});
    const { account } = useContext(DataContext);
    const navigate = useNavigate();
    const { _id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.fetchDataByID(_id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        }
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteBlog = async () => {  
        let response = await API.deletePost(post._id);
        if(response.isSuccess){
            navigate('/home');
        }
    }

    return (
      <>
      <Navbar/>
        <Container style={{marginTop : 50}}>
            <Image src={post.picturePath} alt="post" />
            <Box style={{ marginTop : 20 }}>
                {   
                    account.username === post.userName && 
                    <>  
                        <Link to={`/update/${_id}`}><EditIcon color="primary" /></Link>
                        <DeleteIcon onClick={() => deleteBlog()} color="error" />
                    </>
                }
            </Box>
            <Heading>{post.title}</Heading>

            <Author style={{margin :20}}>
                <Typography>Author: @<span style={{fontWeight: 600}}>{post.userName}</span></Typography>
                <Typography style={{marginLeft: 'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Author>

            <Typography>{post.description}</Typography>
            <Comments post={post} />
        </Container>
      </>
    )
}

export default DetailsView;