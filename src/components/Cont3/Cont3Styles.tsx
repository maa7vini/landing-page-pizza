import styled from 'styled-components'

import PDayImg from '../../assets/pizza-day.jpg'

export const Content3 = styled.section`

    height: 60vh;
    width: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${PDayImg});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export const Title = styled.h1`

    font-size: 5rem;
    color: #FFF;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`;

export const Txt = styled.p`

    font-size: 2rem;
    color: #FFF;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: 10px;

`;

export const CustomButton = styled.button`

    padding: 20px;
    width: 15%;
    margin-top: 20px;
    border-radius: 20px;
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