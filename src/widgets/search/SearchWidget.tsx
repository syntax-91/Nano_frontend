import "./searchWidgetStyles.scss";
import { Block } from "../../components/Block";
import { useEffect, useState } from "react";
import { SearchHeader } from "./searchHeader";
import { useDebounce } from "../../hooks/useDebounce";
//import { SearchWrapper } from "./searchWrapper";
import { observer } from "mobx-react-lite";

function SearchWidget() {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!query) return;
    ///
  }, [debouncedQuery]);

  return (
    <div className={`mc`}>
      <Block cls="c p15" radius={20}>
        <SearchHeader query={query} setQuery={setQuery} />
        {/* {query.length === 0 && <SearchWrapper />} */}
        {query.length !== 0 && <p className="center p10">search...</p>}
      </Block>
    </div>
  );
}

export default observer(SearchWidget);
