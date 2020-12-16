import React , {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import  DishDetail  from './DishDetailComponent';
import {DISHES} from '../shared/dishes' ;
import {PROMOTIONS} from '../shared/promotions' ;
import {LEADERS} from '../shared/leaders' ;
import {COMMENTS} from '../shared/comments' ;
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch , Route , Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';





class Main extends Component {

 
  constructor(props){
    super(props);
    this.state ={
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders : LEADERS,
      comments : COMMENTS
    };
  }


 


  render(){

    const HomePage = () => {
      return (
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />

      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail dish= {this.state.dishes.filter((dish)  => dish.id ===  parseInt(match.params.dishId, 10))[0] }
                    comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))[0]} 
        />
      );
    }

    const AboutUs = () => {
      return <About leaders={this.state.leaders}></About>;
    }

    return (
      <div className="App">


        <Header />
        <Switch>
          <Route path="/home" component={HomePage}/> 
          <Route exct path="/menu" component={ () => <Menu dishes={this.state.dishes}/>}/>
          <Route exact path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/contactus' component={Contact} />
          <Route exact path='/aboutus' component={AboutUs} />
          <Redirect to="/home"/> 
        </Switch>
        <Footer />
      </div>
    );
  }
 
}

export default Main;
