import './SiteCard.scss';

function SiteCard({ name, url, image, tagline, description, tags }) {
  return (
    <article className="site-card">
      <a
        className="site-card__image-link"
        href={url}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
      >
        <div className="site-card__image-wrap">
          <img src={image} alt={`${name} preview`} loading="lazy" />
        </div>
      </a>

      <div className="site-card__content">
        <div>
          <a href={url} target="_blank" rel="noreferrer" className="site-card__name">
            {name}
          </a>
          <span className="site-card__arrow">↗</span>
        </div>
        <p className="site-card__tagline">{tagline}</p>
        <p className="site-card__description">{description}</p>
        <div className="site-card__tags">
          {tags.map(tag => (
            <span key={tag} className="site-card__tag">[{tag}]</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default SiteCard;
