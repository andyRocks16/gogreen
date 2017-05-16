import React from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';
import { instrumentsUrl, orderUrl } from '../../../app.config';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

export default class PopUpComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    createOrder(item) {
        var number = this.refs.tradeInput.input.value;
        item.number = number;
        this.props.addToCart(item, this.props.cartItems);
        console.log(this.props.cartItems, "asddedasdasd++++++++")
    }
    handleClose() {
        this.props.openModal(false);
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="AddToCart"
                primary={true}
                onClick={this.createOrder.bind(this, this.props.item)}
            />,
            <Link to={`/cart`}>
                <FlatButton
                    label="GoToCart"
                    primary={true}
                    onTouchTap={this.handleClose.bind(this)}
                />
            </Link>
        ];
        return (


            <div>
                <Dialog
                    title={this.props.item.plant_name}
                    actions={actions}
                    modal={true}
                    open={this.props.open}
                >
                    <TextField
                        hintText="Number"
                        ref="tradeInput"
                        type="number"
                        floatingLabelText="Enter Quantity"
                        min="0"
                        floatingLabelFixed={false}
                    />
                </Dialog>
            </div>
        );
    }

}