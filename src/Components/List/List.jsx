import React, { Component } from "react";
import {withRouter} from "react-router-dom";

import OrganisationListService from "../../services/OrganisationListService";

class List extends Component {

constructor(props) {
  super(props)

  this.state = {
     organisations:[]
  }
}
componentDidMount(){
  OrganisationListService.getOrganisations().then((res)=>{
    this.setState({organisations: res.data})
  });
}

viewOrganisation(id, organisationName){
  this.props.history.push(`/view/${organisationName}/${id}`)
}
volunteer(id, organisationName){
  
  this.props.history.push(`/volunteer/${organisationName}/${id}`)
}
donate(id, organisationName){
  this.props.history.push(`/donate/${organisationName}/${id}`)
}

render() {
    return (
      <div>
      <h2 className="text-center">Organisation List</h2>


      <div className="row">
          <table className="table table-striped table-bordered">
              <thead>
                  <tr>
                      <th>Organisation Name</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {this.state.organisations.map(
                      organisations =>
                          <tr key={organisations.id}>
                              <td>{organisations.organisationName}</td>
                              <td>
                                  <button onClick ={()=> this.donate(organisations.id, organisations.organisationName)} className="btn btn-info m-2">
                                      Donate
                                  </button>
                                  <button onClick ={()=> this.volunteer(organisations.id, organisations.organisationName)} className="btn btn-danger m-2">
                                      Volunteer
                                  </button>
                                  <button onClick ={()=> this.viewOrganisation(organisations.id, organisations.organisationName)} className="btn btn-success m-2">
                                      view
                                  </button>
                              </td>
                          </tr>
                  )
                  }
              </tbody>
          </table>
      </div>
  </div>
    );
  }
}
export default  withRouter(List)