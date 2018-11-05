import { Grid, Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';
import './App.css';
import LocationList from './Component/LocationList';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import ForecastExtended from './Component/ForecastExtended'

const countries = [
  "Quito,ec",
  "Lima,pe",
  "Buenos Aires,ar",
  "Bogota,co"
]

class App extends Component {
  constructor(){
    super();//antes de usar cualquier this, esto llama al constructor de component he inicializa state.
    this.state = {
      city: null
    };
  }

  handleSelectedLocation = (country) => {
    this.setState({city: country});
    console.log("Estoy App.js handleSelectedLocation: " + this.state.city);
  }

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'> Weather App </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6} >
            <LocationList countries={countries} onSelectedLocation={this.handleSelectedLocation} />
          </Col>
          <Col xs={12} md={6} >
            <Paper elevation={6}>
              <div className="details">
                {/* city !== null ? similarA: !city */}
              {
                city && 
                <ForecastExtended city={city}></ForecastExtended>
              }
                {/* 
                si pongo: city && me renderiza a menos que city sea null
                si city es null no me renderiza...
                :null //el null no me renderiza nada es mas eficiente.
                <h1> Ciudad no seleccionada!</h1> 
                */}

              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }

}

/*
Componente clase vs Componente Funcion
Usamos Componente class cuando:
Cuando necesitamos usar una de las instancias de ciclo de vida de REACT*/
export default App;
