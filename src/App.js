
import './App.css';
import AgePredictor from './Components/AgePredictor';
import CatFacts from './Components/CatFacts';
import CryptoPrices from './Components/CryptoPrices';
import DateTimeComponent from './Components/DateTimeComponent';
import TableWithImages from './Components/TableWithImages';

function App() {
  return (
    <>
    <DateTimeComponent></DateTimeComponent>
    <TableWithImages></TableWithImages>
    <AgePredictor>
    </AgePredictor>
    <CatFacts></CatFacts>
    <CryptoPrices></CryptoPrices>
    </>
  );
}

export default App;
