import RawOffIcon from "@mui/icons-material/RawOff";
import {
  SyncAlt,
  Spellcheck,
  TimeToLeave,
  ArrowBack,
} from "@material-ui/icons";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

type Props = {
  value: string;
};

const Icon = ({ value }: Props) => {
  return (
    <>
      {value === "character" && <RawOffIcon />}
      {value === "update" && <SyncAlt />}
      {value === "adjust" && <AutoFixHighIcon />}
      {value === "characterCheck" && <Spellcheck />}
      {value === "drive" && <TimeToLeave />}
      {value === "arrowLeft" && <ArrowBack />}
    </>
  );
};

export default Icon;
