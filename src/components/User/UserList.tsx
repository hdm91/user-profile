import React, { useState, useEffect } from "react";
import { List, Avatar, Result } from "antd";
import { User } from "../../models";
import { UserService } from "../../services";
import { useQuery } from "react-query";

function UserList({}) {
  const { data, isError, isFetching } = useQuery("userList", () =>
    UserService.getList(5)
  );

  if (isError) {
    return (
      <Result
        status="warning"
        title="There are some problems with your request."
      />
    );
  }

  return (
    <List
      size={"large"}
      loading={isFetching}
      itemLayout="horizontal"
      loadMore={false}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar size={"large"} src={item.picture.large} />}
            title={<a>{`${item.name?.first} ${item.name?.last}`}</a>}
            description={item.location.country}
          />
        </List.Item>
      )}
    />
  );
}

export { UserList };
