import "./App.css";
import {
  Layout,
  Badge,
  List,
  Row,
  Col,
  Avatar,
  Tabs,
  Progress,
  Collapse,
  Tag, 
  Button
} from "antd";
import {
  ReconciliationTwoTone,
  LinkOutlined,
  MoreOutlined,
  CloseOutlined,
  ClockCircleOutlined,
  UserOutlined,
  CalendarOutlined,
  CarryOutOutlined,
  UnorderedListOutlined,
  SnippetsOutlined,
  PlusOutlined,
  DownOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
const { Panel } = Collapse;
const { TabPane } = Tabs;
const { Header, Content } = Layout;
const {Item} =List;
function App() {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ backgroundColor: "white" }}>
        <Row>
          <Col span={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                whiteSpace: "pre-wrap",
              }}
            >
              <ReconciliationTwoTone /> 用户故事 XQP-47
              <div
                style={{
                  color: "#595959",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                |
              </div>
              需求平台后端
            </div>
          </Col>
          <Col span={6} offset={12}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              {" "}
              <LinkOutlined /> <MoreOutlined style={{ margin: "10px" }} />{" "}
              <div style={{ marginBottom: "5px" }}>|</div>{" "}
              <CloseOutlined style={{ margin: "10px" }} />
            </div>
          </Col>
        </Row>
      </Header>
      <Content
        style={{margin: "10px", backgroundColor: "#ffffff", padding: "30px" }}
      >
        <div className="content-title">
          <div className="para-big content-margin">项目模块</div>
          <Row>
            <Col span={5}>
              <div className="content-box-layer">
                <ClockCircleOutlined
                  style={{ color: "#d48806", fontSize: "50px" }}
                />
                <div className="content-box-p">
                  <p className="para-mid">进行中</p>
                  <p
                    style={{
                      marginBottom: "0px",
                      color: "#bfbfbf",
                      fontWeight: "bolder",
                    }}
                  >
                    当前状态
                  </p>
                </div>
              </div>
            </Col>
            <Col span={5}>
              <div className="content-box-layer">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="content-box-p">
                  <p className="para-mid">谢帅宇</p>
                  <p
                    style={{
                      marginBottom: "0px",
                      color: "#bfbfbf",
                      fontWeight: "bolder",
                    }}
                  >
                    负责人
                  </p>
                </div>
              </div>
            </Col>
            <Col span={5}>
              <div className="content-box-layer">
                  <Button shape="circle" size="large"  icon={<CalendarOutlined/> }></Button>
                <div className="content-box-p">
                  <p className="para-mid">10月29日</p>
                  <p
                    style={{
                      marginBottom: "0px",
                      color: "#bfbfbf",
                      fontWeight: "bolder",
                    }}
                  >
                    开始时间
                  </p>
                </div>
              </div>
            </Col>
            <Col span={5}>
              <div className="content-box-layer">
              <Button shape="circle" size="large"  icon={<CarryOutOutlined/> }></Button>
                <div className="content-box-p">
                  <p className="para-mid">11月7日</p>
                  <p
                    style={{
                      marginBottom: "0px",
                      color: "#bfbfbf",
                      fontWeight: "bolder",
                    }}
                  >
                    截止时间{" "}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <div>
            <Tabs defaultActiveKey="2">
              <TabPane
                tab={
                  <span>
                    <UnorderedListOutlined />
                    基本信息
                  </span>
                }
                key="1"
              >
                <Row>
                  <Col span={5} offset={1}>
                    <div className="content-margin">优先级</div>
                   
                      <Tag color="#fa8c16">普通</Tag>
                  
                  </Col>
                  <Col span={5}>
                    <div className="content-box-layer"></div>
                    <div className="content-margin">所属仓库</div>
                    <div>ess-demand</div>
                  </Col>
                  <Col span={5}>
                    <div className="content-box-layer"></div>
                    <div className="content-margin">所属迭代</div>
                    <div
                      style={{
                        marginBottom: "0px",
                        color: "#bfbfbf",
                        fontWeight: "bolder",
                      }}
                    >
                      第一次迭代
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col span={5} offset={1}>
                    <div className="content-margin">描述</div>
                    <div>无</div>
                  </Col>
                </Row>
                <Row>
                  <Col span={9} offset={1} className="content-margin">
                    <span>
                      <Avatar size="small" icon={<UserOutlined />} />{" "}
                    </span>
                    <span style={{ color: "#8c8c8c" }}>
                      谢帅宇 创建于 2020年10月17日 21：42 | 谢帅宇更新于
                      2020年10月29日 17：59
                    </span>
                  </Col>
                </Row>
              </TabPane>
              <TabPane
                tab={
                  <span style={{ displat: "flex", justifyContent: "center" }}>
                    <SnippetsOutlined />
                    子工作项
                    <Badge count={4} className="site-badge-count-4" />
                  </span>
                }
                key="2"
              >
                <div className="Subworkitem-title">
                  <div>共1个子工作项</div>
                  <div className="Subworkitem-title">
                    <div style={{ width: "170px" }}>
                      {" "}
                      <Progress percent={30} size="small" />
                    </div>
                    <div style={{ marginLeft: "30px", marginRight: "30px" }}>
                      |
                    </div>
                    <div>
                      <PlusOutlined />
                      添加子工作项
                      <DownOutlined />
                    </div>
                  </div>
                </div>
                <Collapse bordered={true} defaultActiveKey={["1"]} className='Collapsestyle'>
                  <Panel header="任务" key="1">
                    <List bordered={true} className='Listhover' style={{borderLeftColor:'#d46b08'}} >
                      <Item >
                      <CheckSquareOutlined style={{color:'#52c41a'}}/> test1
                      </Item>
                      <Item >
                         test1
                      </Item>
                    </List>
                  </Panel>
                </Collapse>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
