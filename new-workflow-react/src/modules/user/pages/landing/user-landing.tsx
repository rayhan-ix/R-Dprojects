import React, { useState } from 'react';
import { Col, Divider, Layout, Modal, Row, Select } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import LoaderComponent from '../../../../base-components/loader-component';
import '../../../../assets/scss/modules/users/user-landing.scss';
import { BaseButton } from '../../../../base-components/base-button';

export interface UserLandingProps {
  /**
   * Loading State
   */
  loading: boolean;
}

export const UserLanding = (props: UserLandingProps) => {
  const { loading } = props;
  const { Content, Sider } = Layout;
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const { Option } = Select;

  const openSettingsModal = () => {
    setShowSettingsModal(true);
  };

  const closeSettingsModal = () => {
    setShowSettingsModal(false);
  };

  return (
    <>
      {loading ? (
        <LoaderComponent loading={loading} />
      ) : (
        <>
          <Layout>
            <div className='header'>
              <Row gutter={[8, 0]}>
                <Col span={8}>
                  <Row gutter={[8, 0]}>
                    <Col span={4}>
                      <MenuOutlined style={{ fontSize: 25 }} />
                    </Col>
                    <Col span={20}>Cookai</Col>
                  </Row>
                </Col>
                <Col span={6} />
                <Col span={10}>
                  <Row gutter={[4, 0]}>
                    <Col span={8}>eigyou@trial.coo-kai.jp</Col>
                    <Col span={8} style={{ textAlign: 'center' }}>
                      Terms of Service
                    </Col>
                    <Col span={4} onClick={() => openSettingsModal()}>
                      Settings
                    </Col>
                    <Col span={4}>SignOut</Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <Layout>
              <Sider theme='light'>Sider</Sider>
              <Content>Content</Content>
            </Layout>
          </Layout>
          <Modal
            visible={showSettingsModal}
            title='Select Language and Timezone'
            destroyOnClose
            onOk={() => closeSettingsModal()}
            onCancel={() => closeSettingsModal()}
            maskClosable={false}
            footer={[
              <BaseButton buttonType='button' onClick={() => closeSettingsModal()} label='Close' />,
              <BaseButton buttonType='button' onClick={() => closeSettingsModal()} label='Settings' />,
            ]}
            centered
          >
            <>
              <div>Select a language and timezone</div>
              <Divider style={{ margin: '10px 0', borderTop: '1px solid black' }} />
              <div style={{ border: '1px solid grey' }}>
                <div style={{ padding: 10 }}>
                  <Row gutter={[0, 0]}>
                    <Col span={24}>
                      <Row>
                        <Col span={6} style={{ border: '1px solid black' }}>
                          <div style={{ background: '#F1E9DD' }}>
                            <div style={{ padding: 15 }}>Timezones</div>
                          </div>
                        </Col>
                        <Col
                          span={18}
                          style={{
                            borderTop: '1px solid black',
                            borderBottom: '1px solid black',
                            borderRight: '1px solid black',
                          }}
                        >
                          <div style={{ padding: 10 }}>
                            <Select defaultValue='6' style={{ width: 250 }}>
                              <Option value='6'>Dhaka</Option>
                              <Option value='9'>Tokyo</Option>
                              <Option value='-9'>Alaska</Option>
                            </Select>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Row>
                        <Col
                          span={6}
                          style={{
                            borderLeft: '1px solid black',
                            borderBottom: '1px solid black',
                            borderRight: '1px solid black',
                            background: '#F1E9DD',
                          }}
                        >
                          <div style={{ padding: 15 }}>Languages</div>
                        </Col>
                        <Col
                          span={18}
                          style={{
                            borderBottom: '1px solid black',
                            borderRight: '1px solid black',
                          }}
                        >
                          <div style={{ padding: 10 }}>
                            <Select defaultValue='en-US' style={{ width: 250 }}>
                              <Option value='en-US'>English</Option>
                              <Option value='ja-JP'>Japanese</Option>
                              <Option value='zh-CN'>Chinese</Option>
                            </Select>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </>
          </Modal>
        </>
      )}
    </>
  );
};
