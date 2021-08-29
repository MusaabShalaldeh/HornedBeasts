import React from 'react'

class HornedBeast extends React.Component{
    render(){
        return(<>
        <div>
            <h2>
                {this.props.title}
            </h2>
            <img sfc='' alt='' title='' width='256' height='256'></img>
            <p>
            {this.props.description}
            </p>
        </div>
        </>);
    }
}


export default HornedBeast;