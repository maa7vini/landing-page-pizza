import * as C from './Cont2Styles'

export function Cont2(){
    return(
        <C.Content2>

            <C.Title> CHOOSE YOUR FAVORITE </C.Title>

            <C.Container>

                <C.PizzaDiv>
                    <C.SupremeImg />

                    <C.PizzaTitle> Supreme Pizza </C.PizzaTitle>

                    <C.PizzaTxt> 

                        Marinara sauce, basil, italian <br /> 
                        sausage, roma tomatoes, olives, <br /> 
                        and pesto

                    </C.PizzaTxt>

                    <C.CustomButton> Add to Cart </C.CustomButton>

                </C.PizzaDiv>

                <C.PizzaDiv>

                    <C.HawaiianImg />

                    <C.PizzaTitle> Hawaiian Paradise </C.PizzaTitle>

                    <C.PizzaTxt> 

                        Marinara sauce, basil, italian <br /> 
                        sausage, roma tomatoes, olives, <br /> 
                        and pesto    
                    
                    </C.PizzaTxt>

                    <C.CustomButton> Add to Cart </C.CustomButton>

                </C.PizzaDiv>

                <C.PizzaDiv>

                    <C.VeggieImg />

                    <C.PizzaTitle> Veggie Overload </C.PizzaTitle>

                    <C.PizzaTxt>

                        Marinara sauce, basil, italian <br /> 
                        sausage, roma tomatoes, olives, <br /> 
                        and pesto  

                    </C.PizzaTxt>

                    <C.CustomButton> Add to Cart </C.CustomButton>

                </C.PizzaDiv>

            </C.Container>

        </C.Content2>
    )
}