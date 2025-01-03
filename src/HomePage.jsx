import styled from "styled-components";
import { motion } from 'framer-motion';
import MultipleApps from "./components/MultipleApps";



const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
`


const HomePage = () => {


    return (
        <Container>
            <MultipleApps/>
        </Container>
    )
}

export default HomePage;