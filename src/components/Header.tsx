type headerProps = {
  title: string;
};

const Header = ({ title }: headerProps) => {
  return <h1>{title}</h1>;
};

export default Header;
