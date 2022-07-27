import { wrapper } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";

const WrappedApp = ({ Component, pageProps }) => {
  const store = useStore();

  return (
    <PersistGate
      persistor={store.__persistor}
      loading={<Component {...pageProps} />}
    >
      <Component {...pageProps} />
    </PersistGate>
  );
  // return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
