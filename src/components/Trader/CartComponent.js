import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import InfoBox from '../../components/dashboard/InfoBox';
import { white, grey800 } from 'material-ui/styles/colors';
import { typography } from 'material-ui/styles';
import { orderUrl } from '../../app.config';
import PopUpComponent from './Utilities/PopUpComponent.js';

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItem : []
        }
    }

    submitOrder(){
        this.props.submitOrders(this.props.user,this.props.cartItems);
         this.props.info({
          // uid: 'once-please', // you can specify your own uid if required
          title: 'Order Placed',
          message: "Your Order Items are placed. Our customer support will contact you within next 2 days. Thank You!!",
          position: 'tc',
          autoDismiss: 5,
          // action: {
          //     label: 'Click me!!',
          //     callback: () => alert('clicked!')
          // }
        });
    }

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
        if (typeof this.props.cartItems !== undefined && this.props.cartItems.length > 0) {
            list = this.props.cartItems.map((item) => {
                return (
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 animate" >

                        <Paper >
                            <span style={styles.iconSpan}>
                                <img src={item.img} height="50" width="50" />
                            </span>

                            <div style={styles.content}>
                                <span style={styles.text}>{item.plant_name}</span>
                                <span style={styles.number}>{item.plant_price}</span>
                            </div>
                        </Paper>
                    </div>
                )
            })
        }

        return (
            <div>
                {list}
                <button className="btn btn-success" onClick={this.submitOrder.bind(this)}>SUBMIT ORDER</button>
            </div>
        );
    }
}

export default Cart;
