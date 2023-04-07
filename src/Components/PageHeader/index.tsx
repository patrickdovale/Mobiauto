import Icon from "../Icon";
import * as S from "./style";
import { useRouter } from "next/router";

type Props = {
  title?: string;
  href?: string;
};

const PageHeader = ({ title, href = "/" }: Props) => {
  const router = useRouter();

  const backPage = () => {
    router.push(href);
  };

  return (
    <S.Container>
      <span onClick={backPage}>
        <Icon value="arrowLeft" />
      </span>
      {title && <S.Title>{title}</S.Title>}
    </S.Container>
  );
};

export default PageHeader;
