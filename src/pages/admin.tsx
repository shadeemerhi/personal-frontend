import React from "react";

import Profile from "../components/Admin/Profile";
import Layout from "../components/Layout";
import { useUserQuery } from "../generated/graphql";
import { useAuth } from "../hooks/useAuth";
import { withApollo } from "../util/withApollo";

const Admin: React.FC<{}> = () => {
  const { data } = useUserQuery({
    variables: { _id: "421f6412-edf9-4ef8-b131-8e957901ce2a" },
  });

  const { authKey } = useAuth();

  return (
    <Layout>
      {data?.user.user && authKey && <Profile profile={data?.user.user} />}
    </Layout>
  );
};
export default withApollo({ ssr: true })(Admin);
