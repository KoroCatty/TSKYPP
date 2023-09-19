
const LeftMenu = () => {
  return (


<aside className="sidebar">
  <div id="leftside-navigation" className="nano">
    <ul className="nano-content">
      <li>
        <a href="index.html"><i className="fa fa-dashboard"></i><span>Introduction</span></a>
      </li>
      <li className="sub-menu">
        <a href=""><i className="fa fa-cogs"></i><span>Getting Started</span><i className="arrow fa fa-angle-right pull-right"></i></a>
        <ul>
          <li><a href="ui-panels.html">Panels</a>
          </li>
          <li><a href="ui-buttons.html">Buttons</a>
          </li>
        </ul>
      </li>

      <li className="sub-menu">
        <a href=""><i className="fa fa-table"></i><span>Dialogues</span><i className="arrow fa fa-angle-right pull-right"></i></a>
        <ul>
          <li><a href="tables-basic.html">Basic Tables</a>
          </li>
        </ul>
      </li>

      <li className="sub-menu">
        <a href=""><i className="fa fa fa-tasks"></i><span>Forms</span><i className="arrow fa fa-angle-right pull-right"></i></a>
        <ul>
          <li><a href="forms-components.html">Components</a>
          </li>
        </ul>
      </li>

      <li className="sub-menu active">
        <a href=""><i className="fa fa-envelope"></i><span>Mail</span><i className="arrow fa fa-angle-right pull-right"></i></a>
        <ul>
          <li className="active"><a href="mail-inbox.html">Inbox</a>
          </li>
          <li><a href="mail-compose.html">Compose Mail</a>
          </li>
        </ul>
      </li>


      <li className="sub-menu">
        <a href=""><i className="fa fa-bar-chart-o"></i><span>Charts</span><i className="arrow fa fa-angle-right pull-right"></i></a>
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