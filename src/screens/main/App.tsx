import React, { useEffect } from "react";
import { MainLayout, StackLayout, StackView } from "../../core/components";

export const App = () => {
  useEffect(() => {
    console.log("from react");
  }, []);

  return (
    <MainLayout>
      <StackLayout>
        <StackView />
      </StackLayout>
    </MainLayout>
  );
};
