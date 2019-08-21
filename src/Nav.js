import React, { Component } from 'react';
import { connect } from 'react-redux';
class Nav extends Component {
    handleAdd = (e) => {
        e.preventDefault();
        this.props.changeEditStatus();
        this.props.changeAddStatus();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="">Navbar</a>
                <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#e" onClick={(e) => this.handleAdd(e)}>Thêm</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
                    </form>
                </div>
            </nav>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
       
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        changeAddStatus: () => {
            dispatch({
                type: "CHANGE_ADD_STATUS"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
