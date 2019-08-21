import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';

class Notifier extends Component {
    handleDismiss = () => {
        this.props.alertOff();
    }
    render() {
        if (this.props.alertShow === false) {
            return null;
        }
        return (
            <AlertContainer>
                <Alert type={this.props.AlertStyle} onDismiss={() => this.handleDismiss()} timeout={2000}>
                {
                    this.props.AlertContent
                }
                </Alert>
            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertShow,
        AlertContent: state.AlertContent,
        AlertStyle: state.AlertStyle
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({
                type: "ALERT_OFF"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notifier);
