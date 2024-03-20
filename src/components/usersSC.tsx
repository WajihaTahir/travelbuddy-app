import { User } from "@/@types/user";
import dbConnect from "@/lib/connectDB";
import UserModel from "@/models/users";

import React from "react";

type Props = {};

const UsersSC = async (props: Props) => {
  await dbConnect();
  const users = (await UserModel.find({})) as User[];
  console.log(users);
  return (
    <div style={{ border: "solid black 1px", padding: "0 1rem" }}>
      <h3>This is a test component on the server side</h3>
      <ul>
        {users.map((user) => {
          return <li key={user._id.toString()}>{user.userName}</li>;
        })}
      </ul>
    </div>
  );
};

export default UsersSC;
