
const LeftMenu = () => {
  return (


<aside className="sidebar">
  <div id="leftside-navigation" className="nano">
    <ul className="nano-content">
      <li>
        <a href="index.html"><i className="fa fa-dashboard"></i><span>Dashboard</span></a>
      </li>
      <li className="sub-menu">
        <a href="javascript:void(0);"><i className="fa fa-cogs"></i><span>UI Elements</span><i className="arrow fa fa-angle-right pull-right"></i></a>
        <ul>

          <li><a href="ui-alerts-notifications.html">Alerts &amp; Notifications</a>
          </li>
          <li><a href="ui-panels.html">Panels</a>
          </li>
          <li><a href="ui-buttons.html">Buttons</a>
          </li>
          <li><a href="ui-slider-progress.html">Sliders &amp; Progress</a>
          </li>
          <li><a href="ui-modals-popups.html">Modals &amp; Popups</a>
          </li>
          <li><a href="ui-icons.html">Icons</a>
          </li>
          <li><a href="ui-grid.html">Grid</a>
          </li>
          <li><a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a>
          </li>
          <li><a href="ui-nestable-list.html">Nestable Lists</a>
          </li>
        </ul>
      </li>
      <li className="sub-menu">
        <a href="javascript:void(0);"><i className="fa fa-table"></i><span>Tables</span><i className="arrow fa fa-angle-right pull-right"></i></a>
        <ul>
          <li><a href="tables-basic.html">Basic Tables</a>
          </li>

          <li><a href="tables-data.html">Data Tables</a>
          </li>
        </ul>
      </li>
      <li className="sub-menu">
        <a href="javascript:void(0);"><i className="fa fa fa-tasks"></i><span>Forms</span><i className="arrow fa fa-angle-right pull-right"></i></a>
        <ul>
          <li><a href="forms-components.html">Components</a>
          </li>
          <li><a href="forms-validation.html">Validation</a>
          </li>
          <li><a href="forms-mask.html">Mask</a>
          </li>
          <li><a href="forms-wizard.html">Wizard</a>
          </li>
          <li><a href="forms-multiple-file.html">Multiple File Upload</a>
          </li>
          <li><a href="forms-wysiwyg.html">WYSIWYG Editor</a>
          </li>
        </ul>
      </li>
      <li className="sub-menu active">
        <a href="javascript:void(0);"><i className="fa fa-envelope"></i><span>Mail</span><i className="arrow fa fa-angle-right pull-right"></i></a>
        <ul>
          <li className="active"><a href="mail-inbox.html">Inbox</a>
          </li>
          <li><a href="mail-compose.html">Compose Mail</a>
          </li>
        </ul>
      </li>
      <li className="sub-menu">
        <a href="javascript:void(0);"><i className="fa fa-bar-chart-o"></i><span>Charts</span><i className="arrow fa fa-angle-right pull-right"></i></a>
        <ul>
          <li><a href="charts-chartjs.html">Chartjs</a>
          </li>
          <li><a href="charts-morris.html">Morris</a>
          </li>
          <li><a href="charts-c3.html">C3 Charts</a></li>
        </ul>
      </li>


    </ul>
  </div>
</aside>



  )
}

export default LeftMenu