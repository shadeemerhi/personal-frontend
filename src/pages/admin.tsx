import React from "react";

import Profile from "../components/Admin/Profile";
import { useUserQuery } from "../generated/graphql";
import { User } from "../types/project";
import { withApollo } from "../util/withApollo";

const DEFAULT_PROFILE: User = {
  title: "",
  photoFile: undefined,
  githubLink: "",
  linkedInLink: "",
  email: "",
  preBio: "",
  bio: "",
};

const Admin: React.FC<{}> = () => {
  const { data, error, loading } = useUserQuery({
    variables: { _id: "421f6412-edf9-4ef8-b131-8e957901ce2a" },
  });
  console.log("here is data", data);

  return <>{data?.user && <Profile profile={data?.user} />}</>;
};
export default withApollo({ ssr: true })(Admin);
