//COMPONENTE DE CLASSE, JÁ EM DESUSO
import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, World!"
    };
  }

  componentDidMount() {
    //Executado quando o usuário entra na página
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default Test;