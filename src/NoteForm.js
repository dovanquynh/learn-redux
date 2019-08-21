import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    addData = (title, content) => {
        if (this.state.id) {
            var editObject = {};
            editObject.id = this.state.id;
            editObject.title = this.state.title;
            editObject.content = this.state.content;

            this.props.editDataStore(editObject);
            this.props.changeEditStatus();
            this.props.alertOn("Sửa thành công", "success");

        }
        else {
            var item = {};
            item.title = title;
            item.content = content;
            // this.props.getData(item);
            // alert('Thêm dữ liệu'+ JSON.stringify(item) + ' thành công');
            this.props.addDataStore(item);//dispatch ADD_DATA
            this.props.alertOn("Thêm mới thành công", "success");

        }

    }
    componentWillMount() {
        if (this.props.editItem) {
            this.setState({
                title: this.props.editItem.title,
                content: this.props.editItem.content,
                id: this.props.editItem.id
            });
        }
    }
    changeTitle = () => {
        if (this.props.addStatus) {
            return <h3>Thêm mới</h3>;
        }
        else {
            return <h3>Sửa</h3>;
        }
    }
    render() {
        return (
            <div className="col-4">
                {
                    this.changeTitle()
                }
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Tiêu đề Note</label>
                        <input defaultValue={this.props.editItem.title} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="title" id="title" aria-describedby="helpId" placeholder="Tiêu đề" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Nội dung</label>
                        <textarea onChange={(event) => this.isChange(event)} className="form-control" name="content" id="content" aria-describedby="helpId" placeholder="Nội dung" defaultValue={this.props.editItem.content} />
                    </div>
                    <button type="reset" onClick={() => this.addData(this.state.title, this.state.content)} className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>


        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        addStatus: state.isAdd
    }
}
//this.props.test
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        addDataStore: (getItem) => {
            dispatch({
                type: "ADD_DATA",
                getItem
            })
        },
        editDataStore: (getItem) => {
            dispatch({
                type: "EDIT_DATA",
                getItem
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
//this.props.addDataStore()
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm); 