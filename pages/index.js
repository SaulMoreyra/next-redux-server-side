import { useDispatch, useSelector } from "react-redux";
import { addMenu } from "../store/menu/action";
import { wrapper } from "../store/store";

const Index = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const onClick = () => dispatch(addMenu(["hola", "from", "client", "feo"]));
  return (
    <div>
      <code>{JSON.stringify(state)}</code>
      <button onClick={onClick}>Change Menu</button>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      store.dispatch(addMenu(["hola", "from", "server"]));
      return { props: {} };
    }
);

/* export const getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ req }) => {
      console.log(req);
      // store.dispatch(addMenu(["hola", "from", "server"]));
      return { props: { token: "tokensito" } };
    }
); */

export default Index;
