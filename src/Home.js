import React from 'react'
import hebapic from './Images/hebapic.png'
import './home.css'
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';



const styles = {
    root: {
      background: 'linear-gradient(45deg, #bd9808 30%, #edb709 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'black',
      height: 48,
      padding: '0 15px',
      fontWeight: '900',
      marginLeft:'50px',
      
     
    },
  };

function Home(props) {
    const { classes } = props;
    
      
    return (
        <div className="home-page">

            
            <div className="title" >
            <h1 >I'm Heba Dorazahi </h1>
            <hr/>
            <h5>Based in Paderborn. I eat, sleep and breathe React.</h5>
            <div className="image-tag">
            <img className="mypic" src={hebapic } alt="" />
            </div>
            
            <p>I am studying Information Technology in Technischen Hochschule Ostwestfalen-Lippe. 
                I have started learning React in university.
                 When I first got introduced to react, I was very interested in learning it. 
                 I am still in learning phase and I am trying to advance my knowledge everyday! </p>


                 <Button className={classes.root} component={Link} to="/about" variant="contained"
          color="" > 
                   About Me
                    </Button>
            </div>
            
           
            

        </div>
    )
}

export default withStyles(styles)(Home)
