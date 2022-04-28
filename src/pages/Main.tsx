import ButtonContact from "../atoms/ButtonContact";
import Frontend from "../templates/frontend";
import * as S from './styles';
import HeroHeaderImage from "../assets/hero-header-img.svg";
import CardActivity from "../molecules/CardActivity";

function Main() {

  return (
    <Frontend>
      <S.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <h6>We are a full service digital agency that builds immesive user experience</h6>
          <ButtonContact />
        </div>
        <S.ColumnImage>
          <CardActivity />
          <img src={HeroHeaderImage} alt="Mulher fazendo pesquisa"></img>
        </S.ColumnImage>
      </S.Container>
    </Frontend>
  )
}

export default Main
