import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';



class ApiCall extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, weatherdata } = this.props;
    const longitude = weatherdata;
    console.log(weatherdata);
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Weather-Data</h1>
          {longitude}
          
        </React.Fragment>
      );
    }
  }
}


const mapStateToProps = state => {
  return {
    weatherdata: state.weatherdata,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(ApiCall);