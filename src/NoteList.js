import React, { Component } from 'react';
import {Data} from './dbConnect';
import NoteItem from './NoteItem';

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }
    
    
    componentWillMount() {
        Data.on('value', (notes) => {
            var arrData = [];
            notes.forEach(ele => {
                const key = ele.key;
                const noteTitle = ele.val().title;
                const noteContent = ele.val().content;
                arrData.push({
                    id: key,
                    title: noteTitle,
                    content: noteContent
                })
            });
            this.setState({
                dataFirebase: arrData
            });
        })
    }
    
    getData = () => {
        if(this.state.dataFirebase){
            return this.state.dataFirebase.map((value, key) => {
                return (
                    <NoteItem
                    key={key}
                    id={key}
                    index={key}
                    note={value}
                    noteTitle={value.title}
                    noteContent={value.content}
                    />
                )
            })
        }
    }
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    
                    {
                        this.getData()
                    }

                </div>
            </div>

        );
    }
}

export default NoteList;