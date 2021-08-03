//import logo from './logo.svg';
import './App.css';
import api from './services/api';
import { Component } from 'react';
import Layout from './components/Layout';

class App extends Component {

  state = {
    cities: []
  }
  
  async componentDidMount() {
    let cityTeste = 'itajuba'
    const response = await api.get('weather?q='+cityTeste, {
      params: {
        units:'metric',
        lang:'pt_br',
        appid: 'e92f8efe1e989ac3f06b90f5217c8485'}
      });

    this.setState({cities: response.data});

  }
  
  render() {
    const {cities} = this.state;
    console.log(cities)
    return (
      //arrumar: 
      <Layout>
        <div className="App">
          <h1>Informações Metereológicas</h1>

          <p> Cidade: {cities['name']}</p> 
          <p>País: {cities['sys.country']}</p>
          <p>Temperatura Atual: {cities['main.temp']}°C</p>
          <p>Umidade: {cities['main.humidity']}%</p>
          <p>Clima: {cities['weather.description']}</p>
      </div>
      </Layout>
     
    );
  }
}

export default App;
