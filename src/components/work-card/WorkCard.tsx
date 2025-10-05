import { ChipProps, Chips } from "../chips/Chips";
import "./WorkCard.css"


export const WorkCard: React.FC<{
  title: string;
  company?: string;
  description: string;
  startDate: string;
  endDate: string;
  link?: string;
  chips?: ChipProps[];
}> = ({ description, endDate, startDate, title, company, link, chips }) => {

  const handleClick = () => {
    window.open(link, '_blank'); // _blank apre in una nuova scheda
  };
  return (
    <div className="card-container" onClick={handleClick}>
      <div className="date-container">
        <span>{`${startDate} - ${endDate}`}</span>
      </div>
      <div className="work-info-container">
        <h3 className="work-title">{title} - {company}</h3>
        <p className="work-description" style={{
          maxWidth: "30rem"
        }}>{description}</p>
        {chips && <Chips chips={chips} />}
      </div>
    </div>
  )
}