import styled from 'styled-components'

import Content1Img from '../../assets/pizza-1.jpg'

export const Content1 = styled.section`
    height: 100vh;
    width: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Content1Img});
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 130px;

`;

export const Container = styled.div`

    height: 300px;
    width: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;

`;

export const Content1Title = styled.div`

   height: 160px;
   width: 530px;
   display: flex;
   flex-direction: column;
   border-right: 3px solid #E9BA23;
   border-bottom: 5px solid #E9BA23;

`;

export const Title = styled.h1`

    font-size: 4.5rem;
    font-weight: bold;
    color: #FFF;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    overflow-y: hidden;

`;

export const Subtitle = styled.h1`

    font-size: 4.5rem;
    font-weight: bold;
    color: #FFF;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    overflow-y: hidden;

`;

export const Text = styled.p`

    font-size: 2rem;
    font-weight: bold;
    color: #FFF;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: 10px;

`;

export const CustomButton = styled.button`

    padding: 15px 30px;
    width: 40%;
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