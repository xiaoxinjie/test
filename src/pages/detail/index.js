import React, { Component } from 'react'
import style from './index.less'
import { Button } from 'antd';
import { Link, history } from 'umi'

class Test extends Component {
    componentWillReceiveProps(nextProps){
        if(this.props.name !==  nextProps.name) {
            this.setState({
                name: 213,
            })
        }
    }
    shouldComponentUpdate(nexrProps, nextState) {

    }
    componentWillUpdate() {

    }

    componentDidUpdate() {

    }
    componentDidMount() {

    }
    componentWillMount() {

    }
    componentWillUnmount() {
        console.log('卸载')
    }
    render() {
        return (
            <div>
                <Button onClick={() => {
                    console.log('我点击了')
                    history.push('/home')
                }} type="primary">按钮</Button>
                <Link to="/home">跳转</Link>
                detail
            </div>
        )
    }
}

export default Test