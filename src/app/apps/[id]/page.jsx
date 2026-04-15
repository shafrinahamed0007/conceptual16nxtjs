import React from "react";

const AppDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log("Promise ID: ", id);
  return <div>this is app details page</div>;
};

export default AppDetailsPage;
