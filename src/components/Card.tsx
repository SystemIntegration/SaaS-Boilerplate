interface CardProps {
  title: string;
  author: string;
  views: number;
  description: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({
  title,
  author,
  views,
  description,
  tags,
}) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-footer">
          <span>{author}</span>
          <span>{views} views</span>
        </div>
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
