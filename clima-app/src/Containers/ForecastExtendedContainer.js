import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from '../Component/ForecastExtended';
import { connect } from 'react-redux';

class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;

        return (
            city ?
                <ForecastExtended
                    city={city}
                    forecastData={forecastData}
                /> :
                <div>
                    <h2 className="initTitleDetail" align="center">Prognóstico Extendido </h2>
                    <h3 className="initTitleDetail" align="center"> Click on City </h3>
                </div>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

// const mapStateToProps = state => ({ city: state.city });
// const mapStateToProps = ({ city }) => ({ city: city });
//Destructuring
// city y cityList son los nombres de alias creados en CombineReducers
const mapStateToProps = ({ city, cityList }) => ({ city, forecastData: cityList[city] && cityList[city].forecastData });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);