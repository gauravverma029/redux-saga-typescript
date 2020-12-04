import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import { getPropertyData } from "../../store/actions/propertyData";
import { RootState } from "../../store/configureStore";
import List, { itemsPropsType } from "../../components/List";

const Home: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const propertyGroupData = useSelector(
    (state: RootState) => state.items.propertyGroupData
  );

  useEffect(() => {
    getPropertyData(dispatch);
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="p-4 bg-white">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {propertyGroupData.length > 0 &&
            propertyGroupData.map((items: itemsPropsType) => {
              return <List items={items} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
