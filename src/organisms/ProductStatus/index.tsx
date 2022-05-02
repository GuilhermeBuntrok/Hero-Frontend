import CardActivity from "../../molecules/CardActivity";
import HeroHeaderImage from "../../assets/hero-header-img.svg";
import * as S from "./styles";

const ProductStats = () => {
  return (
    <S.Container>
      <CardActivity />
      <img src={HeroHeaderImage} alt="Mulher fazendo pesquisa"></img>
    </S.Container>
  )
}

export default ProductStats;