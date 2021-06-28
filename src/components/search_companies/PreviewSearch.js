const SearchPreview = ({ name, updateText, index }) => {
  return (
    <div onClick={() => updateText(name)} className={`search-preview ${index === 0 ? "start" : ""}`}>
      <p className="name">{name}</p>
    </div>
  );
};

export default SearchPreview;
