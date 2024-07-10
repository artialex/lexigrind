import { ArrowLeft } from 'react-feather';
import { Link } from 'react-router-dom';

interface BackButtonProps {
  to: string;
  text: string;
}

export const BackLink = (props: BackButtonProps) => (
  <Link to={props.to} className="lexi-button truncate">
    <ArrowLeft size="16" />
    {props.text}
  </Link>
);
