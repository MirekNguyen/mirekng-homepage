const SearchBar = () => {
   let searchToggle = false;
   const searchBar = document.getElementById("searchBar");
   const searchBarDiv = document.getElementById("searchBarDiv");
   document.addEventListener("keyup", (e) => {
      if (e.key === "/") {
         if (searchToggle === false) {
            searchBar.removeAttribute("hidden");
            searchBarDiv.removeAttribute("hidden");
            searchBar.focus();
            searchToggle = true;
         } else {
            searchBar.setAttribute("hidden", true);
            searchBarDiv.setAttribute("hidden", true);
            searchToggle = false;
         }
      }
   });
   return (
      <>
         <div
            id="searchBarDiv"
            className="fixed top-32 l-0 w-screen h-screen"
            hidden
         >
            <div className="grid place-items-center items-center">
               <input
                  id="searchBar"
                  hidden
                  type="text"
                  placeholder="Type to search"
                  maxLength="40"
                  pattern="[A-Za-z]"
                  className="h-10 rounded text-2xl outline-none"
               />
               <div id="suggestion_id"></div>
            </div>
         </div>
      </>
   )
}
export default SearchBar;
