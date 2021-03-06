import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { shallow } from "enzyme";
import AstroidSearch from "../screens/AstroidSearch";

const mockStore = configureMockStore();
const store = mockStore({});

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn(),
  },
});

describe("Users screen", () => {
  describe("rendering", () => {
    const props = createTestProps();
    const wrapper = shallow(
      <Provider store={store}>
        <AstroidSearch {...props} />
      </Provider>
    );

    it("should render a view", () => {
      expect(wrapper.find(".AstroidSearch-wrapper")).toHaveLength(0);
    });
  });
});
