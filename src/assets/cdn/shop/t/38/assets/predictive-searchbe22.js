class PredictiveSearch extends HTMLElement{constructor(){super(),this.input=this.querySelector('input[type="search"]'),this.predictiveSearchResults=this.querySelector("#predictive-search"),this.input.addEventListener("input",this.debounce(event=>{this.onChange(event)},300).bind(this))}onChange(){const searchTerm=this.input.value.trim();if(!searchTerm.length){this.close();return}this.getSearchResults(searchTerm)}getSearchResults(searchTerm){fetch(`/search/suggest?q=${searchTerm}&resources[type]=product&resources[limit]=4&section_id=predictive-search`).then(response=>{if(!response.ok){var error=new Error(response.status);throw this.close(),error}return response.text()}).then(text=>{const resultsMarkup=new DOMParser().parseFromString(text,"text/html").querySelector("#shopify-section-predictive-search").innerHTML;this.predictiveSearchResults.innerHTML=resultsMarkup,this.open()}).catch(error=>{throw this.close(),error})}open(){this.predictiveSearchResults.style.display="block"}close(){this.predictiveSearchResults.style.display="none"}debounce(fn,wait){let t;return(...args)=>{clearTimeout(t),t=setTimeout(()=>fn.apply(this,args),wait)}}}customElements.define("predictive-search",PredictiveSearch);
//# sourceMappingURL=/cdn/shop/t/38/assets/predictive-search.js.map?v=42609991257564171698246032
