
const CardComponent = ({ imageSrc, title, text, buttonText, buttonLink }) => {
  return (
    <div className="card shadow-lg h-100 d-flex flex-column" style={{ width: '100%', maxWidth: '18rem' }}>
  <img src={imageSrc} className="card-img-top" alt={title} style={{ objectFit: 'cover', height: '180px' }} />

  <div className="card-body flex-grow-1">
    <h5 className="card-title fw-bold">{title}</h5>
    <p className="card-text text-muted">{text}</p>
  </div>

  <div className="card-footer bg-white border-0 mt-auto">
    <a href={buttonLink} className="btn btn-primary w-100">
      {buttonText}
    </a>
  </div>
</div>

  );
};

export default CardComponent;
