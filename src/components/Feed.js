import React from 'react'
import './Feed.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Parks from './Parks'

import {withRouter} from 'react-router';
class Feed extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            activities: [],
            isLoaded: false,
            readMore: false,
            code: '',
            selected: '',

        }
    }
    

    
    async componentDidMount()
    {
        const url = ("https://developer.nps.gov/api/v1/activities/parks?api_key=ytNVauyImC2nnfIzXTiY2l5jkKmYubfpneyD6X8C");
        const response = await fetch(url);
        const data = await response.json();
        this.setState({activities: data.data, isLoaded:true});
    
        
    }

    
    toggleActivity = key => 
    {
        this.setState({readMore: !this.state.readMore, selected: key});
    }
    setParkCode = key =>
    {
        this.setState({code: key});
    }

    render()
    {
        var{activities, isLoaded, readMore,code} = this.state;
        
        //if isLoaded == true then 
        if(!isLoaded)
            return <div>Loading...</div>;
        
        if(!activities)
            return <div>not activities</div>
            
        
        return(
            <div className = "allAct">
                {activities && activities.map((act) => (
                <ul class="list-group list-group-numbered" className="acts" key={act.id}>
                    <li>
                        <h4  onClick={()=>this.toggleActivity(act.id)}>{act.name} </h4>
                        <div>{readMore && this.state.selected === act.id?<div>{act.parks && act.parks.map((thePark) => (
                            <ul>
                                <li key={thePark.parkCode}>
                                    
                                    
                                    <a href= {thePark.parkCode} onClick={()=>this.setParkCode(thePark.parkCode) }><div className="parkNames">{thePark.fullName} </div></a>
                                
                                    
                                </li>
                            </ul>
                            
                        ))} </div>: <div></div>}</div>
                    </li>
                </ul>
                ))}
               
            </div>
        )
        
        
    }
}

export default Feed