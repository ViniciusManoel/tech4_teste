import React from 'react';
import './layout.scss';


class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: true,
      rightOpen: true,
    }
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    let rightOpen = this.state.rightOpen ? 'open' : 'closed';

    return (
      <div id='layout'>

          <div id='left' className={leftOpen} >
              <div className='icon'
                   onClick={this.toggleSidebar} >
                   &equiv;
              </div>
              <div className={`sidebar ${leftOpen}`} >
                  <div className='header'>
                    <h3 className='title'>
                      Digite a cidade
                    </h3>
                  </div>
                  <div className='content'>
                      <h3>Busca de Cidades</h3>
                      <p>
                        teste
                      </p>
                  </div>
              </div>
          </div>

          <div id='main'>
              <div className='header'>
                  <h3 className={`
                      title
                      ${'left-' + leftOpen}
                      ${'right-' + rightOpen}
                  `}>
                      Informações metereológicas de qualquer lugar da terra!
                  </h3>
              </div>
              <div className='content'>
                  <h3>Veja aqui!</h3><br/>
                  <p>
                    teste
                  </p><br/>
                  
              </div>
          </div>

          <div id='right' className={rightOpen} >
              <div className='icon'
                   onClick={this.toggleSidebar} >
                   &equiv;
              </div>
              <div className={`sidebar ${rightOpen}`} >
                  <div className='header'>
                    <h3 className='title'>
                      Histórico em Tempo real
                    </h3>
                  </div>
                  <div className='content'>
                      <h3>Top 5 cidades mais buscadas</h3><br/>
                      <p>
                        teste
                      </p>
                      <h3>Últimas buscas</h3><br/>
                      <p>
                        teste
                      </p>
                  </div>
              </div>
          </div>

      </div>
    );
  }
}

export default Layout;