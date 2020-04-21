 import React from 'react';
// import Cards from './components/Cards/Cards';

import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/image.png';

class App extends React.Component{
    state = {
        data:{},
        country: '',
    }


    async componentDidMount(){
        const fetchedData = await fetchData();
        // console.log(data);
        this.setState({data:fetchedData});
    }

    handleCountryChange = async (country)=>{
        const fetchedData = await fetchData(country);
        
        this.setState({data:fetchedData,country:country});
        //fetch the data
        // set the state
  
    }
    render(){ 
        const{data,country}  = this.state;

        return(
            <div className={styles.contaier}>
                <p>Sasta Corona Tracker</p>
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                <Cards data={data}/> 
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                {/* <h2>Explore on your own by selecting countries</h2>
                <iframe className={styles.frame1} src="https://ourworldindata.org/grapher/covid-confirmed-cases-since-100th-case?country=USA+ESP+ITA+KOR+TWN+GBR+NOR+IND"></iframe>
                <iframe className={styles.frame2} src="https://ourworldindata.org/grapher/total-deaths-covid-19?country=ITA+ESP+USA"></iframe>
            */}
            </div>
        );
    }
}

export default App;
