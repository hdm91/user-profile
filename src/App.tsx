import React, { useEffect, useState } from "react";
import { UserList } from "./components/User/UserList";
import { AxiosEx } from "./httpRequest";
import { ApiResult, User } from "./models";
import { Layout, UserProfile } from "./components";
import { Tabs } from "antd";
import { UserProfileContainer } from "./components/User/UserProfileContainer";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.scss";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const { TabPane } = Tabs;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Tabs
          destroyInactiveTabPane={true}
          defaultActiveKey="singleUser"
          centered
        >
          <TabPane tab="Single User" key="singleUser">
            <UserProfileContainer />
          </TabPane>
          <TabPane tab="User List" key="userList">
            <UserList />
          </TabPane>
        </Tabs>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
