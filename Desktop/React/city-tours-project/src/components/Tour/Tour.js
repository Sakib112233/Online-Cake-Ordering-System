import React, {Component, Fragment} from 'react';
import logo from "../../image/new york.jpg"
import "./Tour.scss"


class Tour extends Component {
    state={
        showInfo:false
    };
    handleInfo=()=>{
        this.setState({
            showInfo: !this.state.showInfo
        });
    };
    render() {
        const {id,city,img,name,info}=this.props.tour;
        const {removeTour}=this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img width="200"
                         src={img} alt=""/>
                    <button type="button" className="close-btn"
                            onClick={()=>{removeTour(id)}}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="tour-info">
                    <h3 className="h3">{city}</h3>
                    <h4 className="h4">{name}</h4>

                    <h5 className="h5">
                        info{" "}
                        <span onClick={this.handleInfo}>
                            <i className="fa fa-caret-square-o-down"></i>
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}

                </div>
            </article>
        );
    }
}

export default Tour;