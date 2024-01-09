import styled from "@emotion/styled";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { Container } from "./styled";

const Tooltipp = ({ title, description, children }: any) => {
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 175,
      fontSize: 14,
      border: "1px solid #dadde9"
    }
  }));

  return (
    <HtmlTooltip
      title={
        <Container>
          <p>{title}</p>
          <span>{description}</span>
        </Container>
      }
    >
      {children}
    </HtmlTooltip>
  );
};

export default Tooltipp;
