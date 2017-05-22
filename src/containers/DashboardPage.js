import React from 'react';
import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';
import Refresh from 'material-ui/svg-icons/action/cached';
import Delete from 'material-ui/svg-icons/action/delete-forever';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import Statastics from 'material-ui/svg-icons/action/perm-identity';
import InfoBox from '../components/dashboard/InfoBox';
import NewOrders from '../components/dashboard/NewOrders';
import MonthlySales from '../components/dashboard/MonthlySales';
import BrowserUsage from '../components/dashboard/BrowserUsage';
import OrderDetails from '../components/dashboard/RecentlyProducts';
import globalStyles from '../styles';
import Data from '../data';
import {orderUrl} from '../app.config';
import { Link } from 'react-router';
import PopUpComponent from '../components/Trader/Utilities/PopUpComponent';
import Stats from '../components/Trader/Utilities/StatsComponent';

export default class DashboardPage extends React.Component {

  constructor(props) {
    super(props);
  }

  deleteAllOrders() {
    this.props.deleteOrder(orderUrl)
  }

  refershOrders() {
    this.props.fetchData(orderUrl);
  }
  handleOpen(){
    this.props.openModal(true);
  };
dialogueOpen(){
  this.props.openDialogue(true);
};
  

  render() {
    console.log(this.props.user.id)
    
    return (
      <div>

        <div className="row">


         <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 animate" > 
          <Link to={`/listings/plants`}>
            <InfoBox Icon={NoteAdd}
              color={pink600}
              title="Plants"
            />
            </Link>
          </div>

     
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 animate"  >
            <Link to={`/listings/pots`}>
            <InfoBox Icon={Delete} {...this.props}
              color={cyan600}
              title="Pots"
            />
            </Link>
            
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 animate"  >
            <Link to={`/listings/airpurifiers`}>

            <InfoBox Icon={Refresh}
              color={purple600}
              title="Air Purifiers"
            />
            </Link>
            
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 animate">
            <Link to={`/listings/`}>
            <InfoBox Icon={Statastics}
              color={orange600}
              title="About Us"

            />
            </Link>            
            
          </div>
        </div>
      </div>
    );
  };

}
