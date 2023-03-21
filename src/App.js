
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Countries></Countries>
    </div>
  );
}
// function LoadCountries(){
//   const [countries, setCountries] = useState([])
//   useEffect(()=>{
//     const URL = "https://restcountries.com/v3.1/all"
  
//     fetch(URL)
//     .then(resp => resp.json())
//     .then(data => setCountries(data))
//   }, [])
  

//   return(
//     <div>
//       <h1>Dream Tour, World Tour</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props){
//   return(
//     <div>
//       <h2>{props.name}</h2>
//       <p>{props.population}</p>
//     </div>
//   )
// }
export default App;
