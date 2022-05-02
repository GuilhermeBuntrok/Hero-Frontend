
import Frontend from "../templates/frontend";
import ProductInformation from "../organisms/ProductInformation";
import ProductStats from "../organisms/ProductStatus";

import * as S from './styles';

function Main() {

  return (
    <Frontend>
      <S.Container>
        <ProductInformation />
        <ProductStats />
      </S.Container>
    </Frontend>
  )
}

export default Main
