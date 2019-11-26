import React, { useEffect, Fragment } from 'react';
import FullHeader from '@/components/FullHeader';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const CxBasicLayout = props => {
  const {
    children,
  } = props;

  return (<Fragment>
    <FullHeader/>
    <section >
      <aside>
        <Menu
          mode="inline"
          style={{ width: 256 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
            }
          >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
        </Menu>
      </aside>
      <section>
        {children}
      </section>
    </section>

  </Fragment>)
};
export default CxBasicLayout;
