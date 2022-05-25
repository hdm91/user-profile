import React, { useEffect, useState } from "react";
import { UserProfile } from "./UserProfile";
import { UserService } from "../../services";
import { Bem } from "../../utils";
import { Empty, Result } from "antd";

import "./UserProfileContainer.scss";
import { useQuery } from "react-query";

const cls = Bem("user-profile-container");

export function UserProfileContainer() {
  const { data, isError, isFetching } = useQuery(
    "userProfile",
    UserService.getProfile
  );

  console.log(isError);

  if (isError) {
    return (
      <Result
        status="warning"
        title="There are some problems with your request."
      />
    );
  }

  if (!data && !isFetching) {
    return <Empty />;
  }

  return (
    <div className={cls()}>
      <UserProfile loading={isFetching} data={data} />
    </div>
  );
}
