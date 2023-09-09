import * as C from './Cont4Styles'

export function Cont4(){
    return(
        <C.Content4>

            <C.Title> Sweet Treats for You </C.Title>

            <C.Container>

                <C.SweetDiv>

                    <C.DoughliciousImg />

                    <C.SweetTitle> Doughlicious </C.SweetTitle>

                    <C.SweetTxt> 

                        Belgian chocolate glazed <br /> 
                        doughnuts covered in icing with <br /> 
                        sprinkles on top

                    </C.SweetTxt>

                    <C.CustomButton> Add to Cart </C.CustomButton>

                </C.SweetDiv>

                <C.SweetDiv>

                    <C.CaramelWonderImg />

                    <C.SweetTitle> Caramel Wonder </C.SweetTitle>

                    <C.SweetTxt> 

                        Vanilla ice cream covered with <br /> 
                        caramel and chocolate glaze <br /> 
                        topped with a coco stick

                    </C.SweetTxt>

                    <C.CustomButton> Add to Cart </C.CustomButton>

                </C.SweetDiv>

                <C.SweetDiv>

                    <C.BrownieBunchImg />

                    <C.SweetTitle> Brownie Bunch </C.SweetTitle>

                    <C.SweetTxt>

                        Double fudge brownie squares <br /> 
                        topped with white chocolate <br /> 
                        pieces and macadamia nuts

                    </C.SweetTxt>

                    <C.CustomButton> Add to Cart </C.CustomButton>

                </C.SweetDiv>

            </C.Container>

        </C.Content4>
    )
}