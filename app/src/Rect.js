import React from "react"

export default class Rect extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: this.props.num }
    }

    componentWillMount() {
        const { num, bgcolor } = this.props

        this.rectStyle = {
            background: bgcolor,
            display: "table-cell",
            border: "1px solid #000",
            fontSize: 20,
            width: 30,
            height: 30,
            textAlign: "center",
            verticalAlign: "center",
        }
    }

    countUp(num) {
        this.setState({ number: num + 1 })
    }

    render() {
        return (
            <div style={ this.rectStyle } onClick={(e)=> this.countUp(this.state.number)}>
                <span style={{ color: "#eee" }}>{this.state.number}</span>
            </div>
        )
    }
}