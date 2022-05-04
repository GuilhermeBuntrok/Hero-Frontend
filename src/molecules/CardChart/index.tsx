import * as S from './styles'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { useCallback } from 'react';

const CardChart = () => {

  const amountBars = Array.from(Array(12).keys());

  const fillZero = useCallback((value: number) => {
    const number = (value + 1).toString();

    return number.padStart(2, "0")
  }, []);

  return (
    <S.Container >
      <div>
        <FiArrowLeft />
        <strong>Stats</strong>
        <FiArrowRight />
      </div>

      <S.Chart>
        {amountBars.map((item) => (
          <div key={String(item)}>
            <div>
              <span></span>
            </div>
            <small>{fillZero(item)}</small>
          </div>
        ))}
      </S.Chart>

    </S.Container >
  )
}

export default CardChart;