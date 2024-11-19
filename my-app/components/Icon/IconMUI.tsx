import Facebook from "@mui/icons-material/Facebook";
import CircleNotifications from "@mui/icons-material/NotificationsNoneOutlined";
import Help from "@mui/icons-material/HelpOutlineOutlined";
import Instagram from "@mui/icons-material/Instagram";
import Language from "@mui/icons-material/Language";
import { FC } from "react";

const iconsMap: { [key: string]: JSX.Element } = {
  Facebook: <Facebook fontSize="small" />,
  Instagram: <Instagram fontSize="small" />,
  Help: <Help fontSize="small" />,
  Language: <Language fontSize="small" />,
  CircleNotifications: <CircleNotifications fontSize="small" />,
};

interface IconMUIProps {
  name: string;
}

const IconMUI: FC<IconMUIProps> = ({ name }) => {
  return iconsMap[name] || <span>Icon not found</span>;
};

export default IconMUI;
