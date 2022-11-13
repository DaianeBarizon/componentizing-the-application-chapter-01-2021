
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

interface IconProps {
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  color: string;
}

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
