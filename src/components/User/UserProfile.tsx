import React from "react";
import { Empty, Skeleton } from "antd";
import { Bem } from "../../utils";
import classNames from "classnames";
import { User } from "../../models";

import "./UserProfile.scss";

type UserProfileProps = {
  data?: User;
  loading?: boolean;
};

const cls = Bem("user-profile");

export function UserProfile({ data, loading }: UserProfileProps) {
  const { name, picture, location } = data ?? {};

  return (
    <div
      className={classNames(cls(), {
        [cls("", "loading")]: loading,
      })}
    >
      {loading && <Skeleton active avatar paragraph={{ rows: 2 }} />}
      <div
        className={classNames(cls("content-wrapper"), {
          [cls("content-wrapper", "loading")]: loading,
        })}
      >
        <div className={cls("image-wrapper")}>
          <img className={cls("image")} src={picture?.large} />
        </div>

        <p className={cls("full-name")}>
          {name?.first} {name?.last}
        </p>
        <p className={cls("country")}>
          <img src={"/assets/icons/location.png"} />
          {location?.country}
        </p>
      </div>
    </div>
  );
}
