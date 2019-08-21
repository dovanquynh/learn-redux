import React, { Component } from 'react';
import { connect } from 'react-redux';
class NoteItem extends Component {
    twoActionButton = () => {
        this.props.changeEditStatus();
        // console.log(this.props.note);
        this.props.getEditData(this.props.note);
    }
    delete = () => {
        this.props.getDel(this.props.note.id);
        this.props.alertOn("Xóa ghi chú thành công", "danger" );
    }
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id={"#number" + this.props.index}>
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.index} aria-expanded="true" aria-controls="section1ContentId">
                            {this.props.noteTitle}
                        </a>
                        <div className="btn-group float-right">
                            <button type="button" className="btn btn-primary" onClick={() => this.twoActionButton()}>Edit</button>
                            <button type="button" className="btn btn-danger" onClick={()=>this.delete()} >Delete</button>
                        </div>
                    </h5>
                </div>
                <div id={"number" + this.props.index} className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.isEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        getEditData: (editObject) => {
            dispatch({
                type: "GET_EDIT_DATA",
                editObject
            })
        },
        getDel: (delId) => {
            dispatch({
                type: "DELETE",
                delId
            })
        },
        alertOn: (alertContentStore, alertStyle) => {
            dispatch({
                type: "ALERT_ON",
                alertContentStore,
                alertStyle
            })
        },
        alertOff: () => {
            dispatch({
                type: "ALERT_OFF"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);