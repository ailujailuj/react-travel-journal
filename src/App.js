import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from "./Body";
import data from './data';

const bodyWithData = data.map(function(obj) {
  return <Body image={obj.imageUrl} locale={obj.location} maps={obj.googleMapsUrl} title={obj.title} startDate={obj.startDate} endDate={obj.endDate} description={obj.description} />
})


export default function App() {
  return (
    <div className="App">
        <Header />
        {bodyWithData}
    </div>
  );
}

