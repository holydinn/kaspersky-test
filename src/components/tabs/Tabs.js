import React, {useState} from 'react';
import './tabs.css'
import {ReactComponent as AllIcon} from '../../img/all.svg'
import {ReactComponent as WindowIcon} from '../../img/Windows.svg'
import {ReactComponent as MacIcon} from '../../img/macOS.svg'
import {ReactComponent as AndroidIcon} from '../../img/Android.svg'
import {ReactComponent as IosIcon} from '../../img/iOS.svg'
import {ReactComponent as ToolIcon} from '../../img/tool.svg'
import {ReactComponent as WindowIconDark} from '../../img/WindowsDark.svg'
import {ReactComponent as MacIconDark} from '../../img/macOSDark.svg'
import {ReactComponent as AndroidIconDark} from '../../img/AndroidDark.svg'
import {ReactComponent as IosIconDark} from '../../img/iOSDark.svg'
import {ReactComponent as ToolIconDark} from '../../img/toolDark.svg'
import Arrow from '../../img/arrowtabs.svg';

const Tabs = ({darkMode}) => {

  const tabs = [
    {
      name: 'All',
      img: <AllIcon/>,
      darkImg: <AllIcon/>,
      mt: 16,
      mb: 4
    },
    {
      name: 'Windows',
      img: <WindowIcon/>,
      darkImg: <WindowIconDark/>,
      mt: 16,
      mb: 4
    },
    {
      name: 'macOS',
      img: <MacIcon/>,
      darkImg: <MacIconDark/>,
      mt: 20,
      mb: 8
    },
    {
      name: 'Android',
      img: <AndroidIcon/>,
      darkImg: <AndroidIconDark/>,
      mt: 16,
      mb: 8
    },
    {
      name: 'iPhone & iPad',
      img: <IosIcon/>,
      darkImg: <IosIconDark/>,
      mt: 20,
      mb: 8
    },
    {
      name: 'Free tools',
      img: <ToolIcon/>,
      darkImg: <ToolIconDark/>,
      mt: 16,
      mb: 4
    },
  ]
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState(tabs[0].name);

  const handleSelectToggle = () => {
    setIsActive(!isActive);
  };

  const handleSelectChoose = (value) => {
    setSelectedValue(value);
    setIsActive(false);
  };
  return (
    <>
      <div className='tabs ordinary'>
        {tabs.map((item, index) =>
          <button
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
            key={index}
          >
            <div className='tab-img' style={{marginTop: item.mt, marginBottom: item.mb}}>
              {!darkMode ?
                item.img
                :
                item.darkImg
              }
            </div>
            <p className={!darkMode ? 'tab-name' : 'tab-name dark'}
               style={item.name === 'iPhone & iPad' ? {width: 86, justifyContent: "space-between"} : null}>

              {item.name}
            </p>
            <div className='tab-divider'></div>
          </button>
        )}
      </div>

      <div className='tabs mobile'>
        <div className={`select ${isActive ? 'is-active' : ''}`}>
          <div className="select-header" onClick={handleSelectToggle}>
            <span className="select-current">{selectedValue}</span>
            <img className="select-icon" src={Arrow}/>
          </div>
          <div className="select-body">
            {tabs.map((item, index) =>
              <div className='select-item' onClick={() => handleSelectChoose(item.name)}>{item.name}</div>
            )}
          </div>
        </div>
      </div>

    </>
  );
};

export default Tabs;