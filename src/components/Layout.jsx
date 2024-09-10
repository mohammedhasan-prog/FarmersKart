import React from 'react';
import { IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';
import { 
  flameOutline, homeOutline, peopleOutline, chatbubbleOutline, 
  helpOutline, settingsOutline, logOutOutline, eyeOutline, 
  chatbubblesOutline 
} from 'ionicons/icons';

const Layout = ({children}) => {
  return (
    <div className="container">
      {/* Navigation */}
      <nav className="navigation">
        <ul>
          <li>
            <Link to="#">
              <span className="icon">
                <IonIcon icon={flameOutline} />
              </span>
              <span className="title ">KissanKart </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <IonIcon icon={homeOutline} />
              </span>
              <span className="title">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/manage-user">
              <span className="icon">
                <IonIcon icon={peopleOutline} />
              </span>
              <span className="title">Manage User</span>
            </Link>
          </li>
          <li>
            <Link to="/manage-transaction">
              <span className="icon">
                <IonIcon icon={chatbubbleOutline} />
              </span>
              <span className="title">Manage Transactions</span>
            </Link>
          </li>
          <li>
            <Link to="/support">
              <span className="icon">
                <IonIcon icon={helpOutline} />
              </span>
              <span className="title">Support</span>
            </Link>
          </li>
          <li>
            <Link to="/view-reports">
              <span className="icon">
                <IonIcon icon={settingsOutline} />
              </span>
              <span className="title">View Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/home/priyanshu/Downloads/recipe/index.html">
              <span className="icon">
                <IonIcon icon={logOutOutline} />
              </span>
              <span className="title">Sign Out</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Section */}
      <main className="main">
       {children}
      </main>
    </div>
  );
};



export default Layout;
