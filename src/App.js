 import React from 'react';
//  import { makeStyles } from '@material-ui/core/styles';
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
                <div className={styles.text2}>
               <h3>Contact : anant.cup@gmail.com</h3> 
                  <p> This website is being deployed Live for learning purpose,
                    Thanks to https://covid19.mathdro.id/api 
                    financialtimesdata,covid19india.org,rabish ji,JSmastery
                    </p>
                </div>
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                <Cards data={data}/> 
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <h2>Explore on your own by selecting countries</h2>
                <iframe className={styles.frame1} src="https://ourworldindata.org/grapher/covid-confirmed-cases-since-100th-case?country=USA+ESP+ITA+KOR+RUS+JPN+GBR+NOR+IND"></iframe>
                <iframe className={styles.frame2} src="https://ourworldindata.org/grapher/total-deaths-covid-19?country=ITA+ESP+USA+RUS"></iframe>
           
            </div>
        );
    }
}

export default App;
