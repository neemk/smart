export default function FilterSection() {
  return (
    <>
      <div className="filter-group">
        <span className="filter-group-title headline-3">Gender</span>

        <div className="filter-group-content">
          <button className="pseudo-checkbox-wrapper">
            <div className="pseudo-checkbox"></div>
            <span>Men</span>
          </button>
          <button className="pseudo-checkbox-wrapper">
            <div className="pseudo-checkbox"></div>
            <span>Women</span>
          </button>
          <button className="pseudo-checkbox-wrapper">
            <div className="pseudo-checkbox"></div>
            <span>Kids</span>
          </button>
        </div>
      </div>
    </>
  );
}
