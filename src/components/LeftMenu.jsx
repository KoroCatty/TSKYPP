
const LeftMenu = () => {
  return (

<aside className="sidebar">
  <div id="leftside-navigation" className="nano">
    <ul className="nano-content">

      <li>
        <a href="#1"><i className="fa fa-dashboard"></i><span>Introduction</span></a>
      </li>

      <li className="sub-menu">
        <a href="#2"><i className="fa fa-cogs"></i><span>Getting Started</span><i className="arrow fa fa-angle-right pull-right"></i></a>
      </li>

      <li className="sub-menu">
        <a href="#3"><i className="fa fa-table"></i><span>Dialogues</span><i className="arrow fa fa-angle-right pull-right"></i></a>
      </li>

      <li className="sub-menu">
        <a href="#4"><i className="fa fa fa-tasks"></i><span>Modal</span><i className="arrow fa fa-angle-right pull-right"></i></a>
      </li>

      <li className="sub-menu active">
        <a href="#5"><i className="fa fa-envelope"></i><span>About Us</span><i className="arrow fa fa-angle-right pull-right"></i></a>
        <ul>
          <li className="active"><a href="">GitHub</a>
          </li>
          <li><a href="">Holmesglen</a>
          </li>
        </ul>
      </li>

      <li className="sub-menu">
        <a href="#6"><i className="fa fa-bar-chart-o"></i><span>Contact</span><i className="arrow fa fa-angle-right pull-right"></i></a>
      </li>
      
    </ul>
  </div>
</aside>



  )
}

export default LeftMenu