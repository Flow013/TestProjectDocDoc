import * as React from "react"
import { Layout, Menu, Breadcrumb } from "antd"

const { Header, Content, Footer } = Layout

const CustomLayout = (props: { children: React.ReactNode; }) => (
  <Layout style={{height: '100%'}}>
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
    </Header>
    <Content style={{ padding: "0 50px", marginTop: 64 }}>
      <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
        {props.children}
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
)

export default CustomLayout
