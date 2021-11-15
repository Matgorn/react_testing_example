import ExampleReachParamsMock from "./mock_external_package_with_parameter/ExampleReachParamsMock";
import ExampleWebsocketConnectionMock from "./mock_websocket_connection/ExampleWebsocketConnectionMock";
import ExampleTestMobileElements from "./test_mobile_elements/ExampleTestMobileElements";
import ReactQuerySuccessHandler from "./react_query_success_handler/ReactQuerySuccessHandler";
import TestComplexHook from "./test_complex_hook/TestComplexHook";

const examples = [
  {
    Component: ExampleReachParamsMock,
    path: "/reachParams/:userId/posts/:postId",
    to: "/reachParams/123/posts/456",
    linkText: "ExampleReachParamsMock",
  },
  {
    Component: ExampleWebsocketConnectionMock,
    path: "/websocketConnection",
    to: "/websocketConnection",
    linkText: "ExampleWebsocketConnectionMock",
  },
  {
    Component: ExampleTestMobileElements,
    path: "/mobileElement",
    to: "/mobileElement",
    linkText: "ExampleTestMobileElements",
  },
  {
    Component: ReactQuerySuccessHandler,
    path: "/reactQueryHack/:userId",
    to: "/reactQueryHack/123",
    linkText: "ReactQuerySuccessHandlerHack",
  },
  {
    Component: TestComplexHook,
    path: "/complexHook",
    to: "/complexHook",
    linkText: "TestComplexHook",
  },
];

export default examples;
