import React from 'react'
import './Parks.css'
import {withRouter} from 'react-router';



class Parks extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            activities: [],
            isLoaded: false,
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
        this.setState({selected: key});
    }

    render()
    {
        var{activities, isLoaded} = this.state;
        
        //if isLoaded == true then 
        if(!isLoaded)
            return <div>Loading...</div>;
        
        if(!activities)
            return <div>not activities</div>
            
        
        return(
            <div className = "allAct">
                {activities && activities.map((act) =>(
                    <div> 
                        {act.parks && act.parks.map((thePark) =>(
                            <div key={thePark.parkCode}>{this.props.code === thePark.parkCode? <h3>{thePark.fullName}</h3>
                            : <div></div>}

                            </div>
                        ))}
                    </div>
                ))}
               
            </div>
        )
        
        
    }
}

export default Parks
