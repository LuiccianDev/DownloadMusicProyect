import ErrorIcon from "../../assets/ErrorIcon.png";
import SuccessIcon from "../../assets/SuccesIcon.png";
import WarningIcon from "../../assets/WarningIcon.png";

export const toastConfig = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  icon: ({ type }) => {
    const icons = {
      success: <img src={SuccessIcon} className="w-6 h-6 icon-white" alt="Success" />,
      warning: <img src={WarningIcon} className="w-6 h-6 icon-white" alt="Warning" />,
      error: <img src={ErrorIcon} className="w-6 h-6 icon-white" alt="Error" />,
    };
    return icons[type] || null;
  },
  className: "!rounded-lg !font-semibold !min-w-[200px] ",
  bodyClassName: "ml-2",
};
