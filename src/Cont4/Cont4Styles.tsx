import styled from 'styled-components'

import DoughImg from '../assets/doughlicious.jpg'
import CaramelImg from '../assets/caramel-wonder.jpg'
import BrownieImg from '../assets/brownie-bunch.jpg'

export const Content4 = styled.section`

    height: 100vh;
    width: 100%;
    background-color: #150F0F;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export const Title = styled.h1`

    font-size: 2.5rem;
    color: #FFF;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`;

export const Container = styled.div`

    height: 80%;
    width: 90%;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

`;

export const SweetDiv = styled.div`

    height: 550px;
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export const DoughliciousImg = styled.div`

    height: 300px;
    width: 300px;
    background-image: url(${DoughImg});
    background-size: cover;
    background-position: center;
    border-right: 5px solid #FDC500;
    border-bottom: 5px solid #FDC500;

`;

export const SweetTitle = styled.h2`

    font-size: 1.5rem;
    color: #FFF;
    margin-top: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`;

export const SweetTxt = styled.p`

    font-size: 1.1rem;
    color: #FFF;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 1.5rem;
    margin-top: 10px;

`;

export const CustomButton = styled.button`

    padding: 15px 40px;
    margin-top: 20px;
    border-radius: 10px;
    border: none;
    background-color: #f1284a;
    color: #FFF;
    font-weight: bold;
    transition: 0.5s ease-out;

	&:hover {
		background: #ffc500;
		transition: 0.5s ease-out;
		cursor: pointer;
		color: #000;
    }   

`;

export const CaramelWonderImg = styled.div`

    height: 300px;
    width: 300px;
    background-image: url(${CaramelImg});
    background-size: cover;
    background-position: center;
    border-right: 5px solid #FDC500;
    border-bottom: 5px solid #FDC500;

`;

export const BrownieBunchImg = styled.div`

    height: 300px;
    width: 300px;
    background-image: url(${BrownieImg});
    background-size: cover;
    background-position: center;
    border-right: 5px solid #FDC500;
    border-bottom: 5px solid #FDC500;

`;