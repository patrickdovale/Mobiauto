import * as S from "./style";
import Icon from "../Icon";

type Props = {
  text: string;
  icon: any;
};

const CardOption = ({ text, icon }: Props) => {
  return (
    <S.Card>
      <S.Icon>
        <Icon value={icon} />
      </S.Icon>
      <S.Text>{text}</S.Text>
      <S.Arrow />
    </S.Card>
  );
};

export default CardOption;
