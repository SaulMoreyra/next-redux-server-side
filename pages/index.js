import { useSelector } from "react-redux";
import { addMenu } from "../store/menu/action";
import { wrapper } from "../store/store";

const Index = () => {
  const state = useSelector((state) => state);
  return <div>{JSON.stringify(state)}</div>;
};

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(addMenu(["hola", "estoy", "aqui"]));
});

export default Index;
