import React, {Component} from 'react'
import axios from 'axios'

export default class Page extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
    }
    componentDidMount(){
        this.axiosCaller()
    }
    async axiosCaller(){
        console.log(await axios.get('/'))
    }
    render(){
        return(
            <div>
                <span>
                    Click button, check console.
                    <br></br>
                    Date should be tacked onto "headers" in the response as the top-level middleware.
                    <br></br>
                    
                    <br></br>
                </span>
                <button onClick={this.axiosCaller}>button</button>
            </div>
        )
    }
}