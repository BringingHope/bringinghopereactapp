import React, { Component } from 'react'

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          currentUser: undefined,
        };
    
        history.listen((location) => {
          props.dispatch(clearMessage()); // clear message when changing location
        });
      }
    
      componentDidMount() {
        const user = this.props.user;
    
        if (user) {
          this.setState({
            currentUser: user,
          });
        }
      }
    
      logOut() {
        this.props.dispatch(logout());
      }
      
      
      render() {
        return (
            <div>
                
            </div>
        )
    }
}
