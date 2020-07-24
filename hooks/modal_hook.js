import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modal_state";

const ModalStateHook = () => {
  const [modal_state, setModalState] = useRecoilState(modalState);

  const { showModal, data } = modal_state;
  const setModal = (status, newData = {}) =>
    setModalState({ showModal: status, data: newData });

  return { showModal, data, setModal };
};

export default ModalStateHook;
