import React, { Component } from "react";
import 'trix';

class Wysiwyg extends Component {
    constructor(props) {
        super(props);
        this.trixInput = React.createRef();
    }

    componentDidMount() {
        this.trixInput.current.addEventListener("trix-change", event => {
            this.props.onChange(event.target.innerHTML);
        });
    }

    render() {
        return (
            <div>
                <input
                    type="hidden"
                    id={ this.props.trixId }
                    defaultValue={this.props.defaultValue}
                />
                <trix-editor input={ this.props.trixId } ref={this.trixInput} placeholder={this.props.placeholder}/>
            </div>
        );
    }
}

export default Wysiwyg;
