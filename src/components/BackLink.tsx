import { ArrowLeft } from 'react-feather';
import { Link } from 'react-router-dom';

interface BackButtonProps {
  to: string;
  text: string;
}

export const BackLink = (props: BackButtonProps) => {
  return (
    <Link to={props.to} className="lexi-button ">
      <ArrowLeft size="16" />
      {props.text}
    </Link>
  );
};
