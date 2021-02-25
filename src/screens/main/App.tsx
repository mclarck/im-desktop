import React, { useEffect } from "react";
import { MainLayout, StackLayout, StackView } from "../../core/components";

export const App = () => {
  return (
    <MainLayout>
      <StackLayout>
        <StackView />
      </StackLayout>
    </MainLayout>
  );
};
