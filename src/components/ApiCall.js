// import { makeApiCall } from './../actions';
// import { connect } from 'react-redux';


// class ApiCall extends React.Component {

//   componentDidMount() {
//     const { dispatch } = this.props;
//     dispatch(makeApiCall());
//   }

//   rrender() {
//     const { error, isLoading, weatherdata } = this.props;
//     if (error) {
//       return <React.Fragment>Error: {error.message}</React.Fragment>;
//     } else if (isLoading) {
//       return <React.Fragment>Loading...</React.Fragment>;
//     } else {
//       return (
//         <React.Fragment>
//           <h1>Weather-Data</h1>
//           <ul>
//             {headlines.map((headline, index) =>
//               <li key={index}>
//                 <h3>{headline.title}</h3>
//                 <p>{headline.abstract}</p>
//               </li>
//             )}
//           </ul>
//         </React.Fragment>
//       );
//     }
//   }
// }


// const mapStateToProps = state => {
//   return {
//     weatherdata: state.weatherdata,
//     isLoading: state.isLoading,
//     error: state.error
//   }
// }

// export default connect(mapStateToProps)(ApiCall);