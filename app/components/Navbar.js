import React from 'react';
import OnlineUsers from './OnlineUsers';
import {Link} from 'react-router';

var Navbar = React.createClass({
  render: function (){
    return (
      <div>
        <header className="am-topbar">
          <h1 className="am-topbar-brand">
            <Link to='/'>Web Console</Link>
            <OnlineUsers />
          </h1>


          <button className="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#doc-topbar-collapse'}"><span className="am-sr-only">导航切换</span> <span className="am-icon-bars"></span></button>

          <div className="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
            <ul className="am-nav am-nav-pills am-topbar-nav">
              <li className="am-active"><a href="#">index</a></li>
              <li><Link to='/#'>Other</Link></li>
              <li className="am-dropdown" data-am-dropdown>
                <a className="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
                  things <span className="am-icon-caret-down"></span>
                </a>
                <ul className="am-dropdown-content">
                  <li className="am-dropdown-header">title here</li>
                  <li><Link to='/#'>1</Link></li>
                  <li className="am-active"><Link to='/#'>2</Link></li>
                  <li><Link to='/#'>3</Link></li>
                  <li className="am-disabled"><Link to='/#'>4</Link></li>
                  <li className="am-divider"></li>
                  <li><Link to='/'>5</Link></li>
                </ul>
              </li>
            </ul>

            <form className="am-topbar-form am-topbar-left am-form-inline" role="search">
              <div className="am-form-group">
                <input type="text" className="am-form-field am-input-sm" placeholder="search" />
              </div>
            </form>

            <div className="am-topbar-right">
              <div className="am-dropdown" data-am-dropdown="{boundary: '.am-topbar'}">
                <button className="am-btn am-btn-secondary am-topbar-btn am-btn-sm am-dropdown-toggle" data-am-dropdown-toggle> Others <span className="am-icon-caret-down"></span></button>
                <ul className="am-dropdown-content">
                  <li><Link to="/regist">Regist</Link></li>
                  {/*<li><a href="#">随便看看</a></li>*/}
                </ul>
              </div>
            </div>

            <div className="am-topbar-right">
              <Link to="/login">
                <button className="am-btn am-btn-primary am-topbar-btn am-btn-sm">Login</button>
              </Link>
            </div>
          </div>
        </header>
      </div>
    )
  }
});

export default Navbar;
