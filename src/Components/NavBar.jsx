import React from 'react';
import { Layout} from 'antd';
import Main from './Main';

const { Header, Content, Footer } = Layout;

const Navbar = () => {



    return (
        <Layout className="layout" style={{height: "100vh" }}>
            <Header style={{ textAlign: "center", width: "100%" }}>
                <h1 style={{ color: "wheat" }}>TODO App</h1>
            </Header>
            <Content style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
             <Main/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created Faisal</Footer>
        </Layout>
    );
};

export default Navbar;