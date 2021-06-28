// API
import { useQuery } from "@apollo/client";
import { getCompanies } from "../../graphql/queries";
// Components
import PreviewSearch from "./PreviewSearch";
// React
import { useEffect, useState } from "react";

const SearchCompanies = () => {
  const [companies, setCompanies] = useState([{}]);
  // Data fetching list of companies
  const { data } = useQuery(getCompanies);

  useEffect(() => {
    if (data) {
      setCompanies(data.getCompanies);
    }
  }, [data]);

  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([{}]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");

  const onChange = (e) => {
    const input = e.currentTarget.value;
    const newFilteredSuggestions = companies.filter(
      (company) => company["name"].toLowerCase().indexOf(input.toLowerCase()) > -1
    );

    console.log(newFilteredSuggestions);
    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setInput(e.currentTarget.value);
  };
  const onClick = (e) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // enter key
      setActive(0);
      setIsShow(false);
      setInput(filtered[active]);
    } else if (e.keyCode === 38) {
      // up arrow
      return active === 0 ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      // down arrow
      return active - 1 === filtered.length ? null : setActive(active + 1);
    }
  };
  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <ul className="autocomplete">
            {filtered.map((suggestion, index) => {
              let className;
              if (index === active) {
                className = "active";
              }
              return (
                <li className={className} key={suggestion.name} onClick={onClick}>
                  {suggestion.name}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="no-autocomplete">
            <em>Not found</em>
          </div>
        );
      }
    }
    return <></>;
  };
  return (
    <>
      <input type="text" onChange={onChange} onKeyDown={onKeyDown} value={input} />
      {renderAutocomplete()}
    </>
  );
};

export default SearchCompanies;
