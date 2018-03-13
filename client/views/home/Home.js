import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';

const title = 'ASP.NET Core API';
const link = '';

class Home extends React.Component {

  static propTypes = {
    articles: PropTypes.array,
  };
  constructor(props){
    super(props);

    this.state = {
      id:'',
      value:'',
      entities:[
            ]
          };

    this.idChanged = this.idChanged.bind(this);
    this.valueChanged = this.valueChanged.bind(this);
    this.getEntitiesList = this.getEntitiesList.bind(this);
  }

    componentDidMount() {
      document.title = title;
      this.getEntitiesList();
    }

    getEntitiesList(){
      //Fetch entities list
      fetch('http://localhost:3000/api/entities/')
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({ entities: responseJson });
        });
    }

    idChanged(event){
      var newId = event.target.value;
      //fetch single entity.
      fetch('http://localhost:3000/api/entities/'+newId)
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({value: responseJson.value,id: newId});
        });
    }

    valueChanged(event){
      //Post single entity.
      var newValue = event.target.value;
      fetch('http://localhost:3000/api/entities/'+this.state.id, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          value: newValue
        })
      }).then((response) => response.json())
      .then((responseJson) => {
          this.getEntitiesList();
        });
    }

    render() {
      return (<Layout>
        <h1 className="mdl-typography--title">Welcome to API!</h1>
        <p className="mdl-typography--body-1">
          <label>
            Query:
            <input type="text" name="id" value={this.state.id} onChange={this.idChanged} />
          </label>
        </p>
        <p className="mdl-typography--body-1">
          <label>
            Value:
            <input type="text" name="id" value={this.state.value} onChange={this.valueChanged} disabled = {(this.state.id == '')? "disabled" : ""}/>
          </label>
        </p>

        <ul>
          {this.state.entities.map((entity, i) =>
          <li key={i}><a >{entity.key}</a> - {entity.value}</li>
          )}
        </ul>
      </Layout>
      );
    }

}

export default Home;
