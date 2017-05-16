import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import InfoBox from '../../components/dashboard/InfoBox';
import { white, grey800 } from 'material-ui/styles/colors';
import { typography } from 'material-ui/styles';
import { orderUrl } from '../../app.config';
import PopUpComponent from './Utilities/PopUpComponent.js';

class Listings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItem : []
        }
    }

    componentDidMount() {
        var item = this.props.location.pathname;
        console.log(this.props.location,"Asdsadsadad++++++++++++")
        var url;
        if (item.includes("plants")){
            url = "getPlants";
        }
        if (item.includes("pots"))        
            url = "getPots";
        if (item.includes("airpurifiers"))            
            url = "getAirPurifiers";
            console.log(url)
        this.props.fetchData("http://localhost:8080/" + url);
    }

    handleOpen(item){
        this.props.openModal(true);
        this.setState({selectedItem : item})
    };

    render() {
        const styles = {
            content: {
                padding: '5px 10px',
                marginLeft: '90px',
                height: '90px'
            },
            number: {
                display: 'block',
                fontWeight: typography.fontWeightMedium,
                fontSize: '18px',
                color: grey800
            },
            text: {
                fontSize: '20px',
                fontWeight: typography.fontWeightLight,
                color: grey800
            },
            iconSpan: {
                float: 'left',
                height: '90px',
                width: '90px',
                textAlign: 'center'
            },
            icon: {
                height: '48px',
                width: '48px',
                marginTop: '20px',
                maxWidth: '100%'

            }
        };
        var list = null;
        if (typeof this.props.items !== undefined && this.props.items.length > 0) {
            list = this.props.items.map((item) => {
                return (
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 animate"  onClick={this.handleOpen.bind(this,item)}>

                        <Paper >
                            <span style={styles.iconSpan}>
                                <img src={item.img} height="50" width="50" />
                            </span>

                            <div style={styles.content}>
                                <span style={styles.text}>{item.name}</span>
                                <span style={styles.number}>{item.price}</span>
                            </div>
                        </Paper>
                    </div>
                )
            })
        }

        return (
            <div>
                <PopUpComponent {...this.props} item={this.state.selectedItem}/>
                {list}
            </div>
        );
    }
}

export default Listings;
