import { Heading } from 'components';
import { centsToReal } from 'utils';

import {
  AnticipationsStyled,
  AnticipationsList,
  AnticipationsListItem,
} from './anticipations.styles';
import { LoadingDots } from 'components';

type Anticipation = [string, number];

type AnticipationsProps = {
  anticipations?: Anticipation[];
  isLoading?: boolean;
};

const Anticipations = ({ anticipations, isLoading }: AnticipationsProps) => (
  <AnticipationsStyled>
    <Heading
      color="blueDark"
      fontSize="medium"
      fontStyle="italic"
      level={2}
      textTransform="uppercase"
      withUnderline
    >
      Você receberá:
    </Heading>
    <AnticipationsList>
      {!isLoading &&
        anticipations?.map((anticipation) => {
          const [day, value] = anticipation;

          const dayText = Number(day) > 1 ? `Em ${day} dias` : 'Amanhã';

          return (
            <AnticipationsListItem key={day}>
              {dayText}: <strong>{centsToReal(value)}</strong>
            </AnticipationsListItem>
          );
        })}
      {isLoading &&
        new Array(4).fill(undefined).map((_, i) => (
          <AnticipationsListItem key={`key_${i}`}>
            <LoadingDots />
          </AnticipationsListItem>
        ))}
    </AnticipationsList>
  </AnticipationsStyled>
);

export default Anticipations;
