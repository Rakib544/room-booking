import Homes from "../components/home";
import { getRooms } from "../redux/action/roomActions";
import { wrapper } from "../redux/store";

export default function Home() {
  return <Homes />;
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ req }) => {
      store.dispatch(getRooms(req));
    }
);
